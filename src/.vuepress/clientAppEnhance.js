import { defineClientAppEnhance } from "@vuepress/client";
import "ivy-ui";
// import "xy-ui";

export default defineClientAppEnhance(async ({ app }) => {
  app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("xy-");
});
