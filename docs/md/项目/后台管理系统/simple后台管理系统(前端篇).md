# simple后台管理系统(前端篇)

## 项目创建

> [!note]
>
> 确保你安装了最新版本的 [Node.js](https://nodejs.org/)，并且你的当前工作目录正是打算创建项目的目录。

在 Vue3 官方文档 [快速上手 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application) 小节中，推荐使用 `pnpm create vue@latest` 创建项目，这一指令将会安装并执行 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示，如下所示：<br />![image-20240405190806522](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404051908859.png)

在项目被创建后，通过以下步骤安装依赖并启动开发服务器，如下所示：<br />![image-20240405190912081](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404051909722.png)

## 清理工作

删除所有不需要的内容：

1. 删除 `components` 目录下的所有组件；
2. 删除 `views` 目录下的所有页面组件及其引用；
3. 删除 `assets` 目录下的所有样式文件及其引用；
4. 删除 `stores` 目录下的所有文件；

## 协作规范

### editorconfig

在项目根目录下创建 `.editorconfig` 配置文件，即可让项目下所有文件都统一代码风格！

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# 适用于所有文件类型
[*]
# 设置文件字符集为 utf-8
charset = utf-8
# 缩进风格（tab | space）
indent_style = space
# 缩进大小
indent_size = 2
# 换行符（lf | cr | crlf）
end_of_line = lf
# 去除换行行首的任意空白字符
trim_trailing_whitespace = true
# 始终在文件末尾插入一个空行
insert_final_newline = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```

> [!tip]
>
> 部分编辑器可能需要安装对应的插件才可以支持该配置。
>
> 例如 VSCode 需要安装 [EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 扩展。

### eslint

举个栗子：在开发过程当中，你可能会碰到由于不符合 `eslint` 的某条规则而报错，如下所示：当你的组件名称为 `index.vue` 时就会抛出如下错误<br />![image-20240424173715364](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404241737580.png)

但是你觉得让这个错误不应该出现，因此你可以在 eslint 的配置文件 `.eslintrc.cjs` 中禁用掉该规则，其中有一个 `overrides` 配置选项，该选项可以用来为特定的文件指定不同的规则。

::: code-group

```js [.eslintrc.cjs] {15-22}
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
```

:::

### prettier

::: code-group

```json [.prettierrc.json]
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none"
}
```

:::

## 准备工作

### [CSS 预处理器](https://vitejs.cn/vite3-cn/guide/features.html#css)

Vite 同时提供了对 `.scss`, `.sass`, `.less`, `.styl` 和 `.stylus` 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：`pnpm add -D sass`。

如果使用的是单文件组件，可以通过 `<style lang="scss">`（或其他预处理器）自动开启。

### [ElementPlus](https://element-plus.org/zh-CN/) 集成

1. 安装 ElementPlus：`pnpm i element-plus `

2. ElementPlus [按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#按需导入)：

   1. 首先，需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件：

      ```sh
      pnpm i -D unplugin-vue-components unplugin-auto-import
      ```

   2. 使用插件：修改 `vite.config.ts` 配置文件

      ```ts {2,8-10,12,20-46}
      import { fileURLToPath, URL } from 'node:url'
      import { resolve } from 'path'
      
      import { defineConfig } from 'vite'
      import vue from '@vitejs/plugin-vue'
      import vueJsx from '@vitejs/plugin-vue-jsx'
      import VueDevTools from 'vite-plugin-vue-devtools'
      import AutoImport from 'unplugin-auto-import/vite'
      import Components from 'unplugin-vue-components/vite'
      import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
      
      const pathSrc = resolve(__dirname, 'src')
      
      // https://vitejs.dev/config/
      export default defineConfig({
        plugins: [
          vue(),
          vueJsx(),
          VueDevTools(),
          AutoImport({
            resolvers: [
              // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
              ElementPlusResolver()
            ],
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            // 自动导入 VueRouter 相关函数，如：useRouter 等
            // 自动导入 Pinia 相关函数，如：createPinia，defineStore，storeToRefs 等
            // 参考自： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
            imports: ['vue', 'vue-router', 'pinia'],
            // 是否在 vue 模板中自动导入
            vueTemplate: true,
            // 指定自动导入函数TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
            dts: resolve(pathSrc, 'typings', 'auto-imports.d.ts')
          }),
          Components({
            resolvers: [
              // 自动导入 Element Plus 组件
              ElementPlusResolver()
            ],
            // 组件名称包含目录，防止同名组件冲突
            directoryAsNamespace: true,
            // 指定自定义组件位置(默认:src/components)
            dirs: ['src/components', 'src/**/components'],
            // 指定自动导入组件TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
            dts: resolve(pathSrc, 'typings', 'components.d.ts')
          })
        ],
        resolve: {
          alias: {
            '@': pathSrc
          }
        }
      })
      ```

### [iconify](https://iconify.design/) 集成

以下步骤参考自：[Icon 图标 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/component/icon.html#自动导入)

使用 [unplugin-icons](https://github.com/antfu/unplugin-icons) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 从 iconify 中自动导入任何图标集。您可以参考[此模板](https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58)。

1. 安装 `unplugin-icons` 和 `iconify`：`pnpm i -D unplugin-icons @iconify/json`。

2. 使用插件：修改 `vite.config.ts` 配置文件

   ```ts {11-12,26-27,43-47,56-58}
   import { fileURLToPath, URL } from 'node:url'
   import { resolve } from 'path'
   
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import vueJsx from '@vitejs/plugin-vue-jsx'
   import VueDevTools from 'vite-plugin-vue-devtools'
   import AutoImport from 'unplugin-auto-import/vite'
   import Components from 'unplugin-vue-components/vite'
   import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
   import Icons from 'unplugin-icons/vite'
   import IconsResolver from 'unplugin-icons/resolver'
   
   const pathSrc = resolve(__dirname, 'src')
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [
       vue(),
       vueJsx(),
       VueDevTools(),
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
         // 参考自： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
         imports: ['vue', 'vue-router', 'pinia'],
         // 是否在 vue 模板中自动导入
         vueTemplate: true,
         // 指定自动导入函数TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
         dts: resolve(pathSrc, 'typings', 'auto-imports.d.ts')
       }),
       Components({
         resolvers: [
           // 自动导入 Element Plus 组件
           ElementPlusResolver(),
           // 自动注册图标组件
           IconsResolver({
             // 只启用 element-plus 图标集，其他图标库 https://icon-sets.iconify.design/
             enabledCollections: ['ep']
           })
         ],
         // 组件名称包含目录，防止同名组件冲突
         directoryAsNamespace: true,
         // 指定自定义组件位置(默认:src/components)
         dirs: ['src/components', 'src/**/components'],
         // 指定自动导入组件TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
         dts: resolve(pathSrc, 'typings', 'components.d.ts')
       }),
       Icons({
         // 自动安装图标库
         autoInstall: true
       })
     ],
     resolve: {
       alias: {
         '@': pathSrc
       }
     }
   })
   ```

### [TailwindCSS](https://www.tailwindcss.cn/) 集成

以下步骤参考自：[Install Tailwind CSS with Vite - TailwindCSS中文文档 | TailwindCSS中文网](https://www.tailwindcss.cn/docs/guides/vite#vue)

1. 安装 `tailwindcss` 及其对等依赖，然后生成 `tailwind.config.js` 和 `postcss.config.js` 文件。

   ```sh
   pnpm i -D tailwindcss postcss autoprefixer
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

   ```ts {1}
   import '@/styles/index.scss'
   
   import { createApp } from 'vue'
   import { createPinia } from 'pinia'
   
   import App from './App.vue'
   import router from './router'
   
   const app = createApp(App)
   
   app.use(createPinia())
   app.use(router)
   
   app.mount('#app')
   ```

