# Supabase Full-Stack SaaS Template

Produkčne pripravený SaaS template postavený na Next.js 15, Supabase a Tailwind CSS. Tento template poskytuje všetko potrebné pre rýchle spustenie vášho SaaS produktu, vrátane autentifikácie, správy používateľov, správy súborov a ďalších funkcií.

> **🎉 NOVINKA: Mobilná aplikácia už dostupná!** Pozrite si [README_MOBILE.md](./README_MOBILE.md) pre kompletnú React Native + Expo mobilnú aplikáciu, ktorá zdieľa rovnaký Supabase backend!
> https://youtube.com/shorts/qcASa0Ywsy4?feature=share

## 🇨🇳 Čínska dokumentácia dostupná

[中文文档](./README_ZH.md) | [移动端中文文档](./README_MOBILE_ZH.md)

Tento repozitár obsahuje kompletnú dokumentáciu v zjednodušenej čínštine:
- **README_ZH.md** - Kompletný čínsky preklad hlavnej dokumentácie
- **README_MOBILE_ZH.md** - Kompletný čínsky preklad dokumentácie mobilnej aplikácie

本仓库包含完整的简体中文文档：
- **README_ZH.md** - 主文档的完整中文翻译
- **README_MOBILE_ZH.md** - 移动应用文档的完整中文翻译

## ŽIVÁ DEMONŠTRÁCIA

Demo je tu - https://basicsass.razikus.com

## Vlastná propagácia
Hey, nebuďte tlačiareň kódu v AI ére. Pozrite si moju knihu
```
http://razikus.gumroad.com/l/dirtycode - už dostupná!
https://www.amazon.com/dp/B0FNR716CF - dostupná od 01.09
https://books.apple.com/us/book/dirty-code-but-works/id6751538660 - dostupná od 01.09
https://play.google.com/store/books/details?id=5UWBEQAAQBAJ - dostupná od 01.09
```

## Video o nasadení

Video je tu - https://www.youtube.com/watch?v=kzbXavLndmE

## Migrácia z auth schémy

Podľa tohto - https://github.com/Razikus/supabase-nextjs-template/issues/4

Už nie sme schopní modifikovať auth schému. Modifikoval som pôvodné migrácie aby som ju premenoval na vlastnú schému. Ak potrebujete migrovať zo staršej verzie - pozrite si supabase/migrations_for_old/20250525183944_auth_removal.sql

## 🚀 Funkcie

- **Autentifikácia**
    - Email/heslo autentifikácia
    - Podpora multi-faktorovej autentifikácie (MFA)
    - OAuth/SSO integrácia pripravená
    - Obnova hesla a overenie emailu

- **Správa používateľov**
    - Užívateľské profily a nastavenia
    - Bezpečná správa hesiel
    - Správa relácií

- **Demo správy súborov (pripravené na 2FA)**
    - Bezpečné nahrávanie a ukladanie súborov
    - Možnosti zdieľania súborov
    - Drag-and-drop rozhranie
    - Sledovanie pokroku

- **Demo správy úloh (pripravené na 2FA)**
    - CRUD operácie
    - Aktualizácie v reálnom čase
    - Filtrovanie a triedenie
    - Row-level security

- **Bezpečnosť**
    - Row Level Security (RLS) politiky
    - Bezpečné politiky ukladania súborov
    - Chránené API cesty
    - MFA implementácia

- **UI/UX**
    - Moderný, responzívny dizajn
    - Podpora tmavého režimu
    - Loading stavy
    - Správa chýb
    - Toast notifikácie
    - Confetti animácie

- **Právne & Compliance**
    - Šablóna Privacy Policy
    - Šablóna Terms of Service
    - Šablóna Refund Policy
    - GDPR-ready cookie consent

## 🛠️ Technologický stack

- **Frontend**
    - Next.js 15 (App Router)
    - React 19
    - Tailwind CSS
    - shadcn/ui komponenty
    - Lucide ikony

