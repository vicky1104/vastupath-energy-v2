# Vastupath Energy: website v2

This is the redesigned site, built in Next.js 16 (App Router) with a Three.js hero (via React Three Fiber), Framer Motion animations and Lucide icons. Fonts are Marcellus for headings and Manrope for body text.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out (deploys as-is on Vercel)
```

## Before you deploy, copy your images

Copy these files from your current project's `public/` folder into this project's `public/` folder, keeping the same paths:

- `public/logo.png`
- `public/images/projects/divine-motors.jpg`
- `public/images/projects/shree-ambica-auto.jpg`
- `public/images/projects/breadko.jpg`

Until they're added, the site shows a mandala emblem in place of the logo and photos, so nothing looks broken.

## Editing content

All text lives in `lib/site.ts`: services, remedies, steps, FAQs, projects, testimonials, phone number and WhatsApp link. To add a project, add an entry to `PROJECTS` and drop the photo into `public/images/projects/`.

## Structure

- `app/`: pages (`/`, `/about`, `/services`, `/projects`, `/contact`) and `globals.css` (theme colours are at the top)
- `components/MandalaScene.tsx`: the 3D Vastu Purusha mandala in the hero (9×9 grid, Brahmasthan glow, 8 lotus petals, direction orbs, light particles; it tilts with the mouse)
- `components/HeroVisual.tsx`: compass ring with the 8 directions around the 3D scene
- `components/Interactive.tsx`: project gallery with lightbox, testimonial marquee, FAQ accordion and the floating WhatsApp button
- `components/Motion.tsx`: scroll-reveal helpers (they respect "reduce motion")

## Hosting on GitHub Pages

`.github/workflows/deploy-pages.yml` builds and deploys the site on every push to `main`. It sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>`, so links and images work under `https://<user>.github.io/<repo-name>/`. On Vercel or a custom domain, leave that variable unset.
