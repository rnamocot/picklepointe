# picklepointe

Marketing website for Pickle Pointe, an indoor pickleball facility in Barangay Conchu, Trece Martires City, Cavite.

Built with Next.js (App Router) and TypeScript.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit

- `src/lib/site.ts`: business details, rates, policies, socials. Items marked `TODO(confirm)` are placeholders.
- `src/lib/faqs.ts`: FAQ content (also output as FAQ structured data).
- `src/app/api/booking` and `src/app/api/contact`: request handlers, stubbed until the booking system is built.
