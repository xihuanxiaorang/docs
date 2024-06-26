# RuoYi-Vue-plus

## 项目初始化

### 项目必备环境

> [!note]
>
> 需要使用 `openjdk` 或者 `graalvm` 运行程序 禁止使用 `oraclejdk` （由于 spring 的 bug 会导致打包运行报错）

graalvm 是 oracle 旗下的高性能 jdk，下载地址: https://github.com/graalvm/graalvm-ce-builds/releases

- openjdk-17/21 或 graalvm-community-jdk-17/21 版本
- mysql 5.7 8.0
- redis 5.X 6.X 7.X 由于框架大量使用了redis特性 版本必须 >= 5.X ([win redis 下载地址](https://github.com/zkteco-home/redis-windows))
- minio 本地文件存储 或 阿里云 腾讯云 七牛云等一切支持S3协议的云存储
- maven >= 3.8.X
- nodejs >= 18.18
- npm >= 8.X
- idea 2022 2024 (一定不要使用2023后果自负 bug太多影响项目开发)

### 下载源码&新建学习分支

分支说明：

- `5.X` 主分支 5.X版本 稳定发布分支
- `dev` 开发分支 代码随时更新 不推荐使用 经测试后会发布到主分支
- `future/*` 新功能预览分支

1. 将后端项目 [RuoYi-Vue-Plus: 多租户后台管理系统 重写RuoYi-Vue所有功能 集成 Sa-Token、Mybatis-Plus、Flowable、SpringDoc、Hutool、OSS 定期同步 (gitee.com)](https://gitee.com/liulei0713/RuoYi-Vue-Plus) 以及前端项目 [plus-ui: RuoYi-Vue-Plus 5.X 与 RuoYi-Cloud-Plus 2.X 统一 UI 前端代码仓库](https://gitee.com/liulei0713/plus-ui) <strong style="color:#ae3520;">Fork 到自己的仓库，然后使用 git 命令克隆到本地</strong>。
2. 如果在项目原有的分支上进行改动的话，当与 `RouYi-Vue-plus` 进行同步时，该操作会覆盖自 Fork 仓库依赖所做的任何改动，且无法恢复！！！导致咱们自己改动的代码都将被覆盖，所以<strong style="color:#ae3520;">前后端两个项目都需要创建一个 `study` 分支，咱们可以在新建的学习分支上进行改动，然后提交并推送到 Fork 的仓库中</strong>。<br />![image-20240626160831002](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261608055.png)

### 后端

1. 勾选 maven 对应环境 <br />![image-20240626163119073](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261631115.png)
2. 默认 `JDK17` 版本 <br />![image-20240626163754336](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261637383.png)![image-20240626164004372](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261640458.png)
3. 创建一个名为 `ry-vue` 的数据库，按照以下顺序依次导入sql文件（默认为 `mysql`，其他数据库需导入对应的sql文件） <br />![image-20240626163428751](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261634805.png)
4. 在勾选对应环境的配置文件内 填写 mysql 与 redis 配置信息 <br />![image-20240626165349461](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261653548.png)![image-20240626171451043](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261714094.png)
5. 启动主应用服务 `DromaraApplication` <br />![image-20240626171907679](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406261719726.png)

### 前端

1. 使用 `npm install --registry=https://registry.npmmirror.com` 安装依赖
2. 使用 `npm run dev` 启动服务
3. 访问 http://localhost:80 ，登录账户：admin/admin123

## 参考资料🎁

- 📃文档
  - [dromara/RuoYi-Vue-Plus: 基于RuoYi-Vue集成 Lombok+Mybatis-Plus+Undertow+knife4j+Hutool+Feign 重写所有原生业务 定期与RuoYi-Vue同步 (github.com)](https://github.com/dromara/RuoYi-Vue-Plus)
- 📺视频
  - [抓蛙师的个人空间-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/520725002)
  - [程序猿一枚-有风的个人空间-若依微服务PLUS版本源码详解与二次开发教程！-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/400188320/channel/collectiondetail?sid=1075603)
  - [明年一定不摸鱼的个人空间-RUOYI-VUE-PLUS框架讲解-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/384682814/channel/collectiondetail?sid=2864565&spm_id_from=333.788.0.0)
  - [一写代码就开心的个人空间-ruoyi-vue-plus-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/303511670/channel/collectiondetail?sid=1852841)

