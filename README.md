# Portfolio (Next.js)

Converted from static HTML/CSS/JS to Next.js (App Router) + React.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/` – layout, page, `globals.css` (your original stylesheet)
- `components/` – one component per section, plus `Reveal`, `TypedRole`, `CustomCursor`, etc.
- `lib/data.js` – all text/content (skills, services, projects, contact, EmailJS config)
- `public/asset/` – images and CV (served at `/asset/...`)

## EmailJS

The contact form uses `@emailjs/browser`. The IDs in `lib/data.js` are the ones from your old
`main.js`; override them with `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`,
`NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` if needed.
