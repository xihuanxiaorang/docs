# PicList + Github 搭建个人云图床

## 简介

[PicList](https://piclist.cn/) 是一款高效的云存储和图床平台管理工具，在 PicGo 的基础上经过深度的二次开发，不仅完整保留了 PicGo 的所有功能，还增添了许多新的特性。

- 保留了 PicGo 的所有功能，兼容绝大部分已有的 PicGo 插件，包括和 Typora、Obsidian 等软件的搭配；
- 新增了多个内置图床，如 WebDav、本地图床、SFTP 和 Telegra.ph 等，原内置 imgur 图床额外支持登录账号上传；
- 相册中可同步删除云端图片，支持所有内置图床和多个插件；
- 相册新增了高级搜索和排序，批量修改 URL 等功能；
- 内置水印添加、图片压缩、图片缩放、图片旋转和图片格式转换等功能，同时支持高级重命名；
- 上传接口支持表单上传文件，可多电脑共用；
- 支持配置同步至 Github 或 Gitee 仓库；
- 支持管理十余种图床，可以在线进行云端目录查看、文件搜索、批量上传、批量下载、删除文件等；
- 支持预览多种格式的文件，包括图片、视频、纯文本文件和 markdown 文件等；
- 支持启用正则表达式的批量云端文件重命名；
- 对于私有存储桶等支持复制预签名链接进行分享；
- 支持软件自动更新，支持多种启动模式，还有更多功能细节新增和优化；
- 优化了 PicGo 的界面，解锁了窗口大小限制，同时美化了部分界面布局；
- mac 平台安装包已签名，从源头解决了 PicGo 上的安装包已损坏的日经问题；

## 下载安装

选择下载最新版本的安装包 [Releases · Kuingsmile/PicList (github.com)](https://github.com/Kuingsmile/PicList/releases)，如下所示：<br />![image-20231011231510830](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310112315892.png)

以管理员身份运行安装包，更换软件安装路径。<br />![image-20231011232254322](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310112322353.png)

## Github 图床配置

具体配置如下图所示：<br />![image-20231011235917794](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310112359845.png)

- 图床配置名：直接填写 `Github` 即可；
- repo/仓库名：在 Github 上新建一个公开仓库作为图床使用，仓库名称任意，如 `img`；然后按照 `username/repo`，即 `用户名/仓库名` 的格式填写；
- branch/分支名：直接填写 `main` 即可；
- Token：访问 [Personal Access Tokens (Classic) (github.com)](https://github.com/settings/tokens)，然后点击 `Generate new token(Classic)`；<br />![bucket](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310112347478.png)

  把 `repo` 的勾打上，根据自己的需要设定过期时间。然后翻到页面最底部，点击 `Generate token` 的绿色按钮生成 Token。<br />![bucket](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310112347248.png)

  > [!NOTE]
  >
  > Token 只会显示一次，请复制 Token 后存到安全的地方！

- path/存储路径：可选参数，用于指定图片存储路径，不填写则默认存储在仓库根目录；
- customUrl/自定义域名：可选参数，用于指定图片自定义域名，一般用于 **CDN 加速**。例如，如果使用 jsDelivr 加速，可填写 `https://cdn.jsdelivr.net/gh/{github用户名}/{仓库名}@{分支名}/`，其中 `{github用户名}`、`{仓库名}`、`{分支名}` 分别对应 Github 用户名、仓库名、分支名。实测：<span style="background:rgba(160, 204, 246, 0.55)">不填写分支名同样可以</span>！

## 如何在 Typora 中使用？

进入 Typora 的设置界面，选择图像，将上传服务设置为 `PicGo(app)`，然后在 `PicGo路径` 中填写 PicList 的安装路径，如下图所示：<br />![image-20231012000306526](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310120003572.png)

至此，PicList + Github 个人云图床就搭建成功啦~🥳🥳🥳
