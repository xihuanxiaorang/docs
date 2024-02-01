import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/TypeScript从入门到放弃/": [],
  "/技术碎片/": [
    { text: "如何选择开源协议", link: "/技术碎片/如何选择开源协议" },
    {
      text: "手绘风格的开源白板Excalidraw搭建教程",
      link: "/技术碎片/手绘风格的开源白板Excalidraw搭建教程",
    },
    {
      text: "手摸手教你快速搭建部署Vitepress博客",
      link: "/技术碎片/手摸手教你快速搭建部署Vitepress博客",
    },
    {
      text: "Windows-Terminal美化",
      link: "/技术碎片/Windows-Terminal美化",
    },
    {
      text: "Windows11 中安装 Linux 教程 | WLS2 的使用",
      link: "/技术碎片/Windows11中安装Linux教程之WLS2的使用",
    },
    {
      text: "搞定UML类图！",
      link: "/技术碎片/搞定UML类图！",
    },
  ],
  "/工具/": [
    {
      text: "开发者工具",
      collapsed: false,
      items: [
        { text: "内网穿透工具", link: "/工具/开发者工具/内网穿透工具" },
        { text: "IDEA", link: "/工具/开发者工具/IDEA" },
        { text: "MapStruct", link: "/工具/开发者工具/MapStruct" },
        { text: "Git", link: "/工具/开发者工具/Git" },
      ],
    },
    {
      text: "其他工具",
      collapsed: false,
      items: [
        { text: "视频下载工具", link: "/工具/其他工具/视频下载工具" },
        { text: "Office部署激活工具", link: "/工具/其他工具/Office部署激活工具" },
        { text: "篡改猴(Tampermonkey)", link: "/工具/其他工具/篡改猴(Tampermonkey)" },
      ],
    },
  ],
};
