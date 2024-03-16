import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/技术碎片/": [
    { text: "如何选择开源协议", link: "/技术碎片/如何选择开源协议" },
    {
      text: "手绘风格的开源白板Excalidraw搭建教程",
      link: "/技术碎片/手绘风格的开源白板Excalidraw搭建教程",
    },
    {
      text: "手摸手教你搭建部署Vitepress博客",
      link: "/技术碎片/手摸手教你搭建部署Vitepress博客",
    },
    { text: "Windows-Terminal美化", link: "/技术碎片/Windows-Terminal美化" },
    {
      text: "Windows11 中安装 Linux 教程 | WLS2 的使用",
      link: "/技术碎片/Windows11中安装Linux教程之WLS2的使用",
    },
    { text: "搞定UML类图！", link: "/技术碎片/搞定UML类图！" },
    { text: "正则表达式", link: "/技术碎片/正则表达式" },
  ],
  "/工具/": [
    {
      text: "开发者工具",
      base: "/工具/开发者工具",
      collapsed: false,
      items: [
        { text: "内网穿透工具", link: "/内网穿透工具" },
        { text: "IDEA", link: "/IDEA" },
        { text: "MapStruct", link: "/MapStruct" },
        { text: "Git", link: "/Git" },
      ],
    },
    {
      text: "其他工具",
      base: "/工具/其他工具",
      collapsed: false,
      items: [
        { text: "视频下载工具", link: "/视频下载工具" },
        { text: "Office部署激活工具", link: "/Office部署激活工具" },
        { text: "篡改猴(Tampermonkey)", link: "/篡改猴(Tampermonkey)" },
        {
          text: "PicList+Github搭建个人云图床",
          link: "/PicList+Github搭建个人云图床",
        },
      ],
    },
  ],
  "/源码剖析/": [
    {
      text: "集合",
      base: "/源码剖析/集合",
      collapsed: false,
      items: [
        { text: "HashMap源码分析", link: "/HashMap源码分析" },
        { text: "ArrayList源码分析", link: "/ArrayList源码分析" },
      ],
    },
  ],
  "/前端开发/": [
    {
      text: "Vue3学习之旅",
      base: "/前端开发/Vue3学习之旅",
      collapsed: false,
      items: [
        { text: "导读", link: "/README" },
        {
          text: "基础",
          base: "/前端开发/Vue3学习之旅/基础",
          collapsed: false,
          items: [
            { text: "计算属性", link: "/计算属性" },
            { text: "类与样式绑定", link: "/类与样式绑定" },
            { text: "条件渲染", link: "/条件渲染" },
            { text: "列表渲染", link: "/列表渲染" },
            { text: "事件处理", link: "/事件处理" },
            { text: "表单输入绑定", link: "/表单输入绑定" },
            { text: "生命周期", link: "/生命周期" },
            { text: "侦听器", link: "/侦听器" },
            { text: "模板引用", link: "/模板引用" },
            { text: "组件基础", link: "/组件基础" },
          ],
        },
        {
          text: "深入组件",
          base: "/前端开发/Vue3学习之旅/深入组件",
          collapsed: false,
          items: [
            { text: "注册", link: "/注册" },
          ],
        },
      ],
    },
    {
      text: "TypeScript从入门到放弃",
      base: "/前端开发/TypeScript从入门到放弃",
      collapsed: false,
      items: [{ text: "学习环境搭建", link: "/TypeScript学习环境搭建" }],
    },
  ],
  "/项目/": [
    { text: "搭建Vue3企业级项目模板", link: "/项目/搭建Vue3企业级项目模板" },
    { text: "uniapp+vue3+ts项目模板搭建", link: "/项目/uniapp+vue3+ts项目模板搭建" },
  ],
};
