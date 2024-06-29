# Uniapp 工程化模板搭建

## 创建项目

除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。

具体步骤如下所示：

1. 使用 `npm install -g @vue/cli` 命令全局安装 `vue-cli`。

2. 使用 Vue3/Vite 版，创建以 typescript 开发的工程，运行 `npx degit dcloudio/uni-preset-vue#vite-ts uniapp-vue3-ts-starter` 命令，其中 `uniapp-vue3-ts-starter` 为项目名称，可以进行更换。参考自 [uni-app官网](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E5%88%9B%E5%BB%BAuni-app)，效果如下所示：<br />![image-20240314013344047](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140133141.png)

   如果命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 下载模板。

   > [!note]
   >
   > - Vue3/Vite 版要求 node 版本`^14.18.0 || >=16.0.0`
   > - 如果使用 HBuilderX（3.6.7以下版本）运行 Vue3/Vite 创建的最新的 cli 工程，需要在 HBuilderX 运行配置最底部设置 node 路径为自己本机高版本 node 路径（注意需要重启 HBuilderX 才可以生效）
   >   - HBuilderX Mac 版本菜单栏左上角 HBuilderX->偏好设置->运行配置->node路径
   >   - HBuilderX Windows 版本菜单栏 工具->设置->运行配置->node路径

3. 在项目被创建后，通过以下步骤安装依赖，如下所示：<br />![image-20240314014724516](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140147099.png)

## 运行项目

在微信开发者工具里运行，存在 HBuilderX 和 命令行两种方式，其实两者并没有本质上的区别，任选其中一种即可。

> [!tip]
>
> 使用 HBuilderX 进行开发的小伙伴可以选择第一种运行方式，而使用 VSCode 进行开发的小伙伴推荐使用命令行的方式运行项目。

1. 使用 HBuilderX 打开刚才创建的项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验 uni-app，如下所示：<br />![image-20240314020010168](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140200213.png)

   点击运行之后，会在 HBuilderX 终端中会输出如下信息：<br />![image-20240314022437806](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140224878.png)

   根据上图所示，可以得出如下结论：

   1. 编译项目之后，会在项目根目录下生成一个 `dist\dev\mp-weixin` 目录；

   2. 会自动打开微信开发者工具并导入 `dist\dev\mp-weixin` 目录运行；

      > [!tip]
      >
      > 如果自动启动小程序开发工具失败，请手动启动小程序开发工具并将 HBuilderX 控制台提示的项目路径，打开项目。

   3. 在 HBuilderX 中修改文件并保存，会自动刷新微信模拟器；

   > [!note]
   >
   > 1. 如果是第一次使用，需要配置开发工具的相关路径。点击工具栏的运行 -> 运行到小程序模拟器 -> 运行设置，配置相应小程序开发者工具的路径，才能运行成功。如下图所示，需在输入框输入微信开发者工具的安装路径。<br />![image-20240314020558606](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140205642.png)
   > 2. 微信开发者工具需要**开启服务端口**，在微信开发者工具的设置 -> 安全中。<br />![image-20240314020756129](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403140207172.png)

2. 在终端中进入当前项目，直接使用 `pnpm run dev:mp-weixin` 命令运行该项目，如下所示：<br />![image-20240314154448731](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141544927.png)

   根据上图所示，可以得出如下结论：

   1. 编译项目之后，同样会在项目根目录下生成一个 `dist\dev\mp-weixin` 目录；
   2. 使用命令行的方式运行项目不会自动打开微信开发者工具，需要咱们手动打开微信开发者工具，然后手动导入 `dist\dev\mp-weixin` 目录进行运行。<br />![image-20240314155238446](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141552496.png)
   3. 当咱们更新文件时会进行差量编译项目并自动刷新微信模拟器；

## 推荐插件安装

VSCode 推荐安装插件：

