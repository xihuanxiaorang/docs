# uniapp+vue3+ts项目模板搭建

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

### Eslint

[ESLint](https://github.com/eslint/eslint) 是一个查找 JavaScript / TypeScript 代码问题并提供修复建议的工具，换句话说就是可以约束的代码不会写出一堆 BUG ，**它是代码健壮性的重要保障**。

虽然大部分前端开发者都不愿意接受这些约束，但说实话，经过 ESLint 检查过的代码质量真的高了很多，如果不愿意总是做一个游兵散勇，建议努力让自己习惯被 ESLint 检查，大厂和大项目都是有 ESLint 检查的。

特别是写 TypeScript，配合 ESLint 的检查实在太爽了（字面意思，真的很舒服）。

通过脚手架创建的项目通常都会帮配置好 ESLint 规则，如果有一些项目是一开始没有，后面想增加 ESLint 检查，也可以手动配置具体规则。

1. 安装：使用 `pnpm i -D eslint` 安装 Eslint；

2. 初始化：使用 `npx eslint --init` 或者 `pnpm create @eslint/config` 命令进行初始化，参考自 [Getting Started with ESLint - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/getting-started)，如下所示：<br />![image-20240314162103109](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141621590.png)

   > [!tip]
   >
   > 执行该初始化命令除了会添加 `@typescript-eslint/eslint-plugin`、`@typescript-eslint/parser` 和 `eslint-plugin-vue` 三个开发依赖之外，还会在项目根目录下创建一个 `.eslintrc.js` 配置文件。

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

4. 对于一些不符合规范的简单的错误，如果一个个进行手动检查修复的话就太麻烦了！此时咱们可以在 `package.json` 文件的 `scripts` 选项中添加 `"lint": "eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix"` 脚本，然后执行 `pnpm run lint` 命令完成错误检查并自动修复，对于一些无法自动修复的错误则会在终端中进行输出，如下所示：<br />![image-20240314162937834](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141629025.png)

   > [!tip]
   >
   > 查阅资料，参考自 [Troubleshooting & FAQs | typescript-eslint](https://typescript-eslint.io/linting/troubleshooting/#i-am-running-into-errors-when-parsing-typescript-in-my-vue-files) & [User Guide | eslint-plugin-vue](https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser)，如下所示：<br />![image-20231221211337316](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202312212113357.png)
   >
   > 因此想解决以上错误就需要使用 `pnpm i -D vue-eslint-parser` 命令添加 `vue-eslint-parser` 插件，然后对 `.eslintrc.js` 文件进行如下所示配置：
   >
   > ```js
   > module.exports = {
   > 	// ...
   > 
   >   parser: 'vue-eslint-parser', // [!code ++]
   >   parserOptions: {
   >     ecmaVersion: 'latest',
   >     parser: '@typescript-eslint/parser',
   >     sourceType: 'module',
   >   },
   > 
   > 	// ...
   > }
   > ```
   >

   再次执行 `pnpm run lint` 命令可以发现上面的错误虽然已经消失不见啦！但是，又出现了如下错误：<br />![image-20240314171031214](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141710382.png)

   那么这个错误该如何解决呢？在 `.eslintrc.js` 文件的 `rules` 规则选项中添加 `'vue/multi-word-component-names': 'off',` 选项即可！

   打开 `tsconfig.json` 文件，发现报错，错误信息如下所示：<br />![image-20240314171841557](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141718623.png)

   根据提示咱们需要在当前文件的 `compilerOptions` 选项中添加 `"ignoreDeprecations": "5.0"` 选项！

   ```json
   {
     "extends": "@vue/tsconfig/tsconfig.json",
     "compilerOptions": {
       "sourceMap": true,
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       },
       "lib": ["esnext", "dom"],
       "types": ["@dcloudio/types"],
       "ignoreDeprecations": "5.0" // [!code ++] 
     },
     "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
   }
   
   ```

5. 创建 `.eslintignore` 文件用于排除某些文件的 eslint 检测，根据需要进行配置，如下所示：

   ```
   !.prettierrc.js
   ```

### Prettier

[Prettier](https://github.com/prettier/prettier) 是目前最流行的代码格式化工具，可以约束的代码风格不会乱七八糟，目前所知道的知名项目（如 Vue 、 Vite 、 React 等）和大厂团队（谷歌、微软、阿里、腾讯等）都在使用 Prettier 格式化代码。

通过脚手架创建的项目很多都内置了 Prettier 功能集成（参考了主流的格式化规范，比如 2 个空格的缩进、无需写分号结尾、数组 / 对象每一项都带有尾逗号等等）。

如果需要手动增加功能支持，请在项目根目录下创建一个名为 `.prettierrc.js` 的文件，写入以下内容：

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

如果开启了 ESLint ，配合 ESLint 的代码提示，可以更方便的体验格式化排版，详见 [ESLint](#Eslint) 一节的说明。为了避免 Eslint 与 Prettier 的规则冲突，除了需要安装 Prettier 本身之外，还需要安装另外两个插件，命令：`pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier`，如下所示：<br />![image-20240314172723380](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141727624.png)

参考自：[Conflict with Prettier | User Guide | eslint-plugin-vue (vuejs.org)](https://eslint.vuejs.org/user-guide/#conflict-with-prettier) 和 [prettier/eslint-plugin-prettier: ESLint plugin for Prettier formatting (github.com)](https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-legacy-eslintrc)，还需要在 `.eslintrc.js` 的 `extends` 选项中添加 `"plugin:prettier/recommended",` 规则，内容如下所示：

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

此时打开 `src/pages/index/index.vue` 组件，惊奇地发现居然报错，也间接说明咱们配置的 Prettier 规则已经生效，如下所示：<br />![image-20240314173144840](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141731941.png)

对于一些不符合规范的文件，如果一个个进行手动检查并格式化的话就太麻烦了！此时咱们可以在 `package.json` 文件的 `scripts` 选项中添加 `"format": "prettier --write ."` 脚本，然后执行 `pnpm run format` 命令自动完成格式化。

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

此时，在 `main.ts` 文件中定义不使用的变量，使其不符合 eslint 规范，然后通过 `git add .` 命令将工作区的代码全部保存到暂存区之后使用 `git commit` 命令进行提交，从终端中可以看到，确实是先执行 `package.json` 中的 lint 脚本，然后 eslint 输出了错误信息并且中断了 git commit 过程，这非常好，符合咱们的预期！如下所示：<br />![image-20240314174534403](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141745603.png)

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
  }  // [!code ++]
  
  // ...
}
```

此外，咱们还需要手动更改一下 husky 为咱们创建的 pre-commit 这个 git hook，将其变更为执行 lint-staged 命令，如下所示：

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

再次提交代码，效果如下所示：<br />![image-20240314180402754](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141804186.png)

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

故意填写不符合规范的提交信息，测试效果如下所示：<br />![image-20240314181127940](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141811256.png)

咱们接着使用一个符合规范的提交信息来看看效果，可以看到没有报错并且没有被中断，满足咱们的预期，这意味着 commitlint 已经配置成功！如下所示：<br />![image-20240314181318923](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141813472.png)

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

使用 `git add .` 命令将所有的变更文件添加到暂存区，然后再执行 `git cz` 命令提交代码，可以看到终端中有了对应的步骤和信息提示，非常好！一切都在咱们的预料当中，满足了咱们的诉求。<br />![image-20240314182412737](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202403141824408.png)

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



