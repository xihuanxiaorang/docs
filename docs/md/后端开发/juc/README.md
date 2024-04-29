# JUC 并发编程

## 准备工作

创建名为 `juc-study` 的 maven 项目，引入 `lombok` 和 `logback` 日志依赖。

::: code-group

```xml [pom.xml]
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>fun.xiaorang</groupId>
    <artifactId>juc-study</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.32</version>
        </dependency>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.5.4</version>
        </dependency>
    </dependencies>
</project>
```

```xml [logback.xml]
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <property name="LOG_PATTERN" value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %-5p %c{1}:%L - %m%n"/>

    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
    </appender>

    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
            <charset>utf-8</charset>
        </encoder>
        <file>log/output.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <fileNamePattern>log/output.log.%i</fileNamePattern>
        </rollingPolicy>
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <MaxFileSize>1MB</MaxFileSize>
        </triggeringPolicy>
    </appender>

    <root level="DEBUG">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>
</configuration>
```

:::

## 参考资料🎁

- 📃文档
  - [深入浅出Java多线程](https://redspider.gitbook.io/concurrent)
- 📺视频
  - [深入学习Java并发编程 | 黑马](https://www.bilibili.com/video/BV16J411h7Rd/?spm_id_from=333.999.0.0)
  - [JUC并发编程 | 尚硅谷](https://www.bilibili.com/video/BV1ar4y1x727/?spm_id_from=333.999.0.0&vd_source=bf3d4320498e90d36e1361cc18b45e48)
  - [java多线程与juc并发编程 | 动力节点](https://www.bilibili.com/video/BV1Bw4m1Z7eg/?spm_id_from=333.999.0.0&vd_source=bf3d4320498e90d36e1361cc18b45e48)