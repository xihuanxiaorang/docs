# 搭建 Vue3 企业级项目模板

## 创建项目

> [!note]
>
> 确保你安装了最新版本的 [Node.js](https://nodejs.org/)，并且你的当前工作目录正是打算创建项目的目录。

在 Vue3 官方文档 [快速上手 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application) 小节中，推荐使用 `pnpm create vue@latest` 创建项目，这一指令将会安装并执行 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示，如下所示：<br />![image-20240225122950027](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251230267.png)

在项目被创建后，通过以下步骤安装依赖并启动开发服务器，如下所示：<br />![image-20240225123100373](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251231885.png)

## 推荐插件安装

VSCode 推荐安装插件：<br />![image-20240225141305567](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251413183.png)

- [Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [ESLint Chinese Rules](https://marketplace.visualstudio.com/items?itemName=maggie.eslint-rules-zh-plugin)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Vue VSCode Snippets - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Error Lens - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Auto Close Tag - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

## 协作规范

### Editor Config

在项目根目录下创建 `.editorconfig` 配置文件，即可让项目下所有文件都统一代码风格！需配合 [EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 插件一起使用。

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

### Eslint

[ESLint](https://github.com/eslint/eslint) 是一个查找 JavaScript / TypeScript 代码问题并提供修复建议的工具，换句话说就是可以约束的代码不会写出一堆 BUG ，**它是代码健壮性的重要保障**。

虽然大部分前端开发者都不愿意接受这些约束，但说实话，经过 ESLint 检查过的代码质量真的高了很多，如果不愿意总是做一个游兵散勇，建议努力让自己习惯被 ESLint 检查，大厂和大项目都是有 ESLint 检查的。

特别是写 TypeScript，配合 ESLint 的检查实在太爽了（字面意思，真的很舒服）。

通过脚手架创建的项目通常都会帮配置好 ESLint 规则，如果有一些项目是一开始没有，后面想增加 ESLint 检查，也可以手动配置具体规则。

1. 安装：使用 `pnpm i -D eslint` 安装 Eslint；

2. 初始化：使用  `npx eslint --init` 或者 `pnpm create @eslint/config` 命令进行初始化，参考自 [Getting Started with ESLint - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/getting-started)，如下所示：<br />![image-20240225130111064](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251301371.png)

   > [!tip]
   >
   > 执行该初始化命令除了会添加 `@typescript-eslint/eslint-plugin`、`@typescript-eslint/parser` 和 `eslint-plugin-vue` 三个开发依赖之外，还会在项目根目录下创建一个 `.eslintrc.cjs` 配置文件。

3. 根据 Vue3 官方文档中 [代码规范 | 工具链 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/scaling-up/tooling.html#linting) 的描述，如下所示：<br />![image-20231220164312380](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202312210013100.png)Vue 团队维护着 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 项目，它是一个 [ESLint](https://eslint.org/) 插件，会提供 SFC 相关规则的定义。咱们在上一步初始化完毕后就已自动安装 `eslint-plugin-vue` 插件，紧接着咱们只需遵照 `eslint-plugin-vue` 的[指引](https://eslint.vuejs.org/user-guide/#usage)进行配置，选择最为严格的 `"plugin:vue/vue3-recommended"` 规则。

   ```js
   module.exports = {
     // ...
     
     extends: [
       "eslint:recommended", // [!code --]
       'plugin:vue/vue3-recommended', // [!code ++]
       'plugin:@typescript-eslint/recommended',
       'plugin:vue/vue3-essential', // [!code --]
     ],
     
     // ...
   }
   ```

4. 对于一些不符合规范的简单的错误，如果一个个进行手动检查修复的话就太麻烦了！此时咱们可以在 `package.json` 文件的 `scripts` 选项中添加 `"lint": "eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix"` 脚本，然后执行 `pnpm run lint` 命令完成错误检查并自动修复，对于一些无法自动修复的错误则会在终端中进行输出，如下所示：<br />![image-20240225130755217](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251307216.png)

   > [!tip]
   >
   > 查阅资料，参考自 [Troubleshooting & FAQs | typescript-eslint](https://typescript-eslint.io/linting/troubleshooting/#i-am-running-into-errors-when-parsing-typescript-in-my-vue-files) & [User Guide | eslint-plugin-vue](https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser)，如下所示：<br />![image-20231221211337316](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202312212113357.png)
   >
   > 因此想解决以上错误就需要使用 `pnpm i -D vue-eslint-parser` 命令添加 `vue-eslint-parser` 插件，然后对 `.eslintrc.cjs` 文件进行如下所示配置：
   >
   > ```js
   > module.exports = {
   >  // ...
   > 
   >  parser: '@typescript-eslint/parser', // [!code --]
   >  parser: 'vue-eslint-parser', // [!code ++]
   >  parserOptions: {
   >     ecmaVersion: 'latest',
   >     parser: '@typescript-eslint/parser', // [!code ++]
   >     sourceType: 'module',
   >  },
   > 
   >  // ...
   > }
   > ```
   >
   > 配置完成之后，再次执行 `pnpm run lint` 命令可以发现错误已经消失不见啦！

如此这样就可以在项目中生效了（如果 VSCode 未能立即生效，重启编辑器即可），一旦代码有问题， ESLint 就会帮检查出来并反馈具体的报错原因，久而久之的代码就会越写越规范。

更多的选项可以在 ESLint 官网的 [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/) 查阅。

如果有一些文件需要排除检查，可以再创建一个 `.eslintignore` 文件在项目根目录下，里面添加要排除的文件或者文件夹名称。

更多的排除规则可以在 ESLint 官网的 [The .eslintignore File](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file) 一文查阅。

### Prettier

[Prettier](https://github.com/prettier/prettier) 是目前最流行的代码格式化工具，可以约束的代码风格不会乱七八糟，目前所知道的知名项目（如 Vue 、 Vite 、 React 等）和大厂团队（谷歌、微软、阿里、腾讯等）都在使用 Prettier 格式化代码。

通过脚手架创建的项目很多都内置了 Prettier 功能集成（参考了主流的格式化规范，比如 2 个空格的缩进、无需写分号结尾、数组 / 对象每一项都带有尾逗号等等）。

如果需要手动增加功能支持，请在项目根目录下创建一个名为 `.prettierrc.cjs` 的文件，写入以下内容：

```js
// 参考文档：https://www.prettier.cn/docs/options.html
module.exports = {
  // 一行代码的最大字符数，默认是80
  printWidth: 80,
  // tab宽度为2空格
  tabWidth: 2,
  // 是否使用tab来缩进
  useTabs: false,
  // 结尾是否添加分号
  semi: false,
  // 是否使用单引号
  singleQuote: true,
  // 对象属性的引号使用，可选值"<as-needed|consistent|preserve>"
  // as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  quoteProps: 'as-needed',
  // 多行时尽可能打印尾随逗号，可选值"<none|es5|all>"
  trailingComma: 'es5',
  // 字面量对象括号中的空格，如 { foo: bar }
  bracketSpacing: true,
  // 箭头函数单个参数的情况是否省略括号，可选值"<always|avoid>"，默认always为总是带括号，如 (x) => x
  arrowParens: 'always',
  // 行尾换行符，可选值"<lf|crlf|cr|auto>"
  endOfLine: 'lf',
}
```

这里只需要写入与默认配置不同的选项即可，如果和默认配置一致，可以省略，完整的配置选项以及默认值可以在 Prettier 官网的 [Options Docs](https://prettier.io/docs/en/options.html) 查看。

配合 VSCode 的 [VsCode Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 扩展，可以在编辑器里使用该规则格式化文件（此时无需在项目下安装 Prettier 依赖）。

如果开启了 ESLint ，配合 ESLint 的代码提示，可以更方便的体验格式化排版，详见 [ESLint](#Eslint) 一节的说明。为了避免 Eslint 与 Prettier 的规则冲突，除了需要安装 Prettier 本身之外，还需要安装另外两个插件，命令：`pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier`，内容如下所示：<br />![image-20240225135246833](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251352973.png)

参考自：[Conflict with Prettier | User Guide | eslint-plugin-vue (vuejs.org)](https://eslint.vuejs.org/user-guide/#conflict-with-prettier) 和 [prettier/eslint-plugin-prettier: ESLint plugin for Prettier formatting (github.com)](https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-legacy-eslintrc)，还需要在 `.eslintrc.cjs` 的 `extends` 选项中添加 `"plugin:prettier/recommended",` 规则，内容如下所示：

```js
module.exports = {
  // ...
  
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // [!code ++]
  ],
  
  // ...
}
```

此时打开 App.vue 组件，惊奇地发现居然报错，也间接说明咱们配置的 Prettier 规则已经生效，如下所示：<br />![image-20240225141542620](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251415826.png)

对于一些不符合规范的文件，如果一个个进行手动检查并格式化的话就太麻烦了！此时咱们可以在 `package.json` 文件的 `scripts` 选项中添加 `"format": "prettier --write ."` 脚本，然后执行 `pnpm run format` 命令自动完成格式化，如下所示：<br />![image-20240225150215932](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251502897.png)

如果有一些文件需要排除，可以再创建一个 `.prettierignore` 文件在项目根目录下，里面添加要排除的文件或者文件夹名称。

### husky

> [!tip]
>
> 文档地址：[🐶 husky](https://typicode.github.io/husky/)

如果仅有 eslint 和 prettier，那么咱们需要在代码提交之前手动执行 prettier 和 eslint 对代码进行格式化以及代码质量和格式检查，但是咱们希望在提交代码时自动执行 eslint 对代码进行检查，那么咱们可以使用 git 的 hook 功能，为 git 命令创建咱们所需要的钩子，在这里咱们使用 husky 工具来创建、管理代码仓库中的所有 git hooks。

通过 husky 工具来为咱们创建所需要的 git hook，首先需要执行 `pnpm add -D husky` 命令安装 husky，然后执行 `pnpm exec husky init` 命令启用 git hook。该命令主要做了如下两件事：

1. 在 `package.json` 中新增一个 prepare 脚本：`"prepare": "husky"`，使得团队中其他小伙伴在克隆该项目并安装依赖时会自动通过 husky 启用 git hook。

2. 在 `.husky/` 文件夹下创建一个 `pre-commit` 脚本，用于在提交（commit）之前执行脚本中的内容。咱们需要修改该脚本中默认生成的内容，使其支持在提交之前执行咱们的 eslint 工具对代码进行质量和格式检查，内容如下所示：

   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   
   pnpm run lint
   ```

此时，在 `main.ts` 文件中定义不使用的变量，使其不符合 eslint 规范，然后通过 `git add .` 命令将工作区的代码全部保存到暂存区之后使用 `git commit` 命令进行提交，从终端中可以看到，确实是先执行 `package.json` 中的 lint 脚本，然后 eslint 输出了错误信息并且中断了 git commit 过程，这非常好，符合咱们的预期！如下所示：<br />![image-20240225172825702](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251731913.png)

### lint-staged

> [!tip]
>
> 文档地址：[GitHub - lint-staged/lint-staged: 🚫💩 — Run linters on git staged files](https://github.com/lint-staged/lint-staged)

随着代码存储库的代码量增多，如果在每一次提交代码时，咱们都对存储库内的全量代码执行 prettier 和 eslint 命令，则必然会性能吃紧，所以，咱们希望提交代码时只对当前发生了代码变更的文件执行 prettier 和 eslint 命令，同时略过咱们所忽略的文件，那么咱们就需要用上 lint-staged 工具。

首先执行 `pnpm add -D lint-staged` 命令安装 lint-staged，安装完成之后, 然后配置 `package.json` 文件，如下所示：

```json
{
  // ...
  
  "lint-staged": {  // [!code ++]
    "*.{js,jsx,vue,ts,tsx}": [  // [!code ++]
      "pnpm run lint",  // [!code ++]
    ]  // [!code ++]
  },  // [!code ++]
  
  // ...
}
```

此外，咱们还需要手动更改一下 husky 为咱们创建的 pre-commit 这个 git hook，将其变更为执行 lint-staged 命令，如下所示：

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

再次提交代码，效果如下所示：<br />![image-20240225180325473](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402251803339.png)

### commitlint

> [!tip]
>
> 文档地址：[commitlint - Lint commit messages](https://commitlint.js.org/#/)

commitlint 结合 husky 可以在 git commit 时校验 commit 信息是否符合规范。

1. 安装：使用 `pnpm add -D @commitlint/config-conventional @commitlint/cli` 命令安装 commitlint；

2. 配置：在项目根目录下创建 `.commitlintrc.json` 文件，内容如下所示：

   ```json
   {
     "extends": ["@commitlint/config-conventional"]
   }
   ```

3. 添加 git 钩子：执行 `echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg` 命令；它的作用是在咱们提交 commit 或者修改 commit message 时执行相关校验，确保咱们的项目拥有一个统一的符合规范的 commit message。

   > [!note]
   >
   > 对于 Windows 用户而言，推荐在 Git Bash 终端中执行该命令，在 PowerShell 中执行该命令会出现 `$1` 缺失的情况！ 

故意填写不符合规范的提交信息，测试效果如下所示：<br />![image-20240225224737116](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402252247832.png)

咱们接着使用一个符合规范的提交信息来看看效果，可以看到没有报错并且没有被中断，满足咱们的预期，这意味着 commitlint 已经配置成功！如下所示：<br />![image-20240225225149571](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402252251181.png)

### commitizen

> [!tip]
>
> 官方文档地址：[commitizen/cz-cli: The commitizen command line utility. #BlackLivesMatter (github.com)](https://github.com/commitizen/cz-cli)
>
> 参考文档地址：
>
> - [Commit message 和 Change log 编写指南 - 阮一峰的网络日志 (ruanyifeng.com)](https://ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
> - [angular.js/DEVELOPERS.md at master · angular/angular.js (github.com)](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
> - [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
> - [GitHub - dev-zuo/commitizen-practice-demo: Vue 项目 commitizen + husky + commitlint，git commit 提交信息规范校验 demo，conventional commits 实践](https://github.com/dev-zuo/commitizen-practice-demo)

commitizen 是一个 cli 工具，用于规范化 git commit 信息，可以代替 git commit。

1. 使用 `pnpm i -g commitizen` 命令全局安装 commitizen。引入 commitizen 可以帮助咱们便捷式地创建符合 commitlint 规范的 commit message。

2. 执行 `commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact` 命令，使其支持 Angular 的 Commit message 格式。其中 cz-conventional-changelog 是 commitizen 的 conventional-changelog 适配器，使用该适配器，commitizen 将以 AngularJS 的 commit message 规范逐步引导咱们完成 commit message 的创建。

以后，凡是用到 `git commit` 命令，一律改为使用 `git cz`。这时，就会出现选项，用来生成符合格式的 commit message。如下所示：<br />![img](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402261623255.png)

使用 `git add .` 命令将所有的变更文件添加到暂存区，然后再执行 `git cz` 命令提交代码，可以看到终端中有了对应的步骤和信息提示，非常好！一切都在咱们的预料当中，满足了咱们的诉求。<br />![image-20240226164831878](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202402261648193.png)

### VSCode 配置

在日常开发过程中，个人习惯在保存时自动修复 Eslint 错误以及对文件进行格式化，因此咱们需要对 VSCode 进行配置。步骤如下：点击设置 -> 工作区 -> 打开右上角设置 JSON 文件，此时会在项目根目录下创建一个 `.vscode/settings.json` 文件，添加如下配置：

```json
{
  "files.autoSave": "afterDelay",
  "eslint.enable": true,
  "eslint.run": "onType",
  "editor.formatOnSave": true,
  "eslint.options": {
    "extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,
  "editor.tabSize": 2,
}
```

