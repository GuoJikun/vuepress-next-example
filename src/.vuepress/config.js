module.exports = {
  base: "/",
  themeConfig: {
    docsDir: "src",
  },
  bundlerConfig: {
    chainWebpack: (config) => {
      config.module
        .rule("vue")
        .use("vue-loader")
        .tap((options) => {
          options.compilerOptions = {
            ...options.compilerOptions,
            isCustomElement: (tag) => tag.startsWith("ivy-"),
          };
          return options;
        });
    },
    evergreen: true,
  },
};
