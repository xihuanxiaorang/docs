# Logback

![Solving Your Logging Problems with Logback](https://stackify.com/wp-content/uploads/2017/08/Logback-featured-881x441-2.jpg)

## 概述

Logback 是 Java 社区中使用最广泛的日志记录框架之一。它是其前身 Log4j 的替代品。 Logback 提供了更快的实现速度，提供了更多的配置选项，并在存档旧日志文件方面提供了更大的灵活性。

## 准备工作

Logback 使用 Simple Logging Facade for Java （SLF4J） 作为其接口。在开始记录消息之前，只需要引入 `logback-classic` 这个单一的依赖即可，因为它会传递地引入 `logback-core` 和 `slf4j-api` 依赖。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>fun.xiaorang</groupId>
    <artifactId>logback-study</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.5.4</version>
        </dependency>
    </dependencies>

</project>
```

## 基本示例与配置

首先，我们需要一个配置文件。我们将创建一个名为 `logback.xml` 的配置文件，并将其放在<strong style="color:#ae3520;">类路径</strong>中的某个位置：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <root level="debug">
        <appender-ref ref="STDOUT"/>
    </root>
</configuration>
```

接下来，我们需要一个带有 `main` 方法的简单类：

```java
public class Example {
  private static final ch.qos.logback.classic.Logger LOGGER = (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(Example.class);

  public static void main(String[] args) {
    LOGGER.info("Example log from {}", Example.class.getSimpleName());
  }
}
```

此类创建一个 `Logger` 并调用 `info()` 方法来生成日志消息。

当我们运行 `Example` 时，我们会看到我们的消息记录到控制台：

> 14:41:08.957 [main] INFO  fun.xiaorang.study.logback.Example - Example log from Example

很容易看出为什么 Logback 如此受欢迎；我们在几分钟内即可启动并运行。

通过如下的三个步骤可以启用 Logback 来记录日志：

1. 配置 Logback 环境。
2. 在每个要执行日志记录的类中，通过调用 `org.slf4j.LoggerFactory` 类的 `getLogger()` 方法检索 `Logger` 实例，将当前类名或类本身作为参数传递。
3. 通过调用 `Logger` 实例的不同方法来打印日志。例：`debug()`，`info()`，`warn()`，`error()`。通过这些方法将会在配置好的 Appender 中输出日志。

## 架构

### Logback 的架构

Logback 的基本架构足够通用，可以适用于不同的情况。目前，Logback 分为如下三个模块：

- logback-core – 包含基本的日志记录功能
- logback-classic – 包含其他日志记录改进，例如 SLF4j 支持
- logback-access – 提供与 servlet 容器（如 Tomcat 和 Jetty）的集成

### 记录器、附加器和布局（Logger, Appender and Layouts）

Logback 基于三个主要类：记录器（`Logger`）、附加器（`Appender`） 和布局（`Layout`）。这三个不同类型的组件协同工作，使开发人员能够根据消息类型和级别记录消息，并在运行时控制这些消息的格式和输出位置。

`Logger` 类作为 `logback-classic` 模块的一部分。`Appender` 与 `Layouts` 接口作为 `logback-core` 的一部分。作为一个通用的模块，`logback-core` 没有 logger 的概念。

#### 记录器上下文（Logger context）

与普通 `System.out.println` 相比，任何日志记录 API 的首要优势在于它能够禁用某些日志语句，同时允许其他日志语句不受阻碍地打印。此功能假设日志记录空间（即所有可能的日志记录语句的空间）根据开发人员选择的某些标准进行分类。在 `logback-classic` 中，这种分类是记录器固有的一部分。每个记录器都连接到 `LoggerContext`，该上下文主要负责制造记录器 & 将制造出来的记录器排列到树状层次结构中。

一个记录器被当作为一个实体，它们的名称区分大小写，并遵循<strong style="color:#ae3520;">分层命名规则</strong>：

> [!important]
>
> 如果一个记录器的名称后跟一个点是后代记录器名称的前缀，则称该记录器是另一个记录器的祖先。如果记录器与后代记录器之间没有祖先，则称该记录器是子记录器的父记录器。
>
> 

例如，名为 `"com.foo"` 的记录器是名为 `"com.foo.Bar"` 的记录器的父级。类似地，`"java"` 是 `"java.util"` 的父级，也是 `"java.util.Vector"` 的祖先。

> [!important]
>
> <strong style="color:#ae3520;">根记录器（root logger）位于记录器层次结构的顶部，它的特殊之处在于它是每一个层次结构的一部分</strong> ➡️ <strong style="color:#ae3520;font-size:19px;">所有记录器都是预定义的根记录器的后代</strong>

与每个记录器一样，可以通过名称检索它，如下所示：

> Logger rootLogger = LoggerFactory.getLogger(org.slf4j.Logger.ROOT_LOGGER_NAME);

`Logger` 类中有一个 `level` 字段，可以通过配置文件或使用 `setLevel()` 方法进行设置。

<strong style="color:#ae3520;">日志级别按优先级排序：TRACE < DEBUG < INFO < WARN < ERROR。</strong>每个级别都有一个相应的方法，我们可以用对应的方法来记录对应级别的日志。

> [!important]
>
> <strong style="color:#ae3520;font-size:19px;">如果未显式分配记录器的日志级别，则它将继承其最接近的祖先的级别。</strong>
>
> <strong style="color:#ae3520;">根记录器的日志级别默认为 DEBUG。</strong>我们将在下面看到如何覆盖它。

让我们创建一个示例程序，演示如何在日志记录层次结构中使用记录器上下文：

```java
@Test
public void test() {
  ch.qos.logback.classic.Logger parentLogger =
    (ch.qos.logback.classic.Logger) LoggerFactory.getLogger("fun.xiaorang.study.logback");
  parentLogger.setLevel(ch.qos.logback.classic.Level.INFO);
  ch.qos.logback.classic.Logger childlogger =
    (ch.qos.logback.classic.Logger) LoggerFactory.getLogger("fun.xiaorang.study.logback.tests");
  parentLogger.warn("This message is logged because WARN > INFO.");
  parentLogger.debug("This message is not logged because DEBUG < INFO.");
  childlogger.info("INFO == INFO");
  childlogger.debug("DEBUG < INFO");
}
```

当我们运行它时，我们会看到以下消息：

> 16:54:59.812 [main] WARN  fun.xiaorang.study.logback - This message is logged because WARN > INFO.
>
> 16:54:59.814 [main] INFO  fun.xiaorang.study.logback.tests - INFO == INFO

在上面这个示例中：

1. 我们首先检索一个名为 fun.xiaorang.study.logback 的记录器，并将其转换为 `ch.qos.logback.classic.Logger`。
2. 我们将记录器的日志级别设置为 INFO。
3. 然后，我们创建另一个名为 fun.xiaorang.study.logback.tests 的记录器。
4. 然后，我们通过这两个记录器分别记录两条消息，以演示层次结构。
5. 最后发现会记录 WARN 和 INFO 级别的日志，并且过滤掉 DEBUG 级别的日志。

现在让我们使用根记录器：

```java
@Test
public void test1() {
  ch.qos.logback.classic.Logger logger =
    (ch.qos.logback.classic.Logger) LoggerFactory.getLogger("fun.xiaorang.study.logback");
  logger.debug("Hi there!");
  logger.debug("This message is logged because DEBUG == DEBUG.");
  ch.qos.logback.classic.Logger rootLogger =
    (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(org.slf4j.Logger.ROOT_LOGGER_NAME);
  rootLogger.setLevel(ch.qos.logback.classic.Level.ERROR);
  logger.warn("This message is not logged because WARN < ERROR.");
  logger.error("This is logged.");
}
```

当我们执行此代码片段时，我们会看到以下消息：

> 17:24:21.221 [main] DEBUG fun.xiaorang.study.logback - Hi there!
>
> 17:24:21.224 [main] DEBUG fun.xiaorang.study.logback - This message is logged because DEBUG == DEBUG.
>
> 17:24:21.224 [main] ERROR fun.xiaorang.study.logback - This is logged.

在上面这个示例中：

1. 在没有改变根记录器的日志级别时打印了 DEBUG 日志。
2. 然后，我们使用其静态定义的名称检索根记录器，并将其级别设置为 ERROR。
3. 最后，任何小于错误级别的日志都会被过滤掉。

#### 有效级别又名级别继承（Effective Level aka Level Inheritance）

<span style="background-color: rgb(251, 228, 231);">TODO</span>

## 参考资料🎁

- 📃文档
  - [The logback manual](https://logback.qos.ch/manual/index.html) | [logback (gitbook.io) | 中文手册](https://logbackcn.gitbook.io/logback)
  - [A Guide to Logback ](https://www.baeldung.com/logback)by Eric Goebelbecker
  - [Solving Your Logging Problems with Logback](https://stackify.com/logging-logback/) by Eugen Paraschiv
- 📺视频
  - [logback学习 | 配置文件实用功能](https://www.bilibili.com/video/BV17m4y197o9/?spm_id_from=333.880.my_history.page.click)