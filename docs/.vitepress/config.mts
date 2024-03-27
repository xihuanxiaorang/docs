import { DefaultTheme, defineConfig } from "vitepress";
import markdownItPlantuml from "markdown-it-textual-uml";
import { nav } from "./nav";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/docs/', // 由于使用自定义域名，此处需要注释掉，如果不使用自定义域名的话，可以取消注释
  title: "小让の码场",
  description:
    "包含: Java 核心技术, Spring全家桶, 设计模式, 数据结构与算法, 源码分析，面试宝典...",
  srcDir: "./md",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "zh-CN",
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/xihuanxiaorang" },
      {
        icon: {
          svg: '<svg t="1706343933559" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4223" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="4224"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="4225"></path></svg>',
        },
        link: "https://space.bilibili.com/307881917",
      },
    ],
    sidebar,
    footer: {
      message:
        'Released under the <a href="https://github.com/xihuanxiaorang/docs/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024 <a href="https://github.com/xihuanxiaorang">小让</a>',
    },
    editLink: {
      pattern: "https://github.com/xihuanxiaorang/docs/edit/main/docs/md/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    search: {
      provider: "local",
    },
    outline: {
      level: "deep",
      label: "页面导航",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "外观",
  },
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: "💡提示",
      warningLabel: "❗警告",
      noteLabel: "📢注意",
      importantLabel: "🎯重要",
      cautionLabel: "⚡小心",
    },
    config: (md) => {
      md.use(markdownItPlantuml);
    },
  },
  vite: {
    server: {
      open: false,
      port: 9527,
    },
  },
});
