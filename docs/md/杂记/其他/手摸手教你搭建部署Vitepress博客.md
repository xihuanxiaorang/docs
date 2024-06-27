# 手摸手教你搭建部署Vitepress博客

## 介绍📢

> 官方文档：[VitePress | Vite & Vue Powered Static Site Generator](https://vitepress.dev/)

VitePress 是一个[静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator) (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

> [!IMPORTANT] 
>
> **Vue 团队决定将重点放在 VitePress，作为长期的主要 SSG 选择推荐**。

## 快速开始🚀

> [快速开始 | VitePress](https://vitepress.dev/zh/guide/getting-started)

1. 选择一个合适的位置创建一个空目录，如 `blog`，使用 vscode 打开该目录；

2. 打开终端，执行 `pnpm add -D vitepress ` 命令进行安装；

3. 执行 `pnpm vitepress init` 命令启动向导，可以帮助你构建一个基本项目；将需要回答几个简单的问题，如下所示：<br />![image-20240128161545630](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401281615850.png)

   提示咱们需要使用 `pnpm add -D vue`安装 vue 作为开发依赖。

4. 此时就可以运行 `pnpm run docs:dev` 脚本，该脚本将启动具有即时热更新的本地开发服务器。开发服务应该会运行在 http://localhost:5173 上。在浏览器中访问 URL 以查看新站点的运行情况吧！效果如下所示：<br />![image-20240128161944350](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401281619524.png)

## 前置知识🏷️

### 根目录和源目录

VitePress 项目的文件结构中有两个重要的概念：项目根目录 (**project root**) 和源目录 (**source directory**)。

#### 项目根目录

项目根目录是 VitePress 将尝试寻找 `.vitepress` 特殊目录的地方。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的预留位置。

当从命令行运行 `vitepress dev` 或 `vitepress build` 时，VitePress 将使用当前工作目录作为项目根目录。要将子目录指定为根目录，需要将相对路径传递给命令。例如，如果 VitePress 项目位于 `./docs`，应该运行 `vitepress dev docs`：

```
.
├─ docs                    # 项目根目录
│  ├─ .vitepress           # 配置目录
│  ├─ getting-started.md
│  └─ index.md
└─ ...
```

```sh
vitepress dev docs
```

这将导致以下源代码到 HTML 的映射：

```
docs/index.md            -->  /index.html (可以通过 / 访问)
docs/getting-started.md  -->  /getting-started.html
```

#### 源目录

源目录是 Markdown 源文件所在的位置。默认情况下，它与项目根目录相同。但是，可以通过 [`srcDir`](https://vitepress.dev/zh/reference/site-config#srcdir) 配置选项对其进行配置。

`srcDir` 选项是相对于项目根目录解析的。例如，对于 `srcDir: 'src'`，文件结构将如下所示：

```
.                          # 项目根目录
├─ .vitepress              # 配置目录
└─ src                     # 源目录
   ├─ getting-started.md
   └─ index.md
```

生成的源代码到 HTML 的映射：

```
src/index.md            -->  /index.html (可以通过 / 访问)
src/getting-started.md  -->  /getting-started.html
```

### public 目录

有时可能需要一些静态资源，但这些资源没有直接被 Markdown 或主题组件直接引用，或者你可能想以原始文件名提供某些文件，像 `robots.txt`，favicons 和 PWA 图标这样的文件。

可以将这些文件放置在[源目录](https://vitepress.dev/zh/guide/routing#source-directory)的 `public` 目录中。例如，如果项目根目录是 `./docs`，并且使用默认源目录位置，那么 public 目录将是 `./docs/public`。

**放置在 `public` 中的资源将按原样复制到输出目录的根目录中。**

请注意，应使用根绝对路径来引用放置在 `public` 中的文件——例如，`public/icon.png` 应始终在源代码中使用 `/icon.png` 引用。

## 站点配置✨

以下内容只针对本人使用到的配置解释其含义以及用法，对于其他没有介绍到的配置请参考官方文档 [站点配置 | VitePress](https://vitepress.dev/zh/reference/site-config)。

### title

站点的标题。使用默认主题时，这将显示在导航栏中。它还将用作所有单独页面标题的默认后缀，单个页面的最终标题将是其第一个 `<h1>` 标题的文本内容加上的全局 `title`。例如使用以下配置和页面内容：

```ts
export default {
  title: '小让の码场',
}
```

```markdown
# 手摸手教你快速搭建部署Vitepress博客
```

页面标题就是 `手摸手教你快速搭建部署Vitepress博客 | 小让の码场`.

### description

站点的描述。这将呈现为页面 HTML 中的 `<meta>` 标签。

```ts
export default {
  description: "包含: Java 核心技术, Spring全家桶, 设计模式, 数据结构与算法, 源码分析，面试宝典...",
}
```

### srcDir

markdown 页面的目录，相对于项目根目录。另请参阅[根目录和源目录](#根目录和源目录)。在这一步咱们需要创建在[根目录](#项目根目录) `docs` 下创建一个 `md` 目录作为[源目录](#源目录)。

```ts
export default {
  srcDir: './md',
}
```

此时，如果咱们访问首页的话则会报404，这是为什么呢？如果你已经理解源目录的概念的话，则非常容易想明白问题出在哪，咱们需要将自动生成的三个 markdown 文件移动到刚刚创建的 `md` 当中，此时再去访问则显示正常。

### head

要在页面 HTML 的 `<head>` 标签中呈现的其他元素。用户添加的标签在结束 `head` 标签之前呈现，在 VitePress 标签之后。比如，添加一个图标，如下所示：

```ts
export default {
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
} // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico

/* 渲染成:
  <link rel="icon" href="/favicon.ico">
*/
```

在这一步咱们需要在源目录 `md` 中创建一个 [public 目录](#public 目录)作为静态资源存放的目录，并将 `favicon.ico` 网站图标放入其中。

### lang

站点的 lang 属性。这将呈现为页面 HTML 中的 `<html lang="en-US">` 标签。咱们配置成 `zh-CN`。

```ts
export default {
  lang: 'zh-CN',
}
```

### ignoreDeadLinks

当设置为 `true` 时，VitePress 不会因为死链而导致构建失败。当设置为 `'localhostLinks'` ，出现死链时构建将失败，但不会检查 `localhost` 链接。

```ts
export default {
  ignoreDeadLinks: true,
}
```

它也可以是一组精确的 url 字符串、正则表达式模式或自定义过滤函数。

```ts
export default {
  ignoreDeadLinks: [
    // 忽略精确网址 "/playground"
    '/playground',
    // 忽略所有 localhost 链接
    /^https?:\/\/localhost/,
    // 忽略所有包含 "/repl/" 的链接
    /\/repl\//,
    // 自定义函数，忽略所有包含 "ignore "的链接
    (url) => {
      return url.toLowerCase().includes('ignore')
    }
  ],
}
```

咱们此处就设置为 `'localhostLinks'` 即可，如下所示：

```ts
export default {
  ignoreDeadLinks: 'localhostLinks',
}
```

### lastUpdated

是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 [`useData`](https://vitepress.dev/zh/reference/runtime-api#usedata) 访问。使用默认主题时，启用此选项将显示每个页面的最后更新时间。可以通过 [`themeConfig.lastUpdatedText`](https://vitepress.dev/zh/reference/default-theme-config#lastupdatedtext) 选项自定义文本。咱们此处就设置为 `true` 启用该选项用于显示每个页面的最后更新时间，如下所示：

```ts
export default {
  lastUpdated: true,
}
```

## 主题配置🎉

以下内容只针对本人使用到的配置解释其含义以及用法，对于其他没有介绍到的配置请参考官方文档 [默认主题配置 | VitePress](https://vitepress.dev/zh/reference/default-theme-config)。

### 主页

VitePress 默认主题提供了一个首页布局，也可以在[此站点首页](https://vitepress.dev/zh/)看到。可以通过 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config) 指定 `layout: home` 在任何页面上使用它

```yaml
---
layout: home
---
```

但是，仅做这个配置不会有太大作用。可以通过设置其他选项 (例如 `hero` 和 `features`) 向主页添加几个不同的预设。​

#### Hero 部分

Hero 部分位于主页顶部。以下是配置 Hero 的方法。

```yaml
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "小让の码场"
  text: "全栈编程知识体系"
  tagline: 学如逆水行舟不进则退，心似平原走马易放难收
  image:
    src: /background.svg
    alt: 背景图
  actions:
    - theme: brand
      text: 开始阅读
      link: /other/guide-to-reading
    - theme: alt
      text: 关于
      link: /about/me
---
```

根据以上配置，咱们还需要增加如下资源文件：

1. 在 iconfont 网站中选择一篇插画，如 [iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/search/index?searchType=illustration&q=编程&show_id=294565) 作为背景图片，选择 svg 下载并改名为 `background` 拷贝到 `public` 目录中；
2. 在源目录 `md` 中新建 `other` 和 `about` 两个子目录，并在这两个子目录中分别新建 `guide-to-reading` 和 `me` 两篇文章；
3. 删除项目一开始自动创建的 `api-examples` 和 `markdown-examples` 两篇文章。

此时访问主页，效果如下所示：<br />![image-20240129164045605](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401291641624.png)

:::details Hero 类型

```ts
interface Hero {
  // `text` 上方的字符，带有品牌颜色，预计简短，例如产品名称
  name?: string

  // hero 部分的主要文字，被定义为 `h1` 标签
  text: string

  // `text` 下方的标语
  tagline?: string

  // text 和 tagline 区域旁的图片
  image?: ThemeableImage

  // 主页 hero 部分的操作按钮
  actions?: HeroAction[]
}

type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }

interface HeroAction {
  // 按钮的颜色主题，默认为 `brand`
  theme?: 'brand' | 'alt'

  // 按钮的标签
  text: string

  // 按钮的目标链接
  link: string
}
```

:::

#### Features 部分

在 Features 部分，可以在 Hero 部分之后列出任意数量的 Feature。可以在 frontmatter 中配置 `features`。

可以为每个 feature 提供一个图标，可以是表情符号或任何类型的图像。当配置的图标是图片（svg, png, jpeg...）时，必须提供合适的宽度和高度的图标；还可以在需要时配置其描述、固有大小以及深色和浅色主题下的不同表现。

```yaml
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

features:
  - icon: 🧗
    title: 努力
    details: 路漫漫其修远兮，吾将上下而求索
  - icon: 🤔
    title: 思考
    details: 学而不思则罔，思而不学则殆
  - icon: 🍻
    title: 分享
    details: 晚来天欲雪，能饮一杯无？
---
```

此时再次访问主页，效果如下所示：<br />![image-20240129165019717](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401291650032.png)

:::details Feature 类型

```ts
interface Feature {
  // 在每个 feature 框中显示图标
  icon?: FeatureIcon

  // feature 的标题
  title: string

  // feature 的详情
  details: string

  // 点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
  //
  // 例如 `guide/reference/default-theme-home-page` 或 `https://example.com`
  link?: string

  // feature 组件内显示的链接文本，最好与 `link` 选项一起使用
  //
  // 例如 `Learn more`, `Visit page` 等
  linkText?: string

  // `link` 选项的链接 rel 属性
  //
  // 例如 `external`
  rel?: string
}

type FeatureIcon =
  | string
  | { src: string; alt?: string; width?: string; height: string }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height: string
    }
```

:::

### 导航栏

Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。

#### 站点标题和图标

默认情况下，nav 显示 [`config.title`](https://vitepress.dev/zh/reference/site-config#title) 作为站点的标题，即[站点配置中设置的 title](#title)。如果想更改导航栏上显示的内容，可以在 `themeConfig.siteTitle` 选项中定义自定义文本。通俗点解释就是两者可以设置的不一样，如果此处没有单独设置的话，就以站点配置中设置的 `title` 作为该选项的默认值。此处本人并没有额外配置，就让两者一样即可。

如果站点有图标，则可以通过传递图片路径来显示它。应该将图标直接放在 `public` 中，并赋值该绝对路径。如下所示：

```ts
export default {
  themeConfig: {
    logo: '/logo.svg'
  }
}
```

咱们需要在 iconfont 中选择一个自己认为合适的图标下载下来拷贝到 `public` 目录中。

添加图标时，它会与站点标题一起显示。如果只需要图标并且想要隐藏站点标题文本，请将 `siteTitle` 选项设置为 `false`。

```ts
export default {
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false
  }
}
```

如果想添加 `alt` 属性或根据深色/浅色模式自定义，还可以将图标作为对象传递。有关详细信息，请参阅 [`themeConfig.logo`](https://vitepress.dev/zh/reference/default-theme-config#logo)。

#### 导航链接

可以定义 `themeConfig.nav` 选项以将链接添加到导航栏。

```ts
export default {
  themeConfig: {
    nav: [{ text: "技术碎片", link: "/技术碎片/", activeMatch: "/技术碎片/" }],
  }
}
```

`text` 是 nav 中显示的实际文本，而 `link` 是单击文本时将导航到的链接。对于链接，将路径设置为不带 `.md` 后缀的实际文件，并且始终以 `/` 开头。

此处我配置的是用于访问位于源目录 `md` 中的 `技术碎片` 子目录中的 `index.md` 文章，需要咱们在 `/md/技术碎片/` 目录中新增一篇 `index.md` 文章。并且还配置了 `activeMatch` 选项，当当前页面位于匹配路径 `技术碎片` 下时，导航菜单项将突出显示，通俗点来说就是当访问位于 `技术碎片` 子目录中的其他文章 `xxx.md` 时，此时 URL 链接为 `.../技术碎片/xxx.html`，该导航菜单项将会高亮。

#### 社交链接

可以定义此选项以在导航栏中展示带有图标的社交帐户链接。

```ts
export default {
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/xihuanxiaorang" },
      {
        icon: {
          svg: '<svg t="1706343933559" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4223" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="4224"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="4225"></path></svg>',
        },
        link: "https://space.bilibili.com/307881917",
      },
    ],
  }
}
```

Vitepress 默认只支持 `'discord'  | 'facebook'  | 'github'  | 'instagram'  | 'linkedin'  | 'mastodon'  | 'npm'  | 'slack'  | 'twitter'  | 'x'  | 'youtube'`，其他图标需要按照上面配置中的第二种进行配置，在 iconfont 网站中选择一个自己想要的社交图标，如 [bilibli](https://www.iconfont.cn/search/index?searchType=icon&q=bilibil&page=1&fromCollection=-1) 复制其 svg 代码作为字符串粘贴到 `icon.svg` 选项中。

主页最终效果图与各项配置对应关系图，如下所示：<br />![image-20240129182755378](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401291828629.png)

### 侧边栏

侧边栏是文档的主要导航块。可以在 [`themeConfig.sidebar`](https://vitepress.dev/zh/reference/default-theme-config#sidebar) 中配置侧边栏菜单。

#### 基本用法

侧边栏菜单的最简单形式是传入一个链接数组。第一级项目定义侧边栏的“部分”。它应该包含作为小标题的 `text` 和作为实际导航链接的 `items`。

```ts
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
          ...
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
          ...
        ]
      }
    ]
  }
}

```

每个 `link` 都应指定以 `/` 开头的实际文件的路径。如果在链接末尾添加斜杠，它将显示相应目录的 `index.md`。

```ts
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          // 显示的是 `/guide/index.md` 页面
          { text: 'Introduction', link: '/guide/' }
        ]
      }
    ]
  }
}
```

可以进一步将侧边栏项目嵌入到 6 级深度，从根级别上计数。请注意，**深度超过 6 级将被忽略，并且不会在侧边栏上显示**。

```ts
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Level 1',
        items: [
          {
            text: 'Level 2',
            items: [
              {
                text: 'Level 3',
                items: [
                  ...
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

#### 多侧边栏👍

可能会根据页面路径显示不同的侧边栏。例如，如本站点所示，可能希望在文档中创建单独的侧边栏，例如“指南”页面和“配置参考”页面。

为此，首先将你的页面组织到每个所需部分的目录中：

```
.
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```

然后，更新配置以定义每个部分的侧边栏。这一次，**应该传递一个对象而不是数组**。

```ts
export default {
  themeConfig: {
    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    }
  }
}
```

推荐这种方式，因为咱们写博客时一般是单独的侧边栏，并不会所有的文章都共用同一个侧边栏。以下为本人目前博客侧边栏配置：需要在 `技术碎片` 目录中新增如下几篇文章 `如何选择开源协议`、`手绘风格的开源白板Excalidraw搭建教程` 和 `手摸手教你快速搭建部署Vitepress博客`。

```ts
export default {
  themeConfig: {
    sidebar: {
      "/技术碎片/": [
        { text: "技术碎片", link: "/技术碎片/" },
        { text: "如何选择开源协议", link: "/技术碎片/如何选择开源协议" },
        {
          text: "手绘风格的开源白板Excalidraw搭建教程",
          link: "/技术碎片/手绘风格的开源白板Excalidraw搭建教程",
        },
        {
          text: "手摸手教你快速搭建部署Vitepress博客",
          link: "/技术碎片/手摸手教你快速搭建部署Vitepress博客",
        },
      ],
    },
  }
}
```

### 页脚

配置好 `themeConfig.footer`，VitePress 将在全局页面底部显示页脚。

```ts
export default {
  themeConfig: {
    footer: {
      message:
        'Released under the <a href="https://github.com/xihuanxiaorang/docs/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024 <a href="https://github.com/xihuanxiaorang">小让</a>',
    },
  }
}
```

后面部署到 Github 上之后，按照 [添加许可到仓库 - GitHub 文档](https://docs.github.com/zh/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository#including-an-open-source-license-in-your-repository) 流程添加开源协议即可，并将配置中的用户名 `xihuanxiaorang` 和仓库名称 `docs` 修改成小伙伴们自己的即可。

### 编辑链接

编辑链接让你可以显示一个链接，以在 GitHub 或 GitLab 等 Git 管理服务上编辑页面。要启用它，请将 `themeConfig.editLink` 选项添加到配置中。

```ts
export default {
  themeConfig: {
    editLink: {
      pattern: "https://github.com/xihuanxiaorang/docs/edit/main/docs/md/:path",
      text: "在 GitHub 上编辑此页面",
    },
  }
}
```

需要将配置中的用户名 `xihuanxiaorang` 和仓库名称 `docs` 修改成小伙伴们自己的。

### 最后更新于

最近一条内容的更新时间会显示在页面右下角。要启用它，请将 `config.lastUpdated` 选项设置为 `true`。

> [!tip]
>
> 你必须提交 markdown 文件才能看到最后更新时间。 

其中 `themeConfig.lastUpdated` 选项允许自定义上次更新的文本和日期格式。

```ts
export default {
  themeConfig: {
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  }
}
```

### 搜索

#### 本地搜索

得益于 [minisearch](https://github.com/lucaong/minisearch/)，VitePress 支持使用浏览器内索引进行模糊全文搜索。要启用此功能，只需在 `.vitepress/config.ts` 文件中将 `themeConfig.search.provider` 选项设置为 `'local'` 即可：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    search: {
      provider: "local",
    },
  }
})
```

示例结果：

![搜索弹窗截图](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401292203794.png)

#### Algolia Search

VitePress 支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch) 搜索文档站点。

申请使用 [Algolia DocSearch](https://docsearch.algolia.com/apply/)，如下所示：<br />![image-20240314003539289](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140035441.png)

申请时需要注意以下几点要求：

- 您的网站必须是技术文档或技术博客
- 您必须是该网站的所有者，或者至少拥有更新其内容的权限
- 您的网站必须对公众开放
- 您的网站必须位于生产环境

填写完后，等待一段时间（我等了 x 天），如果申请通过，我们就会收到邮件：<br />

<span style="background-color: rgb(251, 228, 231);">TODO</span>

### outline

将此值设置为 `false` 可禁止渲染大纲容器。

::: details Outline 类型

```ts
interface Outline {
  /**
   * outline 中要显示的标题级别。
   * 单个数字表示只显示该级别的标题。
   * 如果传递的是一个元组，第一个数字是最小级别，第二个数字是最大级别。
   * `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
   *
   * @default 2
   */
  level?: number | [number, number] | 'deep'

  /**
   * 显示在 outline 上的标题。
   *
   * @default 'On this page'
   */
  label?: string
}
```

:::

以下为本人目前配置，仅作参考，如下所示：

```ts
export default {
  themeConfig: {
    outline: {
      level: "deep",
      label: "页面导航",
    },
  }
}
```

### docFooter

可用于自定义出现在上一页和下一页链接上方的文本。如果不是用英语编写文档，这很有帮助。也可用于全局禁用上一页/下一页链接。如果想有选择地启用/禁用上一个/下一个链接，可以使用 [frontmatter](https://vitepress.dev/zh/reference/default-theme-prev-next-links)。

```ts
export default {
  themeConfig: {
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
  }
}
```

![image-20240129214525891](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401292145184.png)

## Markdown 扩展

VitePress 带有内置的 Markdown 扩展。对于一些简单的扩展，如标题锚点、自定义容器、代码块中的语法高亮、在代码块中实现行高亮、行号等等此处就不再赘述，咱们要说的是如果在 markdown 文件中使用 `plantuml` 代码块的话，访问页面时渲染不出来该如何解决？此时就需要用到 Vitepress 的 [高级扩展](https://vitepress.dev/zh/guide/markdown#advanced-configuration)。

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上面提到的很多扩展功能都是通过自定义插件实现的。可以使用 `.vitepress/config.js` 中的 `markdown` 选项来进一步自定义 `markdown-it` 实例。

### PlantUML 支持

本人查到一款插件 [markdown-it-textual-uml](https://github.com/manastalukdar/markdown-it-textual-uml)，使用 `pnpm add markdown-it-textual-uml` 命令下载该插件，然后需要按照如下所示配置`.vitepress/config.mts` 文件中的 `markdown` 选项。

```ts {15}
import { defineConfig } from "vitepress";
import markdownItPlantuml from "markdown-it-textual-uml";

export default defineConfig({
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
}
```

### 图片放大预览

1. 安装插件：`pnpm add markdown-it-custom-attrs`；

2. 配置 `.vitepress` 目录下的 `config.mts` 配置文件：

   ```ts
   import mdItCustomAttrs from "markdown-it-custom-attrs";
   
   export default defineConfig({
     head: [
       // ...
       [
         "link",
         {
           rel: "stylesheet",
           href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
         },
       ],
       [
         "script",
         {
           src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
         },
       ],
     ],
     // ...
     markdown: {
      	// ...
       config: (md) => {
         // use more markdown-it plugins!
         md.use(mdItCustomAttrs, "image", {
           "data-fancybox": "gallery",
         });
       },
     },
   })
   ```

3. 使用方式：

   ```markdown
   <!-- ![](图片地址) -->
   <img src="图片地址" data-fancybox="gallery"/>
   ```

   或者

   ```markdown
   ![图片描述](图片地址){data-fancybox=gallery}
   ```

## 部署

以下指南基于一些前提：

- VitePress 站点位于项目的 `docs` 目录中。

- 你使用的是默认的生成输出目录 （`.vitepress/dist`）。

- VitePress 作为本地依赖项安装在项目中，并且你已在 `package.json` 中设置以下脚本：

  ```json
  {
    "scripts": {
      "docs:dev": "vitepress dev docs",
      "docs:build": "vitepress build docs",
      "docs:preview": "vitepress preview docs"
    }
  }
  ```


### 本地构建与测试

1. 可以运行 `pnpm run docs:build` 命令来构建文档；

2. 构建文档后，通过运行 `pnpm run docs:preview` 命令可以在本地预览它，`preview` 命令将启动一个本地静态 Web 服务 `http://localhost:4173`，该服务以 `.vitepress/dist` 作为源文件。**这是检查生产版本在本地环境中是否正常的一种简单方法**。

3. 可以通过传递 `--port` 作为参数来配置服务器的端口。

   ```json
   {
     "scripts": {
       "docs:preview": "vitepress preview docs --port 8080"
     }
   }
   ```

   现在 `docs:preview` 方法将会在 `http://localhost:8080` 启动服务。

### 设定 public 根目录

默认情况下，我们假设站点将部署在域名 (`/`) 的根路径上。如果站点在子路径中提供服务，例如 `https://mywebsite.com/blog/`，则需要在 VitePress 配置中将 [`base`](https://vitepress.dev/zh/reference/site-config#base) 选项设置为 `'/blog/'`。

**例**：如果你使用的是 Github（或 GitLab）页面并部署到 `user.github.io/repo/`，请将 `base` 设置为 `/repo/`。

### GitHub Pages

部署到 Github Pages 具体步骤如下所示：

1. 在项目目录下创建一个 `.gitignore` 文件，用于配置 git 忽略文件，内容如下所示：

   ```
   node_modules
   cache
   dist
   .temp
   ```

2. 在项目的 `.github/workflows` 目录中创建一个名为 `deploy.yml` 的文件，其中包含这样的内容：

   ```yaml{35-38}
   # 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
   #
   name: Deploy VitePress site to Pages
   
   on:
     # 在针对 `main` 分支的推送上运行。如果你
     # 使用 `master` 分支作为默认分支，请将其更改为 `master`
     push:
       branches: [main]
   
     # 允许你从 Actions 选项卡手动运行此工作流程
     workflow_dispatch:
   
   # 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
   permissions:
     contents: read
     pages: write
     id-token: write
   
   # 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
   # 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
   concurrency:
     group: pages
     cancel-in-progress: false
   
   jobs:
     # 构建工作
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
           with:
             fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
         - name: Setup pnpm
           uses: pnpm/action-setup@v2 # 如果使用 pnpm，请取消注释
           with:
             version: 8.6.12 # 指定需要的 pnpm 版本
         # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: pnpm # 或 pnpm / yarn
         - name: Setup Pages
           uses: actions/configure-pages@v3
         - name: Install dependencies
           run: pnpm install # 或 pnpm install / yarn install / bun install
         - name: Build with VitePress
           run: |
             pnpm run docs:build
             touch docs/.vitepress/dist/.nojekyll
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: docs/.vitepress/dist
   
     # 部署工作
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       needs: build
       runs-on: ubuntu-latest
       name: Deploy
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

   > [!TIP]
   >
   > 1. 如果完全照搬官方文档的话，在构建时会失败，需要如 `35-38` 行处一样，在使用 `pnpm` 部署的时候需要指定 `pnpm` 的版本号，这样才能构建成功！
   > 2. 在 `public` 目录下新建一个 `.nojekyll` 文件，无需填写任何内容。
3. 现在咱们在终端中输入 `git init` 命令初始化一个本地仓库，使用 `git add .` 命令将所有文件添加到暂存区，使用 `git commit -m "feat: init blog"` 命令进行一次提交。

4. 接下来需要在 Github 上创建一个新的仓库，如 `docs`，名称可以根据自己的喜欢来命名，然后在存储库设置中的“Pages”菜单项下，选择“Build and deployment > Source > GitHub Actions”。

5. 然后使用 `git remote add origin git@github.com:xihuanxiaorang/docs.git` 命令关联远程仓库，最后使用 `git branch -M main` 和 `git push -u origin main` 命令推送到远程仓库。

6. 将更改推送到 `main` 分支并等待 GitHub Action 工作流完成。你应该看到站点部署到 `https://<username>.github.io/[repository]/` 或 `https://<custom-domain>/`，这取决于你的设置。你的站点将在每次推送到 `main` 分支时自动部署。<br />![image-20240130150323588](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401301503328.png)

## Q&A

### 部署到 Github Pages 之后样式丢失

> 本人在 Vitepress 上提的 issue：[部署到Github Pages之后，如果使用自定义域名的话样式会丢失 · Issue #3513 · vuejs/vitepress](https://github.com/vuejs/vitepress/issues/3513)，大佬已经给出具体解决方案！

咱们此时去 Github 存储库设置中的“Pages”菜单项查看，访问博客站点，如下所示：<br />![image-20240130151813465](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401301518099.png)

惊讶地发现与咱们在本地时看到的完全不一样，样式居然全都丢失了！<br />![image-20240130152033715](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202401301520182.png)

那么该如何解决呢？有如下几种解决方案：

1. 如果小伙伴们是直接部署在 `<用户名>.github.io` 仓库的话，则一路走下来部署上去之后应该不会出现样式丢失的问题；

2. 如果小伙伴们像我一样部署在 `docs` 仓库的话，则存在以下两种方案：

   1. 如果在 Github Pages 上配置使用自定义域名的话，就能解决当前样式丢失的问题，即不需要设置 `config.base` 的值，让其保持默认值 `/` 即可；

   2. 如果不使用自定义域名的话，则需要设置 `config.base` 的值为小伙伴们当前仓库的名称，如 `docs`；如下所示：

      ```ts
      export default defineConfig({
        base: '/docs/',
      })
      ```

小伙伴们可以自行尝试一下，如果觉得不对的可以到这个 [部署到Github Pages之后，如果使用自定义域名的话样式会丢失 · Issue #3513 · vuejs/vitepress](https://github.com/vuejs/vitepress/issues/3513) 上提出自己的想法。

### 如何使用自定义字体

VitePress 使用 [Inter](https://rsms.me/inter/) 作为默认字体，并且将其包含在生成的输出中。该字体在生产环境中也会自动预加载。但是如果要使用不同的字体，这可能不是很好。

具体实现步骤如下所示：

1. 在 `.vitepress/theme` 目录下创建一个 `custom.css` 样式文件，文件内容如下所示：

   ```css
   @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&family=Ubuntu+Mono:wght@400;700&display=swap");
   
   :root {
     --monospace: "JetBrains Mono", "Roboto Mono", "Noto Sans SC", "Fira Code",
       "Ubuntu Mono";
     --vp-font-family-base: var(--monospace); /* normal text font */
     --vp-font-family-mono: var(--monospace); /* code font */
   }
   ```

   本人是使用的[谷歌在线字体](https://fonts.google.com/)，小伙伴若是喜欢其他的字体可以自行搜索->添加->导入，也可以通过 `@font-face` 引用本地字体文件的方式实现，具体细节请查阅 [扩展默认主题 | VitePress](https://vitepress.dev/zh/guide/extending-default-theme#using-different-fonts)。

2. 在 `.vitepress/theme/index.ts` 文件中导入该 `custom.css` 文件；

   > [!TIP]
   >
   > 为了避免在生成后的输出中包含 Inter 字体，请从 `vitepress/theme-without-fonts` 中导入主题；

   ```ts{4}
   // https://vitepress.dev/guide/custom-theme
   import { h } from "vue";
   import type { Theme } from "vitepress";
   import DefaultTheme from "vitepress/theme-without-fonts";
   import "./style.css";
   import "./custom.css"; // [!code ++]
   
   export default {
     extends: DefaultTheme,
     Layout: () => {
       return h(DefaultTheme.Layout, null, {
         // https://vitepress.dev/guide/extending-default-theme#layout-slots
       });
     },
     enhanceApp({ app, router, siteData }) {
       // ...
     },
   } satisfies Theme;
   
   ```

## 参考资料🎁

- 官方文档：[VitePress | 由 Vite 和 Vue 驱动的静态站点生成器](https://vitepress.dev/zh/) 👍
- [vitepress搭建并部署网站 | AlbertZhang的文档网站 (bugdesigner.cn)](https://docs.bugdesigner.cn/README.html)
- [VuePress 博客优化之开启 Algolia 全文搜索 · Issue #267 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/267)

