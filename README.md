# HKO Trade Hub

Production-oriented multilingual B2B platform connecting Türkiye and Chile.

## Stack
Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, PostgreSQL, Prisma, custom JWT authentication.

## Local setup
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env` and update values.
3. Run `npm install`.
4. Run `npm run db:push`.
5. Run `npm run db:seed`.
6. Run `npm run dev` and open `http://localhost:3000`.

## Admin
Open `/tr/login`. Credentials are taken from `ADMIN_EMAIL` and `ADMIN_PASSWORD` when running the seed.

## Vercel deployment
1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Add all `.env.example` variables in Project Settings → Environment Variables.
4. Use a managed PostgreSQL provider (Neon, Supabase, Railway, or Vercel Postgres) and set `DATABASE_URL`.
5. Deploy. Run `npx prisma db push` and `npm run db:seed` once against production.

## Cloudflare domain
1. In Vercel add `hkotradehub.com` and `www.hkotradehub.com` under Domains.
2. In Cloudflare DNS add the records shown by Vercel. Usually apex uses `A 76.76.21.21`, while `www` uses a CNAME to `cname.vercel-dns.com`; always follow the exact records shown in your Vercel project.
3. Keep SSL/TLS mode at **Full (strict)**.
4. Initially set the Vercel DNS records to **DNS only**. After verification, Cloudflare proxying may be enabled if needed.
5. Set `NEXT_PUBLIC_SITE_URL=https://hkotradehub.com`.

## Security notes
- Replace JWT and admin secrets before deployment.
- Add rate limiting, CAPTCHA, email notifications, audit logs and database backups for high-volume production use.
- Legal/privacy/cookie content should be reviewed for Chilean, Turkish and target-market requirements.
