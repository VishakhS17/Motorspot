# MOTORSPOT — Automotive Performance & Restyling Lab

Premium automotive customization and detailing studio website. Built with Next.js 15, TypeScript, and Tailwind CSS. Static export for fast hosting.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Static export** (no backend)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs to `/out` for static hosting (Vercel, Netlify, GitHub Pages, etc.).

## Assets

### Hero Video

Add your hero video to `public/video/hero.mp4`:

- MP4, H.264
- 1920×1080 recommended
- 15–30 seconds, under 5MB

If no video is present, the poster image displays. Video is disabled on data saver and small screens.

### Images

Images use Unsplash placeholders. Replace with your own in the component props or move to `public/images/`.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Home
│   ├── services/
│   └── gallery/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx        # Client: video, poster, data-saver
│   ├── Services.tsx
│   ├── WhyMotorspot.tsx
│   ├── Gallery.tsx
│   ├── GalleryGrid.tsx # Client: modal viewer
│   ├── GalleryModal.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
│   └── video/
└── tailwind.config.ts
```

## Contact

WhatsApp: 75111 28000  
Address: Edappally, Kochi
