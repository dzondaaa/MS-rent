# MS-rent – Next.js školní projekt (upravený design)

Web je schválně udělaný tak, aby vypadal hezky a moderně, ale kód zůstal přehledný pro školní projekt. Nepoužívá Tailwind ani Framer Motion. Animace jsou udělané hlavně pomocí CSS a malého `IntersectionObserver` skriptu.

## Spuštění

```bash
npm install
npm run dev
```

Potom otevři `http://localhost:3000`.

## Co je v projektu

- více stránek přes Next.js App Router
- světlý / tmavý režim včetně správné varianty MS ProfiTech loga
- animace při načtení stránky
- animace při scrollování
- hover animace karet a tlačítek
- animované mobilní menu
- animované FAQ
- vlastní detail každého stroje
- připravený kontaktní formulář
- API route pro formulář
- Resend připravený pro skutečné posílání e-mailů
- `robots.ts`, `sitemap.ts` a `llms.txt`

## Kontaktní údaje

Uprav v:

`lib/site.ts`

## Kontaktní formulář

Formulář volá:

`app/api/contact/route.ts`

Bez API klíče funguje v DEMO režimu. Po odeslání se data vypíšou do terminálu a stránka ukáže potvrzení.

Pro skutečný e-mail:

1. Zkopíruj `.env.example` na `.env.local`.
2. Vytvoř si API klíč u Resend.
3. Doplň proměnné:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=tvuj@email.cz
CONTACT_FROM_EMAIL=MS-rent <web@tvojedomena.cz>
```

`.env.local` nedávej na GitHub.

## Jak fungují animace

`components/ScrollReveal.tsx` najde prvky s `data-reveal` a při scrollování jim přidá třídu `is-visible`.

Například:

```tsx
<div data-reveal="up">Obsah</div>
```

Směry jsou `up`, `left` a `right`.

Další animace jsou normálně v `app/globals.css`, takže se dají snadno upravit.


## Loga pro režimy

Header automaticky používá `public/assets/ms-profitech-light.png` ve světlém režimu a `public/assets/ms-profitech-dark.png` v tmavém režimu. Footer je schválně kompaktní a DzondaDesign zůstává uprostřed.