### [Normalize.css](https://necolas.github.io/normalize.css/) 集成

Normalize.css 使浏览器渲染所有元素更加一致，符合现代标准。它只针对需要规范化的样式。

1. 安装 Normalize.css：`pnpm i normalize.css`
2. 在 `main.ts` 文件中引入 Normalize.css 样式：`import 'normalize.css/normalize.css'`

### svg 图标集成

ElementPlus 图标库往往满足不了实际开发需要，因此需要通过集成 [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) 插件来使用第三方（如 [iconfont](https://www.iconfont.cn/)）图标库解决。

1. 安装 `pnpm i -D vite-plugin-svg-icons` 插件

2. 在 `main.ts` 文件中引入注册脚本：`import 'virtual:svg-icons-register'`

3. 创建图标文件夹 `src/assets/icons` 用于存放从 iconfont 上下载的 svg 图标

4. 修改 `vite.config.ts` 配置文件

   ```ts
   import svgLoader from 'vite-svg-loader'
   
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

5. TypeScript 支持

   ```json {4}
   // tsconfig.json
   {
     "compilerOptions": {
       "types": ["vite-plugin-svg-icons/client"]
     }
   }
   ```

6. 组件封装

   ::: code-group

   ```vue [src/components/SvgIcon/index.vue]
   <script lang="ts" setup>
   const props = withDefaults(
     defineProps<{
       prefix?: string
       iconClass: string
       color?: string
       size?: string
     }>(),
     {
       prefix: 'icon',
       size: '1em'
     }
   )
   
   const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)
   </script>
   
   <template>
     <svg :style="'width:' + size + ';height:' + size" aria-hidden="true" class="svg-icon">
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
     fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
   }
   </style>
   ```

   :::

7. 使用：在 `src/assets/icons` 文件夹中存在一个从 iconfont 上下载的 `menu.svg` 图标。

   ```vue
   <template>
     <svg-icon icon-class="menu"/>
   </template>
   
   <script setup lang="ts">
   	import SvgIcon from '@/components/SvgIcon/index.vue';
   </script> 
   ```

### [NProgress](https://ricostacruz.com/nprogress/) 进度条集成

1. 安装 NProgress 进度条组件：

   ```sh
   pnpm i nprogress
   pnpm i -D @types/nprogress
   ```

2. 在 `src/utils` 目录中新建一个 `nprogress.ts` 文件：

   ```ts
   import NProgress from "nprogress";
   import "nprogress/nprogress.css";
   
   // 进度条
   NProgress.configure({
     // 动画方式
     easing: "ease",
     // 递增进度条的速度
     speed: 500,
     // 是否显示加载ico
     showSpinner: false,
     // 自动递增间隔
     trickleSpeed: 200,
     // 初始化时的最小百分比
     minimum: 0.3,
   });
   
   export default NProgress;
   ```

### [Animate.css](https://animate.style/) 动画库集成

1. 安装 Animate.css 动画库：`pnpm i animate.css`

2. 在 `main.ts` 文件中引入 Animate.css 动画库：`import 'animate.css'`

3. 基础使用：将 `animate__animated` 类添加到元素中，同时添加任何[动画名称](https://animate.style/#attention_seekers)(不要忘记 `animate__` 前缀！)

   ```html
   <h1 class="animate__animated animate__bounce">An animated element</h1>
   
   <transition enter-active-class="animate__animated animate__fadeInLeft"></transition>
   ```

### [环境变量与模式](https://vitejs.cn/vite3-cn/guide/env-and-mode.html#env-files)

1. 在项目根目录下创建 `.env.development` 文件：

   ```
   # 变量必须以 VITE_ 为前缀才能暴露给外部读取
   
   ## 开发环境
   NODE_ENV='development'
   # 代理前缀
   VITE_APP_BASE_API = '/api'
   # 接口地址
   VITE_APP_API_URL=http://localhost:8800
   # 请求超时时间
   VITE_APP_API_TIMEOUT=50000
   ```

2. TypeScript 的智能提示：在 `env.d.ts` 文件中按下面这样增加 `ImportMetaEnv` 的定义：

   ```ts {4-16}
   /// <reference types="vite/client" />
   /// <reference types="vite-svg-loader" />
   
   interface ImportMetaEnv {
     /** API 基础路径(代理前缀) */
     readonly VITE_APP_BASE_API: string
     /** API 地址 */
     readonly VITE_APP_API_URL: string
     /** 请求超时时间 */
     readonly VITE_APP_API_TIMEOUT: number
     // 更多环境变量...
   }
   
   interface ImportMeta {
     readonly env: ImportMetaEnv
   }
   ```

### [VueUse](https://www.vueusejs.com/) 集成

VueUse 是基于 Vue 组合式 API 的实用工具集，如 `useStorage` 函数可以实现状态持久化存储（localStorage|SessionStorage）；`useFullscreen` 函数可以非常方便地实现全屏模式，等等。

1. 安装 `pnpm i @vueuse/core` 插件

2. 通过 `unplugin-auto-import` 插件实现自动导入 VueUse 相关函数，修改 `vite.config.ts` 配置文件

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
           dts: resolve(pathSrc, 'typings', 'auto-imports.d.ts')
         }),
       // ...
     ]
   })
   ```



