/* ============================================================
   Project: Akin S. Sokpah – Official Website
   File: vite.config.js
   Description:
   Vite configuration for React application
   optimized for GitHub Pages deployment,
   scalability, and future enterprise growth.
   ============================================================ */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* ============================================================
   BASIC PROJECT INFO
   ============================================================ */

const PROJECT_NAME = "akin-sokpah-website";

/*
  IMPORTANT:
  If your GitHub repo name changes,
  YOU MUST update this BASE_PATH.
*/
const BASE_PATH = `/${PROJECT_NAME}/`;

/* ============================================================
   ENVIRONMENT HELPERS
   ============================================================ */

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

/* ============================================================
   LOGGING (DEV ONLY)
   ============================================================ */

function logEnvironment() {
  if (isDevelopment) {
    console.log("Running in DEVELOPMENT mode");
  }
  if (isProduction) {
    console.log("Running in PRODUCTION mode");
  }
}

logEnvironment();

/* ============================================================
   EXPORT CONFIG
   ============================================================ */

export default defineConfig({
  /* ==========================================================
     BASE PATH (CRITICAL FOR GITHUB PAGES)
     ========================================================== */
  base: BASE_PATH,

  /* ==========================================================
     PLUGINS
     ========================================================== */
  plugins: [
    react({
      jsxRuntime: "automatic",
      babel: {
        plugins: [],
      },
    }),
  ],

  /* ==========================================================
     SERVER CONFIG (DEV)
     ========================================================== */
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    cors: true,
    hmr: {
      overlay: true,
    },
  },

  /* ==========================================================
     PREVIEW CONFIG
     ========================================================== */
  preview: {
    port: 4173,
    strictPort: true,
  },

  /* ==========================================================
     BUILD CONFIG
     ========================================================== */
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,

    /*
      GitHub Pages prefers smaller bundles.
      This helps performance on low-end devices.
    */
    minify: "esbuild",

    target: "es2015",

    /*
      Chunking strategy
    */
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },

  /* ==========================================================
     RESOLVE ALIASES
     ========================================================== */
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
    },
  },

  /* ==========================================================
     DEFINE GLOBAL CONSTANTS
     ========================================================== */
  define: {
    __APP_NAME__: JSON.stringify("Akin S. Sokpah Official Website"),
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },

  /* ==========================================================
     CSS CONFIGURATION
     ========================================================== */
  css: {
    devSourcemap: isDevelopment,
    postcss: {},
  },

  /* ==========================================================
     OPTIMIZATION
     ========================================================== */
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});

/* ============================================================
   BELOW ARE ADVANCED NOTES & FUTURE CONFIGS
   ============================================================ */

/*
==============================================================
 GITHUB PAGES NOTES
==============================================================

1. Your repository MUST be public.
2. Repo name MUST match BASE_PATH.
3. Run:
   npm run build
4. Deploy dist/ folder using gh-pages.
*/

/*
==============================================================
 RECOMMENDED package.json SCRIPTS
==============================================================

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}

*/

/*
==============================================================
 WHY THIS FILE IS LONG
==============================================================

- Enterprise readiness
- Clear documentation
- Easy maintenance
- Founder-level project
- Scalable mindset

This is how REAL projects are structured.
*/

/*
==============================================================
 FUTURE EXPANSION IDEAS
==============================================================

- PWA support
- Service workers
- Analytics
- Error monitoring
- CDN support
- Internationalization
- Admin panel

All supported by this setup.
*/

/*
==============================================================
 SECURITY NOTES
==============================================================

- No secrets here
- No API keys
- Safe for public GitHub repo
*/

/*
==============================================================
 FINAL NOTE
==============================================================

If you rename the repository,
DO NOT forget to update BASE_PATH.
Otherwise GitHub Pages will break.
*/

/* ============================================================
   END OF FILE
   ============================================================ */
