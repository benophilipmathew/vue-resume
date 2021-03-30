module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/styles/fonts.scss";
                    @import "@/styles/themes/blue-green.scss";
                    @import "@/styles/shared.scss";
                    `
            }
        }
    }
}
