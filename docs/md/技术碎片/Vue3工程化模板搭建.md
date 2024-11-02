---
outline: [2,3]
---

# Vue3 工程化模板搭建

## 创建项目

> [!note]
>
> 确保你安装了最新版本的 [Node.js](https://nodejs.org/)，并且你的当前工作目录正是打算创建项目的目录。

在 Vue3 官方文档 [快速上手 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application) 小节中，推荐使用 `pnpm create vue@latest` 创建项目，这一指令将会安装并执行 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示，如下所示：<br />![image-20241008215852152](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082158505.png)

在项目创建后，按照提示安装依赖并启动开发服务器，如下所示：<br />![image-20241008220026529](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082200981.png)

## 推荐插件安装

VSCode 推荐安装插件：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [ESLint Chinese Rules](https://marketplace.visualstudio.com/items?itemName=maggie.eslint-rules-zh-plugin)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Vue - Official - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Vue VSCode Snippets - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Error Lens - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Iconify IntelliSense - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
- [UnoCSS - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- [PostCSS Language Support - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

```json
{
    "recommendations": [
        "editorconfig.editorconfig",
        "dbaeumer.vscode-eslint",
        "maggie.eslint-rules-zh-plugin",
        "esbenp.prettier-vscode",
        "stylelint.vscode-stylelint",
        "Vue.volar",
        "sdras.vue-vscode-snippets",
        "usernamehw.errorlens",
        "antfu.iconify",
        "antfu.unocss",
        "csstools.postcss"
    ]
}
```

## 协作规范

### Editor Config

在项目根目录下创建 `.editorconfig` 配置文件，即可让项目下所有文件都统一代码风格！

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false
```

> [!tip]
>
> 部分编辑器可能需要安装对应的插件才可以支持该配置。
>
> 例如 VSCode 需要安装 [EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 扩展。

### ESLint

#### 介绍

[ESLint](https://github.com/eslint/eslint) 是一个查找 JavaScript / TypeScript 代码问题并提供修复建议的工具，换句话说就是可以约束的代码不会写出一堆 BUG ，**它是代码健壮性的重要保障**。

虽然大部分前端开发者都不愿意接受这些约束，但说实话，经过 ESLint 检查过的代码质量真的高了很多，如果不愿意总是做一个游兵散勇，建议努力让自己习惯被 ESLint 检查，大厂和大项目都是有 ESLint 检查的。

特别是写 TypeScript，配合 ESLint 的检查实在太爽了（字面意思，真的很舒服）。

通过脚手架创建的项目通常都会帮配置好 ESLint 规则，如果有一些项目是一开始没有，后面想增加 ESLint 检查，也可以手动配置具体规则。

#### [@antfu/eslint-config](https://github.com/antfu/eslint-config)

##### 介绍

`@antfu/eslint-config` 是一个用于配置 ESLint 的 npm 包，它是由 Anthony Fu（又称为 antfu）创建的。Anthony Fu 是一位活跃的开源贡献者，参与了多个知名项目，如 [vueuse](https://github.com/vueuse/vueuse)、[unocss](https://github.com/unocss/unocss) 和 [vite](https://github.com/vitejs/vite) 等。

`@antfu/eslint-config` 提供了一套预设的 ESLint 规则集，旨在帮助开发者快速设置 ESLint 配置，从而保持代码风格的一致性，提高代码质量。这些规则集通常是基于最佳实践和社区共识制定的，可以简化 ESLint 的初始配置过程。

核心特性：

- 自动格式化修复（旨在独立使用，无需 Prettier）。
- 合理的默认值，最佳实践，仅需一行配置。
- 设计用于 TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown 等，开箱即用。
- 固执己见，但<u>非常可定制</u>。
- ESLint <u>扁平化配置</u>，便于组合和扩展。
- 可选的 [React](https://github.com/antfu/eslint-config?tab=readme-ov-file#react)、[Svelte](https://github.com/antfu/eslint-config?tab=readme-ov-file#svelte)、[UnoCSS](https://github.com/antfu/eslint-config?tab=readme-ov-file#unocss)、[Astro](https://github.com/antfu/eslint-config?tab=readme-ov-file#astro)、[Solid](https://github.com/antfu/eslint-config?tab=readme-ov-file#solid) 支持。
- 可选的[格式化程序](https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters)支持，用于格式化 CSS、HTML、XML 等。
- 风格原则：最小阅读，稳定差异，保持一致。

##### 安装

首先使用 `pnpm dlx @antfu/eslint-config@latest` 命令进行安装，如下所示：<br />![image-20241008220527600](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082205049.png)

执行以上操作之后会帮咱们创建一个 `eslint.config.js` 和 `.vscode/settings.json` 文件，并且还会添加相关依赖。咱们需要使用 `pnpm install` 命令安装这些依赖，如下所示：<br />![image-20241008220617289](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082206497.png)

然后，在 package.json 文件中添加如下脚本：

```json {3-4}
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

执行 `pnpm lint` 命令可以查看当前项目中出现的 ESLint 问题，如下所示：<br />![image-20241008220748783](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082207225.png)

发现有这么多 ESLint 问题之后，咱们可以使用 `pnpm lint:fix` 命令来一键自动修复所有的  ESLint 问题。

至此，`@antfu/eslint-config` 就已经安装成功啦~就是这么简单！<u>零配置</u>。

##### VSCode 支持（保存时自动修复）

> [!tip]
>
> 在上一步安装过程中，存在自动添加如下配置到 `.vscode/settings.json` 文件的选项，如果已经勾选，可以忽略这一步。

> 参考自 [antfu/eslint-config: Anthony's ESLint config preset (github.com) - ide-support-auto-fix-on-save](https://github.com/antfu/eslint-config?tab=readme-ov-file#ide-support-auto-fix-on-save)

首先需要在 VSCode 中安装 [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 插件，然后将以下配置添加到 `.vscode/settings.json` 文件中：

```json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,
  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never",
  },
  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    {
      "rule": "style/*",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "format/*",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-indent",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-spacing",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-spaces",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-order",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-dangle",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*-newline",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*quotes",
      "severity": "off",
      "fixable": true
    },
    {
      "rule": "*semi",
      "severity": "off",
      "fixable": true
    }
  ],
  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ],
}
```

### Stylelint

#### 介绍

[Stylelint](https://www.stylelint.cn/) 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。

#### VSCode 支持（开启校验）

首先需要在 VSCode 中安装 [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) 插件，然后将以下配置添加到 `.vscode/settings.json` 文件中：

```json
{
    // Auto fix
    "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": "explicit",
    },
    // Enable stylelint for all supported languages
    "stylelint.validate": [
        "css",
        "scss",
        "vue",
        "html"
    ]
}
```

#### 安装

首先使用 `pnpm add -D sass postcss postcss-html postcss-scss stylelint stylelint-config-standard-scss stylelint-config-recess-order` 命令安装 Stylelint 相关依赖，如下所示：<br />![image-20241008223758589](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082237852.png)

然后在项目根目录下新增 `stylelint.config.js` 配置文件，内容如下所示：

```js
/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order',
    ],
    overrides: [
        {
            files: ['**/*.(vue|html)'],
            customSyntax: 'postcss-html',
        },
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
    rules: {
        // 允许 global 、export 、v-deep等伪类
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'],
            },
        ],
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['rpx'],
            },
        ],
        'comment-empty-line-before': 'never',
        'custom-property-empty-line-before': 'never',
        'no-empty-source': null,
        'comment-no-empty': null,
        'no-duplicate-selectors': null,
        'scss/comment-no-empty': null,
        'selector-class-pattern': null,
        'font-family-no-missing-generic-family-keyword': null,
    },
}
```

最后在 package.json 文件中添加如下脚本：

```json {3-4}
{
    "scripts": {
        "stylelint": "stylelint \"**/*.{css,scss,vue,html}\"",
        "stylelint:fix": "stylelint \"**/*.{css,scss,vue,html}\" --fix"
    }
}
```

执行 `pnpm stylelint` 命令可以查看当前项目中出现的 Stylelint 问题，如下所示：<br />![image-20241008223942334](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082239759.png)

发现有这么多 Stylelint 问题之后，咱们可以使用 `pnpm stylelint:fix` 命令来一键自动修复所有的 Stylelint 问题。

### husky

> 文档地址：[🐶 husky](https://typicode.github.io/husky/)

#### 介绍

Husky 能使你的提交变得更好 🐶 *汪!*

在提交或推送时，自动化 **检查提交信息**、**检查代码** 和 **运行测试**。

特性：

- 仅有 `2 kB`（📦 *gzip 压缩后*），没有任何依赖。
- 非常快（运行速度约 `~1ms`）
- 使用新 Git 特性（`core.hooksPath`）
- 支持：
  - macOS、Linux、Windows
  - Git GUI、Node 版本管理器、自定义钩子目录、嵌套项目、Monorepos
  - [所有 13 个客户端 Git 钩子](https://git-scm.com/docs/githooks)
- 可以与 lint-staged、commitlint 等工具无缝集成，提供更加完善的开发流程支持。

#### 安装

咱们希望在提交代码时<u>自动</u>执行 eslint 和 stylelint 对代码进行检查，那么咱们可以使用 git 的 <u>hook</u> 功能，为 git 命令创建咱们所需要的钩子，在这里咱们使用 husky 工具来创建、管理代码仓库中所有的 git hooks。

首先使用 `pnpm add --save-dev husky` 命令安装 husky，然后执行 `pnpm exec husky init` 命令启用 git hook。该命令主要做了如下两件事：

1. 在 `package.json` 中新增一个 prepare 脚本：`"prepare": "husky"`，使得团队中其他小伙伴在克隆该项目并安装依赖时会自动通过 husky 启用 git hook。
2. 在项目根目录下的 `.husky/` 文件夹下创建一个 `pre-commit` 脚本，用于在提交（commit）之前执行脚本中的内容。

### lint-staged

> [!tip]
>
> 文档地址：[GitHub - lint-staged/lint-staged: 🚫💩 — Run linters on git staged files](https://github.com/lint-staged/lint-staged)

#### 介绍

在提交代码前先进行代码检查（linting）会更有意义。这样做可以确保没有错误进入代码库，并且保持代码风格的一致性。但是，随着整个项目的代码量增多，如果在每一次提交代码时都对存储库内的<u>全量代码</u>进行检查，这样必然会性能吃紧，导致代码检查会很慢，而且检查结果可能并不重要。所以，如果希望只检查那些即将提交的文件，此时就需要用上 lint-staged 工具。

#### 安装

首先执行 `pnpm add -D lint-staged` 命令安装 lint-staged，然后在项目根目录下新增 `lint-staged.config.js` 配置文件，内容如下所示：

```js {2-3}
export default {
    '*.{js,jsx,ts,tsx,vue,json}': ['eslint --fix'],
    '*.{css,scss,vue,html}': ['stylelint --fix'],
}
```

然后在 package.json 文件中添加如下脚本：

```json {3}
{
    "scripts": {
        "lint-staged": "lint-staged"
    }
}
```

最后修改 `.husky/pre-commit` 文件中的原有内容，将其变更为执行 lint-staged 命令，如下所示：

```shell
pnpm run lint-staged
```

#### 测试

此时，在 `main.ts` 文件中定义不使用的变量，使其不符合 eslint 规范，然后通过 `git add .` 命令将工作区的代码全部保存到暂存区之后使用 `git commit` 命令进行提交，从终端中可以看到，确实是先执行 lint-staged，然后 eslint 输出了错误信息并且中断了 git commit 过程，这非常好，符合咱们的预期！如下所示：<br />![image-20241008224725378](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082247687.png)

### commitlint

> [!tip]
>
> 文档地址：[commitlint - Lint commit messages](https://commitlint.js.org/#/)

#### 介绍

commitlint 是一个用于验证 git 提交消息的工具，它可以帮助开发团队保持提交信息的一致性和规范性。通过 commitlint，你可以定义一套规则来检查提交信息是否符合预期的标准，这对于维护清晰的版本历史和自动化工作流非常有用。

特性：

1. **一致性**：确保所有提交信息都遵循相同的格式和约定，这有助于理解变更的历史记录。
2. **自动化**：可以集成到 CI/CD 流水线中，<u>自动检查每次提交的信息</u>。
3. **可配置**：允许你自定义规则来适应不同的项目需求。
4. **插件系统**：支持通过插件扩展功能，如使用 Angular 的提交消息格式。
5. **易用性**：提供 CLI 工具，方便开发者在本地进行验证。

#### 安装

首先使用 `pnpm add -D @commitlint/config-conventional @commitlint/cli` 命令安装 commitlint，然后在项目根目录下新增 `commitlint.config.js` 配置文件，内容如下所示：

```js
export default {
    // 继承默认的规范配置
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 提交主体前必须有一个空行
        'body-leading-blank': [2, 'always'],
        // 提交尾部前必须有一个空行
        'footer-leading-blank': [1, 'always'],
        // 提交标题最大长度为 108 个字符
        'header-max-length': [2, 'always', 108],
        // 提交主题不能为空
        'subject-empty': [2, 'never'],
        // 提交类型不能为空
        'type-empty': [2, 'never'],
        // 不对提交主题的大小写进行检查,关闭此规则
        'subject-case': [0],
        // 规定提交类型的枚举值
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能
                'fix', // 修复bug
                'docs', // 仅文档更改
                'style', // 仅样式更改（空格、格式化等）
                'refactor', // 代码重构（既不修复bug也不添加功能）
                'perf', // 性能优化
                'test', // 添加缺失的测试
                'build', // 影响构建系统或外部依赖的更改
                'ci', // 持续集成的更改
                'revert', // 撤销先前的提交
                'chore', // 其他不修改源文件的更新
            ],
        ],
    },
}
```

使用 <u>git bash 终端</u>执行 `echo "npx --no -- commitlint --edit \${1}" > .husky/commit-msg` 命令添加 commit-msg 钩子，它的作用是在咱们提交 commit 或者修改 commit message 时执行相关校验，确保咱们的项目拥有一个统一的符合规范的 commit message。文件中的内容如下所示：

```shell
npx --no -- commitlint --edit ${1}
```

#### 测试

故意填写不符合规范的提交信息，测试效果如下所示：<br />![image-20241008225047501](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082250751.png)

咱们接着使用一个符合规范的提交信息来看看效果，可以看到没有报错也没有被中断，符合咱们的预期，这意味着 commitlint 就已经配置成功啦！如下所示：<br />![image-20241008225259862](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082253082.png)

### commitizen

> [!tip]
>
> 文档地址：[commitizen/cz-cli: The commitizen command line utility. ](https://github.com/commitizen/cz-cli)
>
> [Commit message 和 Change log 编写指南 - 阮一峰的网络日志 (ruanyifeng.com)](https://ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
>
> [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

#### 介绍

commitizen（简称 cz 或 Cz）是一个工具，用于生成符合一定规范的 git 提交消息。它的主要目的是帮助开发团队保持提交信息的一致性和可预测性，从而使版本控制历史更加清晰、易于理解和维护。

特性：

1. **标准化**：鼓励团队成员按照约定的格式编写提交信息，便于自动化工具解析。
2. **一致性**：确保所有的提交信息都遵循相同的模式，有助于统一团队的开发习惯。
3. **易用性**：通过<u>交互式的命令行界面</u>简化提交信息的编写。
4. **可定制**：支持自定义提交信息的模板和格式，可以根据项目需求进行调整。
5. **自动化**：可以集成到 CI/CD 流程中，自动检查提交信息是否符合规范。

#### 安装

首先使用 `pnpm i -g commitizen` 命令<u>全局</u>安装 commitizen cli 工具。引入 commitizen 可以帮助咱们便捷式地创建符合 commitlint 规范的 commit message。<br />![image-20241008225516641](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082255844.png)

然后执行 `commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact` 命令，使其支持 Angular 的 commit message 格式。其中 cz-conventional-changelog 是 commitizen 的 conventional-changelog 适配器，使用该适配器，commitizen 将以 AngularJS 的 commit message 规范逐步引导咱们完成 commit message 的创建。

以后，凡是用到 `git commit` 命令，一律改为使用 `git cz`。这时，就会出现选项，用来生成符合格式的 commit message。如下所示：<br />![img](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402261623255.png)

#### 测试

使用 `git add .` 命令将所有的变更文件添加到暂存区，然后再执行 `git cz` 命令提交代码，如下所示：<br />![image-20241008225754392](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202410082257760.png)

可以看到终端中有了对应的步骤和信息提示，非常好！一切都在咱们的预料当中，满足了咱们的诉求。

## 清理工作

清理由脚手架生成的不必要的文件：

1. 删除 `assets` 目录下的所有静态资源及其引用；

2. 删除 `components` 目录下的所有公共组件以及引用；

3. 删除 `stores` 目录下的所有文件；

4. 删除 `views` 目录下的所有页面组件及其引用；

5. 新增 home 页面，如下所示：

   ```vue
   <template>
   	<h1>Home</h1>
   </template>
   ```

6. 修改路由配置文件，如下所示：

   ```typescript
   import { createRouter, createWebHistory } from 'vue-router'
   
   const router = createRouter({
       history: createWebHistory(import.meta.env.BASE_URL),
       routes: [
           {
               path: '/',
               name: 'Home',
               component: () => import('@/views/home/index.vue'),
           },
       ],
   })
   
   export default router
   ```

## 准备工作

### [CSS 预处理器](https://vitejs.cn/vite3-cn/guide/features.html#css)

Vite 同时提供了对 `.scss`, `.sass`, `.less`, `.styl` 和 `.stylus` 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：`pnpm add -D sass`。

如果使用的是单文件组件，可以通过 `<style lang="scss">`（或其他预处理器）自动开启。

> [!note]
>
> 如果控制台抛出警告信息："Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0."，则需要将以下配置添加到 `vite.config.ts` 文件中：
>
> ```typescript {20-26}
> import { fileURLToPath, URL } from 'node:url'
> 
> import { defineConfig } from 'vite'
> import vue from '@vitejs/plugin-vue'
> import vueJsx from '@vitejs/plugin-vue-jsx'
> import vueDevTools from 'vite-plugin-vue-devtools'
> 
> // https://vitejs.dev/config/
> export default defineConfig({
>     plugins: [
>         vue(),
>         vueJsx(),
>         vueDevTools(),
>     ],
>     resolve: {
>         alias: {
>             '@': fileURLToPath(new URL('./src', import.meta.url))
>         }
>     },
>     css: {
>         preprocessorOptions: {
>             scss: {
>                 api: 'modern-compiler',
>             },
>         },
>     },
> })
> ```

### [ElementPlus](https://element-plus.org/zh-CN/) 集成

#### 安装

推荐使用 `pnpm install element-plus` 命令安装 Element Plus。

#### [按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#按需导入)

首先，需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件：

```shell
pnpm add -D unplugin-vue-components unplugin-auto-import
```

然后使用插件的话需要修改 `vite.config.ts` 配置文件：

```typescript {1,6-8,12,20-46}
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        AutoImport({
            resolvers: [
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                ElementPlusResolver(),
            ],
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            // 自动导入 VueRouter 相关函数，如：useRouter 等
            // 自动导入 Pinia 相关函数，如：createPinia，defineStore，storeToRefs 等
            // 参考自： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
            imports: ['vue', 'vue-router', 'pinia'],
            // 是否在 vue 模板中自动导入
            vueTemplate: true,
            // 指定自动导入函数TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
            dts: resolve(pathSrc, 'types', 'auto-imports.d.ts'),
        }),
        Components({
            resolvers: [
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ],
            // 组件名称包含目录，防止同名组件冲突
            directoryAsNamespace: true,
            // 指定自定义组件位置(默认:src/components)
            dirs: ['src/components', 'src/**/components'],
            // 指定自动导入组件TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
            dts: resolve(pathSrc, 'types', 'components.d.ts'),
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
})
```

### [iconify](https://iconify.design/) 集成

> [!tip]
>
> 建议使用 VSCode 的用户安装 [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 扩展。

以下步骤参考自：[Icon 图标 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/component/icon.html#自动导入)

使用 [unplugin-icons](https://github.com/antfu/unplugin-icons) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 从 iconify 中自动导入任何图标集。您可以参考[此模板](https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58)。

#### 安装

使用 `pnpm i -D unplugin-icons @iconify/json` 命令安装 `unplugin-icons` 和 `iconify`。

#### 自动导入

修改 `vite.config.ts` 配置文件：

```typescript {7-8,26-27,43-47,56-59}
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        AutoImport({
            resolvers: [
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver(),
            ],
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            // 自动导入 VueRouter 相关函数，如：useRouter 等
            // 自动导入 Pinia 相关函数，如：createPinia，defineStore，storeToRefs 等
            // 参考自： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
            imports: ['vue', 'vue-router', 'pinia'],
            // 是否在 vue 模板中自动导入
            vueTemplate: true,
            // 指定自动导入函数TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
            dts: resolve(pathSrc, 'types', 'auto-imports.d.ts'),
        }),
        Components({
            resolvers: [
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
                // 自动注册图标组件
                IconsResolver({
                    // 只启用 icon-park 图标集，其他图标库 https://icon-sets.iconify.design/
                  	enabledCollections: ['icon-park-outline'],
                }),
            ],
            // 组件名称包含目录，防止同名组件冲突
            directoryAsNamespace: true,
            // 指定自定义组件位置(默认:src/components)
            dirs: ['src/components', 'src/**/components'],
            // 指定自动导入组件TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
            dts: resolve(pathSrc, 'types', 'components.d.ts'),
        }),
        Icons({
            // 自动安装图标库
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
})
```

#### 使用

```vue
<template>
    <div>
        <i-icon-park-outline-user />
        <el-icon :size="50" color="#1976D2">
          <i-icon-park-outline-edit-two />
        </el-icon>
    </div>
</template>
```

### [VueUse](https://vueuse.org/) 集成

VueUse 是一个基于 [组合式 API](https://vuejs.ac.cn/guide/extras/composition-api-faq.html) 的实用函数集合，如 `useStorage` 函数可以实现状态持久化存储（localStorage|SessionStorage）；`useFullscreen` 函数可以非常方便地实现全屏模式，等等。

#### 安装

使用 `pnpm i @vueuse/core` 安装 VueUse。

#### 自动导入

可以通过 `unplugin-auto-import` 插件实现自动导入 VueUse 相关函数，修改 `vite.config.ts` 配置文件：

```ts {13,15}
export default defineConfig({
  plugins: [
     AutoImport({
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver()
        ],
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        // 自动导入 VueRouter 相关函数，如：useRouter 等
        // 自动导入 Pinia 相关函数，如：createPinia，defineStore，storeToRefs 等
        // 自动导入 @vueuse/core 相关函数，如：useStorage、useTitle 等
        // 参考自： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        // 是否在 vue 模板中自动导入
        vueTemplate: true,
        // 指定自动导入函数TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
        dts: resolve(pathSrc, 'types', 'auto-imports.d.ts')
      }),
    // ...
  ]
})
```

#### 使用

```typescript {2}
export const useCounterStore = defineStore('counter', () => {
    const count = useStorage('count', 0)
    const increment = () => {
        count.value++
    }
    const decrement = () => {
        count.value--
    }

    return { count, increment, decrement }
})
```

### [TailwindCSS](https://tailwindcss.com/) 集成

> [!tip]
>
> 建议使用 VSCode 的用户安装 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 扩展。

#### 安装

1. 安装 `tailwindcss` 及其对等依赖，然后生成 `tailwind.config.js` 和 `postcss.config.js` 文件。

   ```sh
   pnpm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. 配置模板路径：在 `tailwind.config.js` 文件中添加所有模板文件的路径。

   ```js {3}
   /** @type {import('tailwindcss').Config} */
   export default {
       content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
       theme: {
           extend: {}
       },
       plugins: []
   }
   ```

3. 添加 Tailwind 指令：将每个 Tailwind 层的 `@tailwind` 指令添加到 `/src/styles/index.scss` 文件中。

   ```scss
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. 在 `main.ts` 文件中引入 `/src/styles/index.scss` 文件。

   ```ts {5}
   import { createPinia } from 'pinia'
   import { createApp } from 'vue'
   import App from './App.vue'
   import setupPlugins from './plugins'
   import '@/styles/index.scss'
   
   const app = createApp(App)
   setupPlugins(app)
   app.use(createPinia())
   
   app.mount('#app')
   ```

#### 使用

::: code-group

```vue [src/layout/default/index.vue]
<template>
    <div class="w-screen h-screen grid grid-rows-[84px_1fr] grid-cols-[200px_1fr]">
        <div class="bg-[lightblue]">
            Header
        </div>
        <div class="bg-[lightgreen] row-start-1 row-span-2">
            Left
        </div>
        <div class="bg-[#f5f5f5]">
            <RouterView />
        </div>
    </div>
</template>
```

```vue [src/views/home/index.vue]
<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter'

    function handleClick() {
        ElMessage({
            message: 'Congrats, this is a success message.',
            type: 'success',
        })
    }

    const date = ref('')

    const { count } = storeToRefs(useCounterStore())
    function handleChange(value: number | undefined) {
        count.value = value
    }
</script>

<template>
<div class="w-full h-full p-[10px]">
    <h1 class="text-5xl font-bold text-orange-600 mt-[10px]">
        Home
    </h1>
    <div class="mt-[10px]">
        <el-button>
            Default
    </el-button>
        <el-button type="primary">
            Primary
    </el-button>
        <el-button type="success" @click="handleClick">
            Success
    </el-button>
        <el-button type="info">
            Info
    </el-button>
        <el-button type="warning">
            Warning
    </el-button>
        <el-button type="danger">
            Danger
    </el-button>
    </div>
    <el-date-picker
                    v-model="date"
                    class="mt-[10px]"
                    type="date"
                    placeholder="选择日期"
                    />
    <div class="mt-[10px]">
        <i-ep-user />
        <el-icon :size="50" color="#1976D2">
            <i-ep-edit />
    </el-icon>
    </div>
    <el-input-number v-model="count" class="mt-[10px]" :min="1" :max="10" @change="handleChange" />
    </div>
</template>
```

:::

### Svg 图标集成

ElementPlus 图标库有时满足不了实际开发需要，因此需要通过集成 [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) 插件来使用第三方（如 [Material Symbols & Icons](https://fonts.google.com/icons)、[iconfont](https://www.iconfont.cn/)、[ByteDance IconPark](https://iconpark.oceanengine.com/official)）图标库解决。

#### 安装

1. 使用 `pnpm install vite-plugin-svg-icons -D` 命令安装插件

2. 在 `main.ts` 文件中引入注册脚本：`import 'virtual:svg-icons-register'`

3. 创建 `src/assets/icons` 文件夹用于存放从第三方图标库上下载的 svg 图标

4. 修改 `vite.config.ts` 配置文件：

   ```ts
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   
   export default defineConfig({
       plugins: [
           // ...
           createSvgIconsPlugin({
               // 指定需要缓存的图标文件夹
               iconDirs: [resolve(pathSrc, 'assets/icons')],
               // 指定symbolId格式
               symbolId: 'icon-[dir]-[name]'
           })
           // ...
       ]
   })
   ```

5. 组件封装

   ::: code-group

   ```vue [src/components/SvgIcon/index.vue]
   <script lang="ts" setup>
       const props = withDefaults(
           defineProps<{
               prefix?: string
               iconClass: string
               color?: string
           }>(),
           {
               prefix: 'icon',
           },
       )
   
       const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)
   </script>
   
   <template>
   <svg aria-hidden="true" class="svg-icon">
       <use :fill="color" :xlink:href="symbolId" />
       </svg>
   </template>
   
   <style lang="scss" scoped>
       .svg-icon {
           display: inline-block;
           width: 1em;
           height: 1em;
           overflow: hidden;
           vertical-align: -0.15em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
           outline: none;
           fill: currentcolor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
       }
   </style>
   ```

   :::

#### 使用

```vue {3-4,10-12}
<script setup lang="ts">
    // ...
    const icons = import.meta.glob('../../assets/icons/*.svg', { eager: true })
    const iconNames = Object.keys(icons).map(key => key.replace(/.*\/([^/]+)\.svg$/, '$1'))
</script>

<template>
	<div class="w-full h-full p-[10px]">
        // ...
        <div class="mt-[10px] text-6xl">
            <svg-icon v-for="icon in iconNames" :key="icon" :icon-class="icon" />
        </div>
    </div>
</template>
```

### [ECharts](https://github.com/apache/echarts) 集成

#### 介绍

ECharts 是一款由百度公司开发的开源可视化图表库，它提供了丰富的图表类型和强大的数据可视化能力，适用于 Web 应用程序中的数据展示和分析。ECharts 的设计目标是为开发者提供一个简单、灵活且功能丰富的工具，帮助他们快速创建美观且交互性强的图表。

1. **丰富的图表类型**：ECharts 支持多种图表类型，包括折线图、柱状图、饼图、散点图、地图、热力图等。
2. **高度可定制**：用户可以自由定制图表的各个方面，从颜色、样式到动画效果等。
3. **良好的交互性**：支持鼠标悬停、点击、缩放等多种交互操作，使图表更加生动和易于理解。
4. **高性能**：即使在处理大量数据时也能保持良好的性能表现。
5. **跨平台**：支持多种浏览器环境，包括移动设备浏览器。
6. **国际化**：支持多种语言，可以方便地切换不同的语言环境。
7. **插件扩展**：通过插件机制，可以扩展图表功能，实现更多自定义效果。
8. **API 文档完善**：提供了详细的 API 文档和示例代码，方便开发者快速上手。

#### 安装

使用 `pnpm add echarts` 命令安装 ECharts。

#### 使用

##### 封装组件

::: code-group

```ts [src/composables/echart.ts]
import type { Ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import {
  markRaw,
  onBeforeMount,
  onMounted,
  shallowRef,
  unref,
  watch,
} from 'vue'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import type { ComposeOption } from 'echarts/core'
import * as echarts from 'echarts/core'
// 系列类型的定义后缀都为 SeriesOption
import type { BarSeriesOption, PieSeriesOption } from 'echarts/charts'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from 'echarts/charts'
// 组件类型的定义后缀都为 ComponentOption
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption,
} from 'echarts/components'
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | VisualMapComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  VisualMapComponent,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

export function useChart(
  elRef: Ref<HTMLElement | undefined> | HTMLElement,
  option: Ref<ECOption> | ECOption,
) {
  const chart = shallowRef<echarts.ECharts>()

  const render = (option: Ref<ECOption> | ECOption) => {
    if (!chart.value)
      return
    try {
      chart.value.clear()
      chart.value.setOption(unref(option), { notMerge: true })
    }
    catch (error) {
      console.error('渲染图表时发生错误:', error)
    }
  }

  const init = () => {
    if (chart.value)
      return
    const container = unref(elRef)
    if (!container) {
      console.error('无法找到容器元素')
      return
    }
    try {
      chart.value
        = echarts.getInstanceByDom(container) || markRaw(echarts.init(container))
      render(option)
    }
    catch (error) {
      console.error('初始化图表时发生错误:', error)
    }
  }

  const resize = () => {
    if (chart.value) {
      chart.value.resize({ animation: { duration: 300 } })
    }
  }

  const debounceResize = useDebounceFn(resize, 300, { maxWait: 800 })

  onMounted(() => {
    init()
    window.addEventListener('resize', debounceResize)
  })

  onBeforeMount(() => {
    chart.value?.dispose()
    window.removeEventListener('resize', debounceResize)
  })

  watch(
    () => option,
    (newOption) => {
      render(newOption)
    },
    { deep: true },
  )
}
```

```vue [src/components/Chart/index.vue]
<script lang="ts" setup>
import type { ECOption } from '@/composables/echarts'
import { useChart } from '@/composables/echarts'

const props = withDefaults(
  defineProps<{
    options: ECOption
  }>(),
  {},
)
const { options } = toRefs(props)
const container = shallowRef<HTMLElement>()
useChart(container, options)
</script>

<template>
  <div ref="container" class="chat" />
</template>

<style scoped>
.chat {
  width: 100%;
  height: 100%;
}
</style>
```

:::

##### 使用

```vue
<script setup lang="ts">
import Chart from '@/components/Chart/index.vue'
import { ECOption } from '@/hooks/echarts';
import { ref } from 'vue';

const options = ref<ECOption>({
  "title": {
    "text": "电影当日综合票房排行",
    "subtext": "数据来自猫眼电影（非实时）",
    "textStyle": {
      "fontSize": 24,
      "color": "hsl(0deg, 100%, 100%)"
    },
    "subtextStyle": {
      "fontSize": 14,
      "color": "hsl(0deg, 20%, 75%)"
    }
  },
  "grid": {
    "left": "3%",
    "right": "4%",
    "bottom": "3%",
    "top": 80,
    "containLabel": true
  },
  "xAxis": {
    "type": "value",
    "splitLine": {
      "lineStyle": {
        "type": "dashed",
        "color": "#333"
      }
    },
    "axisLabel": {
      "fontWeight": "bold",
      "color": "#eee",
      "fontSize": 14,
      "fontFamily": "Raleway",
      "margin": 24
    }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "你好，李焕英",
      "唐人街探案3",
      "刺杀小说家",
      "人潮汹涌",
      "熊出没·狂野大陆",
      "新神榜：哪吒重生",
      "侍神令"
    ],
    "inverse": true,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "fontWeight": "bold",
      "color": "hsl(0deg, 100%, 98%)",
      "fontSize": 14,
      "margin": 24
    }
  },
  "series": [
    {
      "name": "综合票房",
      "type": "bar",
      "data": [
        3570.68,
        1228.29,
        690.94,
        644.34,
        409.9,
        368.5,
        98.75
      ],
      "barMaxWidth": 14,
      "emphasis": {
        "focus": "self",
        "label": {
          "show": true,
          "position": "right",
          "color": "hsl(0deg, 100%, 60%)",
          "fontSize": 14,
          "fontWeight": "bold"
        },
        "itemStyle": {
          "color": {
            "type": "linear",
            "x": 0,
            "y": 0,
            "x2": 1,
            "y2": 1,
            "colorStops": [
              {
                "offset": 0,
                "color": "hsl(0deg, 100%, 60%)"
              },
              {
                "offset": 1,
                "color": "hsl(0deg, 80%, 60%)"
              }
            ]
          },
          "shadowBlur": 24
        }
      },
      "itemStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 1,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "hsl(0deg, 80%, 50%)"
            },
            {
              "offset": 1,
              "color": "hsl(0deg, 100%, 60%)"
            }
          ]
        },
        "borderRadius": [
          0,
          4,
          4,
          0
        ],
        "shadowBlur": 8,
        "shadowColor": "hsl(0deg, 100%, 50%, 0.3)"
      }
    }
  ],
  "visualMap": [
    {
      "show": false,
      "min": 0,
      "max": 3600,
      "dimension": 0,
      "inRange": {
        "opacity": [
          0.3,
          1
        ]
      }
    }
  ]
})

const options2 = ref<ECOption>({
  title: {
    text: "电影当日综合票房占比",
    subtext: "数据来自猫眼电影（非实时）",
    textStyle: {
      fontSize: 24,
      color: "hsl(0deg, 100%, 100%)",
    },
    subtextStyle: {
      fontSize: 14,
      color: "hsl(0deg, 20%, 75%)",
    },
  },
  tooltip: {
    trigger: "item",
    padding: [14, 24],
    borderWidth: 0,
    extraCssText: "box-shadow: 0 0 24px hsl(0, 100%, 50%, 0.2);",
    textStyle: {
      fontWeight: "bold",
      color: "hsl(0deg, 0%, 40%)",
    },
  },
  color: [
    "hsl(0deg, 100%, 70%)",
    "hsl(0deg, 90%, 60%)",
    "hsl(0deg, 80%, 50%)",
    "hsl(0deg, 70%, 45%)",
    "hsl(0deg, 60%, 40%)",
    "hsl(0deg, 50%, 35%)",
    "hsl(0deg, 40%, 30%)",
  ],
  series: [
    {
      type: "pie",
      radius: ["50%", "70%"],
      startAngle: 160,
      top: 60,
      label: {
        show: true,
        position: "outer",
        alignTo: "labelLine",
        edgeDistance: "3%",
        distanceToLabelLine: 20,
        color: "hsl(0deg, 100%, 98%)",
        fontSize: 14,
        fontWeight: "bold",
        formatter: "{b} {d|{d}%}",
        rich: {
          d: {
            backgroundColor: "hsl(0deg, 100%, 70%)",
            borderRadius: 4,
            padding: [4, 8],
            color: "white",
            fontWeight: "bold",
          },
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      labelLine: {
        smooth: true,
        lineStyle: {
          type: "dashed",
        },
      },
      data: [
        {
          "name": "你好，李焕英",
          "value": 3570.68
        },
        {
          "name": "唐人街探案3",
          "value": 1228.29
        },
        {
          "name": "刺杀小说家",
          "value": 690.94
        },
        {
          "name": "人潮汹涌",
          "value": 644.34
        },
        {
          "name": "熊出没·狂野大陆",
          "value": 409.9
        },
        {
          "name": "新神榜：哪吒重生",
          "value": 368.5
        },
        {
          "name": "侍神令",
          "value": 98.75
        }
      ],
    },
  ],
  "backgroundColor": "transparent",
})
</script>

<template>
  <div class="wrapper">
    <Chart :options="options" class="chart" />
    <Chart :options="options2" class="chart" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: hsl(210deg, 20%, 10%);
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-items: center;
}

.wrapper .chart {
  width: 80%;
  height: 400px;
}
</style>
```

### [VueI18n](https://github.com/intlify/vue-i18n) 集成

#### 介绍

`vue-i18n` 是一个用于 Vue.js 的国际化插件，它提供了简单而强大的方法来管理多语言应用。通过 `vue-i18n`，你可以轻松地切换语言、翻译文本、格式化日期和数字等。

1. **多语言支持**：支持多种语言，可以在应用中动态切换语言。
2. **组件化**：提供 `i18n` 组件，可以在模板中直接使用。
3. **插值**：支持变量插值，可以在翻译字符串中插入变量。
4. **复数形式**：支持复数形式的翻译。
5. **日期和数字格式化**：提供内置的方法来格式化日期和数字。
6. **自定义过滤器**：可以自定义过滤器来处理特定的翻译需求。
7. **懒加载**：支持按需加载语言包，提高应用性能。
8. **Vue 3 支持**：兼容 Vue 3。

#### 安装

使用 `pnpm add vue-i18n@10` 命令安装 VueI18n。

#### 使用

##### [ElementPlus 国际化](https://element-plus.org/zh-CN/guide/i18n.html)

咱们可以通过语言标识读取 ElementPlus 对应的语言包并返回，然后利用 ElementPlus 提供的 [ConfigProvider](https://element-plus.org/en-US/component/config-provider.html) 组件进行全局配置国际化的设置。

::: code-group

```ts [src/stores/modules/app.ts]
import { LanguageEnum } from '@/enums/LanguageEnum'
import defaultSettings from '@/settings'
import { store } from '@/stores'
import enUS from 'element-plus/es/locale/lang/en'
import zhCN from 'element-plus/es/locale/lang/zh-cn'

export const useAppStore = defineStore('app', () => {
  /**
   * 语言
   */
  const language = useStorage('language', defaultSettings.language)

  /**
   * 根据语言标识读取ElementPlus对应的语言包
   */
  const locale = computed(() => {
    return language.value === LanguageEnum.ZH_CN ? zhCN : enUS
  })

  /**
   * 切换语言
   *
   * @param lang 语言
   */
  const changeLanguage = (lang: string) => {
    language.value = lang
  }

  return { language, locale, changeLanguage }
})

/**
 * 用于在组件外使用 store
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function useAppStoreHook() {
  return useAppStore(store)
}
```

```vue [src/App.vue]
<script lang="ts" setup>
import { useAppStore } from '@/stores'

const { locale } = storeToRefs(useAppStore())
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
```

```ts [src/types/global.d.ts]
declare global {
  /**
   * 系统设置
   */
  interface AppSettings {
    /**
     * 语言(zh-CN | en-US)
     */
    language: string
  }
}

export {}
```

```ts [src/settings.ts]
import { LanguageEnum } from '@/enums/LanguageEnum'

const defaultSettings: AppSettings = {
  language: LanguageEnum.ZH_CN,
}

export default defaultSettings
```

```ts [src/enums/LanguageEnum.ts]
/**
 * 语言枚举
 */
export enum LanguageEnum {
  /**
   * 中文
   */
  ZH_CN = 'zh-CN',

  /**
   * 英文
   */
  EN_US = 'en-US',
}
```

:::

##### 自定义语言包

创建 `src/lang/package` 语言包目录，存放自定义的语言文件。

::: code-group

```json [zh-cn.json]
{
  "langSelect": {
    "message": {
      "success": "切换语言成功！"
    }
  }
}
```

```json [en-us.json]
{
  "langSelect": {
    "message": {
      "success": "Switch Language Successful!"
    }
  }
}
```

:::

##### 创建 i18n 实例

```ts
import type { App } from 'vue'
import { LanguageEnum } from '@/enums/LanguageEnum'
import { useAppStoreHook } from '@/stores'
import { createI18n } from 'vue-i18n'
// 本地语言包
import enUS from './package/en-us.json'
import zhCN from './package/zh-cn.json'

export type MessageSchema = typeof zhCN
const appStore = useAppStoreHook()

const i18n = createI18n<
  [MessageSchema],
  LanguageEnum.ZH_CN | LanguageEnum.EN_US
>({
  legacy: false,
  locale: appStore.language,
  fallbackLocale: LanguageEnum.ZH_CN,
  messages: {
    [LanguageEnum.ZH_CN]: zhCN,
    [LanguageEnum.EN_US]: enUS,
  },
  globalInjection: true,
})

/**
 * 注册i18n插件
 * @param app Vue实例
 */
export function setupI18n(app: App) {
  app.use(i18n)
}
```

##### 封装切换语言组件

::: code-group

```vue [src/components/LangSelect/index.vue]
<script lang="ts" setup>
import { LanguageEnum } from '@/enums/LanguageEnum'
import { useAppStore } from '@/stores'
import { useI18n } from 'vue-i18n'

const props = withDefaults(
  defineProps<{
    iconSize?: number | string
  }>(),
  { iconSize: 20 },
)

const langOptions = [
  { label: '中文', value: LanguageEnum.ZH_CN },
  { label: 'English', value: LanguageEnum.EN_US },
]
const { locale, t } = useI18n()
const appStore = useAppStore()

function changeLanguage(lang: string) {
  locale.value = lang
  appStore.changeLanguage(lang)
  ElMessage.success(t('lang.switch.success'))
}
</script>

<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <el-icon :size="props.iconSize">
      <i-icon-park-outline-translate />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langOptions"
          :key="item.value"
          :command="item.value"
          :disabled="item.value === locale"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
```

:::

##### 效果预览

![recording](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202411022150342.gif)
