import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "💯前端开发",
    items: [
      {
        text: "Vue3学习之旅",
        link: "/前端开发/Vue3学习之旅/README",
        activeMatch: "/前端开发/Vue3学习之旅/",
      },
      {
        text: "TypeScript从入门到放弃",
        link: "/前端开发/TypeScript从入门到放弃/TypeScript学习环境搭建",
        activeMatch: "/前端开发/TypeScript从入门到放弃/",
      },
    ],
  },
  {
    text: "🔥源码剖析",
    link: "/源码剖析/集合/HashMap源码分析",
    activeMatch: "/源码剖析/",
  },
  { text: "💥项目实战", link: "/项目/搭建Vue3企业级项目模板", activeMatch: "/项目/" },
  { text: "🏷️技术碎片", link: "/技术碎片/README", activeMatch: "/技术碎片/" },
  {
    text: "🧰实用工具",
    link: "/工具/开发者工具/内网穿透工具",
    activeMatch: "/工具/",
  },
];
