import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "🌈后端开发",
    activeMatch: "/后端开发/",
    items: [
      {
        text: "Java核心技术",
        link: "/后端开发/java/泛型",
        activeMatch: "/后端开发/java/",
      },
      {
        text: "研磨设计模式",
        link: "/后端开发/设计模式/README",
        activeMatch: "/后端开发/设计模式/",
      },
      {
        text: "Spring全家桶",
        link: "/后端开发/Spring全家桶/Spring/IoC",
        activeMatch: "/后端开发/Spring全家桶/",
      },
      {
        text: "JUC并发编程",
        link: "/后端开发/juc/README",
        activeMatch: "/后端开发/juc/",
      },
      {
        text: "MySQL",
        link: "/后端开发/MySQL/通用表表达式",
        activeMatch: "/后端开发/MySQL/",
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
      {
        text: "玩转微信小程序",
        link: "/前端开发/玩转微信小程序/README",
        activeMatch: "/前端开发/玩转微信小程序/",
      },
    ],
  },
  {
    text: "🔥源码剖析",
    link: "/源码剖析/集合/HashMap源码分析",
    activeMatch: "/源码剖析/",
  },
  {
    text: "✨数据结构与算法",
    activeMatch: "/数据结构与算法/",
    items: [
      {
        text: "数据结构",
        link: "/数据结构与算法/数据结构/数组",
        activeMatch: "/数据结构与算法/数据结构/",
      },
    ],
  },
  {
    text: "🏆刷题",
    activeMatch: "/刷题/",
    items: [
      {
        text: "LeetCode全解",
        link: "/刷题/LeetCode全解/1.两数之和",
        activeMatch: "/刷题/LeetCode全解/",
      },
      {
        text: "NowCoder全解",
        link: "/刷题/NowCoder全解/SQL156 各个视频的平均完播率",
        activeMatch: "/刷题/NowCoder全解/",
      },
    ],
  },
  {
    text: "💯项目实战",
    link: "/项目/vue3/待办清单",
    activeMatch: "/项目/",
  },
  { text: "🔖技术碎片", link: "/技术碎片/README", activeMatch: "/技术碎片/" },
  {
    text: "🗂️杂记",
    link: "/杂记/工具/开发者工具/IDEA",
    activeMatch: "/杂记/",
  },
];
