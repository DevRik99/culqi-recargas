// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        viewer: false,
      },
    ],
    [
      "@nuxtjs/color-mode",
      {
        preference: "light",
        fallback: "light",
        dataValue: "theme",
        classSuffix: "",
      },
    ],
    [
      "@kevinmarrec/nuxt-pwa",
      {
        workbox: {
          navigateFallback: "/",
        },
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
          type: "module",
        },
        manifest: {
          name: "Culqi PWA",
          short_name: "CulqiPWA",
          theme_color: "#ffffff",
          description: "Culqi PWA",
          icons: [
            {
              src: "logo_white.svg",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "logo_white.svg",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "logo_white.svg",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      },
    ],
    [
      "nuxt-icon",
      {
        size: "20px",
      },
    ],
  ],
});