## 登录功能

用户登录流程：跳转到登录页，填写登录表单，等表单校验通过之后就可以向后端发起登录请求，将表单中的用户名和密码作为请求参数传递给后端，登录成功之后将后端返回的 token 进行持久化存储，然后跳转到首页。

### [axios](https://www.axios-http.cn/) 二次封装

1. 安装 axios：`pnpm i axios`
2. 在 `src` 目录下创建一个 `utils/request.ts` 文件，用于创建 axios 实例以及添加请求和响应拦截器。
3. 对于后端返回的数据定义一个统一的响应结果类型 `Result` 进行接收。

::: code-group

```ts [src/utils/request.ts]
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import router from '@/router'
import { useUserStoreHook } from '@/stores'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: import.meta.env.VITE_APP_API_TIMEOUT,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const token = useUserStoreHook().token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const defaultErrorMessage = '发生了一些错误，请联系管理员'
// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 统一处理接口响应错误，如 token 过期无效，服务端异常等
    const { code, msg } = response.data
    if (code === '00000') {
      return response.data
    }
    // 响应数据为二进制流处理(Excel导出)
    if (response.data instanceof ArrayBuffer) {
      return response
    }
    ElMessage.error(msg || defaultErrorMessage)
    return Promise.reject(msg || defaultErrorMessage)
  },
  async function (error) {
    if (error.response?.data) {
      const { code, msg } = error.response.data
      // token 过期，重新登录
      if (code === 'A0230') {
        const res = await ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
        if (res === 'confirm') {
          // 清除 token & 跳转到登录页面 & 刷新页面
          await useUserStoreHook().resetToken()
          await router.replace({ path: '/login' })
          location.reload()
        }
      } else {
        ElMessage.error(msg || defaultErrorMessage)
      }
      return Promise.reject(msg || defaultErrorMessage)
    }
    ElMessage.error(defaultErrorMessage)
    return Promise.reject(error.message)
  }
)

const request = <T>(config: AxiosRequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    service<T, Result<T>>(config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const get = <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
  return request<T>({
    url,
    method: 'GET',
    params,
    ...config
  })
}

const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
  return request<T>({
    url,
    method: 'POST',
    data,
    ...config
  })
}

export { request, get, post }
export default service
```

```ts [src/typings/global.d.ts]
declare global {
  /**
   * 统一响应结构体
   */
  interface Result<T> {
    /**
     * 响应码
     */
    code: string
    /**
     * 响应消息
     */
    msg: string
    /**
     * 响应数据
     */
    data: T
  }
}
export {}
```

:::

### 登录接口

定义用户登录请求参数和响应结果类型，并且利用二次封装的 axios 发送登录请求给后端。

::: code-group

```ts [src/api/auth/index.ts]
import { post } from '@/utils/request'
import type { LoginRequest, LoginResult } from '@/api/auth/types'

/**
 * 用户登录
 * @param loginRequest 用户登录请求参数
 */
export const loginApi = (loginRequest: LoginRequest) => {
  return post<LoginResult>('/auth/login', loginRequest)
}
```

```ts [src/api/auth/types.ts]
/**
 * 用户登录请求参数
 */
export interface LoginRequest {
  /**
   * 用户名
   */
  username: string
  /**
   * 密码
   */
  password: string
}

/**
 * 用户登录响应
 */
export interface LoginResult {
  /**
   * 访问token
   */
  accessToken: string
}
```

:::

### [pinia](https://pinia.vuejs.org/zh/) 状态存储

为了记住用户登录成功时后端返回的访问令牌 token，咱们需要创建一个专门用于存储用户状态信息的 `userStore`。

1. 在 `src/stores` 目录下创建一个 `modules` 文件夹，以后不同模块功能的状态存储文件都放在该文件夹下。
2. 在 `src/stores` 目录下新建一个 `index.ts` 文件，
   1. 创建并导出 pinia 实例
   2. 定义并导出全局注册 pinia 实例的函数，
   3. 集中统一导出各个模块
3. 在 `main.ts` 文件中全局注册 pinia

::: code-group

```ts [src/stores/modules/user.ts]
import type { LoginRequest } from '@/api/auth/types'
import { loginApi } from '@/api/auth'
import { store } from '@/stores'

export const useUserStore = defineStore('user', () => {
  // 使用 VueUse 中的 useStorage 函数将 token 保存到 localStorage 中
  const token = useStorage('token', '')

  /**
   * 登录
   * @param loginRequest 用户登录请求参数
   */
  const login = (loginRequest: LoginRequest) => {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginRequest)
        .then(({ accessToken }) => {
          token.value = accessToken
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * 清除token
   */
  const resetToken = () => {
    return new Promise<void>((resolve) => {
      token.value = ''
      resolve()
    })
  }

  return { token, login, resetToken }
})

// 非setup
export const useUserStoreHook = () => {
  return useUserStore(store)
}
```

```ts [src/stores/index.ts]
import type { App } from 'vue'

const store = createPinia()

// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(store)
}

export * from './modules/user'
export { store }
```

```ts [src/main.ts]
import '@/styles/index.scss'
import 'normalize.css/normalize.css'

import App from './App.vue'
import router from '@/router'
import { setupStore } from '@/stores'

const app = createApp(App)

app.use(createPinia()) // [!code --]
// 全局注册store状态管理 // [!code ++]
setupStore(app) // [!code ++]

app.use(router).mount('#app')
```

:::

### 登录&首页组件

1. 创建登录组件并进行样式完善
2. 创建首页组件
3. 路由配置

::: code-group

