import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "🌈后端开发",
    activeMatch: "/后端开发/",
    items: [
      {
        text: "研磨设计模式",
        link: "/后端开发/设计模式/README",
        activeMatch: "/后端开发/设计模式/",
      },
      {
        text: "其他",
        link: "/后端开发/other/ORM框架/JDBC",
        activeMatch: "/后端开发/other/",
      },
    ],
  },
  {
    text: "🚀前端开发",
    activeMatch: "/前端开发/",
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
  { text: "💯项目实战", link: "/项目/项目模板/搭建Vue3企业级项目模板", activeMatch: "/项目/" },
  { text: "🏷️技术碎片", link: "/技术碎片/README", activeMatch: "/技术碎片/" },
  {
    text: "🧰实用工具",
    link: "/工具/开发者工具/内网穿透工具",
    activeMatch: "/工具/",
  },
];
