# SpringSecurity 初体验

Spring Security 是一款基于 Spring 的安全框架，主要包含认证和授权两大安全模块，和另外一款流行的安全框架 Apache Shiro 相比，它拥有更为强大的功能。Spring Security 也可以轻松的自定义扩展以满足各种需求，并且对常见的 Web 安全攻击提供了防护支持。如果你的 Web 框架选择的是Spring，那么在安全方面 Spring Security 会是一个不错的选择。

这里咱们使用 SpringBoot 来集成 Spring Security，SpringBoot 版本为 `2.6.15`，Spring Security 版本为 `5.6.10`。

## 开启 Spring Security

开启 Spring Security 非常简单，只需创建一个 SpringBoot 项目，然后引入 Spring Security 依赖即可：

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

然后创建一个 TestController，对外提供一个 `/hello` 服务：

```java
@RestController
public class TestController {
  @GetMapping("/hello")
  public String hello() {
    return "hello";
  }
}
```

这时候直接启动项目，访问 http://localhost:8080/hello ，可以看到在页面中间出现一个用于登录的 Form 表单：<br />![image-20240719164718553](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202407191647649.png)

当输入凭证错误时，页面上将显示错误信息：<br />![image-20240719235218981](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202407192352037.png)

当 SpringBoot 项目引入了 Spring Security 依赖的时候，项目就会自动开启 Spring Security 安全防护。

1. <strong style="color:#ae3520;">默认使用 Form 表单认证，所有服务的访问都必须先过这个认证</strong>

2. <strong style="color:#ae3520;">默认的用户名为 user，密码由 Spring Security 自动生成</strong>，查看 IDE 的控制台，可以找到密码信息：

   ```
   Using generated security password: e4a6796b-807b-4081-ae67-15250538218f
   ```

输入用户名 user，密码 e4a6796b-807b-4081-ae67-15250538218f 后，咱们便可以成功访问 `/hello` 接口。

## 基于 HTTP Basic 认证

咱们可以通过一些配置将 Form 表单认证修改为基于 HTTP Basic 的认证方式。

创建一个配置类 `WebSecurityConfig` 继承自 `WebSecurityConfigurerAdapter` 这个抽象类，并且重写 `configure(HttpSecurity http)` 方法。`WebSecurityConfigurerAdapter` 是由 Spring Security 提供的 Web 应用安全配置的适配器：

```java
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(final HttpSecurity http) throws Exception {
    http.httpBasic() // 使用httpBasic认证
            .and()
            .authorizeRequests() // 授权配置
            .anyRequest() // 所有请求
            .authenticated(); // 都需要认证
  }
}
```

Spring Security 提供了这种链式的方法调用。上面配置开启了一个 HTTP Basic 类型的认证，并且所有请求都需要进行认证。这时候我们重启项目，再次访问 http://localhost:8080/hello ，可以看到页面弹出了个 HTTP Basic 认证框：<br />![image-20240719234833506](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202407192348559.png)

用户名依旧是 user，密码由 Spring Security 自动生成。

如果需要换回 Form 表单的认证方式，我们只需要简单修改 `configure` 方法中的配置即可：

```java
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(final HttpSecurity http) throws Exception {
    http
            .formLogin() // 使用表单登录
//            .httpBasic() // 使用httpBasic认证
            .and()
            .authorizeRequests() // 授权配置
            .anyRequest() // 所有请求
            .authenticated(); // 都需要认证
  }
}
```

