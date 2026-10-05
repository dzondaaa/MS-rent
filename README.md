# MS-rent

Hotový Next.js projekt pro půjčovnu stavebních strojů MS-rent v Děčíně.

## Spuštění

```bash
npm install
npm run dev
```

Web poběží na `http://localhost:3000`.

## Kontaktní formulář

Projekt používá Nodemailer přes SMTP. Vytvoř `.env.local` podle `.env.example`:

```env
SMTP_HOST=smtp.websupport.cz
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@ms-rent.cz
SMTP_PASS=HESLO_K_EMAILU
CONTACT_TO_EMAIL=info@ms-rent.cz
```

Na Vercelu nastav stejné hodnoty v **Project → Settings → Environment Variables**. `SMTP_PASS` vždy nastav jako Secret.

## Kontakt na webu

Zobrazovaný e-mail, telefon a další údaje jsou v `lib/site.ts`.

Telefon je zatím prázdný, takže se na webu nezobrazuje. Až ho budeš znát, doplň `phone` a `phoneHref`.

## SEO / optimalizace

Projekt už obsahuje:

- `app/robots.ts` → `/robots.txt`
- `app/sitemap.ts` → `/sitemap.xml`
- `app/manifest.ts` → `/manifest.webmanifest`
- `public/llms.txt`
- `public/.well-known/security.txt`
- favicon + PWA ikony
- `public/og-cover.jpg` pro Open Graph / sociální sítě
- metadata, canonical URL a strukturovaná data
- bezpečnostní HTTP hlavičky
- optimalizaci obrázků přes Next.js

## Nasazení na GitHub / Vercel

```bash
git add .
git commit -m "MS-rent ready for production"
git push
```

Vercel pak automaticky vytvoří nový deployment.