```vue
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import type { LoginRequest } from '@/api/auth/types'
import { useUserStore } from '@/stores'
import type { LocationQuery, LocationQueryValue } from 'vue-router'

const loginFormRef = ref<FormInstance>()
const loginForm = reactive<LoginRequest>({
  username: 'admin',
  password: '123456'
})
const rules = reactive<FormRules<typeof loginForm>>({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
})
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const handleLogin = () => {
  loginFormRef.value?.validate(async (valid: boolean) => {
    if (!valid) return false
    loading.value = true
    useUserStore()
      .login(loginForm)
      .then(async () => {
        ElMessage.success('登录成功，欢迎回来！')
        const query: LocationQuery = route.query
        const redirect = (query.redirect as LocationQueryValue) ?? '/'
        await router.push({ path: redirect })
      })
      .finally(() => (loading.value = false))
  })
}
</script>

<template>
  <div
    class="h-screen w-screen flex justify-center items-center bg-gray-100 bg-[url('@/assets/images/background.svg')]"
  >
    <div class="login-wrapper w-96 p-2 m-4 bg-white shadow-xl rounded flex flex-col items-center">
      <div class="title font-bold text-xl m-2">simple 后台管理系统</div>
      <div class="p-6 w-full">
        <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model.trim="loginForm.username" placeholder="请输入用户名">
              <template #prefix>
                <i-ep-user />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              placeholder="请输入密码"
              show-password
              type="password"
            >
              <template #prefix>
                <i-ep-lock />
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button :loading="loading" class="w-full mt-2" type="primary" @click="handleLogin">
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

```

```vue [src/views/home/index.vue]
<template>首页</template>
```

```ts [src/router/index.ts]
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

// 静态路由
const constantRoutes: RouteRecordRaw[] = [
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  { path: '/', name: 'home', component: () => import('@/views/home/index.vue') }
]

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 路由规则,
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
```

:::

### [反向代理解决跨域](https://vitejs.cn/vite3-cn/config/server-options.html#server-proxy)

浏览器同源策略: 协议、域名和端口都相同是同源，浏览器会限制非同源请求读取响应结果。

本地开发环境通过 `vite` 配置反向代理解决浏览器跨域问题，生产环境则是通过 `nginx` 配置反向代理。

::: code-group

```ts [vite.config.ts] {3,17-18,76-86}
import { resolve } from 'path'

import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '@': pathSrc
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
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
        dts: resolve(pathSrc, 'typings', 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            // 只启用 element-plus 图标集，其他图标库 https://icon-sets.iconify.design/
            enabledCollections: ['ep']
          })
        ],
        // 组件名称包含目录，防止同名组件冲突
        // directoryAsNamespace: true,
        // 指定自定义组件位置(默认:src/components)
        dirs: ['src/components', 'src/**/components'],
        // 指定自动导入组件TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
        dts: resolve(pathSrc, 'typings', 'components.d.ts')
        // dts: false
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(pathSrc, 'assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    server: {
      proxy: {
        /** 代理前缀为 /api 的请求  */
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 接口地址
          target: env.VITE_APP_API_URL,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    }
  }
})
```

:::

## 动态权限路由

全局导航守卫中的主要流程：

1. 判断用户是否已经登录？

   1. 如果已登录的话，判断将要访问的页面是不是登录页面？

      1. 如果是登录页面的话，则直接跳转到首页（因为用户已经登录，无需再次登录）；

      2. 如果不是登录页面的话，则需要根据 `hasDynamicRoutes` 变量判断是否已经从后端获取到动态路由并添加到 router 实例中？

         > [!note]
         >
         > 当用户刷新页面时：
         >
         > 1. `hasDynamicRoutes` 变量初始化成默认值 `false`
         > 2. Vue、Pinia、VueRouter 会重新实例化，从而导致 pinia 中存储的状态数据全部丢失（除访问令牌 token 之外，因为 token 已经进行持久化存储，所以重新实例化时 token 的初始值会从 localStorage 中读取），VueRouter 中已经添加的动态路由也会丢失，因此需要再重新请求一次后端，将用户的登录信息保存起来，将动态路由列表根据用户角色过滤转换之后保存起来并添加到 router 实例中。
         >
         > 如此可以解决用户刷新白屏的问题！

         1. 如果该变量为 `true` 的话，则说明已经从后端获取到动态路由并添加到 router 实例中，可以直接放行；
         2. 如果该变量为 `false` 的话，则需要进行以下两步：
            1. 发送获取登录用户详情的请求，将返回的当前登录用户详情信息，如用户名、昵称、角色列表、权限列表等保存起来；
            2. 发送获取路由列表的请求，将返回的动态路由列表根据当前登录用户的角色过滤转换之后保存起来，并且利用 `addRoute` 方法将获取到的动态路由添加到 router 实例中

   2. 如果未登录的话，则判断要跳转的页面是否在白名单中？

      1. 如果在白名单（如 `/login` 登录页面）中，则直接放行；
      2. 如果不在白名单中，则重定向到登录页面，并将要访问的页面路径作为参数，登录成功后自动跳转回原页面

::: code-group

```ts [src/plugins/modules/permission.ts]
import router from '@/router'
import NProgress from '@/utils/nprogress'
import type { RouteRecordRaw } from 'vue-router'
import { usePermissionStore, useUserStore } from '@/stores'

/**
 * 用于判断是否已拉取完用户信息和动态路由的标识，当用户刷新页面时，该标识会被重置为 false，在下一次访问路由时，会重新获取用户信息和动态路由
 */
let hasDynamicRoutes = false
/**
 * 参考花裤衩大佬的权限控制方案：https://github.com/PanJiaChen/vue-element-admin/blob/master/src/permission.js
 * 这一块有两个坑需要注意：
 * 1. 当用户刷新的时候，vue 会重新实例化 => vue-router 中添加的动态路由和 pinia 中存储的状态数据都会被清除掉，因此需要在刷新页面时重新获取用户信息和动态路由，并重新添加到路由表中
 * 2. vue-router 的路由模式需要设置为 hash history 模式，否则在手动输入 URL 时，页面会重新刷新，导致出现情况1中的问题，又重新走一遍发请求获取用户信息和添加动态路由的流程
 */
export const setupPermission = () => {
  // 白名单路由
  const whiteList = ['/login']

  router.beforeEach(async (to, from) => {
    NProgress.start()
    const { token, resetToken, getUserInfo } = useUserStore()
    if (token) {
      if (to.path === '/login') {
        // 在已登录的状态下，如果访问的是登录页面，则直接重定向到主页
        NProgress.done()
        return '/'
      } else {
        if (hasDynamicRoutes) {
          if (to.matched.length === 0) {
            // 如果访问的路由不存在，则重定向到404页面
            return from.name ? { name: from.name } : '/404'
          } else {
            // 用户已登录 && 已拉取完用户信息 && 访问的路由存在，则直接放行
            return true
          }
        } else {
          try {
            // 获取当前登录用户信息
            const { roles } = await getUserInfo()
            // 获取用户可访问的路由表
            const accessedRoutes = await usePermissionStore().generateRoutes(roles)
            // 动态添加可访问路由表
            accessedRoutes.forEach((route: RouteRecordRaw) => {
              router.addRoute(route)
            })
            hasDynamicRoutes = true
            // hack方法，路由添加进去之后不会马上生效，因此需要再次加载当前路由，即重新执行一遍全局前置守卫
            // 因为第一次进入全局前置守卫时路由表中还没有此时添加的动态路由，所以需要在添加完路由后重新加载当前路由以触发全局前置守卫
            return { ...to, replace: true }
          } catch (error) {
            // 如果拉取用户信息失败或动态路由失败，则清除token并重定向到登录页面
            await resetToken()
            NProgress.done()
            return `/login?redirect=${to.path}`
          }
        }
      }
    } else {
      // 在未登录状态下，如果访问的路由在白名单中，则直接放行
      if (whiteList.indexOf(to.path) !== -1) {
        return true
      } else {
        // 否则重定向到登录页面，并将要访问的页面路径作为参数，登录成功后自动跳转回原页面
        NProgress.done()
        return `/login?redirect=${to.path}`
      }
    }
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
```

