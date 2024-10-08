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

