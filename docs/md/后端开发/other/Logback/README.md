# Logback

## 概述

Logback 是 Java 社区中使用最广泛的日志记录框架之一。它是其前身 Log4j 的替代品。 Logback 提供了更快的实现速度，提供了更多的配置选项，并在存档旧日志文件方面提供了更大的灵活性。

## 准备工作

Logback 使用 Simple Logging Facade for Java （SLF4J） 作为其接口。在开始记录消息之前，只需要引入 `logback-classic` 这个单一的依赖即可，因为它会传递 `logback-core` 和 `slf4j-api` 依赖。

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
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.10.2</version>
        </dependency>
    </dependencies>

</project>
```

## 基础示例与配置

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

接下来，我们需要创建一个 `BasicExampleTest` 测试类：

```java
public class BasicExampleTest {
  private static final ch.qos.logback.classic.Logger LOGGER = (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(BasicExampleTest.class);

  @Test
  public void test() {
    LOGGER.info("Example log from {}", BasicExampleTest.class.getSimpleName());
  }
}
```

此类创建了一个 `Logger` 并调用其 `info()` 方法来生成日志消息。当我们运行测试方法时，我们会看到我们的消息记录到控制台：

> 01:35:33.143 [main] INFO  f.x.study.logback.BasicExampleTest - Example log from BasicExampleTest

很容易看出为什么 Logback 如此受欢迎；我们在几分钟内即可启动并运行。

启用 Logback 来记录日志需要通过如下的三个步骤：

1. 配置 Logback 环境。
2. 在每个要执行日志记录的类中，通过调用 `org.slf4j.LoggerFactory` 类的 `getLogger()` 方法获取 `Logger` 实例，将当前类名或类本身作为参数传递。
3. 通过调用 `Logger` 实例的不同方法来打印日志。例：`debug()`，`info()`，`warn()`，`error()`。通过这些方法将会在配置好的 Appender 中输出日志。

## 参考资料🎁

- 📃文档
  - [The logback manual](https://logback.qos.ch/manual/index.html) | [logback (gitbook.io) | 中文手册](https://logbackcn.gitbook.io/logback)
  - [A Guide to Logback ](https://www.baeldung.com/logback)by Eric Goebelbecker
  - [Solving Your Logging Problems with Logback](https://stackify.com/logging-logback/) by Eugen Paraschiv
- 📺视频
  - [logback学习 | 配置文件实用功能](https://www.bilibili.com/video/BV17m4y197o9/?spm_id_from=333.880.my_history.page.click)