- [Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [ESLint Chinese Rules](https://marketplace.visualstudio.com/items?itemName=maggie.eslint-rules-zh-plugin)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vue - Official - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Vue VSCode Snippets - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Error Lens - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Auto Close Tag - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [uni-create-view](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view)
- [uni-helper](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode)
- [uniapp 小程序扩展](https://marketplace.visualstudio.com/items?itemName=evils.uniapp-vscode)

在项目根目录下创建 `.vscode/extensions.json` 文件，内容如下所示：

```json
{
  "recommendations": [
    "ms-ceintl.vscode-language-pack-zh-hans",
    "editorconfig.editorconfig",
    "dbaeumer.vscode-eslint",
    "maggie.eslint-rules-zh-plugin",
    "esbenp.prettier-vscode",
    "usernamehw.errorlens",
    "formulahendry.auto-close-tag",
    "formulahendry.auto-rename-tag",
    "mrmaoddxxaa.create-uniapp-view",
    "uni-helper.uni-helper-vscode",
    "evils.uniapp-vscode"
  ]
}
```

这样团队其他小伙伴在拉取代码使用 VSCode 打开之后，在扩展中输入 `@recommended` 就会推荐安装这些插件。<br />![image-20240314161016696](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141610749.png)

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

[ESLint](https://github.com/eslint/eslint) 是一个查找 JavaScript / TypeScript 代码问题并提供修复建议的工具，换句话说就是可以约束的代码不会写出一堆 BUG ，**它是代码健壮性的重要保障**。

虽然大部分前端开发者都不愿意接受这些约束，但说实话，经过 ESLint 检查过的代码质量真的高了很多，如果不愿意总是做一个游兵散勇，建议努力让自己习惯被 ESLint 检查，大厂和大项目都是有 ESLint 检查的。

特别是写 TypeScript，配合 ESLint 的检查实在太爽了（字面意思，真的很舒服）。

通过脚手架创建的项目通常都会帮配置好 ESLint 规则，如果有一些项目是一开始没有，后面想增加 ESLint 检查，也可以手动配置具体规则。

1. 使用 `pnpm create @eslint/config@latest` 命令安装与配置 ESLint，参考自 [Getting Started with ESLint - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/getting-started#quick-start)，如下所示：![image-20240629123140414](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291231060.png)

   > [!tip]
   >
   > 执行该初始化命令除了会添加相关开发依赖之外，还会在项目根目录下创建一个 `eslint.config.mjs` 配置文件。

2. 根据 Vue3 官方文档中 [代码规范 | 工具链 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/scaling-up/tooling.html#linting) 的描述，如下所示：<br />![image-20231220164312380](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202312210013100.png)

   Vue 团队维护着 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 项目，它是一个 [ESLint](https://eslint.org/) 插件，会提供 SFC 相关规则的定义。咱们在上一步初始化完毕后就已自动安装 `eslint-plugin-vue` 插件，紧接着咱们只需遵照 `eslint-plugin-vue` 的[指引](https://eslint.vuejs.org/user-guide/#usage)进行配置，选择最为严格的 `*.configs["flat/recommended"]` 规则。

   ```js
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import tseslint from "typescript-eslint";
   import pluginVue from "eslint-plugin-vue";
   
   
   export default [
     {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
     {languageOptions: {globals: {...globals.browser, ...globals.node}}},
     pluginJs.configs.recommended,
     ...tseslint.configs.recommended,
     ...pluginVue.configs["flat/essential"], // [!code --]
     ...pluginVue.configs["flat/recommended"], // [!code ++]
     // 忽略文件
     {
       ignores: ["src/uni_modules/", "dist/"] // [!code ++]
     },
   ];
   ```

3. 对于一些不符合规范的简单的错误，如果一个个进行手动检查修复的话就太麻烦了！此时咱们可以使用 `npx eslint --fix` 命令完成错误检查并自动修复，对于一些无法自动修复的错误则会在终端中进行输出，如下所示：<br />![image-20240629154109416](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291541546.png)

   那么这个错误该如何解决呢？在 `eslint.config.mjs` 配置文件的 `rules` 选项中添加 `'vue/multi-word-component-names': 'off',` 禁用该规则即可！如下所示：

   ```js
   import globals from "globals";
   import pluginJs from "@eslint/js";
   import tseslint from "typescript-eslint";
   import pluginVue from "eslint-plugin-vue";
   
   
   export default [
     {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
     {languageOptions: {globals: {...globals.browser, ...globals.node}}},
     pluginJs.configs.recommended,
     ...tseslint.configs.recommended,
     ...pluginVue.configs["flat/essential"],
     // 忽略文件
     {
       ignores: ["src/uni_modules/", "dist/"]
     },
     // 配置规则
     {
       rules: {
         "vue/multi-word-component-names": "off", // [!code ++]
       }
     },
   ];
   ```

   再次运行 `npx eslint --fix` 命令可以发现不再报错！

### Prettier

[Prettier](https://github.com/prettier/prettier) 是目前最流行的代码格式化工具，可以约束的代码风格不会乱七八糟，目前所知道的知名项目（如 Vue、Vite、React 等）和大厂团队（谷歌、微软、阿里、腾讯等）都在使用 Prettier 格式化代码。

通过脚手架创建的项目很多都内置了 Prettier 功能集成（参考了主流的格式化规范，比如 2 个空格的缩进、无需写分号结尾、数组 / 对象每一项都带有尾逗号等等）。

1. 根据官方文档 [Install · Prettier](https://prettier.io/docs/en/install) 可知，使用 `pnpm add --save-dev --save-exact prettier` 命令安装 Prettier。 <br />![image-20240629155728880](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291557210.png)

2. 在项目根目录下创建一个名为 `.prettierrc.js` 的配置文件，文件内容如下所示：

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

   现在可以使用 `pnpm exec prettier . --write` 命令格式化所有的文件，如下所示：<br />![image-20240629161706241](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291617445.png)

3. 从命令行进行格式化是一个很好的入门方式，但你可以通过键盘快捷键或在保存文件时自动从编辑器运行它来充分利用 Prettier。当一行在编码时变得太长以至于不适合你的屏幕时，只需按下一个键，即可观看它神奇地被包裹成多行！或者，当你粘贴一些代码并且缩进全部搞砸时，让 Prettier 为你修复它，而无需离开你的编辑器。

   配合 VSCode 的 [VsCode Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 扩展，可以很方便地在编辑器里使用该规则格式化文件。

4. 如果你使用 ESLint，请安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)，以使 ESLint 和 Prettier 相互配合。它会关闭所有不必要的或可能与 Prettier 冲突的 ESLint 规则。需要使用 `pnpm add --save-dev eslint-plugin-prettier eslint-config-prettier` 命令安装 [prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier. (github.com)](https://github.com/prettier/eslint-config-prettier#installation) 和 [prettier/eslint-plugin-prettier: ESLint plugin for Prettier formatting (github.com)](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) 两个插件。<br />![image-20240629164459989](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291645310.png)

   那么该如何配置呢？参考自 [[eslint-plugin-prettier/Configuration (new: `eslint.config.js`)]](https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs)，导入 `eslint-plugin-prettier/recommended` 并将其作为配置数组中的最后一项添加到 `eslint.config.mjs` 文件中，以便 `eslint-config-prettier` 有机会覆盖其他配置:

   ```js
   import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended' // [!code ++]
   
   export default [
     {files: ['**/*.{js,mjs,cjs,ts,vue}']},
     {languageOptions: {globals: {...globals.browser, ...globals.node}}},
     pluginJs.configs.recommended,
     ...tseslint.configs.recommended,
     ...pluginVue.configs["flat/recommended"],
     // eslint-plugin-prettier
     eslintPluginPrettierRecommended, // [!code ++]
     // 忽略文件
     {
       ignores: ['src/uni_modules/'],
     },
     // 配置规则
     {
       rules: {
         'vue/multi-word-component-names': 'off',
       },
     },
   ]
   ```

5. 如果有一些文件需要排除，可以再创建一个 `.prettierignore` 文件在项目根目录下，里面添加要排除的文件或者文件夹名称即可。

   ```
   src/uni_modules/
   ```

### husky

> [!tip]
>
> 文档地址：[🐶 husky](https://typicode.github.io/husky/)

如果仅有 eslint 和 prettier，那么咱们需要在代码提交之前手动执行 prettier 和 eslint 对代码进行格式化以及代码质量和格式检查，但是咱们希望在提交代码时自动执行 eslint 对代码进行检查，那么咱们可以使用 git 的 hook 功能，为 git 命令创建咱们所需要的钩子，在这里咱们使用 husky 工具来创建、管理代码仓库中所有的 git hooks。

通过 husky 工具来为咱们创建所需要的 git hook，首先需要执行 `pnpm add -D husky` 命令安装 husky，然后执行 `pnpm exec husky init` 命令启用 git hook。该命令主要做了如下两件事：

1. 在 `package.json` 中新增一个 prepare 脚本：`"prepare": "husky"`，使得团队中其他小伙伴在克隆该项目并安装依赖时会自动通过 husky 启用 git hook。

2. 在 `.husky/` 文件夹下创建一个 `pre-commit` 脚本，用于在提交（commit）之前执行脚本中的内容。咱们需要修改该脚本中默认生成的内容，使其支持在提交之前执行咱们的 eslint 工具对代码进行质量和格式检查，内容如下所示：

   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   
   npx eslint --fix
   ```

此时，在 `main.ts` 文件中定义不使用的变量，使其不符合 eslint 规范，然后通过 `git add .` 命令将工作区的代码全部保存到暂存区之后使用 `git commit` 命令进行提交，从终端中可以看到，确实是先执行 `npx eslint --fix`，然后 eslint 输出了错误信息并且中断了 git commit 过程，这非常好，符合咱们的预期！如下所示：<br />![image-20240629171351067](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291713256.png)

### lint-staged

> [!tip]
>
> 文档地址：[GitHub - lint-staged/lint-staged: 🚫💩 — Run linters on git staged files](https://github.com/lint-staged/lint-staged)

随着代码存储库的代码量增多，如果在每一次提交代码时，咱们都对存储库内的**全量代码**执行 prettier 和 eslint 命令，则必然会性能吃紧，所以，咱们希望提交代码时只对当前发生了代码变更的文件执行 prettier 和 eslint 命令，同时略过咱们所忽略的文件，那么咱们就需要用上 lint-staged 工具。

首先执行 `pnpm add -D lint-staged` 命令安装 lint-staged，安装完成之后, 然后配置 `package.json` 文件，如下所示：

```json
{
  // ...
  
  "lint-staged": {
    "**/*.{html,vue,ts,cjs,json,md}": [
      "prettier --write"
    ],
    "**/*.{vue,js,ts,jsx,tsx}": [
      "eslint --fix"
    ],
  },
  
  // ...
}
```

此外，咱们还需要手动更改一下 husky 为咱们创建的 pre-commit 这个 git hook，将其变更为执行 lint-staged 命令，如下所示：

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install -- lint-staged
```

再次提交代码，效果如下所示：<br />![image-20240629180418101](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291804368.png)

### commitlint

> [!tip]
>
> 文档地址：[commitlint - Lint commit messages](https://commitlint.js.org/#/)

commitlint 结合 husky 可以在 git commit 时校验 commit 信息是否符合规范。

1. 安装：使用 `pnpm add -D commitlint @commitlint/config-conventional @commitlint/cli` 命令安装 commitlint；

2. 配置：在项目根目录下创建 `.commitlintrc.cjs` 文件，内容如下所示：

   ```json
   const fs = require('fs')
   const path = require('path')
   const { execSync } = require('child_process')
   
   const scopes = fs
     .readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true })
     .filter((dirent) => dirent.isDirectory())
     .map((dirent) => dirent.name.replace(/s$/, ''))
   
   // precomputed scope
   const scopeComplete = execSync('git status --porcelain || true')
     .toString()
     .trim()
     .split('\n')
     .find((r) => ~r.indexOf('M  src'))
     ?.replace(/(\/)/g, '%%')
     ?.match(/src%%((\w|-)*)/)?.[1]
     ?.replace(/s$/, '')
   
   module.exports = {
     ignores: [(commit) => commit.includes('init')],
     extends: ['@commitlint/config-conventional'],
     rules: {
       'body-leading-blank': [2, 'always'],
       'footer-leading-blank': [1, 'always'],
       'header-max-length': [2, 'always', 108],
       'subject-empty': [2, 'never'],
       'type-empty': [2, 'never'],
       'subject-case': [0],
       'type-enum': [
         2,
         'always',
         [
           'feat',
           'fix',
           'perf',
           'style',
           'docs',
           'test',
           'refactor',
           'build',
           'ci',
           'chore',
           'revert',
           'wip',
           'workflow',
           'types',
           'release',
         ],
       ],
     },
     prompt: {
       /** @use `pnpm commit :f` */
       alias: {
         f: 'docs: fix typos',
         r: 'docs: update README',
         s: 'style: update code format',
         b: 'build: bump dependencies',
         c: 'chore: update config',
       },
       customScopesAlign: !scopeComplete ? 'top' : 'bottom',
       defaultScope: scopeComplete,
       scopes: [...scopes, 'mock'],
       allowEmptyIssuePrefixs: false,
       allowCustomIssuePrefixs: false,
   
       // English
       typesAppend: [
         { value: 'wip', name: 'wip:      work in process' },
         { value: 'workflow', name: 'workflow: workflow improvements' },
         { value: 'types', name: 'types:    type definition file changes' },
       ],
   
       // 中英文对照版
       // messages: {
       //   type: '选择你要提交的类型 :',
       //   scope: '选择一个提交范围 (可选):',
       //   customScope: '请输入自定义的提交范围 :',
       //   subject: '填写简短精炼的变更描述 :\n',
       //   body: '填写更加详细的变更描述 (可选)。使用 "|" 换行 :\n',
       //   breaking: '列举非兼容性重大的变更 (可选)。使用 "|" 换行 :\n',
       //   footerPrefixsSelect: '选择关联issue前缀 (可选):',
       //   customFooterPrefixs: '输入自定义issue前缀 :',
       //   footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
       //   confirmCommit: '是否提交或修改commit ?',
       // },
       // types: [
       //   { value: 'feat', name: 'feat:     新增功能' },
       //   { value: 'fix', name: 'fix:      修复缺陷' },
       //   { value: 'docs', name: 'docs:     文档变更' },
       //   { value: 'style', name: 'style:    代码格式' },
       //   { value: 'refactor', name: 'refactor: 代码重构' },
       //   { value: 'perf', name: 'perf:     性能优化' },
       //   { value: 'test', name: 'test:     添加疏漏测试或已有测试改动' },
       //   { value: 'build', name: 'build:    构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)' },
       //   { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
       //   { value: 'revert', name: 'revert:   回滚 commit' },
       //   { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)' },
       //   { value: 'wip', name: 'wip:      正在开发中' },
       //   { value: 'workflow', name: 'workflow: 工作流程改进' },
       //   { value: 'types', name: 'types:    类型定义文件修改' },
       // ],
       // emptyScopesAlias: 'empty:      不填写',
       // customScopesAlias: 'custom:     自定义',
     },
   }
   ```

3. 添加 git 钩子 `.husky/commit-msg`，它的作用是在咱们提交 commit 或者修改 commit message 时执行相关校验，确保咱们的项目拥有一个统一的符合规范的 commit message，文件内容所示：

   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   
   npx --no-install commitlint --edit 
   ```

   故意填写不符合规范的提交信息，测试效果如下所示：<br />![image-20240629182140844](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291821045.png)

   咱们接着使用一个符合规范的提交信息来看看效果，可以看到没有报错并且没有被中断，满足咱们的预期，这意味着 commitlint 已经配置成功！如下所示：<br />![image-20240629182523274](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291825490.png)

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

使用 `git add .` 命令将所有的变更文件添加到暂存区，然后再执行 `git cz` 命令提交代码，可以看到终端中有了对应的步骤和信息提示，非常好！一切都在咱们的预料当中，满足了咱们的诉求。<br />![image-20240629184546759](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406291845046.png)

