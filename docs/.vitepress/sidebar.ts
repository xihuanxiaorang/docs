import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/技术碎片/": [
    { text: "技术碎片", link: "/技术碎片/README" },
    { text: "搞定UML类图！", link: "/技术碎片/搞定UML类图！" },
    { text: "正则表达式", link: "/技术碎片/正则表达式" },
    {
      text: "其他",
      base: "/技术碎片",
      items: [
        { text: "如何选择开源协议", link: "/如何选择开源协议" },
        {
          text: "手绘风格的开源白板Excalidraw搭建教程",
          link: "/手绘风格的开源白板Excalidraw搭建教程",
        },
        {
          text: "手摸手教你搭建部署Vitepress博客",
          link: "/手摸手教你搭建部署Vitepress博客",
        },
        {
          text: "Windows-Terminal美化",
          link: "/Windows-Terminal美化",
        },
        {
          text: "Windows11 中安装 Linux 教程 | WLS2 的使用",
          link: "/Windows11中安装Linux教程之WLS2的使用",
        },
        {
          text: "美化 Github 个人主页",
          link: "/美化Github个人主页",
        },
      ],
    },
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
  "/前端开发/Vue3学习之旅/": [
    { text: "导读", link: "/前端开发/Vue3学习之旅/README" },
    {
      text: "基础",
      base: "/前端开发/Vue3学习之旅/基础",
      collapsed: false,
      items: [
        { text: "创建一个应用", link: "/创建一个应用" },
        { text: "模板语法", link: "/模板语法" },
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
        { text: "Props", link: "/Props" },
        { text: "事件", link: "/事件" },
        { text: "组件 v-model", link: "/组件v-model" },
        { text: "透传 Attributes", link: "/透传Attributes" },
        { text: "插槽", link: "/插槽" },
        { text: "依赖注入", link: "/依赖注入" },
        { text: "异步组件", link: "/异步组件" },
      ],
    },
    {
      text: "逻辑复用",
      base: "/前端开发/Vue3学习之旅/逻辑复用",
      collapsed: false,
      items: [
        { text: "组合式函数", link: "/组合式函数" },
        { text: "自定义指令", link: "/自定义指令" },
        { text: "插件", link: "/插件" },
      ],
    },
  ],
  "/前端开发/TypeScript从入门到放弃/": [
    {
      text: "学习环境搭建",
      link: "/前端开发/TypeScript从入门到放弃/TypeScript学习环境搭建",
    },
  ],
  "/项目/": [
    {
      text: "项目模板",
      base: "/项目/项目模板",
      collapsed: false,
      items: [
        {
          text: "搭建Vue3企业级项目模板",
          link: "/搭建Vue3企业级项目模板",
        },
        {
          text: "uniapp+vue3+ts项目模板搭建",
          link: "/uniapp+vue3+ts项目模板搭建",
        },
      ],
    },
    {
      text: "vue3",
      base: "/项目/vue3",
      collapsed: false,
      items: [
        { text: "待办清单", link: "/待办清单" },
        { text: "待办清单 v2.0", link: "/待办清单v2" },
      ],
    },
    {
      text: "后台管理系统",
      base: "/项目/后台管理系统",
      collapsed: false,
      items: [
        {
          text: "simple前后端分离后台管理系统",
          items: [
            { text: "前端篇", link: "/simple后台管理系统(前端篇)" },
            { text: "后端篇", link: "/simple后台管理系统(后端篇)" },
          ],
        },
      ],
    },
  ],
  "/后端开发/设计模式": [
    { text: "导读", link: "/后端开发/设计模式/README" },
    { text: "七大设计原则", link: "/后端开发/设计模式/七大设计原则" },
    {
      text: "创建型",
      base: "/后端开发/设计模式/创建型",
      collapsed: false,
      items: [],
    },
    {
      text: "结构型",
      base: "/后端开发/设计模式/结构型",
      collapsed: false,
      items: [],
    },
    {
      text: "行为型",
      base: "/后端开发/设计模式/行为型",
      collapsed: false,
      items: [{ text: "策略模式", link: "/策略模式" }],
    },
  ],
  "/后端开发/juc": [{ text: "导读", link: "/后端开发/juc/README" }],
  "/后端开发/MySQL": [
    { text: "通用表表达式", link: "/后端开发/MySQL/通用表表达式" },
    { text: "窗口函数", link: "/后端开发/MySQL/窗口函数" },
    {
      text: "刷题集",
      base: "/后端开发/MySQL/刷题集",
      items: [{ text: "LeetCode", link: "/LeetCode" }],
    },
  ],
  "/后端开发/other": [
    {
      text: "ORM框架",
      base: "/后端开发/other/ORM框架",
      items: [
        { text: "JDBC", link: "/JDBC" },
        { text: "Mybatis", link: "/Mybatis" },
        { text: "MybatisPlus", link: "/MybatisPlus" },
      ],
    },
    {
      text: "Logback",
      base: "/后端开发/other/Logback",
      items: [
        { text: "介绍", link: "/README" },
        { text: "架构", link: "/架构" },
      ],
    },
  ],
  "/数据结构与算法": [
    {
      text: "数据结构",
      base: "/数据结构与算法/数据结构",
      items: [
        { text: "数组", link: "/数组" },
        { text: "链表", link: "/链表" },
      ],
    },
  ],
};
