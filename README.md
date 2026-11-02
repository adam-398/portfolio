# adam-hodges.vercel.app

My portfolio site. Built with Astro and Tailwind CSS v4, with English and Swedish versions.

Live at https://adam-hodges.vercel.app

## Running it locally

Needs Node 22 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

`npm run build` builds the static site into `dist/`, and `npm run preview` serves the build.

## How it's put together

- `src/pages/`: one file per page. The Swedish pages in `src/pages/sv/` are just wrappers that import the English page, so there's only one copy of each layout.
- `src/i18n/ui.ts`: all the text on the site, in English and Swedish. Pages call `t("key")`, and the language comes from the URL. The Swedish object is typed against the English one, so a missing translation is a type error.
- `src/components/`: Header, Footer, Section, Container and the phone and laptop frames used for screenshots.
- `src/styles/global.css`: colours and fonts as Tailwind `@theme` tokens.

The contact form posts to Web3Forms. The access key in the form is public by design.

## Deploying

Pushes to `main` deploy automatically on Vercel.
