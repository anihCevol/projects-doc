import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "主题演示",
  port:816,
  description: "vuepress-theme-hope 的演示",
  base: "/projects-doc/",
  theme,
});