```ts [src/plugins/index.ts]
export * from './modules/permission'
```

```ts [src/stores/modules/user.ts] {10-13,42-64,66}
import { getUserInfoApi } from '@/api/user'
import type { UserInfo } from '@/api/user/types'
import type { LoginRequest } from '@/api/auth/types'
import { loginApi, logoutApi } from '@/api/auth'
import { store } from '@/stores'

export const useUserStore = defineStore('user', () => {
  // 使用 VueUse 中的 useStorage 函数将 token 保存到 localStorage 中
  const token = useStorage('token', '')
  const userInfo = ref<UserInfo>({
    roles: [],
    permissions: []
  })

  /**
   * 登录
   * @param loginRequest 用户登录请求参数
   */
  const login = (loginRequest: LoginRequest) => {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginRequest)
        .then(({ accessToken }) => {
          token.value = accessToken
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * 清除token
   */
  const resetToken = () => {
    return new Promise<void>((resolve) => {
      token.value = ''
      resolve()
    })
  }

  /**
   * 获取当前登录用户信息
   */
  const getUserInfo = () => {
    return new Promise<UserInfo>((resolve, reject) => {
      getUserInfoApi()
        .then((res) => {
          if (!res) {
            reject('Verification failed, please Login again.')
            return
          }
          if (!res.roles || res.roles.length <= 0) {
            reject('getUserInfo: roles must be a non-null array!')
            return
          }
          userInfo.value = res
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  return { token, userInfo, login, resetToken, getUserInfo }
})

// 非setup
export const useUserStoreHook = () => {
  return useUserStore(store)
}
```

```ts [src/api/user/index.ts]
import { get } from '@/utils/request'
import type { UserInfo } from '@/api/user/types'

/**
 * 获取当前登录用户信息（包括用户昵称、头像、角色和权限集合等）
 */
export const getUserInfoApi = () => {
  return get<UserInfo>('/sys/user/me')
}
```

```ts [src/api/user/types.ts]
/**
 * 登录用户信息
 */
export type UserInfo = {
  /** 用户ID（可选）*/
  userId?: number //
  /** 用户名（可选）*/
  username?: string
  /** 用户昵称（可选）*/
  nickname?: string
  /** 用户头像（可选）*/
  avatar?: string
  /** 用户角色列表 */
  roles: string[]
  /** 用户权限列表 */
  permissions: string[]
}
```

```ts [src/stores/modules/permission.ts]
import type { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '@/router'
import { listRoutesApi } from '@/api/menu'
import { store } from '@/stores'

const Layout = () => import('@/layout/index.vue')
const modules = import.meta.glob('../../views/**/*.vue')

/**
 * 根据用户角色列表判断是否有权限访问该路由
 * @param roles
 * @param route
 */
const hasPermission = (roles: string[], route: RouteRecordRaw): boolean => {
  if (route.meta && route.meta.roles) {
    // 角色【超级管理员】拥有所有权限，忽略校验
    if (roles.includes('ROOT')) {
      return true
    }
    return roles.some((role) => {
      if (route.meta?.roles) {
        return route.meta.roles.includes(role)
      }
    })
  }
  return false
}

/**
 * 根据用户角色递归过滤出有权限访问的路由
 * @param dynamicRoutes 接口返回的动态路由列表
 * @param roles 角色列表
 */
const filterDynamicRoutes = (
  dynamicRoutes: RouteRecordRaw[],
  roles: string[]
): RouteRecordRaw[] => {
  const accessedRoutes: RouteRecordRaw[] = []
  dynamicRoutes.forEach((route) => {
    // 使用 ES6 的扩展运算符复制一份 route 对象，防止修改原对象
    const tempRoute = { ...route }
    if (!tempRoute.name) {
      tempRoute.name = tempRoute.path
    }
    if (hasPermission(roles, tempRoute)) {
      // 后端返回的路由中，component 属性是字符串，需要转换成 () => import() 形式
      if (tempRoute.component?.toString() === 'Layout') {
        tempRoute.component = Layout
      } else {
        const component = modules[`../../views/${tempRoute.component}.vue`]
        if (component) {
          tempRoute.component = component
        } else {
          tempRoute.component = modules[`../../views/error-page/404.vue`]
        }
      }

      if (tempRoute.children) {
        tempRoute.children = filterDynamicRoutes(tempRoute.children, roles)
      }

      accessedRoutes.push(tempRoute)
    }
  })
  return accessedRoutes
}

export const usePermissionStore = defineStore('permission', () => {
  /**
   * 路由列表 = 静态路由 + 动态路由
   */
  const routes = ref<RouteRecordRaw[]>([])

  /**
   * 添加动态路由
   * @param dynamicRoutes 动态路由
   */
  const addRoutes = (dynamicRoutes: RouteRecordRaw[]) => {
    routes.value = constantRoutes.concat(dynamicRoutes)
  }

  /**
   * 生成动态路由
   * @param roles 角色列表
   */
  const generateRoutes = (roles: string[]) => {
    return new Promise<RouteRecordRaw[]>((resolve, reject) => {
      listRoutesApi()
        .then((dynamicRoutes) => {
          const accessedRoutes = filterDynamicRoutes(dynamicRoutes, roles)
          addRoutes(accessedRoutes)
          resolve(accessedRoutes)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  return { routes, addRoutes, generateRoutes }
})

// 非setup
export const usePermissionStoreHook = () => {
  return usePermissionStore(store)
}
```

