import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
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
  { text: "技术碎片", link: "/技术碎片/README", activeMatch: "/技术碎片/" },
];
