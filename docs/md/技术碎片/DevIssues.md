# DevIssues

## Nacos 服务启动报错

当使用 `.\startup.cmd -m standalone` 命令启动 Nacos 服务器时，抛出如下错误：<br />![](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202312021009386.png)

解决方案：请将 Java 环境变量 `JAVA_HOME` 更换为更高的 JDK8 版本或直接使用 JDK11 版本及以上。

## bootstrap.yml 配置文件不生效

当前环境：

| SpringCloudAlibaba | Spring Cloud | SpringBoot | Nacos |
| :----------------- | ------------ | ---------- | ----- |
| 2021.0.5.0         | 2021.0.5     | 2.6.13     | 2.2.0 |

[原文传送门](https://docs.spring.io/spring-cloud/docs/2020.0.1/reference/htmlsingle/#config-first-bootstrap)

> To use the legacy bootstrap way of connecting to Config Server, **bootstrap must be enabled via a property or the `spring-cloud-starter-bootstrap` starter. The property is `spring.cloud.bootstrap.enabled=true`. It must be set as a System Property or environment variable.**

大致意思：需要配置**属性 `spring.clod.bootstrap.enable = true`，该属性必须被设置为系统属性或环境变量**或者添加如下依赖：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
```

## gateway 503 Service Unavailable

当前环境：

| SpringCloudAlibaba | Spring Cloud | SpringBoot | Nacos |
| :----------------- | ------------ | ---------- | ----- |
| 2021.0.5.0         | 2021.0.5     | 2.6.13     | 2.2.0 |

造成 Gateway 负载均衡失效的原因是，从 Spring Cloud 2020 版本开始，Spring Cloud 弃用了 Ribbon，使用 `Spring Cloud Loadbalancer` 作为客户端的负载均衡组件；因此 Spring Cloud Alibaba 在 2021 版本的 Nacos 中也移除了 `Ribbon` 的依赖，最终导致 Gateway 无法通过 `lb://` 路由到指定的服务，继而出现了 `503` 错误码。解决方案是引入 `spring-cloud-starter-loadbalancer` 依赖即可：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```