```ts [src/stores/index.ts] {11}
import type { App } from 'vue'

const store = createPinia()

// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(store)
}

export * from './modules/user'
export * from './modules/permission'
export { store }
```

```ts [src/api/menu/index.ts]
import { get } from '@/utils/request'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 获取路由列表
 */
export const listRoutesApi = () => {
  return get<RouteRecordRaw[]>('/sys/menu/routes')
}
```

```ts [src/typings/router.d.ts]
import 'vue-router'

declare module 'vue-router' {
  // https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
  // 可以通过扩展 RouteMeta 接口来输入 meta 字段
  interface RouteMeta {
    /** 菜单名称 */
    title?: string
    /** 菜单图标  */
    icon?: string
    /** 菜单是否隐藏 */
    hidden?: boolean
    /** 拥有该菜单权限的角色编码集合 */
    roles?: string[]
    /** 【菜单】是否缓存页面 */
    keepAlive?: boolean
    /** 【目录】只有一个子菜单时是否始终显示 */
    alwaysShow?: boolean
    /** 是否固定页签 */
    affix?: boolean
    /** 是否在面包屑上隐藏 */
    breadcrumb?: boolean
  }
}
export {}
```

:::

## 整体布局

借助 ElementPlus 的 [Container 布局容器](https://element-plus.org/zh-CN/component/container.html)实现布局，创建 Layout 组件作为专门的布局组件，如下所示：

::: code-group

```vue [src/layout/index.vue]
<script lang="ts" setup>
defineOptions({
  name: 'Layout'
})
</script>

<template>
  <el-container class="w-screen h-screen">
    <el-aside class="bg-[#344157]" width="200px">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="!px-0" height="50px">
        <el-row>
  				<NavBar />
  			</el-row>
      </el-header>
      <el-main class="bg-[#eef5ff]">
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/Sidebar/index.vue]
<script lang="ts" setup>
defineOptions({
  name: 'Sidebar'
})
</script>

<template>Aside</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/NavBar/index.vue]
<script lang="ts" setup>
defineOptions({
  name: 'NavBar'
})
</script>

<template>
  <!-- 顶部导航栏 -->
  <div class="h-full w-full bg-white flex items-center justify-between">Header</div>
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/AppMain/index.vue]
<script lang="ts" setup>

defineOptions({
  name: 'AppMain'
})

const cachedViews = ref<string[]>([])
</script>

<template>
  <section class="w-full h-full">
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </template>
    </router-view>
  </section>
</template>

<style lang="scss" scoped></style>
```

```vue [src/views/home/index.vue]
<script lang="ts" setup></script>

<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <div class="mt-4 flex items-center">
    <i-ep-user />
    <el-icon :size="50" color="#1976D2">
      <i-ep-edit />
    </el-icon>
    <svg-icon icon-class="system" size="50" />
    <svg-icon icon-class="user" size="50" />
    <svg-icon icon-class="role" size="50" />
    <svg-icon icon-class="menu" size="50" />
  </div>
</template>

<style lang="scss" scoped></style>
```

:::

呈现效果如下所示：<br />![image-20240425115331542](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404251153801.png)

## 侧边栏

通过当前用户所拥有的全部路由 = 静态路由 + 动态路由，数据已保存在 `permissionStore` 中 => 侧边栏中的目录和菜单项，并且对于目录而言，还需要进行递归处理。

::: code-group

```vue [src/layout/index.vue] {2,8,14-15}
<script lang="ts" setup>
import { useAppStore } from '@/stores'

defineOptions({
  name: 'Layout'
})

const appStore = useAppStore()
</script>

<template>
  <el-container class="w-screen h-screen">
    <el-aside
      :width="appStore.sidebar.opened ? '200px' : '64px'"
      class="bg-[#344157] transition-[width] duration-[0.3s] ease-in-out"
    >
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="!px-0" height="50px">
        <el-row>
  				<NavBar />
  			</el-row>
      </el-header>
      <el-main class="bg-[#eef5ff]">
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/Sidebar/index.vue]
<script lang="ts" setup>
import { usePermissionStore } from '@/stores'

defineOptions({
  name: 'Sidebar'
})

const permissionStore = usePermissionStore()
</script>

<template>
  <SidebarLogo />
  <SidebarMenu :menu-list="permissionStore.routes" base-path="" />
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/Sidebar/components/SidebarLogo.vue]
<script lang="ts" setup>
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const collapsed = computed(() => !appStore.sidebar.opened)
</script>

<template>
  <div class="w-full h-[50px] bg-[#2f3749]">
    <transition enter-active-class="animate__animated animate__fadeInLeft">
      <router-link v-if="collapsed" class="w-full h-full flex items-center justify-center" to="/">
        <img alt="logo" class="w-[20px] h-[20px]" src="@/assets/logo.svg" />
      </router-link>
      <router-link v-else class="w-full h-full flex items-center justify-center" to="/">
        <img alt="logo" class="w-[20px] h-[20px]" src="@/assets/logo.svg" />
        <span class="flex-shrink-0 ml-[10px] text-[16px] font-bold text-white">simple-admin</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/Sidebar/components/SidebarMenu.vue]
<script lang="ts" setup>
import { useAppStore } from '@/stores'
import type { RouteRecordRaw } from 'vue-router'
import { resolvePath } from '@/utils'

const appStore = useAppStore()
const route = useRoute()

withDefaults(
  defineProps<{
    menuList: RouteRecordRaw[]
    basePath: string
  }>(),
  {
    menuList: () => []
  }
)
</script>

<template>
  <div class="sidebar-menu">
    <el-scrollbar height="calc(100vh - 50px)">
      <el-menu
        :collapse="!appStore.sidebar.opened"
        :collapse-transition="false"
        :default-active="route.path"
        :unique-opened="false"
        background-color="#304156"
        text-color="#bfcbd9"
      >
        <SidebarMenuItem
          v-for="item in menuList"
          :key="item.path"
          :basePath="resolvePath(item.path, basePath)"
          :item="item"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
```

```vue [src/layout/Sidebar/components/SidebarMenuItem.vue]
<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import { resolvePath } from '@/utils'

const props = defineProps<{
  /**
   * 路由(eg:user)
   */
  item: RouteRecordRaw
  /**
   * 父层级完整路由路径(eg:/system)
   */
  basePath: string
}>()

const onlyOneChild = ref<RouteRecordRaw & { noShowingChildren?: boolean }>()
/**
 * 判断当前路由是否只具有一个显示的子路由
 * 1. 如果当前路由下只有一个显示的子路由，则返回true
 * 2. 如果当前路由下没有显示的子路由，则显示当前路由并返回true
 * 3. 如果当前路由下有多个显示的子路由，则返回false
 * @param current 当前路由
 * @returns 是否只具有一个显示的子路由
 */
const hasOneShowingChild = computed(() => {
  const children = props.item.children || []
  // 显示的子路由集合
  const showingChildren = children.filter((route) => {
    if (route.meta?.hidden) {
      // 过滤不显示的子路由
      return false
    } else {
      // 用于存储当前路由的单个显示子路由，如果存在多个显示子路由，则该变量不会被用到
      onlyOneChild.value = route
      return true
    }
  })
  // 如果当前路由下只有一个显示的子路由，则返回true
  if (showingChildren.length == 1) {
    return true
  }
  // 如果当前路由下没有显示的子路由，则显示当前路由
  if (showingChildren.length == 0) {
    onlyOneChild.value = { ...props.item, path: '', noShowingChildren: true }
    return true
  }
  return false
})
</script>

<template>
  <template v-if="!item.meta || !item.meta.hidden">
    <!-- 只有一个显示的子路由 || 没有子路由的菜单项 -->
    <template
      v-if="
        hasOneShowingChild &&
        (!onlyOneChild?.children || onlyOneChild.noShowingChildren) &&
        !item.meta?.alwaysShow
      "
    >
      <AppLink v-if="onlyOneChild?.meta" :to="resolvePath(onlyOneChild.path, basePath)">
        <el-menu-item :index="resolvePath(onlyOneChild.path, basePath)">
          <el-icon>
            <template v-if="onlyOneChild.meta.icon && onlyOneChild.meta.icon.startsWith('el-icon')">
              <component :is="onlyOneChild.meta.icon.replace('el-icon-', '')" />
            </template>
            <svg-icon v-else-if="onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon" />
            <svg-icon v-else icon-class="menu" />
          </el-icon>
          <template #title>{{ onlyOneChild.meta.title }}</template>
        </el-menu-item>
      </AppLink>
    </template>

    <!-- 显示具有多个子路由的父菜单项 -->
    <el-sub-menu v-else :index="resolvePath(item.path, basePath)" teleported>
      <template #title>
        <el-icon>
          <template v-if="item.meta?.icon && item.meta.icon.startsWith('el-icon')">
            <component :is="item.meta.icon.replace('el-icon-', '')" />
          </template>
          <svg-icon v-else-if="item.meta?.icon" :icon-class="item.meta.icon" />
          <svg-icon v-else icon-class="menu" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <SidebarMenuItem
        v-for="child in item.children"
        :key="child.path"
        :base-path="resolvePath(child.path, basePath)"
        :item="child"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
```

```ts [src/utils/index.ts]
import path from 'path-browserify'

/**
 * 检查路径是否为外部链接
 * @param path 要检查的路径
 * @returns 如果是外部链接，则为 true，否则为 false
 */
export const isExternal = (path: string) => {
  return /^(https?:|http?:|mailto:|tel:)/.test(path)
}

/**
 * 解析路由路径（相对路径 -> 绝对路径）
 * @param routePath 路由路径
 * @param basePath 父路由路径
 * @returns 解析后的绝对路由路径
 */
export const resolvePath = (routePath: string, basePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  // 完整路由路径（/system/user）= 父路由路径（/system） + 当前路由路径（user）
  return path.resolve(basePath, routePath)
}
```

```ts [src/stores/modules/app.ts]
import { store } from '@/stores'
import { SidebarStatus } from '@/enums/SidebarStatus'

export const useAppStore = defineStore('app', () => {
  const sidebarStatus = useStorage('sidebarStatus', SidebarStatus.OPENED)

  const sidebar = reactive({
    opened: sidebarStatus.value === SidebarStatus.OPENED,
    withoutAnimation: false
  })

  const toggleSidebar = () => {
    sidebar.opened = !sidebar.opened
    sidebarStatus.value = sidebar.opened ? SidebarStatus.OPENED : SidebarStatus.CLOSED
  }

  const closeSidebar = () => {
    sidebar.opened = false
    sidebarStatus.value = SidebarStatus.CLOSED
  }

  const openSidebar = () => {
    sidebar.opened = true
    sidebarStatus.value = SidebarStatus.OPENED
  }

  return {
    sidebar,
    toggleSidebar,
    closeSidebar,
    openSidebar
  }
})

// 手动提供给 useStore() 函数 pinia 实例
// https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
export function useAppStoreHook() {
  return useAppStore(store)
}
```

```ts [src/stores/index.ts] {12}
import type { App } from 'vue'

const store = createPinia()

// 全局注册 store
export function setupStore(app: App<Element>) {
  app.use(store)
}

export * from './modules/user'
export * from './modules/permission'
export * from './modules/app'
export { store }
```

:::

呈现效果如下所示：<br />![image-20240425121642684](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404251216916.png)

## 顶部导航栏

在该区域存在用于折叠展开侧边栏的按钮，指示当前所处页面路径的面包屑，用于进入全屏模式的按钮以及展示当前登录信息的头像和名称部分（点击该部分可以实现用户注销登出操作）。

::: code-group

```vue [src/layout/NavBar/index.vue] {10-13}
<script lang="ts" setup>
defineOptions({
  name: 'NavBar'
})
</script>

<template>
  <!-- 顶部导航栏 -->
  <div class="h-full w-full bg-white flex items-center justify-between">
    <!--  左侧导航栏  -->
    <NavBarLeft />
    <!--  右侧导航栏  -->
    <NavBarRight />
  </div>
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/NavBar/components/NavBarLeft.vue]
<script lang="ts" setup>
import { useAppStore } from '@/stores'

const appStore = useAppStore()
</script>

<template>
  <div class="flex items-center">
    <Hamburger :is-active="appStore.sidebar.opened" @toggle-click="appStore.toggleSidebar" />
    <Breadcrumb />
  </div>
</template>

<style lang="scss" scoped></style>
```

```vue [src/components/Hamburger/index.vue]
<script lang="ts" setup>
defineProps<{
  isActive: boolean
}>()

defineEmits<{
  (e: 'toggleClick'): void
}>()
</script>

<template>
  <div
    class="px-[15px] flex items-center justify-center color-[var(--el-text-color-regular)]"
    @click="$emit('toggleClick')"
  >
    <svg-icon :class="{ 'is-active': isActive }" class="hamburger" icon-class="indent-decrease" />
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  vertical-align: middle;
  cursor: pointer;
  transform: scaleX(-1);
}

.hamburger.is-active {
  transform: scaleX(1);
}
</style>
```

```vue [src/components/Breadcrumb/index.vue]
<script lang="ts" setup>
import type { RouteLocationMatched } from 'vue-router'
import { compile } from 'path-to-regexp'

const breadcrumbs = ref<RouteLocationMatched[]>([])
const route = useRoute()
const router = useRouter()

onBeforeMount(() => {
  getBreadcrumbs()
})

watch(
  () => route.path,
  (path) => {
    if (path.startsWith('/redirect')) return
    getBreadcrumbs()
  }
)

/**
 * 根据当前路由信息获取面包屑数据
 */
const getBreadcrumbs = () => {
  const matched = route.matched.filter((item) => item.meta && item.meta.title)
  const first = matched[0]
  if (first && !isHome(first)) {
    matched.unshift({ path: '/home', meta: { title: '首页' } } as any)
  }
  breadcrumbs.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
}

/**
 * 判断是否为首页
 * @param route 路由信息
 */
const isHome = (route: RouteLocationMatched) => {
  const name = route.name
  if (!name) return false
  return name.toString().trim().toLocaleLowerCase() === 'home'.toLocaleLowerCase()
}

const pathCompile = (path: string) => {
  const { params } = route
  const toPath = compile(path)
  return toPath(params)
}

const handleClick = (item: RouteLocationMatched) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect.toString()).catch((err) => {
      console.warn(err)
    })
    return
  }
  router.push(pathCompile(path)).catch((err) => {
    console.warn(err)
  })
}
</script>

<template>
  <el-breadcrumb class="!inline-block !text-[14px] !leading-[50px] !ml-[8px]">
    <transition-group enter-active-class="animate__animated animate__fadeInRight">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span
          v-if="item.redirect === 'noredirect' || index === breadcrumbs.length - 1"
          class="!font-normal !color-[#97a8be] !cursor-text"
        >
          {{ item.meta.title }}
        </span>
        <a v-else class="!font-semibold" @click.prevent="handleClick(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
```

```vue [src/layout/NavBar/components/NavBarRight.vue]
<script lang="ts" setup>
import { useUserStore } from '@/stores'

const { isFullscreen, toggle } = useFullscreen()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

/**
 * 注销登出
 */
const logout = () => {
  ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    lockScroll: false
  }).then(async () => {
    await userStore.logout()
    await router.push(`/login?redirect=${route.fullPath}`)
  })
}
</script>

<template>
  <div>
    <!--全屏 -->
    <div class="setting-item" @click="toggle">
      <svg-icon :icon-class="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
    </div>

    <!-- 用户头像 -->
    <el-dropdown class="setting-item" trigger="click">
      <div class="flex items-center justify-center h-full p-[10px]">
        <el-avatar :src="userStore.userInfo.avatar" class="mr-[5px]" />
        <span>{{ userStore.userInfo.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon>
              <IEpInfoFilled />
            </el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon>
              <IEpUnlock />
            </el-icon>
            <span>修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click="logout">
            <el-icon>
              <IEpCircleClose />
            </el-icon>
            <span>注销登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.setting-item {
  @apply inline-block min-w-[40px] h-[50px] leading-[50px] text-center cursor-pointer hover:bg-black hover:bg-opacity-10;
}

:deep(.el-dropdown-menu__item) {
  line-height: 36px !important;
  padding: 6px 22px;
}
</style>
```

```ts [src/stores/modules/user.ts] {66-81,83}
import { getUserInfoApi } from '@/api/user'
import type { UserInfo } from '@/api/user/types'
import type { LoginRequest } from '@/api/auth/types'
import { loginApi, logoutApi } from '@/api/auth'
import { store } from '@/stores'

export const useUserStore = defineStore('user', () => {
  // 使用 VueUse 中的 useStorage 函数将 token 保存到 localStorage 中
  const token = useStorage('token', '')
  const userInfo = ref<UserInfo>({
    roles: [],
    permissions: []
  })

  /**
   * 登录
   * @param loginRequest 用户登录请求参数
   */
  const login = (loginRequest: LoginRequest) => {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginRequest)
        .then(({ accessToken }) => {
          token.value = accessToken
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * 清除token
   */
  const resetToken = () => {
    return new Promise<void>((resolve) => {
      token.value = ''
      resolve()
    })
  }

  /**
   * 获取当前登录用户信息
   */
  const getUserInfo = () => {
    return new Promise<UserInfo>((resolve, reject) => {
      getUserInfoApi()
        .then((res) => {
          if (!res) {
            reject('Verification failed, please Login again.')
            return
          }
          if (!res.roles || res.roles.length <= 0) {
            reject('getUserInfo: roles must be a non-null array!')
            return
          }
          userInfo.value = res
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * 注销登出
   */
  const logout = () => {
    return new Promise<void>((resolve, reject) => {
      logoutApi()
        .then(() => {
          token.value = ''
          location.reload()
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  return { token, userInfo, login, resetToken, getUserInfo, logout }
})

// 非setup
export const useUserStoreHook = () => {
  return useUserStore(store)
}
```

```ts [src/api/auth/index.ts] {12-20}
import { post, request } from '@/utils/request'
import type { LoginRequest, LoginResult } from '@/api/auth/types'

/**
 * 用户登录
 * @param loginRequest 用户登录请求参数
 */
export const loginApi = (loginRequest: LoginRequest) => {
  return post<LoginResult>('/auth/login', loginRequest)
}

/**
 * 用户登出
 */
export const logoutApi = () => {
  return request<void>({
    url: '/auth/logout',
    method: 'DELETE'
  })
}
```

:::

呈现效果如下所示：<br />![image-20240425123146662](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404251231821.png)
