# 手绘风格的开源白板 Excalidraw 搭建教程

项目地址：[excalidraw/excalidraw: Virtual whiteboard for sketching hand-drawn like diagrams (github.com)](https://github.com/excalidraw/excalidraw)

![Product showcase](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181638702.png)

## 本地部署

1. 使用 `git clone git@github.com:excalidraw/excalidraw.git` 命令下载项目源码
2. 使用 `yarn` 命令下载依赖，

   在此过程中可能会出现如下错误：node 版本不匹配！<br />![image-20230817175312576](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181638161.png)

   那么该如何解决呢？使用 `yarn config set ignore-engines true ` 命令忽略错误即可！再次运行 `yarn` 命令下载依赖，如下所示：<br />![image-20230817175838256](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181638570.png)

3. 使用 `yarn start` 命令运行项目，如下所示：<br />![image-20230817175915831](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181638364.png)

   将会自动打开默认浏览器并访问 [http://127.0.0.1:3000/](http://127.0.0.1:3000/)，效果如下所示：<br />![image-20230817180105246](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181638117.png)

至此，Excalidraw 本地部署就圆满完成啦！🎉🎉🎉

## 添加字体

1. 下载字体 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai)，进入 [Release](https://github.com/lxgw/LxgwWenKai/releases) 界面下载对应版本的 TTF 格式文件，<br />![image-20230817182200256](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181638680.png)
2. 将刚才下载的霞鹜文楷字体 `LXGWWenKaiMono-Regular.ttf` 复制到 `public` 目录下：<br />![image-20230817182411810](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639417.png)
3. 注册字体：
   1. 编辑 `public/font.css` 文件，添加如下代码片段

      ```css
      @font-face {
        font-family: "LXGWWenKai";
        src: url("LXGWWenKaiMono-Regular.ttf");
        font-display: swap;
      }
      ```

      ![image-20230817190153133](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639339.png)

   2. 编辑 `src/index-node.ts` 文件，添加如下代码片段

      ```typescript
      registerFont("./public/LXGWWenKaiMono-Regular.ttf", { family: "LXGWWenKai" });
      ```

      ![image-20230817190048047](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639923.png)

4. 预加载字体资源，编辑 `index.html` 文件，在其中加入字体预加载代码，可以提高应用启动时的速度：

   ```html
   <link
         rel="preload"
         href="/LXGWWenKaiMono-Regular.ttf"
         as="font"
         type="font/ttf"
         crossorigin="anonymous"
       />
   ```

   ![image-20230817185925550](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639488.png)

5. 增加字体枚举，编辑 `src/constant.ts` 文件，在 `FONT_FAMILY` 常量中加入字体的枚举

   ```typescript
   export const FONT_FAMILY = {
     Virgil: 1,
     Helvetica: 2,
     Cascadia: 3,
     LXGWWenKai: 4,
   };
   ```

   ![image-20230817184604436](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639579.png)

6. 添加字体切换按钮，编辑 `/src/actions/actionProperties.tsx` 文件，在 `PanelComponent` 的返回值数组中加入下列元素

   ```tsx
   {
       value: FONT_FAMILY.LXGWWenKai,
       text: t("labels.handDrawn"),
       icon: FreedrawIcon,
   },
   ```

   ![image-20230817185803129](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639157.png)

7. 使用 `npm run start` 命令重新启动应用 <br />![image-20230817185518253](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308181639829.png)
