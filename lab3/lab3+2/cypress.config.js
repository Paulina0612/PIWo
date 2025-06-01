import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Add a preprocessor to ignore CSS files
//       on('file:preprocessor', (file) => {
//         if (file.filePath.endsWith('.css')) {
//           // Return an empty JS module
//           return { output: 'module.exports = {};' };
//         }
//         return file;
//       });
//     },
//   },
//   component: {
//     devServer: {
//       framework: 'react',
//       bundler: 'vite',
//     },
//     setupNodeEvents(on, config) {
//       // Ignore CSS imports in component tests
//       on('file:preprocessor', (file) => {
//         if (file.filePath.endsWith('.css')) {
//           return { output: 'export default {};' };
//         }
//         return file;
//       });
//     },
//   },
// });