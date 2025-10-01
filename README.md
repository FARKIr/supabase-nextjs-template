# Kompletný návod pre Supabase Next.js a Expo Mobile Template

Tento dokument poskytuje úplné inštrukcie pre použitie a nastavenie projektu Supabase Full-Stack SaaS Template a súvisiaceho mobilného aplikácie.

## Úvod

Tento projekt je produkčne pripravený SaaS template postavený na Next.js 15, Supabase a Tailwind CSS. Zahŕňa všetko potrebné pre rýchle spustenie SaaS produktu: autentifikáciu, správu používateľov, správu súborov a úloh.

Mobilná aplikácia je postavená na React Native, Expo a Supabase, s podporou iOS a Android.

## Funkcie

- **Autentifikácia**: Email/heslo, MFA (2FA), OAuth, obnova hesla, overenie emailu.
- **Správa používateľov**: Profily, zmeny hesla, nastavenia MFA.
- **Správa súborov (chránená 2FA)**: Nahrávanie, zdieľanie, mazanie súborov (max 50MB).
- **Správa úloh (chránená 2FA)**: CRUD operácie, filtre, real-time aktualizácie.
- **Bezpečnosť**: RLS politiky, MFA, chránené API.
- **UI/UX**: Responzívne dizajn, tmavý režim, loading stavy, notifikácie.
- **Medzinárodná podpora (i18n)**: Angličtina, poľština, čínština, slovenčina.
- **Právne dokumenty**: Šablóny pre súkromie, podmienky, vrátenie peňazí.

## Technologický stack

- **Frontend (Web)**: Next.js 15, React 19, Tailwind CSS, shadcn/ui.
- **Backend**: Supabase (PostgreSQL, Storage, Auth).
- **Mobilná aplikácia**: React Native 0.81.4, Expo SDK 54, Supabase.
- **Navigácia**: Expo Router, React Navigation.
- **UI komponenty**: Lucide icons, QR kódy pre MFA.
- **i18n**: i18next, expo-localization.

## Začiatok práce - Lokálny vývoj

### Predpoklady
- Node.js 18+
- Yarn alebo npm
- Supabase projekt
- Expo CLI (pre mobil)

### 1. Nastavenie Supabase backendu
- Pripravte Supabase Project URL, Anon Key, Service Key a databázové heslo z projektu nastavení.
- Spustite príkazy v koreňovom adresári:
  ```bash
  npx supabase login
  npx supabase link  # Vyberte projekt
  npx supabase config push
  npx supabase migrations up --linked
  ```

### 2. Web aplikácia (Next.js)
- Prejdite do `nextjs/` adresára.
- Spustite `yarn` pre inštaláciu závislostí.
- Skopírujte `.env.template` na `.env.local` a upravte premenné:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://your-url.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
  PRIVATE_SUPABASE_SERVICE_KEY=your-service-key
  ```
- Spustite `yarn dev` a otvorte http://localhost:3000.

### 3. Mobilná aplikácia (Expo)
- Prejdite do `supabase-expo-template/`.
- Spustite `yarn install`.
- Vytvorte `.env` súbor:
  ```
  EXPO_PUBLIC_SUPABASE_URL=https://your-url.supabase.co
  EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
  ```
- Upravte `app.json` pre názov aplikácie a scheme.
- Pridajte redirect URL v Supabase: `yourappscheme://reset-password`.
- Spustite:
  ```bash
  npx expo start
  # Pre iOS: npx expo run:ios
  # Pre Android: npx expo run:android
  ```

## Nasadenie na Vercel

1. Forknite alebo klonujte repozitár.
2. Vytvorte projekt vo Vercel a vyberte repozitár.
3. Vložte obsah `.env.local` do environment variables vo Vercel.
4. Kliknite na Deploy.
5. Upravte `supabase/config.toml` pre `site_url` a `additional_redirect_urls` (pridajte https://YOURURL/**).
6. Hotovo!

## Prispôsobenie

- **Témy**: Zmeňte `NEXT_PUBLIC_THEME` (sass, blue, purple, green).
- **Farby**: Upravte `constants/theme.ts`.
- **Branding**: Zmeňte `app.json` a ikony.
- **Navigácia**: Upravte `app/(app)/_layout.tsx`.

## Podpora a príspevky

- Príspevky sú vítané: Sledujte štýl kódu, pridajte testy, aktualizujte dokumentáciu.
- Licencia: Apache License.
- Podpora: ⭐ na GitHub alebo [BuyMeACoffee](https://buymeacoffee.com/razikus).
- Kontakty: Twitter, GitHub, webstránka autora.

Tento návod kombinuje potrebné informácie bez duplicít. Pre detailnejšie sekcie si pozrite pôvodné README súbory.
