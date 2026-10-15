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

The dashboard is an illustrative product concept with sample data, not live customer metrics. Typography is self-hosted (DM Sans and Manrope, with licenses in public/fonts). Mouse-follow glow, card spotlights, subtle tilt, and scroll reveals are disabled or simplified on touch devices and with reduced-motion preferences. The SaaS showcase has interactive, keyboard-accessible tabs using illustrative data; it is not a deployed SaaS product.