- **Backend**
    - Supabase
    - PostgreSQL
    - Row Level Security
    - Storage Buckets

- **Autentifikácia**
    - Supabase Auth
    - MFA podpora
    - OAuth poskytovatelia

## 📦 Začiatok práce - lokálny vývoj

1. Forknite alebo klonujte repozitár
2. Pripravte Supabase Project URL (Project URL z `Project Settings` -> `API` -> `Project URL`)
3. Pripravte Supabase Anon a Service Key (`Anon Key`, `Service Key` z `Project Settings` -> `API` -> `anon public` a `service_role`)
4. Pripravte Supabase Database Password (Môžete ho resetovať v `Project Settings` -> `Database` -> `Database Password`)
5. Ak už poznáte URL vašej aplikácie -> upravte supabase/config.toml `site_url` a `additional_redirect_urls`, môžete to urobiť neskôr
6. Spustite tieto príkazy (v koreňovom adresári fork / stiahnutého repozitára):

```bash
# Prihláste sa do supabase
npx supabase login
# Prepojte projekt s supabase (vyžaduje databázové heslo) - dostanete výberový prompt
npx supabase link

# Pošlite konfiguráciu na server - môže vyžadovať potvrdenie (y)
npx supabase config push

# Nahrajte migrácie
npx supabase migrations up --linked
```

7. Prejdite do nextjs adresára a spustite `yarn`
8. Skopírujte .env.template do .env.local
9. Upravte .env.local
```
NEXT_PUBLIC_SUPABASE_URL=https://APIURL
NEXT_PUBLIC_SUPABASE_ANON_KEY=ANONKEY
PRIVATE_SUPABASE_SERVICE_KEY=SERVICEROLEKEY
```
10. Spustite yarn dev
11. Prejdite na http://localhost:3000 🎉

## 🚀 Začiatok práce - nasadenie na Vercel

1. Forknite alebo klonujte repozitár
2. Vytvorte projekt vo Vercel - vyberte váš repozitár
3. Vložte obsah .env.local do environment variables
4. Kliknite na Deploy
5. Upravte v supabase/config.toml site_url a additional_redirect_urls (dôležité v additional_redirect_urls je mať https://YOURURL/** - tieto 2 **)
6. Hotovo!

## 📄 Právne dokumenty

Template obsahuje prispôsobiteľné právne dokumenty - tieto sú v markdown, takže ich môžete upraviť podľa potreby:

- Privacy Policy (`/public/terms/privacy-notice.md`)
- Terms of Service (`/public/terms/terms-of-service.md`)
- Refund Policy (`/public/terms/refund-policy.md`)

## 🎨 Témovanie

Template obsahuje niekoľko predpripravených tém:
- `theme-sass` (Predvolená)
- `theme-blue`
- `theme-purple`
- `theme-green`

Zmeňte tému aktualizáciou `NEXT_PUBLIC_THEME` environment premennej.

## 🤝 Prispievanie

Príspevky sú vítané! Neváhajte poslať Pull Request.

## Potrebujete Multitenancy, Billing (Paddle) a Role Based Access Control?

Mám aj platený template dostupný tu:

https://sasstemplate.razikus.com

V podstate je to rovnaký template ale s Paddle + kľúčmi organizácií API + viaceré organizácie + Role Based Access Control

Pre kód GITHUB môžete dostať -50% zľavu

https://razikus.gumroad.com/l/supatemplate/GITHUB

## 📝 Licencia

Tento projekt je licencovaný pod Apache License - pozrite si súbor LICENSE pre detaily.

## 💪 Podpora

Ak považujete tento template za užitočný, prosím zvážte pridelenie ⭐️

Alebo mi kúpte kávu!

- [BuyMeACoffee](https://buymeacoffee.com/razikus)

Moje sociálne siete:

- [Twitter](https://twitter.com/Razikus_)
- [GitHub](https://github.com/Razikus)
- [Website](https://www.razikus.com)

## 🙏 Poďakovania

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
