# Nacos-Discovery&Config

Nacos `/nɑ:kəʊs/`  是 Dynamic Naming and Configuration Service 的首字母简称，一个更易于构建云原生应用的**动态服务发现**、**配置管理**和**服务管理**平台。

Nacos 致力于帮助你发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助你快速实现动态服务发现、服务配置、服务元数据及流量管理。

Nacos 帮助你更敏捷和容易地构建、交付和管理微服务平台。Nacos 是构建以 "**服务**" 为中心地现代应用架构（例如微服务范式、云原生范式）的服务基础设施。

## 什么是 Nacos？

**服务（Service）** 是 Nacos 世界的一等公民。Nacos 支持几乎所有主流类型的 "**服务**" 的发现、配置和管理：

- [Kubernetes Service](https://kubernetes.io/docs/concepts/services-networking/service/)
- [gRPC](https://grpc.io/docs/guides/concepts.html#service-definition)
- [Dubbo RPC Service](https://dubbo.apache.org/)
- [Spring Cloud RESTful Service](https://spring.io/projects/spring-cloud)

其关键特性包括：

- 服务发现和服务健康监测：支持基于 DNS 和基于 RPC 的服务发现，提供对服务的实时的健康检查，阻止向不健康的主机或服务实例发送请求；
- 动态配置服务：动态配置服务可以让你以中心化、外部化和动态化的方式管理所有环境的应用配置和服务配置；
- 动态 DNS 服务：动态 DNS 服务支持权重路由，让你更容易地实现中间层负载均衡、更灵活的路由策略、流量控制以及数据中心内网的简单 DNS 解析服务；
- 服务及其元数据管理：支持从微服务平台建设的视角管理数据中心的所有服务及元数据；

## 安装

### 版本选择

你可以通过Nacos的[版本下载页面](https://nacos.io/download/nacos-server/)、[release notes](https://github.com/alibaba/nacos/releases) 及 [发布声明](https://nacos.io/news/release/)中找到每个版本支持的功能的介绍，当前推荐的稳定版本为`2.4.0`.

### 预备环境准备

Nacos 依赖 [Java](https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/) 环境来运行，请确保是在以下版本环境中安装使用：

1. 64 bit OS，支持 Linux/Unix/Mac/Windows，推荐选用 Linux/Unix/Mac；

2. 64 bit JDK 1.8+；[下载](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) & [配置](https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/)。

   1. 下载，请务必选对版本！<br />[Download the Latest Java LTS Free](https://www.oracle.com/java/technologies/downloads/#java8) ![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011511013.png)

   2. 解压

        ```bash
        tar -zxvf jdk-8u371-linux-x64.tar.gz
        ```

   3. 配置环境变量

      ```bash
      vim /etc/profile
      ```

   4. 输入 `i` 进入编辑模式，将以下内容粘贴到文件末尾，`esc` ➡️ `:wq`，保存退出

      ```bash
      export JAVA_HOME=/usr/local/java/jdk1.8.0_371
      export PATH=$JAVA_HOME/bin:$PATH
      export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
      ```

   5. 重新加载配置文件

      ```bash
      source /etc/profile
      ```

   6. 使用 `java -version` 命令验证是否安装成功 <br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011513845.png)


### 版本选择

在安装前请先确认项目中使用的 SpringCloudAlibaba 版本 ➡️ Nacos 组件所对应的版本，[组件版本关系](https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

| SpringCloudAlibaba | Spring Cloud | SpringBoot     | Nacos |
| ------------------ | ------------ | -------------- | ----- |
| 2.2.9.RELEASE      | Hoxton.SR12  | 2.3.12.RELEASE | 2.1.0 |
| 2021.0.5.0         | 2021.0.5     | 2.6.13         | 2.2.0 |

如上表所示，如果 SpringCloudAlibaba 选择 2.2.9.RELEASE 版本的话，那么 Nacos 组件应该选择 2.1.0 版本，因此需要安装 2.1.0 版本的 nacos-server 服务器 [Release 2.1.0 (Apr 29, 2022) · alibaba/nacos (github.com)](https://github.com/alibaba/nacos/releases/tag/2.1.0) <br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011514024.png)

```bash
tar -zxvf nacos-server-2.1.0.tar.gz
```

### 启动服务器

Linux & 单机模式 `sh startup.sh -m standalone` <br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011514320.png)

如何验证 Nacos 服务是否启动成功呢？

进入`${nacos.home}/logs/` 目录下， 使用`tail -f start.out` 查看日志，如果看到如下日志，则说明服务启动成功。<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011514458.png)

> [!note]
>
> <strong style="color:#ae3520;">服务器防火墙需要开放 8848 端口</strong>！

访问 <http://42.194.233.222:8848/nacos> <br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011514543.png)如上图所示，说明 nacos 服务器已经安装完成，可以正式开始使用！<strong style="color:#ae3520;">默认账号密码都是 nacos</strong>。

---

由于本人的 Linux 服务器比较差，所以切换到 Windows 环境下使用，大致步骤如下所示：

1. 下载安装包并解压；<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011515323.png)
2. 进入解压文件夹目录，使用 `.\startup.cmd -m standalone` 命令启动 Nacos 服务器；<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011515748.png)
3. 访问 <http://localhost:8848/nacos/>，默认账号密码都是 nacos。<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011515080.png)

## Spring Cloud Alibaba Nacos Discovery

该项目通过自动配置以及其他 Spring 编程模型的习惯用法为 SpringBoot 应用程序在服务注册与发现方面提供和 Nacos 的无缝集成。通过一些简单的注解，可以快速注册一个服务，并使用经过双十一考验的 Nacos 组件来作为大规模分布式系统的服务注册中心。

### 服务注册/发现: Nacos Discovery Starter

服务发现是微服务架构体系中最关键的组件之一。如果尝试着用手动的方式给每一个客户端来配置所有服务提供者的服务列表是一件非常困难的事，而且不利于服务的动态扩缩容。Nacos Discovery Starter 可以帮助你<strong style="color:#ae3520;">将服务 *自动注册* 到 Nacos 服务端</strong>并且<strong style="color:#ae3520;">能够动态感知和刷新某个服务实例的服务列表</strong>。除此之外，Nacos Discovery Starter 也将服务实例自身的一些元数据信息（如 host、port、健康检查 URL、主页等）注册到 Nacos。

### 如何引入 Nacos Discovery Starter 进行服务注册/发现

如果你想要在项目中使用 Nacos 来实现服务注册/发现，可以使用 groupId 为 `com.alibaba.cloud` 和 artifactId 为 `spring-cloud-starter-alibaba-nacos-discovery` 的 Starter。

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

### 一个使用 Nacos Discovery 进行服务注册/发现并调用的例子

![202308011517289.jpeg | 900](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011517289.jpeg)

#### 父模块

首先创建父模块 `nacos-spring-cloud-example`，其 pom.xml 配置文件如下所示：确定使用的 SpringCloud 版本为 `Hoxton.SR12`，SpringCloudAlibaba 版本为 `2.2.9.RELEASE`，SpringBoot 版本为 `2.3.12.RELEASE`。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>fun.xiaorang</groupId>
        <artifactId>spring-all-examples</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>nacos-spring-cloud-example</artifactId>
    <packaging>pom</packaging>
    <modules>
        <module>nacos-spring-cloud-discovery-example</module>
    </modules>

    <properties>
        <spring-cloud.version>Hoxton.SR12</spring-cloud.version>
        <spring-cloud-alibaba.version>2.2.9.RELEASE</spring-cloud-alibaba.version>
        <spring-boot.version>2.3.12.RELEASE</spring-boot.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring-cloud-alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

</project>
```

再创建 `nacos-spring-cloud-discovery-example` 模块，它的父模块为 `nacos-spring-cloud-example`，其 pom.xml 配置文件如下所示：引入 Nacos 服务注册发现、web 和 actuator 依赖。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>fun.xiaorang</groupId>
        <artifactId>nacos-spring-cloud-example</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>nacos-spring-cloud-discovery-example</artifactId>
    <packaging>pom</packaging>

    <dependencies>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
    </dependencies>

</project>
```

#### 启动一个 Provider 应用

创建一个 `nacos-spring-cloud-provider-example` 模块，它的父模块为 `nacos-spring-cloud-discovery-example` 模块，其 pom.xml 配置文件如下所示：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>fun.xiaorang</groupId>
        <artifactId>nacos-spring-cloud-discovery-example</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>nacos-spring-cloud-provider-example</artifactId>
    <description>服务提供方</description>
    
</project>
```

application.yml 配置文件如下所示：配置当前服务的名称为 `nacos-provider`，端口为 `8081`、nacos 服务器地址为 `127.0.0.1:8848`；

```yaml
server:
  port: 8081
spring:
  application:
    name: nacos-provider
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

> [!note]
>
> 如果不想使用 Nacos 作为你的服务注册与发现，可以将 `spring.cloud.nacos.discovery.enabled` 设置为 `false`。

更多关于 Nacos Discovery Starter 的配置项如下所示：参考自  [关于 Nacos Discovery Starter 更多的配置项信息](https://spring-cloud-alibaba-group.github.io/github-pages/hoxton/zh-cn/index.html#_%E5%85%B3%E4%BA%8E_nacos_discovery_starter_%E6%9B%B4%E5%A4%9A%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9%E4%BF%A1%E6%81%AF)

| 配置项         | Key                                       | 默认值                     | 说明                                                         |
| -------------- | ----------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| 服务端地址     | spring.cloud.nacos.discovery.server-addr  |                            | Nacos Server 启动监听的 ip 地址和端口                        |
| 服务名         | spring.cloud.nacos.discovery.service      | ${spring.application.name} | 给当前的服务命名                                             |
| 服务分组       | spring.cloud.nacos.discovery.group        | DEFAULT_GROUP              | 设置服务所处的分组                                           |
| 权重           | spring.cloud.nacos.discovery.weight       | 1                          | 取值范围 1 到 100，数值越大，权重越大                        |
| 命名空间       | spring.cloud.nacos.discovery.namespace    |                            | 常用场景之一是不同环境的注册的区分隔离，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。 |
| 集群           | spring.cloud.nacos.discovery.cluster-name | DEFAULT                    | 配置成 Nacos 集群名称                                        |
| 是否集成Ribbon | ribbon.nacos.enabled                      | true                       | 一般都设置成 true 即可                                       |

启动 Provider 示例，使用 `@EnableDiscoveryClient` 注解开启服务注册与发现功能，如下所示：

```java
@SpringBootApplication
@EnableDiscoveryClient
public class NacosProviderApplication {
    public static void main(String[] args) {
        SpringApplication.run(NacosProviderApplication.class, args);
    }

    @RestController
    public static class EchoController {
        @GetMapping(value = "/echo/{string}")
        public String echo(@PathVariable String string) {
            return "Hello Nacos Discovery " + string;
        }
    }
}
```

> [!NOTE]
>
> 在启动 Provider 应用之前请先确保 Nacos 服务已经启动！

项目启动成功之后，查看 Nacos 控制台，可以看到 nacos-provider 服务已经注册成功！<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011518660.png)

#### 启动一个 Consumer 应用

创建一个 `nacos-spring-cloud-consumer-example` 模块，它的父模块同样为 `nacos-spring-cloud-discovery-example` 模块，其 pom.xml 配置文件如下所示：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>fun.xiaorang</groupId>
        <artifactId>nacos-spring-cloud-discovery-example</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>nacos-spring-cloud-consumer-example</artifactId>
    <description>服务消费方</description>

</project>
```

application.yml 配置如下所示：配置当前服务的名称为 `nacos-consumer`，端口为 `8082`、nacos 服务器地址为 `127.0.0.1:8848`；

```yaml
server:
  port: 8082
spring:
  application:
    name: nacos-consumer
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

在 Consumer 端需要去调用 Provider 端提供的 REST 服务。例子中我们使用最原始的一种方式，即显示的使用 `LoadBalancerClient` 和 `RestTemplate` 结合的方式来访问。

> [!note]
>
> 以下这种服务调用方式的 `RestTemplate` 不能标注 `@LoadBalanced` 注解，否则的话会报错！

```java
@SpringBootApplication
@EnableDiscoveryClient
public class NacosConsumerApplication {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    public static void main(String[] args) {
        SpringApplication.run(NacosConsumerApplication.class, args);
    }

    @RestController
    public static class NacosController {
        private final RestTemplate restTemplate;
        private final LoadBalancerClient loadBalancerClient;

        @Value("${spring.application.name}")
        private String appName;

        public NacosController(final RestTemplate restTemplate, final LoadBalancerClient loadBalancerClient) {
            this.restTemplate = restTemplate;
            this.loadBalancerClient = loadBalancerClient;
        }

        @GetMapping("/echo/app-name")
        public String echoAppName() {
            //使用 LoadBalanceClient 和 RestTemplate 结合的方式来访问
            final ServiceInstance serviceInstance = loadBalancerClient.choose("nacos-provider");
            final String url = String.format("http://%s:%s/echo/%s", serviceInstance.getHost(), serviceInstance.getPort(), appName);
            System.out.println("request url:" + url);
            return restTemplate.getForObject(url, String.class);
        }
    }
}
```

> [!note]
>
> 通过带有负载均衡的 RestTemplate 和 FeignClient 也是可以访问的。
>
> 若想使用 FeignClient 服务调用方式，还需在项目中添加 `spring-cloud-starter-openfeign` 依赖，并且在应用上标注 `@EnableFeignClients` 注解。
>
> ::: code-group
>
> ```java [带有负载均衡的 RestTemplate]
> @SpringBootApplication
> @EnableDiscoveryClient
> public class NacosConsumerApplication {
>     /**
>    * 实例化 RestTemplate 实例
>    * 标注 @LoadBalanced 注解即可在 RestTemplate 上开启 LoadBalanced 负载均衡的功能
>    */
>     @Bean
>     @LoadBalanced
>     public RestTemplate restTemplate() {
>         return new RestTemplate();
>     }
> 
>     public static void main(String[] args) {
>         SpringApplication.run(NacosConsumerApplication.class, args);
>     }
> 
>     @RestController
>     public static class NacosController {
>         private final RestTemplate restTemplate;
> 
>         @Value("${spring.application.name}")
>         private String appName;
> 
>         public NacosController(final RestTemplate restTemplate) {
>             this.restTemplate = restTemplate;
>         }
> 
>         @GetMapping("/echo/app-name")
>         public String echoAppName() {
>             final String url = String.format("http://%s/echo/%s", "nacos-provider", appName);
>             System.out.println("request url:" + url);
>             return restTemplate.getForObject(url, String.class);
>         }
>     }
> }
> ```
>
> ```java [FeignClient]
> @SpringBootApplication
> @EnableDiscoveryClient
> @EnableFeignClients
> public class NacosConsumerApplication {
>   public static void main(String[] args) {
>     SpringApplication.run(NacosConsumerApplication.class, args);
>   }
> 
>   @FeignClient(name = "nacos-provider")
>   public interface EchoFeignClient {
>     @GetMapping("/echo/{str}")
>     String echo(@PathVariable(value = "str") String str);
>   }
> 
>   @RestController
>   public static class NacosController {
>     private final EchoFeignClient echoFeignClient;
> 
>     @Value("${spring.application.name}")
>     private String appName;
> 
>     public NacosController(final EchoFeignClient echoFeignClient) {
>       this.echoFeignClient = echoFeignClient;
>     }
> 
>     @GetMapping("/echo/app-name")
>     public String echoAppName() {
>       return echoFeignClient.echo(appName);
>     }
>   }
> }
> ```
>
> :::



在这个例子中咱们注入了一个 `LoadBalancerClient` 的实例（因为当前版本的 `spring-cloud-starter-alibaba-nacos-discovery` 内置了 **Ribbon**，所以可以直接注入 `LoadBalancerClient`），并且手动的实例化一个 `RestTemplate`，同时将 `spring.application.name` 的配置值注入到应用中来，目的是调用 Provider 提供的服务时，将当前配置的应用名给显示出来。

> [!note]
>
> 在启动 Consumer 应用之前请先确保 Nacos 服务已经启动！

项目启动成功之后，查看 Nacos 控制台，可以看到 nacos-consumer 服务已经注册成功！

![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011525191.png)

启动后，访问 Consumer 提供出来的 <http://localhost:8082/echo/app-name> 接口，浏览器输出 "Hello Nacos Discovery nacos-consumer" 字样。

### Nacos Discovery 对外暴露的 Endpoint

`spring-cloud-starter-alibaba-nacos-discovery` 在实现的时候提供了一个 EndPoint，EndPoint 的访问地址为 `http://ip:port/actuator/nacos-discovery`。EndPoint 的信息主要提供了两类：

1. subscribe：显示了当前服务有哪些订阅者
2. NacosDiscoveryProperties：当前应用 Nacos 的基础配置信息

> [!note]
>
> 此处有一个坑，官方文档说 EndPoint 的访问地址为 `http://ip:port/actuator/nacos-discovery`，其实这是错的，本人尝试许久都不行，访问一直报 404！如下所示：<br /> ![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011533022.png) 后面直接访问一下 `http://ip:port/actuator`，发现 nacos discovery 的 EndPoint 访问地址为 `http://ip:port/actuator/nacosdiscovery`，nacos 与 discovery 之间并没有什么短横线！<br /> ![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011529608.png)

访问 <http://localhost:8081/actuator/nacosdiscovery>，Provider 服务实例访问 EndPoint 的信息如下所示：

```json
{
    "subscribe":[
        {
            "name":"nacos-provider",
            "groupName":"DEFAULT_GROUP",
            "clusters":"DEFAULT",
            "cacheMillis":1000,
            "hosts":[
                {
                    "ip":"192.168.1.3",
                    "port":8081,
                    "weight":1,
                    "healthy":true,
                    "enabled":true,
                    "ephemeral":true,
                    "clusterName":"DEFAULT",
                    "serviceName":"DEFAULT_GROUP@@nacos-provider",
                    "metadata":{
                        "preserved.register.source":"SPRING_CLOUD"
                    },
                    "ipDeleteTimeout":30000,
                    "instanceHeartBeatInterval":5000,
                    "instanceHeartBeatTimeOut":15000
                }
            ],
            "lastRefTime":0,
            "checksum":"",
            "allIPs":false,
            "reachProtectionThreshold":false,
            "valid":true
        }
    ],
    "NacosDiscoveryProperties":{
        "serverAddr":"127.0.0.1:8848",
        "username":"",
        "password":"",
        "endpoint":"",
        "namespace":"",
        "watchDelay":30000,
        "logName":"",
        "service":"nacos-provider",
        "weight":1,
        "clusterName":"DEFAULT",
        "group":"DEFAULT_GROUP",
        "namingLoadCacheAtStart":"false",
        "metadata":{
            "preserved.register.source":"SPRING_CLOUD"
        },
        "registerEnabled":true,
        "ip":"192.168.1.3",
        "networkInterface":"",
        "ipType":"IPv4",
        "port":8081,
        "secure":false,
        "accessKey":"",
        "secretKey":"",
        "heartBeatInterval":null,
        "heartBeatTimeout":null,
        "ipDeleteTimeout":null,
        "instanceEnabled":true,
        "ephemeral":true,
        "failFast":true,
        "nacosProperties":{
            "password":"",
            "endpoint":"",
            "secretKey":"",
            "serverAddr":"127.0.0.1:8848",
            "accessKey":"",
            "clusterName":"DEFAULT",
            "namespace":"",
            "com.alibaba.nacos.naming.log.filename":"",
            "namingLoadCacheAtStart":"false",
            "username":""
        }
    }
}
```

## Spring Cloud Alibaba Nacos Config

Nacos 提供用于存储配置和其他元数据的 key/value 存储，为分布式系统中的外部化配置提供服务器端和客户端支持。使用 Spring Cloud Alibaba Nacos Config，你可以在 Nacos Server 集中管理你的 Spring Cloud 应用的外部属性配置。

Spring Cloud Alibaba Nacos Config 是 Config Server 和 Client 的替代方案，客户端和服务器上的概念与 Spring **Enviroment** 和 **PropertySource** 有着一致的抽象，<strong style="color:#ae3520;">在特殊的 bootstrap 阶段，配置被加载到 Spring 环境中</strong>。当应用程序从开发 ➡️ 测试 ➡️ 生产时，你可以管理这些环境之间的配置，并确保应用程序具有迁移时需要运行的所有内容。

### 快速开始

#### Nacos 服务端初始化

在启动 Nacos Server 之后，先添加一个配置，如下所示：

```properties
Data ID:    nacos-config.properties

Group  :    DEFAULT_GROUP

配置格式:    Properties

配置内容：   user.name=nacos-config-properties
            user.age=90
```

> [!NOTE]
>
> dataId 是以 properties（默认的文件扩展名方式）为扩展名。

![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011534793.png)![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011534294.png)

#### 客户端使用方式

如果你想要在项目中使用 Nacos 来实现配置管理，可以使用 groupId 为 `com.alibaba.cloud` 和 artifactId 为 `spring-cloud-starter-alibaba-nacos-config` 的 Starter。

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

现在就可以创建一个标准的 Spring Boot 应用。

```java
@SpringBootApplication
public class NacosConfigApplication {
    public static void main(String[] args) {
        final ConfigurableApplicationContext applicationContext = SpringApplication.run(NacosConfigApplication.class, args);
        final String userName = applicationContext.getEnvironment().getProperty("user.name");
        final String userAge = applicationContext.getEnvironment().getProperty("user.age");
        System.err.println("user name: " + userName + "; age: " + userAge);
    }
}
```

> [!note]
>
> 在运行此示例之前，<strong style="color:#ae3520;">必须使用 *bootstrap.properties* 或者 *bootstrap.yml* 配置文件来配置 Nacos Server 地址</strong>！！！

bootstrap.yml 配置文件如下所示：

```yaml
server:
  port: 8083
spring:
  application:
    name: nacos-config
  cloud:
    nacos:
      config:
        server-addr: localhost:8848
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

> [!NOTE]
> 当你使用使用域名的方式来访问 Nacos 时，`spring.cloud.nacos.config.server-addr` 配置的方式为 `域名:port`。例如 Nacos 的域名为 abc.com.nacos，监听的端口为 80，则 `spring.cloud.nacos.config.server-addr=abc.com.nacos:80`。注意：80 端口不能省略！

更多关于 Nacos Config Starter 的配置项如下所示：参考自  [关于 Nacos Config Starter 更多的配置项信息](https://spring-cloud-alibaba-group.github.io/github-pages/hoxton/zh-cn/index.html#_%E5%85%B3%E4%BA%8E_nacos_config_starter_%E6%9B%B4%E5%A4%9A%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9%E4%BF%A1%E6%81%AF)

| 配置项                    | Key                                         | 默认值                     | 说明                                                         |
| ------------------------- | ------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| 服务端地址                | spring.cloud.nacos.config.server-addr       |                            | Nacos Server 启动监听的 ip 地址和端口                        |
| DataId 前缀               | spring.cloud.nacos.config.prefix            | ${spring.application.name} | DataId 的前缀，默认值为应用名称                              |
| 配置对应的 DataId         | spring.cloud.nacos.config.name              |                            | <strong style="color:#ae3520;">`dataId = ${prefix}-${spring.profiles.active}.${file-extension}`，而其中 prefix 的可选值有如下三种，优先级从高到底依次为：`spring.cloud.nacos.config.prefix` ➡️ `spring.cloud.nacos.config.name` ➡️ 默认值 `${spring.application.name}`</strong> |
| DataId 后缀及内容文件格式 | spring.cloud.nacos.config.file-extension    | properties                 | DataId 的后缀，同时也是配置内容的文件格式，目前支持 properties 和 yaml(yml) |
| GROUP                     | spring.cloud.nacos.config.group             | DEFAULT_GROUP              | 配置对应的组                                                 |
| 配置的命名空间            | spring.cloud.nacos.config.namespace         |                            | 常用场景之一是不同环境的配置的区分隔离，例如开发测试环境和生产环境的资源隔离等。 |
| 共享配置                  | spring.cloud.nacos.config.shared-configs    |                            | 属性是个集合，内部由 `Config` POJO 组成。`Config` 有 4 个属性，分别是 `dataId`, `group`，`fileExtension` 以及 `refresh` |
| 扩展配置                  | spring.cloud.nacos.config.extension-configs |                            | 属性是个集合，内部由 `Config` POJO 组成。`Config` 有 4 个属性，分别是 `dataId`, `group`，`fileExtension` 以及 `refresh` |

启动该示例，可以看到如下输出结果：

```sh {2}
2024-08-10 13:14:13.416  INFO 10800 --- [           main] f.x.n.s.c.c.e.NacosConfigApplication     : Started NacosConfigApplication in 2.306 seconds (JVM running for 2.77)
user name: nacos-config-properties; age: 90
2024-08-10 13:14:13.879  INFO 10800 --- [(3)-192.168.1.3] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
```

### 基于 DataId 为 yaml 的文件扩展名配置方式

`spring-cloud-starter-alibaba-nacos-config` 对于 yaml 格式也是完美支持的。此时只需要完成以下两步：

1. 在应用的 bootstrap.properties 或者 bootstrap.yml 配置文件中显式的声明 dataId 文件扩展名，即 `file-extension: yaml`。如下所示：

   ```yaml
    server:
      port: 8083
    spring:
      application:
        name: nacos-config
      cloud:
        nacos:
          config:
            server-addr: localhost:8848
            file-extension: yaml
    management:
      endpoints:
        web:
          exposure:
            include: '*'
   ```

2. 在 Nacos 的控制台新增一个 dataId 为 yaml 为扩展名的配置，如下所示：

   ```
    Data ID:        nacos-config.yaml
    
    Group  :        DEFAULT_GROUP
    
    配置格式:        YAML
    
    配置内容:        user.name: nacos-config-yaml
                    user.age: 68
   ```
   
   ![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011538005.png)

这两步完成之后，重新启动示例程序，可以看到如下输出结果：

```sh {2}
2024-08-10 13:56:38.625  INFO 1412 --- [           main] f.x.n.s.c.c.e.NacosConfigApplication     : Started NacosConfigApplication in 2.508 seconds (JVM running for 3.091)
user name: nacos-config-yaml; age: 68
2024-08-10 13:56:38.821  INFO 1412 --- [(1)-192.168.1.3] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
```

### 支持配置的动态更新

`sspring-cloud-starter-alibaba-nacos-config` <strong style="color:#ae3520;">默认支持配置的动态更新</strong>，启动 Spring Boot 应用测试的代码如下：

```java
@SpringBootApplication
public class NacosConfigApplication {
    public static void main(String[] args) throws InterruptedException {
        ConfigurableApplicationContext applicationContext = SpringApplication.run(NacosConfigApplication.class, args);
        while (true) {
            //当动态配置刷新时，会更新到 Enviroment中，因此这里每隔一秒中从Enviroment中获取配置
            String userName = applicationContext.getEnvironment().getProperty("user.name");
            String userAge = applicationContext.getEnvironment().getProperty("user.age");
            System.err.println("user name :" + userName + "; age: " + userAge);
            TimeUnit.SECONDS.sleep(1);
        }
    }
}
```

如下所示，当变更 `user.name` 时，应用程序中能够获取到最新的值：

```sh {2,9}
user name :nacos-config-yaml; age: 68
user name :nacos-config-yaml; age: 68
2024-08-10 17:22:10.668  WARN 20148 --- [ternal.notifier] c.a.c.n.c.NacosPropertySourceBuilder     : Ignore the empty nacos configuration and get it based on dataId[nacos-config] & group[DEFAULT_GROUP]
2024-08-10 17:22:10.668  INFO 20148 --- [ternal.notifier] b.c.PropertySourceBootstrapConfiguration : Located property source: [BootstrapPropertySource {name='bootstrapProperties-nacos-config.yaml,DEFAULT_GROUP'}, BootstrapPropertySource {name='bootstrapProperties-nacos-config,DEFAULT_GROUP'}]
2024-08-10 17:22:10.668  INFO 20148 --- [ternal.notifier] o.s.boot.SpringApplication               : No active profile set, falling back to default profiles: default
2024-08-10 17:22:10.683  INFO 20148 --- [ternal.notifier] o.s.boot.SpringApplication               : Started application in 0.112 seconds (JVM running for 9.368)
2024-08-10 17:22:10.768  INFO 20148 --- [ternal.notifier] o.s.c.e.event.RefreshEventListener       : Refresh keys changed: [user.name]
// 从 Enviroment 中 读取到更改后的值
user name :nacos-config-yaml-update; age: 68
user name :nacos-config-yaml-update; age: 68
```

> [!note]
>
> 你可以通过配置 `spring.cloud.nacos.config.refresh.enabled=false` 来关闭动态刷新。

### 支持 profile 粒度的配置

`spring-cloud-starter-alibaba-nacos-config` <strong style="color:#ae3520;">在加载配置的时候，不仅仅加载 dataId 为 `${spring.application.name}.${file-extension:properties}` 为前缀的基础配置，还加载了 dataId 为 `${spring.application.name}-${profile}.${file-extension:properties}` 的配置</strong>。在日常开发中如果遇到多套环境下的不同配置，可以通过 Spring 提供的 `spring.profiles.active` 这个配置项来配置。

```yaml {11-12}
server:
  port: 8083
spring:
  application:
    name: nacos-config
  cloud:
    nacos:
      server-addr: localhost:8848
      config:
        file-extension: yaml
  profiles:
    active: develop
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

> [!note]
> <strong style="color:#ae3520;">`${spring.profiles.active}` 当通过配置文件来指定时必须放在 bootstrap.properties 或者 bootstrap.yml 配置文件中</strong>。

Nacos 上新增一个 dataId 为 nacos-config-develop.yaml 的基础配置，如下所示：

```
Data ID:        nacos-config-develop.yaml

Group  :        DEFAULT_GROUP

配置格式:        YAML

配置内容:        current.env: develop-env
```

![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011539821.png)

启动 SpringBoot 应用测试的代码如下：

```java
@SpringBootApplication
public class NacosConfigApplication {
    public static void main(String[] args) throws InterruptedException {
        ConfigurableApplicationContext applicationContext = SpringApplication.run(NacosConfigApplication.class, args);
        while (true) {
            //当动态配置刷新时，会更新到 Enviroment 中，因此这里每隔一秒中从 Enviroment 中获取配置
            String userName = applicationContext.getEnvironment().getProperty("user.name");
            String userAge = applicationContext.getEnvironment().getProperty("user.age");
            //获取当前部署的环境
            String currentEnv = applicationContext.getEnvironment().getProperty("current.env");
            System.err.println("in " + currentEnv + " enviroment; " + "user name :" + userName + "; age: " + userAge);
            TimeUnit.SECONDS.sleep(1);
        }
    }
}
```

启动后，可见控制台的输出结果：

```sh {2}
2024-08-10 19:26:13.569  INFO 13592 --- [           main] f.x.n.s.c.c.p.e.NacosConfigApplication   : Started NacosConfigApplication in 2.363 seconds (JVM running for 2.945)
in develop-env enviroment; user name :nacos-config-yaml-update; age: 68
2024-08-10 19:26:14.049  INFO 13592 --- [(1)-192.168.1.3] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
```

如果需要切换到生产环境，只需要更改 `${spring.profiles.active}` 参数配置即可。如下所示：

```yaml {11-12}
server:
  port: 8083
spring:
  application:
    name: nacos-config
  cloud:
    nacos:
      config:
        server-addr: localhost:8848
        file-extension: yaml
  profiles:
    active: product
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

同时生产环境上的 Nacos 添加对应 dataId 的基础配置即可。例如，在生产环境下的 Nacos 添加了 dataId 为 nacos-config-product.yaml 的配置：

```properties
Data ID:        nacos-config-product.yaml

Group  :        DEFAULT_GROUP

配置格式:        YAML

配置内容:        current.env: product-env

```

![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011540363.png)

启动测试程序，输出结果如下所示：

```sh {2}
2024-08-10 19:29:11.989  INFO 21464 --- [           main] f.x.n.s.c.c.p.e.NacosConfigApplication   : Started NacosConfigApplication in 2.346 seconds (JVM running for 2.881)
in product-env enviroment; user name :nacos-config-yaml-update; age: 68
2024-08-10 19:29:12.473  INFO 21464 --- [(2)-192.168.1.3] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
```

> [!note]
> 在此案例中咱们通过 `spring.profiles.active=<profilename>` 的方式写死在配置文件中，而在真正的项目实施过程中这个变量的值是需要根据不同环境而有不同的值。这个时候通常的做法是<strong style="color:#ae3520;">通过 `-Dspring. Profiles. Active=<profile>` 参数指定其配置来达到环境间灵活的切换</strong>；如下所示：<br /> ![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308011541299.png)
>
> 

### 支持自定义 Namespace 的配置

首先看一下 Nacos 的 Namespace 的概念， [Nacos 概念](https://nacos.io/zh-cn/docs/concepts.html)

> 用于进行租户粒度的配置隔离。<strong style="color:#ae3520;">不同的命名空间下，可以存在相同的 Group 或Data ID 的配置</strong>。<strong style="color:#ae3520;">Namespace 的常用场景之一是不同环境的配置的区分隔离</strong>，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。

<strong style="color:#ae3520;">在没有明确指定 `${spring.cloud.nacos.config.namespace}` 配置的情况下，默认使用的是 Nacos 上 *Public* 这个 namespace</strong>。如果需
要使用自定义的命名空间，可以通过以下配置来实现：

```properties
spring.cloud.nacos.config.namespace=b3404bc0-d7dc-4855-b519-570ed34b62d7
```

> [!note]
> <strong style="color:#ae3520;">该配置必须放在 *bootstrap.properties* 或者 *bootstrap.yml* 配置文件中</strong>。此外 `spring.cloud.nacos.config.namespace` 的值是 namespace 对应的 id，id 值可以在 Nacos 的控制台获取。并且在添加配置时注意不要选择其他的 namespace，否则将会导致读取不到正确的配置。

### 支持自定义 Group 的配置

::: details 相关概念，包括配置项、配置集、配置集 ID 以及配置分组

- 配置项：一个具体的可配置的参数与其值域，通常以 param-key=param-value 的形式存在。例如咱们常配置系统的日志输出级别（logLevel=INFO|WARN|ERROR）就是一个配置项。
- 一组相关或者不相关的配置项合称为配置集。<strong style="color:#ae3520;">在系统中，一个配置文件通常就是一个配置集，包含了系统各方面的配置</strong>。例如，一个配置集可能包含了数据源、线程池、日志级别等配置项。
- 配置集 ID：Nacos 中的某个配置集的 ID。配置集 ID 是组织划分配置的维度之一。Data ID 通常用于组织划分系统的配置集。一个系统或者应用可以包含多个配置集，每个配置集都可以被一个有意义的名称标识。Data ID 通常采用类 Java 包（如 com.taobao.tc.refund.log.level）的命名规则保证全局唯一性。此命名规则非强制。
- 配置分组：Nacos 中的一组配置集，是组织配置的维度之一。通过一个有意义的字符串（如 Buy 或 Trade ）对配置集进行分组，从而区分 Data ID 相同的配置集。当你在 Nacos 上创建一个配置时，如果未填写配置分组的名称，则<strong style="color:#ae3520;">配置分组的名称默认采用 DEFAULT_GROUP </strong>。<strong style="color:#ae3520;">配置分组的常见场景：不同的应用或组件使用了相同的配置类型</strong>，如 database_url 配置和 MQ_topic 配置。

:::

在没有明确指定 `${spring.cloud.nacos.config.group}` 配置的情况下， 默认使用的是 DEFAULT_GROUP 。如果需要自定义自己的 Group，可以通过以下配置来实现：

```properties
spring.cloud.nacos.config.group=DEVELOP_GROUP
```

> [!note]
>
> <strong style="color:#ae3520;">该配置必须放在 *bootstrap.properties* 或者 *bootstrap.yml* 配置文件中</strong>。并且在添加配置时 group 的值一定要和配置文件中 `spring.cloud.nacos.config.group` 的配置值一致！

### 支持自定义扩展的 Data Id 配置

`spring-cloud-starter-alibaba-nacos-config` 从 0.2.1 版本之后，可支持自定义 Data Id 的配置。关于这部分详细的设计可参考[[discuss]: nacos config support sharing configuration with multi Applications · Issue #141 · alibaba/spring-cloud-alibaba](https://github.com/alibaba/spring-cloud-alibaba/issues/141)。一个完整的配置案例如下所示：

```properties
spring.application.name=opensource-service-provider
spring.cloud.nacos.config.server-addr=127.0.0.1:8848

# config external configuration
# 1、Data Id 在默认的组 DEFAULT_GROUP,不支持配置的动态刷新
spring.cloud.nacos.config.extension-configs[0].data-id=ext-config-common01.properties

# 2、Data Id 不在默认的组，不支持动态刷新
spring.cloud.nacos.config.extension-configs[1].data-id=ext-config-common02.properties
spring.cloud.nacos.config.extension-configs[1].group=GLOBALE_GROUP

# 3、Data Id 既不在默认的组，但支持动态刷新
spring.cloud.nacos.config.extension-configs[2].data-id=ext-config-common03.properties
spring.cloud.nacos.config.extension-configs[2].group=REFRESH_GROUP
spring.cloud.nacos.config.extension-configs[2].refresh=true
```

可以看到：

- 通过 `spring.cloud.nacos.config.extension-configs[n].data-id` 的配置方式来支持多个 Data Id 的配置；
- 通过 `spring.cloud.nacos.config.extension-configs[n].group` 的配置方式自定义 Data Id  所在的组，不明确配置的话，默认是 DEFAULT_GROUP；
- 通过 `spring.cloud.nacos.config.extension-configs[n].refresh` 的配置方式来控制该 Data Id 在配置变更时，是否支持应用中可动态刷新，感知到最新的配置值，<strong style="color:#ae3520;">默认是不支持的</strong>。

> [!note]
>
> 多个 Data Id 同时配置时，它的优先级关系是 `spring.cloud.nacos.config.extension-configs[n].data-id` 其中 <strong style="color:#ae3520;">n 的值越大,
> 优先级越高</strong>。

> [!note]
>
> <strong style="color:#ae3520;">`spring.cloud.nacos.config.extension-configs[n].data-id` 的值必须带文件扩展名</strong>，文件扩展名既可支持 properties，又可以支持 yaml/yml。<strong style="color:#ae3520;">此时 `spring.cloud.nacos.config.file-extension` 的配置对自定义扩展配置的 Data Id 文件扩展名没有影响</strong>。

> [!note]
>
> 扩展配置中没有 namespace 的配置，言外之意就是 Nacos 目前还不支持多个配置指定不同的命名空间。

<strong style="color:#ae3520;">通过自定义扩展的 Data Id 配置，既可以解决多个应用间配置共享的问题，又可以支持一个应用有多个配置文件</strong>。

为了更加清晰的<strong style="color:#ae3520;">在多个应用间配置共享的 Data Id</strong>，你可以通过以下的方式来配置：

```properties
# 配置支持共享的 Data Id
spring.cloud.nacos.config.shared-configs[0].data-id=common.yaml

# 配置 Data Id 所在分组，缺省默认 DEFAULT_GROUP
spring.cloud.nacos.config.shared-configs[0].group=GROUP_APP1

# 配置Data Id 在配置变更时，是否动态刷新，缺省默认 false
spring.cloud.nacos.config.shared-configs[0].refresh=true
```

可以看到：

- 通过 `spring.cloud.nacos.config.shared-configs[n].data-id` 来支持多个共享 Data Id 的配置；
- 通过 `spring.cloud.nacos.config.shared-configs[n].group` 来配置共享 Data Id 所在的组，不明确配置的话，默认是 DEFAULT_GROUP；
- 通过 `spring.cloud.nacos.config.shared-configs[n].refresh` 来控制该 Data Id 在配置变更时，是否支持应用中可动态刷新，默认 `false`；

### 配置的优先级

`spring-cloud-starter-alibaba-nacos-config` 目前提供了三种配置能力从 Nacos 拉取相关的配置。

- A：通过 `spring.cloud.nacos.config.shared-configs[n].data-id` 来支持多个共享 Data Id 的配置；
- B：通过 `spring.cloud.nacos.config.extension-configs[n].data-id` 的方式支持多个扩展 Data Id 的配置；
- C：通过内部相关规则（应用名、应用名 + profile）自动生成相关的 Data Id 配置；

当三种方式共同使用时，它们的优先级关系是：***A < B < C***。

### 完全关闭配置

可以通过设置 `spring.cloud.nacos.config.enabled=false` 来完全关闭 Spring Cloud Nacos Config。

### Nacos Config 对外暴露的 Endpoint

Nacos Config 内部提供了一个 Endpoint，EndPoint 的访问地址为 <http://localhost:8083/actuator/nacosconfig> Endpoint 暴露的 json 中包含了三种属性：

1. Sources：当前应用配置的数据信息
2. RefreshHistory：配置刷新的历史记录
3. NacosDiscoveryProperties：当前应用 Nacos 的基础配置信息

以下为 Endpoint 暴露的 json 示例：

```json
{
    "NacosConfigProperties": {
        "serverAddr": "localhost:8848",
        "username": "",
        "password": "",
        "encode": null,
        "group": "DEFAULT_GROUP",
        "prefix": null,
        "fileExtension": "yaml",
        "timeout": 3000,
        "maxRetry": null,
        "configLongPollTimeout": null,
        "configRetryTime": null,
        "enableRemoteSyncConfig": false,
        "endpoint": null,
        "namespace": null,
        "accessKey": null,
        "secretKey": null,
        "ramRoleName": null,
        "contextPath": null,
        "clusterName": null,
        "name": null,
        "sharedConfigs": null,
        "extensionConfigs": null,
        "refreshEnabled": true,
        "sharedDataids": null,
        "extConfig": null,
        "configServiceProperties": {
            "encode": "",
            "secretKey": "",
            "configLongPollTimeout": "",
            "maxRetry": "",
            "password": "",
            "configRetryTime": "",
            "endpoint": "",
            "serverAddr": "localhost:8848",
            "accessKey": "",
            "enableRemoteSyncConfig": "false",
            "fileExtension": "yaml",
            "clusterName": "",
            "namespace": "",
            "ramRoleName": "",
            "username": ""
        },
        "refreshableDataids": null
    },
    "RefreshHistory": [

    ],
    "Sources": [
        {
            "lastSynced": "2024-08-11 11:13:39",
            "dataId": "nacos-config"
        },
        {
            "lastSynced": "2024-08-11 11:13:39",
            "dataId": "nacos-config.yaml"
        },
        {
            "lastSynced": "2024-08-11 11:13:39",
            "dataId": "nacos-config-product.yaml"
        }
    ]
}
```

## 总结

### 配置规则

> [!important]
>
> <strong style="color:#ae3520;font-size:19px;">Nacos 配置中心通过 *namespace*、*group* 和 *dataId* 来唯一确定一条配置！</strong>

1. **namespace**：即命名空间。默认的命名空间为 public，可以通过 `${spring.cloud.nacos.config.namespace}` 配置项进行明确指定。其常用场景之一是**不同环境**的配置的区分隔离，如开发环境（dev）、测试环境（test）和生产环境（prod）；

2. **group**：即配置分组。默认为 DEFAULT_GROUP，可以通过 ` ${spring.cloud.nacos.config.group}` 配置项进行明确指定。其常用场景之一是**不同应用或组件**的配置的区分隔离。

3. **dataId**：即配置集 ID 名称。其完整的拼接格式如下所示：

   ```
   ${prefix}-${spring.profiles.active}.${file-extension}
   ```

   - prefix：默认为 `${spring.application.name}` 的值，可以通过 `spring.cloud.nacos.config.prefix` 配置项进行配置；

   - spring.profiles.active：即为当前激活的环境对应的 profile。

     > [!note]
     >
     > 1. 当 spring.profiles.active 为空时，对应的连接符 `-` 也将不存在，dataId 的拼接格式变为 `${prefix}.${file-extension}`；
     > 2.  Nacos Config 不仅仅会加载 dataId 为 `${prefix}.${file-extension}` 为前缀的基础配置，还会加载 dataId 为 `${prefix}-${spring.profiles.active}.${file-extension}` 的配置。

   - file-extension：即为配置内容的数据格式。支持 properties 和 yaml/yml 两种格式，默认为 properties，可以通过 `spring.cloud.nacos.config.file-extension` 配置项进行配置。

### 配置优先级

![image-20240811133208305](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408111332443.png)

## 参考资料🎁

-  [Nacos discovery](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-discovery) & [Nacos config](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config) ➡️ [Spring Cloud Alibaba 参考文档 (spring-cloud-alibaba-group.github.io)](https://spring-cloud-alibaba-group.github.io/github-pages/hoxton/zh-cn/index.html)
- [Spring Cloud Alibaba官网 | Spring AI + 阿里通义组件 | Springboot | 微服务实践教程 - Spring Cloud Alibaba官网 (aliyun.com)](https://sca.aliyun.com/?spm=5176.29160081.0.0.288d3d07W6dQNa) 🚀🚀🚀
- [Nacos](https://nacos.io/)
- [nacos-examples/nacos-spring-cloud-example at master · nacos-group/nacos-examples (github.com)](https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example)
