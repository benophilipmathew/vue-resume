const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/fonts.scss";
          @import "@/styles/themes/blue-green.scss";
          @import "@/styles/shared.scss";
        `
      }
    }
  }
})