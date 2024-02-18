import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "🔥源码剖析",
    link: "/源码剖析/集合/HashMap源码分析",
    activeMatch: "/源码剖析/",
  },
  {
    text: "前端开发",
    items: [
      {
        text: "TypeScript从入门到放弃",
        link: "/TypeScript从入门到放弃/README",
        activeMatch: "/TypeScript从入门到放弃/",
      },
    ],
  },
  { text: "🔖技术碎片", link: "/技术碎片/README", activeMatch: "/技术碎片/" },
  {
    text: "🔨工具",
    link: "/工具/开发者工具/内网穿透工具",
    activeMatch: "/工具/",
  },
];
