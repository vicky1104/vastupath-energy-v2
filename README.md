# Vastupath Energy: website v3

This is a premium Vastu consulting website built with Next.js 16 (App Router), Framer Motion and Lucide icons. The type is Cormorant Garamond with Jost, and the palette is ivory, sage, deep olive and antique gold. The recurring motif is the Indian arch and jaali lattice.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
```

## Editing content

All text, contact details, services, remedies, FAQs, projects, testimonials and photography URLs live in `lib/site.ts`.

- **Photography** is in `IMAGES`. These are free-licence Unsplash photos; swap any URL for your own photo in `/public`.
- **Logo:** add `public/logo.png`. Until then, a typographic logo is shown.
- **Project photos:** add `public/images/projects/divine-motors.jpg`, `shree-ambica-auto.jpg` and `breadko.jpg`.
- **Testimonials:** paste each client's exact wording into `TESTIMONIALS` if it differs.

## Structure

- `app/`: pages (`/`, `/about`, `/services`, `/projects`, `/contact`) and `globals.css` (design tokens at the top)
- `components/sections.tsx`: service index with cursor preview, process timeline, projects lightbox, testimonial slider, FAQ, CTA banner, page hero
- `components/EnquiryForm.tsx`: contact form that composes a WhatsApp message (no server needed)
- `components/motion.tsx`: scroll reveals, masked headline lines, arch reveals, parallax (all respect "reduce motion")

The previous design is kept on the `v2-reference` branch.

## Hosting on GitHub Pages
`.github/workflows/deploy-pages.yml` builds and deploys the site on every push to `main`. It sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>`, so links and images work under `https://<user>.github.io/<repo-name>/`. On Vercel or a custom domain, leave that variable unset.
