// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-default-export */

import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 568,
  viewportWidth: 320,
  retries: 2,
  video:true,
  videoCompression: 15,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  env: {
    "timewait":1000,
    
 },
  e2e: {
   
    experimentalRunAllSpecs: true,
    
    baseUrl: 'http://localhost:8100',
  },
});