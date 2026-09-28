This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Resume

Eliana Ferreira's personal resume, rendered as a single Next.js page styled to match a printable, letter-sized document. the accent color is `#0A4D68`.

All resume content is local — there are no HTTP requests to load data. The styling favors print-safe layout and colors over animation or client-side interactivity.

### Running locally

```bash
npm run dev    # start the dev server at http://localhost:3000
npm run build  # production build
npm run start  # run the production build
npm run lint   # ESLint
```

### Updating the resume content

Each resume section lives in its own folder under `components/resume/sections/<section>/`:

- `data.ts` — the actual content (name, roles, experience, etc.). **Edit this file to update the resume.**
- `types.ts` — the TypeScript shape `data.ts` must satisfy.
- `<Section>.tsx` — the component that renders the section; only touch this to change layout/styling.

Sections: `header`, `summary`, `experience`, `education`, `skills`, `certifications`. They're composed together in `components/resume/Resume.tsx`.

`experience/data.ts` is nested: each company has one or more roles, and each role has one or more projects with their own responsibilities.
