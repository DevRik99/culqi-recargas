// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [["@nuxtjs/tailwindcss", { viewer: false }], [
    "@nuxtjs/color-mode",
    {
      preference: "light", // default value of $colorMode.preference
      fallback: "light",
    },
  ], "@vite-pwa/nuxt"],
});