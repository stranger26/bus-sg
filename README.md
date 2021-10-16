# BUS SG

Just another bus app, powered by [`SvelteKit`](https://kit.svelte.dev).

## Prerequisites

Register a token at [LTA Datamall](https://datamall.lta.gov.sg/).

````bash
#.env
VITE_DATAMALL_API_TOKEN=#token

```


## Developing

Once you've cloned the project and installed dependencies with `pnpm install` , start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

BUS SG is preconfigured for [Vercel](https://vercel.com) with [`vercel-adaptor`](https://www.npmjs.com/package/@sveltejs/adapter-vercel).

```bash
pnpm run build
```

> You can preview the built app with `pnpm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
