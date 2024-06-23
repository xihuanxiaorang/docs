# Spring

> [!tip]
>
> 项目环境：[git 2.45.2](https://github.com/git-for-windows/git/releases/download/v2.45.2.windows.1/Git-2.45.2-64-bit.exe) ➕ [spring-framework 5.3.x](https://github.com/spring-projects/spring-framework/tree/5.3.x) ➕ [gradle 7.5.1](https://gradle.org/next-steps/?version=7.5.1&format=bin) ➕ [jdk11](https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.23%2B9/OpenJDK11U-jdk_x86-32_windows_hotspot_11.0.23_9.zip)

## 源码环境搭建

### 下载 Spring 源码

下载 Spring 5.3.x 版本的源码压缩包 [spring-framework at 5.3.x](https://github.com/spring-projects/spring-framework/tree/5.3.x)。

由于某些原因，可能有的小伙伴下载起来会非常的慢！所以，可以先将项目从 Github 中导入到 Gitee 中，然后直接从 Gitee 中下载，此时会发现下载速度非常快！🚀🚀🚀

### Gradle 安装与配置

1. **下载 Gradle**：Gradle 版本该如何选择呢？查看 spring-framework  ➡️ gradle ➡️ wrapper ➡️ gradle-wrapper.properties 文件。

   ```properties
   distributionBase=GRADLE_USER_HOME
   distributionPath=wrapper/dists
   distributionUrl=https\://services.gradle.org/distributions/gradle-7.5.1-bin.zip // [!code --]
   distributionUrl=file:///E:/devsoft/gradle-7.5.1-bin.zip // [!code ++]
   zipStoreBase=GRADLE_USER_HOME
   zipStorePath=wrapper/dists
   ```

   可知，需要下载 7.5.1 版本的 Gradle。咱们进入 Gradle 的[下载页面](https://gradle.org/releases/)，选择与 Spring 要求的版本下载即可。如本人选择 [5.3.x](https://github.com/spring-projects/spring-framework/tree/5.3.x) 分支的 spring-framework，那么就需要下载 [7.5.1](https://gradle.org/next-steps/?version=7.5.1&format=bin) 版本的 Gradle。<br />![image-20230813021242291](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308130212358.png)

2. 将下载下来的 Gradle 压缩包放到 `spring-framework/gradle/wrapper/gradle-wrapper.properties` 文件中指定的位置，这样后续在使用 Gradle 进行构建的时候就不需要再重新下载，可以加快构建速度。然后将该压缩包解压到一个自己喜欢的位置，如本人选择的解压位置为：`E:\devsoft\gradle-7.5.1`。

3. **配置 Gradle 环境变量**：

   1. 新建一个名为 `GRADLE_HOME` 的系统环境变量，值指定 Gradle 的安装目录，即上一步中 Gradle 压缩包的解压位置，如本人就填写 `E:\devsoft\gradle-7.5.1`。
   2. 新建一个名为 `GRADLE_USER_HOME` 的系统环境变量，该环境变量的作用是用于指定 Gradle 的本地仓库地址，值的话根据自己喜欢来即可，如本人的本地仓库地址为 `E:\devsoft\gradle-repository`。<br />![image-20240623115434645](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231154697.png)
   3. 将 `GRADLE_HOME` 系统环境变量放入 `Path` 变量下，如下所示：<br />![image-20240623115709167](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231157210.png)

4. 验证 Gradle 是否安装成功，在终端中输入 `gradle -v` 命令，查看是否输出 Gradle 版本号信息，如下所示：<br />![image-20240623115940018](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231159313.png)

5. **配置阿里云镜像源**：由于 Spring 5.x 版本之后使用 Gradle 来构建编译，在编译过程中需要下载一堆的插件和 jar 包，众所周知，下载的资源都是从中央仓库下载，如果不使用国内镜像源来下载的话，速度会非常的慢！所以需要先将镜像源切换到国内的阿里云镜像源[阿里云仓库服务](https://developer.aliyun.com/mvn/guide)。

   参考自官方教程 [Gradle Initialization Scripts](https://docs.gradle.org/current/userguide/init_scripts.html)，为了对 **所有项目** 都生效，可以在如下任意一个位置创建一个 `init.gradle` 配置文件：

   * [ ] Gradle 用户目录，即环境变量 `GRADLE_USER_HOME` 目录：`GRADLE_USER_HOME/`
   * [ ] Gradle 用户目录，即环境变量 `GRADLE_USER_HOME` 目录下的 `init.d` 目录：`GRADLE_USER_HOME/init.d/`
   * [x] Gradle 安装目录下的 `init.d` 目录：`GRADLE_HOME/init.d/`

   其中 `init.gradle` 配置文件内容如下所示：

   ```groovy
   allprojects {
     repositories {
       mavenLocal()
       maven { url "https://maven.aliyun.com/repository/public/" }
       maven { url "https://maven.aliyun.com/repository/gradle-plugin/" }
       maven { url 'https://maven.aliyun.com/repository/central/' }
       mavenCentral()
     }
   	println "${it.name}: Aliyun maven mirror injected"
   }
   ```

   打开 spring 源码根目录下的 `build.gradle` 和 `settings.gradle` 文件，使用 Ctrl + F 快捷键找到文件中 repositories 关键字所在的位置，将以下着重突出部分的内容分别复制粘贴到此处，最终效果如下所示：

   ::: code-group

   ```groovy [build.gradle] {2-5}
   repositories {
     maven { url "https://maven.aliyun.com/repository/public/" }
     maven { url "https://maven.aliyun.com/repository/gradle-plugin/" }
     maven { url 'https://maven.aliyun.com/repository/central/' }
     maven { url 'https://maven.aliyun.com/repository/spring/' }
     mavenCentral()
     maven { url "https://repo.spring.io/libs-spring-framework-build" }
   }
   ```

   ```groovy [settings.gradle] {3-6}
   pluginManagement {
   	repositories {
   		maven { url 'https://maven.aliyun.com/repository/public/' }
   		maven { url 'https://maven.aliyun.com/repository/gradle-plugin/' }
   		maven { url 'https://maven.aliyun.com/repository/central/' }
   		maven { url 'https://maven.aliyun.com/repository/spring/' }
   		mavenCentral()
   		gradlePluginPortal()
   		maven { url "https://repo.spring.io/release" }
   	}
   }
   ```

   :::

6. 打开 IDEA，配置 Gradle 使用本地安装的版本，如下所示：<br />![image-20240623123751313](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231237380.png)

### 源码编译

根据源码根目录下的 `import-into-idea.md` 文档可知，构建步骤如下：

1. 首先运行 `./gradlew :spring-oxm:compileTestJava` 命令用于预编译 `spring-oxm` 模块；

   如果在预编译过程中出现如下所示的错误信息：<br />![image-20240623182907513](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231829201.png)

   那是因为 `isAccessible()` 方法过时了，所以需要将此处的方法调用改成 `canAccess(null)`。如下所示：<br />![image-20240623183204101](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231832178.png)

   再次进行编译，等到出现 BUILD SUCCESSFUL 字样就表示已经预编译成功！<br />![image-20240623183341937](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231833488.png)

2. 导入到 IntelliJ (File -> New -> Project from Existing Sources -> Navigate to directory -> Select build.gradle) <br />![image-20240623183751732](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231837787.png)

   开始下载依赖并编译，此过程可能需要几分钟，耐心等待...，等出现 BUILD SUCCESSFUL 字样就表示已经编译成功 <br />![image-20240623184346120](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231843213.png)

   编译成功之后，使用 gradle 测试一下。<br />![image-20240623184644108](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231846171.png)

   双击点击执行，发现执行成功！最后会提示 'git' 相关错误，但是不影响使用。<br />![image-20240623185049923](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231850007.png)

### 提交和推送远程仓库

上面关于 git 的错误的意思是当前不是一个 git 仓库。这个好办，咱们直接使用 `git init` 命令建一个 git 仓库就好，然后再使用 `git add .` 命令将文件添加到暂存区，最后使用 `git commit -m "fix: git command error"` 提交到本地仓库，有需要的小伙伴还可以在 Github 或者 Gitee 建立一个远程仓库，然后将代码推送到远程仓库中。

> [!note]
>
> 在提交的时候请先查看 `.gitignore` 文件中是否配置了忽略 `target` 文件夹，如果配置了的话，**请注释掉或者删除掉**！如下图所示：<br />![image-20240623185452463](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406231854524.png)
>
> 为什么呢？因为不这么做的话，`org.springframework.aop.framework.autoproxy.target` 和 `org.springframework.aop.target`这两个包下的类就不会被 git 管理，假如有一天你一不小心删除了本地的 spring 源码，想从远程仓库上再克隆下来，此时就会发现有多坑！！！在运行测试方法`compileTestJava`时报错：说找不到这两个包下的类！

至此，Spring 源码环境搭建就圆满完成啦！🎉🎉🎉

## 参考资料🎁

- 📃文档
  - [DerekYRC/mini-spring: mini-spring是简化版的spring框架，能帮助你快速熟悉spring源码和掌握spring的核心原理。抽取了spring的核心逻辑，代码极度简化，保留spring的核心功能，如IoC和AOP、资源加载器、事件监听器、类型转换、容器扩展点、bean生命周期和作用域、应用上下文等核心功能。 (github.com)](https://github.com/DerekYRC/mini-spring?tab=readme-ov-file)
  - [fuzhengwei/small-spring: 🌱《 Spring 手撸专栏》，本专栏以 Spring 源码学习为目的，通过手写简化版 Spring 框架，了解 Spring 核心原理。在手写的过程中会简化 Spring 源码，摘取整体框架中的核心逻辑，简化代码实现过程，保留核心功能，例如：IOC、AOP、Bean生命周期、上下文、作用域、资源处理等内容实现。 (github.com)](https://github.com/fuzhengwei/small-spring)
  - [wuyouzhuguli/SpringAll: 循序渐进，学习Spring Boot、Spring Boot & Shiro、Spring Batch、Spring Cloud、Spring Cloud Alibaba、Spring Security & Spring Security OAuth2，博客Spring系列源码：https://mrbird.cc (github.com)](https://github.com/wuyouzhuguli/SpringAll)
  - [xuchengsheng/spring-reading: 涵盖了 Spring 框架的核心概念和关键功能，包括控制反转（IOC）容器的使用，面向切面编程（AOP）的原理与实践，事务管理的方式与实现，Spring MVC 的流程与控制器工作机制，以及 Spring 中数据访问、安全、Boot 自动配置等方面的深入研究。此外，它还包含了 Spring 事件机制的应用、高级主题如缓存抽象和响应式编程，以及对 Spring 源码的编程风格与设计模式的深入探讨。 (github.com)](https://github.com/xuchengsheng/spring-reading)
  - [coderbruis/JavaSourceCodeLearning: Java流行框架源码分析：Spring源码、SpringBoot源码、SpringAOP源码、SpringSecurity源码、SpringSecurity OAuth2源码、JDK源码、Netty源码 (github.com)](https://github.com/coderbruis/JavaSourceCodeLearning)
  - [shiyujun/spring-framework: Spring源码解析系列 (github.com)](https://github.com/shiyujun/spring-framework)
  - [seaswalker/spring-analysis: Spring源码阅读 (github.com)](https://github.com/seaswalker/spring-analysis)
  - [doocs/source-code-hunter: 😱 从源码层面，剖析挖掘互联网行业主流技术的底层实现原理，为广大开发者 “提升技术深度” 提供便利。目前开放 Spring 全家桶，Mybatis、Netty、Dubbo 框架，及 Redis、Tomcat 中间件等 (github.com)](https://github.com/doocs/source-code-hunter?tab=readme-ov-file)
- 📺视频
  - [程序猿一枚-有风的个人空间-字节大神mini-spring源码解读-有风个人主页-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/400188320/channel/collectiondetail?sid=2129422)
  - [长沙-大家说的个人空间-spring源码集锦-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/1561218754/channel/seriesdetail?sid=350909)
  - [Spring底层核心原理解析和并发控制-周瑜](https://www.bilibili.com/video/BV17V4y1r722?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [《2024年最新Spring核心源码解析》已完结，涵盖IOC容器、AOP、切面、AOT预编译、SpringMVC，面试一次搞定！【子路老师】](https://www.bilibili.com/video/BV1WE421j7pC?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [Spring源码分析-大厂学院-雷神](https://www.bilibili.com/video/BV1S34y1g7iu?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [Java灭霸詹的个人空间-霸气骚气帅气的最强Java老詹带你手写Spring以及阅读源码-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/611239962/channel/collectiondetail?sid=280663)
  - [Spring IoC 高级应用与源码剖析-拉钩教育](https://www.bilibili.com/video/BV11T411M7gy?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [SSM源码分析视频教程，Mybatis源码，Spring源码，SpringMVC源码视频讲详解-动力节点](https://www.bilibili.com/video/BV1uF411L73Q?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [Spring源码课程-马士兵教育](https://www.bilibili.com/video/BV13A4m1F7XE?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [Spring源码探秘：解锁企业级框架的魔法钥匙(上)](https://www.bilibili.com/video/BV18T421C77y?vd_source=84272a2d7f72158b38778819be5bc6ad)
  - [阿里 腾讯大厂Java架构师内部培训视频教程](https://www.bilibili.com/video/BV1fV411g7qY?p=18&vd_source=84272a2d7f72158b38778819be5bc6ad)