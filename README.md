# Nexvanta Website

Premium single-page marketing site for Nexvanta — React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Contact form

The contact form validates on the client and will only submit when `CONTACT_FORM_ENDPOINT` is set in `src/data/content.ts` (Formspree, Getform, or a custom API). Without an endpoint, users see a clear unconfigured message — never a fake success state.

## Brand assets

Replace `public/logo.svg` / the in-component logo mark with the official high-resolution Nexvanta logo when available. Brand colour tokens live in `src/index.css`.
