# 邂逅微信小程序

## 什么是微信小程序？

微信小程序是一种不需要下载安装即可使用的应用，<strong style="color:#ae3520;">它依托于微信平台</strong>，用户只需在微信内扫一扫或搜一下就可以打开应用。微信小程序实现了应用的触手可及，即用即走的理念，用户不再需要担心是否安装太多应用的问题。开发者可以快速地开发一个小程序，并通过微信平台发布，为用户提供服务。

微信小程序具有以下特点：

1. **轻量级**：相比于传统的APP，微信小程序体积更小，启动更快，而且简化了功能，使用户能够快速使用。
2. **易分享**：由于运行在微信内部，小程序可以通过聊天窗口、朋友圈等途径方便地进行分享。
3. **开发便捷**：支持多种编程语言（如JavaScript）和工具，降低了开发门槛，同时微信提供了丰富的API接口，便于实现各种功能。
4. **无需安装**：用户不需下载安装，只需在微信中搜索或扫描二维码即可打开使用。

微信小程序适用于多种场景，例如电商购物、餐饮外卖、生活服务、资讯阅读等。自 2017 年 1 月 9 日微信正式推出小程序以来，它已经成为移动互联网生态中的重要组成部分。

## 注册微信小程序账号

小程序开发与网页开发有所不同。在开始微信小程序开发之前，你需要访问[微信公众平台](https://mp.weixin.qq.com/)，并注册一个微信小程序账号。拥有小程序账号后，你便可以着手开发和管理小程序。通过这个账号，你可以设置开发信息、添加团队成员，并查看和运营小程序的相关数据。

注册微信小程序账号的流程相对简单，以下是基本步骤：

1. **访问[微信公众平台](https://mp.weixin.qq.com)网站**；
2. **开始注册**：如果你还没有微信公众平台的账号，请点击右上角的 “立即注册”。<br />![image-20240804110800853](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041108950.png)
3. **选择账号类型**：在 “账户类型” 页面中，选择 “小程序”。<br />![image-20240804111017635](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041110716.png)
4. **前往注册**：点击 “前往注册”，进入下一步。<br />![image-20240804111356833](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041113901.png)
5. **填写账号信息**：请填写<strong style="color:#ae3520;">未注册过公众平台、开放平台、企业号、未绑定个人号的邮箱</strong>和设定一个登录密码，点击 “注册”。<br />![image-20240804112553079](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041125150.png)
6. **邮箱激活**：提交成功后，系统会给你提供的邮箱发送一封确认邮件，点击 “登录邮箱”，登录你的邮箱并点击邮件中的激活链接来确认注册。<br />![image-20240804112737284](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041127347.png)![image-20240804113105487](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041131537.png)
7. **用户信息登记**：注册国家/地区选择 “中国大陆”；主体类型选择 “个人”，如果选择其他的（如企业）需要进行资质认证。<br />![image-20240804114612282](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041146339.png)
8. **主体信息登记**：根据你选择的主体类型，提供相应的资料，例如企业的营业执照、组织机构代码证等。对于企业或个体商户，可能还需要进行微信认证，这通常需要支付300元人民币的认证费用。<br />![image-20240804114946424](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041149471.png)![image-20240804115051703](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041150742.png)
9. **进入小程序管理后台**：小程序注册成功之后，点击 “前往小程序”，即可进入小程序管理后台。<br />![image-20240804115231934](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041152969.png)![image-20240804115500037](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041155114.png)

## 完善小程序账号信息

完善微信小程序账号信息是确保你的小程序能够顺利上线并被用户发现的重要步骤。下面是完善小程序账号信息的基本流程：

1. **登录微信小程序管理后台**：访问[微信公众平台](https://mp.weixin.qq.com)网站，你可以使用注册时使用的邮箱以及密码进行登录或者打开手机微信扫一扫进行扫码登录。<br />![image-20240804132718723](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041327811.png)

2. **完善小程序的基本信息**：进入微信小程序管理后台后，左侧菜单栏中选择 “首页” ➡️ 小程序发布流程 ➡️ 小程序信息部分，点击 “去填写”，即可补充小程序的基本信息，如名称、图标、描述等，填写完成之后点击 “提交” 即可。<br />![image-20240804133604417](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041336497.png)

   ![image-20240804155427588](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041554683.png)

3. **完善小程序的类目信息**：进入微信小程序管理后台后，左侧菜单栏中选择 “首页” ➡️ 小程序发布流程 ➡️ 小程序类目部分，点击 “去补充”，即可补充小程序的服务类目，设置主营类目。<br />![image-20240804160723170](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041607240.png)

   > [!note]
   >
   > 在填写小程序类目时<strong style="color:#ae3520;font-size:18px;">不要选择游戏类型</strong>，否则微信官方将会视为小游戏开发!

   ![image-20240804161712921](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041617991.png)

   ![image-20240804161740727](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041617794.png)

4. **修改小程序账号信息**：进入微信小程序管理后台后，左侧菜单栏中选择 “设置” ➡️ 基本设置，在这里你可以修改小程序之前填写过的基本信息。<br />![image-20240804162706465](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041627569.png)

## 小程序成员管理

> 参考自 [小程序成员管理](https://kf.qq.com/faq/170302zeQryI170302beuEVn.html)

小程序成员管理包括对小程序项目成员及体验成员的管理。

项目成员：表示参与小程序开发、运营的成员，可登陆小程序管理后台，包括运营者、开发者及数据分析者。管理员可在 “成员管理” 中添加、删除项目成员，并设置项目成员的角色。

体验成员：表示参与小程序内测体验的成员，可打开体验版小程序，但不属于项目成员。管理员、项目成员均可添加、删除体验成员。项目成员如需为体验成员开启「查看开发版」的权限，需管理员扫码同意并确认。

以添加项目成员为例，[微信小程序管理后台](https://mp.weixin.qq.com) ➡️ 管理 ➡️ 成员管理 ➡️ 项目成员 ➡️ 点击 “添加” 按钮。<br />![image-20240804173449497](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041734566.png)![image-20240804173653873](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041736961.png)

## 小程序开发者ID

一个完整的开发者 ID 由 AppID（小程序 ID）和 AppSecret（小程序密钥）两部分组成。

**APPID**：

- **定义**：APPID 是每个微信小程序项目的唯一标识符。
- **用途**：用于唯一标识一个小程序项目，是小程序调用微信接口时的身份凭证。

**AppSecret**：

- **定义**：AppSecret 是与 APPID 配套使用的安全密钥，用于确保 API 调用的安全性。
- **用途**：用于生成 API 请求中的签名，防止 API 被未授权的第三方访问。

这两个值对于微信小程序的正常运行非常重要，因为它们会被用于以下场景：

- **API 调用**：当小程序需要调用微信提供的后端服务时，如获取用户信息、发送模板消息等，就需要使用 APPID 和 AppSecret 来生成签名（signature），从而保证请求的安全性。
- **数据加密**：在用户登录时，小程序需要使用 AppSecret 对用户的数据进行加密和解密。
- **权限验证**：某些高级功能或特定接口需要验证 APPID 和 AppSecret 以确认请求的有效性。

> [!note]
>
> <strong style="color:#ae3520;">AppSecret 是非常敏感的信息，应该严格保密，不要将其暴露给公众或者写入公开的代码仓库中。</strong>
>
> <strong style="color:#ae3520;">在开发过程中不要将 AppSecret 硬编码到代码中，最好使用环境变量或者配置文件来存储这些敏感信息，以增加安全性！</strong>

**获取 AppID 和 AppSecret**：[微信小程序管理后台](https://mp.weixin.qq.com) ➡️ 开发 ➡️ 开发管理 ➡️ 开发设置 ➡️ 开发者ID ➡️ AppSecret ➡️ 点击 “生成”，如果以前有生成过的话，则点击 “重置”，如下所示：<br />![image-20240804180657050](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408041806127.png)

## [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

微信开发者工具是微信官方提供的一个集成开发环境（IDE），它旨在帮助开发者完成小程序的开发调试、代码查看和编辑、小程序预览和发布等功能。

### 下载与安装

访问微信开发者工具的[下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)页面，根据你的操作系统选择合适的版本并完成安装。<br />![image-20240804212416498](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042124593.png)

### 设置

菜单栏上点击设置，或者使用快捷键 `ctrl(⌘) + ,` 可以打开设置页。<br />![image-20240804222342831](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042223931.png)

#### 外观设置

设置将模拟器放到项目主窗口的右边。<br />![image-20240804221839170](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042218227.png)

效果如下所示：<br />![image-20240804222505361](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042225452.png)

#### 编辑器设置

勾选 “修改文件时自动保存” 和 “总是在新标签页中打开文件” 选项，以及更改编辑器默认字体为自己喜欢的 “HarmonyOS Sans SC”。<br />![image-20240804223453654](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042234764.png)

## 创建第一个小程序项目

具体实现步骤如下所示：

1. 启动并扫码登陆微信开发者工具。<br />![image-20240804220215475](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042202519.png)
2. 在开发者工具的首页，左侧选择小程序，点击 “+” 号即可创建新项目。<br />![image-20240804214903751](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042149800.png)
3. 在弹出的新页面中填写项目信息，如项目名称，项目存放目录，[APPID](#小程序开发者id)，开发模式选择 “小程序”，后端服务选择 “不使用云服务”，模板选择 “不使用模板”，点击 “确定” 之后即可完成项目创建。<br />![image-20240804215956302](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408042159351.png)

## 项目目录结构

微信小程序包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`。

一个小程序主体部分由三个文件组成，<strong style="color:#ae3520;">必须放在项目的根目录</strong>，如下：

| 文件                                                         | 必需 | 作用                                                         |
| :----------------------------------------------------------- | :--- | :----------------------------------------------------------- |
| [app.js](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html) | 是   | 小程序的入口文件，可以在这里定义全局变量、监听小程序生命周期事件、注册全局方法等。 |
| [app.json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html) | 是   | 小程序的全局配置文件，用于设置小程序的基本信息，例如窗口背景色、导航栏样式、页面路径等。 |
| [app.wxss](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html) | 否   | 小程序的公共样式文件，这些样式会应用到所有页面上，除非页面有特定的覆盖样式。 |

一个小程序页面由四个文件组成，分别是：

| 文件类型                                                     | 必需 | 作用                                                         |
| :----------------------------------------------------------- | :--- | :----------------------------------------------------------- |
| [js](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html) | 是   | 页面逻辑文件，定义了页面的数据和事件处理逻辑，使用 JavaScript 编写。 |
| [wxml](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/) | 是   | 页面结构文件，定义了页面的布局和内容，使用 WXML（Weixin Markup Language）编写。 |
| [json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#页面配置) | 否   | 页面配置文件，用于设置页面的额外配置项，如导航栏标题等。     |
| [wxss](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html) | 否   | 页面样式文件，定义了页面的样式，使用 WXSS（Weixin Style Sheets）编写。 |

> [!note]
>
> 为了方便开发者减少配置项，<strong style="color:#ae3520;">描述页面的四个文件必须具有相同的路径与文件名</strong>。

以下是微信小程序项目的默认目录结构：

```
my-app/
|-- components/    # 自定义组件目录
|   |-- navigation-bar/  # 导航栏组件目录
|   |   |-- navigation-bar.wxml  # 导航栏组件结构文件
|   |   |-- navigation-bar.wxss  # 导航栏组件样式文件
|   |   |-- navigation-bar.js    # 导航栏组件逻辑文件
|   |   |-- navigation-bar.json  # 导航栏组件配置文件
|-- pages/         # 页面文件目录
|   |-- index/     # 首页目录
|   |   |-- index.wxml    # 首页结构文件
|   |   |-- index.wxss    # 首页样式文件
|   |   |-- index.js      # 首页逻辑文件
|   |   |-- index.json    # 首页配置文件
|-- app.json       # 小程序全局配置文件
|-- app.js         # 小程序入口文件
|-- app.wxss       # 全局样式文件
|-- project.config.json  # 项目配置文件
```

## 新建页面

1. 在项目管理面板中，找到 “pages” 目录。
2. 右键点击 “pages” 目录，选择 “新建文件夹”，输入页面目录的名称，如 `my`。
3. 右键点击新创建的 `my` 目录，选择 “新建页面”，输入页面的名称，如 `my`，不需要输入后缀名！回车后微信开发者工具会自动创建 `.wxml`、`.wxss`、`.js` 和 `.json` 的四个页面文件，并且在 `app.json` 的 `pages` 选项中新增页面路径。

![](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408051710564.gif)

## 调试基础库

在微信小程序开发中，调试基础库通常指的是微信提供的用于调试小程序的基础库版本。这个基础库包含了小程序运行时所需的各种 API 和组件，并且不同的基础库版本可能会有不同的特性和 Bug 修复。

### 调试基础库的作用

- **兼容性**：不同的基础库版本可能支持不同的特性，选择合适的基础库版本可以帮助确保小程序在不同版本的微信客户端上运行良好。
- **bug修复**：较新的基础库版本通常包含了对之前版本中发现的问题的修复。
- **新特性**：随着微信小程序的发展，新的基础库版本会引入新的API和组件。

### 如何选择调试基础库

1. **查看文档**：查阅微信官方文档，了解不同基础库版本之间的差异。
2. **测试需求**：根据你的小程序的具体需求选择适合的基础库版本。
3. **兼容性考虑**：考虑到目标用户的微信版本分布情况，选择一个兼容性较好的版本。

### 设置调试基础库

在微信开发者工具中设置调试基础库的步骤如下：

1. **项目设置**：点击顶部菜单栏的 “设置” 选项，然后选择 “项目设置”。
2. **调试基础库**：在项目设置中找到 “本地设置” 选项。
3. **选择版本**：在调试基础库的下拉列表中选择你想要使用的版本，然后微信开发者工具将会使用所选的基础库版本进行调试。

![image-20240805222140166](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408052221291.png)

### 注意事项

- **生产环境与调试环境**：<strong style="color:#ae3520;">调试基础库的选择只影响在微信开发者工具中的调试环境，不会影响到实际发布的小程序版本</strong>。在发布时，你需要确保你的小程序能够兼容大多数用户正在使用的微信版本。
- **兼容性**：选择较高版本的基础库可能会导致某些旧版本微信客户端无法使用某些新特性，因此在选择基础库版本时需要谨慎。

## [小程序调试](https://developers.weixin.qq.com/miniprogram/dev/devtools/debug.html)

微信开发者工具中的调试功能主要分为三个主要区域：模拟器、调试工具和小程序操作区，这些区域共同帮助开发者进行小程序的开发和调试工作。

- **模拟器**：模拟器是微信开发者工具中的一个重要组成部分，它允许开发者在电脑上模拟小程序在不同设备上的显示效果。<br />![image-20240805230329861](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408052303940.png)
- **调试工具**：调试工具分为 7 大功能模块：Wxml、Console、Sources、Network、AppData、Storage、Sensor。<br />![image-20240805232604008](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408052326098.png)
- **小程序操作区**：小程序操作区位于工具的顶部区域，提供了与小程序开发和调试相关的常用操作（如编译、预览、真机调试、清缓存等）。<br />![image-20240805234312545](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408052343637.png)

## 小程序配置

微信小程序的配置文件对于管理和配置小程序的行为至关重要。主要的配置文件包括全局配置文件 `app.json`，页面配置文件 `*.json`，项目配置文件 `project.config.json` 和 sitemap 配置文件 `sitemap.json`。

### [全局配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。常用配置选项如下所示：

#### [entryPagePath](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#entryPagePath)

用于指定小程序的默认启动路径（首页）。<strong style="color:#ae3520;">如果不填，将默认为 `pages` 列表的第一项</strong>。不支持带页面路径参数。

```json
{
  "entryPagePath": "pages/index/index"
}
```

#### [pages](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages)

用于指定小程序由哪些页面组成，每一项都对应一个页面的路径（含文件名）信息。<strong style="color:#ae3520;">文件名不需要写文件后缀</strong>，框架会自动去寻找对应位置的 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行处理。

<strong style="color:#ae3520;">未指定 `entryPagePath` 时，数组的第一项代表小程序的初始页面（首页）</strong>。

<strong style="color:#ae3520;">小程序中新增/减少页面，都需要对 pages 数组进行修改。</strong>

如开发目录为：

```json
├── app.js
├── app.json
├── app.wxss
├── pages
│   │── index
│   │   ├── index.wxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.wxss
│   │── cart
│   │   ├── cart.wxml
│   │   ├── cart.js
│   │   ├── cart.json
│   │   └── cart.wxss
│   │── my
│   │   ├── my.wxml
│   │   ├── my.js
│   │   ├── my.json
│   │   └── my.wxss
```

则需要在 app.json 中写

```json {4-6}
{
    "entryPagePath": "pages/index/index",
    "pages": [
        "pages/index/index",
        "pages/cart/cart",
        "pages/my/my"
    ]
}
```

#### [window](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window)

用于设置小程序的状态栏、导航条、标题、窗口背景色。

| 属性                         | 类型     | 默认值  | 描述                                                         | 最低版本                                               |
| :--------------------------- | :------- | :------ | :----------------------------------------------------------- | :----------------------------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                                 |                                                        |
| navigationBarTextStyle       | string   | white   | 导航栏标题、状态栏颜色，仅支持 `black` / `white`             |                                                        |
| navigationBarTitleText       | string   |         | 导航栏标题文字内容                                           |                                                        |
| navigationStyle              | string   | default | 导航栏样式，仅支持以下值： `default` 默认样式 `custom` 自定义导航栏，只保留右上角胶囊按钮。参见注 2。 | iOS/Android 微信客户端 6.6.0，Windows 微信客户端不支持 |
| homeButton                   | boolean  | false   | 在非首页、非页面栈最底层页面或非tabbar内页面中的导航栏展示home键 | 微信客户端 8.0.24                                      |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                 |                                                        |
| backgroundTextStyle          | string   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`                 |                                                        |
| backgroundColorTop           | string   | #ffffff | 顶部窗口的背景色，仅 iOS 支持                                | 微信客户端 6.5.16                                      |
| backgroundColorBottom        | string   | #ffffff | 底部窗口的背景色，仅 iOS 支持                                | 微信客户端 6.5.16                                      |
| enablePullDownRefresh        | boolean  | false   | 是否开启全局的下拉刷新。 详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh) |                                                        |
| onReachBottomDistance        | number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为 px。 详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom) |                                                        |

配置示例如下所示：

```json
{
    "entryPagePath": "pages/index/index",
    "pages": [
        "pages/index/index",
        "pages/cart/cart",
        "pages/my/my"
    ],
    "window": {
        "navigationBarTitleText": "慕尚花坊", // [!code ++]
        "navigationBarBackgroundColor": "#f3514f", // [!code ++]
        "enablePullDownRefresh": true, // [!code ++]
        "backgroundColor": "#efefef", // [!code ++]
        "backgroundTextStyle": "dark" // [!code ++]
    },
    "sitemapLocation": "sitemap.json",
    "style": "v2",
    "lazyCodeLoading": "requiredComponents",
    "renderer": "skyline",
    "rendererOptions": {
        "skyline": {
            "defaultDisplayBlock": true,
            "disableABTest": true,
            "sdkVersionBegin": "3.0.0",
            "sdkVersionEnd": "15.255.255"
        }
    },
    "componentFramework": "glass-easel"
}
```

重新编译发现控制台出现警告信息，并且模拟器上的导航栏位置没有任何显示。<br />![image-20240806115930273](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061159491.png)

这是因为微信开发者工具最新的项目模板使用的是 Skyline 渲染引擎，而 <strong style="color:#ae3520;">Skyline 只能使用自定义导航</strong>，如果要想让咱们的配置生效，就需要删除有关 Skyline 的配置项才行。

```json
{
    "entryPagePath": "pages/index/index",
    "pages": [
        "pages/index/index",
        "pages/cart/cart",
        "pages/my/my"
    ],
    "window": {
        "navigationBarTitleText": "慕尚花坊", // [!code ++]
        "navigationBarBackgroundColor": "#f3514f", // [!code ++]
        "enablePullDownRefresh": true, // [!code ++]
        "backgroundColor": "#efefef", // [!code ++]
        "backgroundTextStyle": "dark" // [!code ++]
    },
    "sitemapLocation": "sitemap.json",
    "style": "v2",
    "lazyCodeLoading": "requiredComponents",
    "renderer": "skyline", // [!code --]
    "rendererOptions": { // [!code --]
        "skyline": { // [!code --]
            "defaultDisplayBlock": true, // [!code --]
            "disableABTest": true, // [!code --]
            "sdkVersionBegin": "3.0.0", // [!code --]
            "sdkVersionEnd": "15.255.255" // [!code --]
        } // [!code --]
    }, // [!code --]
    "componentFramework": "glass-easel"
}
```

最后，效果如下所示：<br />![image-20240806122616849](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061226948.png)

#### [tabBar](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar)

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

| 属性            | 类型     | 必填 | 默认值 | 描述                                                         | 最低版本                                                     |
| :-------------- | :------- | :--- | :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色，仅支持十六进制颜色                     |                                                              |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色，仅支持十六进制颜色                 |                                                              |
| backgroundColor | HexColor | 是   |        | tab 的背景色，仅支持十六进制颜色                             |                                                              |
| borderStyle     | string   | 否   | black  | tabbar 上边框的颜色， 仅支持 `black` / `white`               |                                                              |
| list            | Array    | 是   |        | tab 的列表，详见 `list` 属性说明，最少 2 个、最多 5 个 tab   |                                                              |
| position        | string   | 否   | bottom | tabBar 的位置，仅支持 `bottom` / `top`                       |                                                              |
| custom          | boolean  | 否   | false  | 自定义 tabBar，见[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html) | [2.5.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |

其中 list 接受一个数组，<strong style="color:#ae3520;">只能配置最少 2 个、最多 5 个 tab</strong>。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：

| 属性             | 类型   | 必填 | 说明                                                         |
| :--------------- | :----- | :--- | :----------------------------------------------------------- |
| pagePath         | string | 是   | 页面路径，必须在 pages 中先定义                              |
| text             | string | 是   | tab 上按钮文字                                               |
| iconPath         | string | 否   | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。 **当 `position` 为 `top` 时，不显示 icon。** |
| selectedIconPath | string | 否   | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。 **当 `position` 为 `top` 时，不显示 icon。** |

配置示例如下所示：

```json
{
    "tabBar": {
        "selectedColor": "#f3514f",
        "color": "#666",
        "borderStyle": "black",
        "position": "bottom",
        "list": [
            {
                "text": "首页",
                "pagePath": "pages/index/index",
                "iconPath": "/assets/tabbar/index.png",
                "selectedIconPath": "/assets/tabbar/index-active.png"
            },
            {
                "text": "分类",
                "pagePath": "pages/category/category",
                "iconPath": "/assets/tabbar/category.png",
                "selectedIconPath": "/assets/tabbar/category-active.png"
            },
            {
                "text": "购物车",
                "pagePath": "pages/cart/cart",
                "iconPath": "/assets/tabbar/cart.png",
                "selectedIconPath": "/assets/tabbar/cart-active.png"
            },
            {
                "text": "我的",
                "pagePath": "pages/my/my",
                "iconPath": "/assets/tabbar/my.png",
                "selectedIconPath": "/assets/tabbar/my-active.png"
            }
        ]
    },
}
```

效果如下所示：<br />![image-20240806151846338](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061518460.png)

### [页面配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE)

每一个小程序页面也可以使用同名 `.json` 文件来对本页面的窗口表现进行配置，<strong style="color:#ae3520;">页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项，但这里不需要额外指定 `window` 字段</strong>。

| 属性                         | 类型     | 默认值  | 描述                                                         | 最低版本                                                     |
| :--------------------------- | :------- | :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                                 |                                                              |
| navigationBarTextStyle       | string   | white   | 导航栏标题、状态栏颜色，仅支持 `black` / `white`             |                                                              |
| navigationBarTitleText       | string   |         | 导航栏标题文字内容                                           |                                                              |
| navigationStyle              | string   | default | 导航栏样式，仅支持以下值： `default` 默认样式 `custom` 自定义导航栏，只保留右上角胶囊按钮。 | iOS/Android 微信客户端 7.0.0，Windows 微信客户端不支持       |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                 |                                                              |
| backgroundTextStyle          | string   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`                 |                                                              |
| enablePullDownRefresh        | boolean  | false   | 是否开启当前页面下拉刷新。 详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh) |                                                              |
| onReachBottomDistance        | number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px。 详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom) |                                                              |
| usingComponents              | Object   | 否      | 页面[自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)配置 | [1.6.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |

配置示例如下所示：

```json
{
    "usingComponents": {},
    "navigationBarTitleText": "商品分类",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#00AF92",
    "backgroundColor": "#EEE",
    "backgroundTextStyle": "light"
}
```

效果如下所示：<br />![image-20240806160509198](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061605298.png)

### [项目配置](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)

1. 项目根目录中的 `project.config.json` 和 `project.private.config.json` 文件都可以对项目进行配置，但是 <strong style="color:#ae3520;">`project.private.config.json` 中的相同设置优先级高于 `project.config.json`</strong>。
2. `project.config.json` 文件用于配置公共的配置，`project.private.config.json` 用于配置个人的配置，<strong style="color:#ae3520;">可以将 `project.private.config.json` 写到 `.gitignore` 避免版本管理的冲突</strong>。
3. `project.private.config.json` 中有的字段，微信开发者工具内的设置修改会优先覆盖 `project.private.config.json` 的内容。如在 `project.private.config.json` 有 `appid` 字段，那么在 详情-基本信息 中修改了 appid，会写到 `project.private.config.json` 中，不会覆盖掉 `project.config.json` 的 `appid` 字段的内容。
4. <strong style="color:#ae3520;">开发阶段相关的设置修改优先同步到 `project.private.config.json` 中，但与最终编译产物有关的设置无法在 `project.private.config.json` 中生效，界面上的改动也不会同步到 `project.private.config.json` 文件中</strong>。详见 [表格](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html#setting) 是否允许私有设置。

关于第四点，通俗点说就是与最终编译产物有关的设置会直接设置到 `project.config.json` 文件中，如下所示：<br />![recording](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061637415.gif)

与最终编译产物无关的设置会优先设置到 `project.private.config.json` 文件中，如下所示：<br />![recording](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061648004.gif)

我们希望在微信小程序中使用 sass 进行样式编写，因为 sass 提供了许多强大的功能，如变量、嵌套规则、混合宏等，可以让 CSS 样式的编写更加高效和可维护。那么该如何实现呢？

在 `project.config.json` 文件中，修改 `setting` 下的 `useCompilerPlugins` 字段为 `["sass"]`，即可开启微信开发者工具中内置的 sass 编译插件。 如需同时开启 typescript 编译插件，可将该字段修改为 ["typescript ", "sass"]。目前支持编译插件有 typescript、less、sass。

```json
{
    "setting": {
        "useCompilerPlugins": [
            "sass"
        ]
    }
}
```

如，将 `cart.wxss` 样式文件修改为 `cart.scss`，在文件中添加如下样式：

```scss
/* pages/cart/cart.wxss */
text {
    color: red;

    &:hover {
        color: royalblue;
    }
}
```

购物车页面效果如下所示：<br />![recording](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408061709275.gif)

### [sitemap 配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html)

微信现已开放小程序内搜索，开发者可以通过 `sitemap.json` 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 user-agent：`mpcrawler` 及[场景值](https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html)：`1129`。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。

小程序根目录下的 `sitemap.json` 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，<strong style="color:#ae3520;">如果没有 `sitemap.json` ，则默认为所有页面都允许被索引</strong>。

新项目中的 `sitemap.json` 文件默认配置如下所示：

```json
{
    "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
    "rules": [
        {
            "action": "allow",
            "page": "*"
        }
    ]
}
```

其中 <strong style="color:#ae3520;">`{"action": "allow", "page": "\*"}` 是优先级最低的默认规则，未显式指明 "disallow" 的都默认被索引</strong>。

## 参考资料🎁

- 📃文档
  - [小程序-微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- 📺视频
  - [2024最新版微信小程序项目实战！- 尚硅谷](https://www.bilibili.com/video/BV1LF4m1E7kB?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [微信小程序教程 键盘敲烂  月薪过万 - 达内教育](https://www.bilibili.com/video/BV141421i7QJ?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [乐尚代驾-微信小程序+最新微服务技术栈-尚硅谷](https://www.bilibili.com/video/BV1nW421R7qJ?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [微信小程序开发教程 - 黑马程序员](https://www.bilibili.com/video/BV1834y1676P?p=184&vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [微信小程序项目-千寻谷](https://www.bilibili.com/video/BV1Kg411s7UF?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [微信小程序-极客时间](https://www.bilibili.com/video/BV15v4y1X78W?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [微信小程序-coderwhy](https://www.bilibili.com/video/BV1924y1m7sv?p=68&vd_source=84272a2d7f72158b38778819be5bc6ad)
- 🛠️工具
  - [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
