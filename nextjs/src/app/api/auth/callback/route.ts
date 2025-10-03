// src/app/api/auth/callback/route.ts
import { NextResponse } from 'next/server'
import { createSSRSassClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = await createSSRSassClient()
        const client = supabase.getSupabaseClient()

        // Exchange the code for a session
        await supabase.exchangeCodeForSession(code)

        // Check MFA status
        const { data: all, error: allError } = await client.auth.mfa.getAuthenticatorAssuranceLevel()

        if (allError) {
            console.error('Error checking MFA status:', allError)
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }

        // If user needs to complete MFA verification
        if (all.nextLevel === 'aal2' && all.nextLevel !== all.currentLevel) {
            return NextResponse.redirect(new URL('/auth/2fa', request.url))
        }

        // If MFA is not required or already verified, proceed to app
        return NextResponse.redirect(new URL('/app', request.url))
    }

    // If no code provided, redirect to login
    return NextResponse.redirect(new URL('/auth/login', request.url))
}
