import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET_NAME
  },
  typegen: {
    // Where to look for GROQ queries (defineQuery calls) — the Astro app.
    path: '../web/src/**/*.{ts,tsx,js,jsx}',
    // Created by `sanity schema extract`.
    schema: 'schema.json',
    // Types are written into the Astro app.
    generates: '../web/src/sanity.types.ts',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
