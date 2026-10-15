# Viaprix

A responsive Next.js website for Viaprix, using the supplied SVG logo.

## Development

Requires Node.js 20.9 or newer.

```sh
npm ci --cache /tmp/viaprix-npm-cache
npm run dev
```

## Production

```sh
npm run build
npm start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CONTACT_EMAIL` to your business email before building. With an email configured, the enquiry form opens the visitor's email application; they must send the message there. Without it, the form downloads a project brief and explicitly states that no message was sent. No backend delivery service is configured.

Typography is self-hosted (DM Sans and Manrope, with licenses in public/fonts). Mouse-follow glow, card spotlights, subtle tilt, and scroll reveals are disabled or simplified on touch devices and with reduced-motion preferences. The SaaS section uses a branded digital-transformation illustration, not a live dashboard.

The first visit in each browser tab includes a short, skippable brand intro. It automatically exits, has a CSS fallback when JavaScript is unavailable, and is omitted for reduced-motion visitors. The logo is transparent; `logo.svg` preserves the supplied original, while `logo-dark.svg` uses a white base stroke for contrast on dark surfaces. The hero ecosystem links to real page sections. Industry tabs show proposed workflows, not client case studies or shipped product claims.
