# Antony Mwandiki | Portfolio and Blog

A fast, SEO-first personal portfolio and blog built with **Next.js 14 (App Router)**. It presents the work, ventures, certifications and writing of Antony Mwandiki, full-stack software engineer and founder of IsoMount Tech Collective, Sanctum and Innovant Technologies.

## Features

- **Pages:** Home, About, Services (Innovant Technologies), Experience, Projects, Certifications, Blog, individual blog posts, Contact
- **Blog from Markdown:** drop a `.md` file in `content/posts` and a real `/blog/[slug]` page is generated, with reading time, categories, tags and related posts
- **Certification gallery:** hover (or tap on mobile) to reveal the title, issuer, description and a verify link
- **Contact form** that emails you through any SMTP provider, with spam honeypot and validation
- **Search engine ready:** per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards, `sitemap.xml`, `robots.txt`, and JSON-LD structured data (Person, BlogPosting, ProfessionalService)
- **Premium design:** responsive layout, automatic dark mode, accessible focus states, reduced-motion support

## Quick start

```bash
npm install
cp .env.example .env.local     # then edit the values
npm run dev                    # http://localhost:3000
```

Build for production with `npm run build` and `npm start`.

## Environment variables (contact messaging)

Edit `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your live URL, used in the sitemap, canonical links and social previews |
| `SMTP_HOST` / `SMTP_PORT` | Mail server (Gmail: `smtp.gmail.com` and `465`) |
| `SMTP_USER` / `SMTP_PASS` | Login. For Gmail use an **App Password** (needs 2-step verification) |
| `CONTACT_TO` | Where messages are delivered |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Optional Search Console verification code |

On Vercel, add the same variables under **Project Settings, Environment Variables**.

## Adding your images

Put files in `public/images/`. Missing images fall back to a clean placeholder, so the site never breaks.

| File | Used for |
| --- | --- |
| `antony.png` | Small profile photo on Home and About |
| `og.png` | Social share image (1200 x 630) |
| `certificates/entrepreneurship-bootcamp-2026.png` | Entrepreneurship Bootcamp 2026 |
| `certificates/hedera-certified-foundation.png` | Hedera Certified Foundation |
| `certificates/mern-stack-plp.jpg` | Full-Stack Development (MERN) |
| `certificates/software-development-plp.jpg` | Software Development Fundamentals |
| `certificates/python-developer-sololearn.jpg` | Python Developer |
| `certificates/ai-career-essentials-alx.jpg` | AI Career Essentials |
| `certificates/html-css-js-johns-hopkins.jpg` | HTML, CSS and JavaScript for Web Developers |
| `certificates/technical-support-fundamentals-coursera.jpg` | Technical Support Fundamentals |

## Editing content

- **Everything except blog posts** (bio facts, services, experience, education, projects, certifications) lives in `lib/data.js`.
- **About page text** is in `app/about/page.js`.
- **Blog posts** live in `content/posts/*.md`:

```markdown
---
title: "Your post title"
date: "2026-10-05"
category: "Entrepreneurship"
tags: ["Founder", "Lessons"]
excerpt: "One or two sentences shown in listings and Google results."
---
Your post in Markdown. Use ## for section headings.
```

The file name becomes the URL: `my-post.md` is published at `/blog/my-post`. The starter posts are drafts written from your CV and profile. Edit them so they tell your real stories.

## Project structure

```
app/           pages, API route, sitemap.js, robots.js
components/    Header, Footer, CertCard, ContactForm, ...
content/posts/ blog posts in Markdown
lib/           data.js (site content) and posts.js (blog loader)
public/images/ your photos and certificates
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository at vercel.com and add the environment variables.
3. Deploy, then (optional) attach your custom domain and update `NEXT_PUBLIC_SITE_URL`.

## Getting found on Google

1. Open **Google Search Console** and add your site as a property.
2. Verify with the HTML tag method (paste the code into `NEXT_PUBLIC_GOOGLE_VERIFICATION`) or by DNS.
3. Submit `https://your-domain/sitemap.xml`.
4. Use **URL Inspection** on the home page and request indexing.
5. Link to the site from your GitHub, LinkedIn, IsoMount and Sanctum profiles, and keep publishing posts.

## Tech stack

Next.js 14, React 18, gray-matter, marked, Nodemailer. Plain CSS, no UI framework.

## License

All rights reserved. Content and design belong to Antony Mwandiki.
