# TypeScript 学习环境搭建

为了方便学习 TypeScript，咱们以最简单的方式来搭建一个 TypeScript 的学习环境。具体步骤如下所示：

1. 创建项目，项目名称为 `typescript-study`；

2. 使用 vscode 打开当前目录，在终端中输入 `pnpm init` 进行初始化，该过程会在当前项目根目录下创建一个 `package.json` 文件，咱们需要在此基础上增加一个 `"type": "module",` 选项。文件内容如下所示：

   ```json
   {
       "name": "typescript-study",
       "version": "1.0.0",
       "description": "Typescript学习",
       "main": "/src/main.ts",
       "type": "module", // [!code ++]
       "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1"
       },
       "keywords": [
           "typescript",
           "xiaorang"
       ],
       "author": "xiaorang",
       "license": "MIT",
   }
   ```

3. 使用 `pnpm add -D vite typescript` 命令添加 vite 构建工具和 typescript 依赖；

4. 在当前项目根目录下创建 `src` 目录，添加 `main.ts` 和 `vite-env.d.ts`文件：

   ::: code-group

   ```ts [main.ts]
   const msg = "Hello TypeScript!"
   console.log(msg)
   
   export {}
   ```

   ```ts [vite-env.d.ts]
   /// <reference types="vite/client" />
   ```

   :::

5. 在当前项目根目录下创建 `public` 目录，添加 `typescript.svg` 图标，可到 [iconfont](https://www.iconfont.cn/search/index?searchType=icon&q=typescript) 中进行下载；

6. 在当前项目根目录下创建 `index.html` 文件，文件内容如下所示：<br />

   ```html
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="UTF-8">
           <link rel="icon" type="image/svg+xml" href="/typescript.svg" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Typescript Study</title>
       </head>
       <body>
           <script type="module" src="/src/main.ts"></script>
       </body>
   </html>
   ```

7. 在当前项目根目录下创建 `tsconfig.json` 配置文件，配置内容如下所示：

   > [!tip]
   >
   > 该配置文件中的内容拷贝自 vite 创建项目时的 [vanilla-ts](https://vite.new/vanilla-ts) 模板预设中的 `tsconfig.json` 配置文件。

   ```json
   {
       "compilerOptions": {
           "target": "ES2020",
           "useDefineForClassFields": true,
           "module": "ESNext",
           "lib": ["ES2020", "DOM", "DOM.Iterable"],
           "skipLibCheck": true,
   
           /* Bundler mode */
           "moduleResolution": "bundler",
           "allowImportingTsExtensions": true,
           "isolatedModules": true,
           "moduleDetection": "force",
           "noEmit": true,
   
           /* Linting */
           "strict": true,
           "noUnusedLocals": true,
           "noUnusedParameters": true,
           "noFallthroughCasesInSwitch": true
       },
       "include": ["src"]
   }
   ```

   > [!note]
   >
   > 咱们不用急着操心该配置文件中每一项配置的具体含义是什么，在后面的学习过程中自然会学到的，咱们现在首要的任务是先将学习环境搭建起来，能够支持咱们学习 TypeScript 就行！

8. 在项目根目录下创建 `vite.config.ts` 配置文件，配置如下所示：

   ```ts
   import { defineConfig } from "vite";
   
   export default defineConfig({
       server: {
           port: 9999,
           open: true,
       },
   });
   ```

9. 在 `package.json` 中添加如下脚本：

   ```json
   {
       "scripts": {
           "dev": "vite",
           "build": "tsc && vite build",
           "preview": "vite preview"
       },
   }
   ```

   运行 `pnpm run dev` 启动开发服务器，浏览器将自动打开并访问 [http://localhost:9999/](http://localhost:9999/)，此时按 `F12` 打开控制台，如果输出 `Hello TypeScript!` 字样的话则表示环境搭建成功！

> [!tip]
>
> 以后每学习一节知识点，只需将 `main.ts` 文件**拷贝**一份然后**改为其他名称**即可，比如 `1.TypeScript基本类型.ts`，这样下次在学习其他小节的知识点时依旧可以在 `main.ts` 中进行操作。

至此，咱们就可以开开心心地开启咱们的 TypeScript 学习之旅吧！🎉🎉🎉
