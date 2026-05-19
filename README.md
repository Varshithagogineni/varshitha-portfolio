# Varshitha Gogineni — Portfolio

Personal portfolio site for an AI & Data Engineer. Built with Next.js 15, Tailwind CSS, and Framer Motion.

The contact form on the site collects first name, last name, email, and an optional message, and forwards each submission to **varshithagogineni007@gmail.com** via [Web3Forms](https://web3forms.com).

## Quick start

```bash
npm install
cp .env.example .env.local
# edit .env.local and paste your Web3Forms access key
npm run dev
```

Open http://localhost:3000

## Set up the contact form (one-time)

The form posts directly from the browser to Web3Forms — they call this a "public access key," which is by design on the free tier.

1. Visit https://web3forms.com.
2. Enter `varshithagogineni007@gmail.com` and click **Create Access Key**.
3. Web3Forms emails you the access key.
4. Paste it into `.env.local` (prefixed with `NEXT_PUBLIC_` so the browser bundle can read it):
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
5. Restart `npm run dev` so the env var is picked up.
6. Submit the contact form once with a test message — it should arrive in your Gmail within seconds.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. In **Environment Variables**, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with your key.
4. Click Deploy. Future pushes auto-deploy.

## Edit the content

- Hero text: `components/Hero.tsx`
- About blurb: `components/About.tsx`
- Experience entries: `components/Experience.tsx`
- Projects: `components/Projects.tsx`
- Skills: `components/Skills.tsx`
- Achievements & certifications: `components/Achievements.tsx`
- Contact form copy: `components/Contact.tsx`
- Resume PDF: replace `public/resume.pdf`

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react (icons)
- Web3Forms (email delivery — no backend hosting needed)
