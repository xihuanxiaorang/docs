# 统一参数校验

## 为什么要进行接口参数校验？

接口参数校验是软件开发中的一个重要步骤，它的主要目的是**确保输入数据的有效性、完整性和安全性**。以下是为什么要进行接口参数校验的一些重要理由：

1. 安全性：接口参数校验有助于防止恶意用户输入恶意数据，例如 SQL 注入、跨站点脚本攻击（XSS）或跨站点请求伪造（CSRF）。通过验证和规范化输入，你可以防止安全漏洞的出现。
2. 数据完整性：接口参数校验可以确保传递给接口的数据完整且符合期望的格式。这有助于避免数据损坏、丢失或格式错误，确保数据的准确性和一致性。
3. 业务逻辑正确性：接口参数校验有助于确保数据符合业务逻辑的要求。例如，如果你要求用户提供年龄，你可以校验输入是否为正整数，以确保它在合理的范围内。
4. 提高用户体验：通过及时检测和反馈输入错误，你可以提供更好的用户体验。用户将更容易理解问题并纠正错误，而不是等到整个请求失败后才得到错误消息。
5. 减少错误和异常：接口参数校验有助于减少代码中的错误和异常。通过在接口层面检查输入，可以防止无效或不合规的数据进入系统，从而减少后续代码中的问题。
6. 符合标准和合规性要求：某些行业或法规要求对用户数据进行严格的验证和保护。接口参数校验可以帮助确保你的应用程序符合这些要求。

举个栗子：

1. **身份验证服务**：假设你正在开发一个身份验证服务，用户需要提供用户名和密码以登录。在接口参数校验中，你可以验证以下内容：

   - 用户名和密码是否存在，即它们不是空的。
   - 用户名和密码的长度是否在合理范围内。
   - 密码是否符合安全性标准，如包含足够的字符、数字和特殊字符。
   - 防止多次登录尝试，例如，限制每分钟的登录尝试次数，以防止暴力破解。

   通过进行这些参数校验，你可以确保用户提供的凭证符合要求，并且提高系统的安全性。

2. **在线支付服务**：假设你正在开发一个在线支付服务，客户可以使用信用卡或其他支付方式进行交易。在接口参数校验中，你可以验证以下内容：

   - 付款金额是否为正数，以确保有效的交易金额。
   - 付款方式是否有效，如信用卡、借记卡、电子钱包等。
   - 信用卡信息是否合法，包括信用卡号、过期日期和 CVV 码的有效性。
   - 付款是否在可接受的货币范围内，以确保货币一致性。
   - 防止重复交易，以避免重复扣款。
   - 对于高金额交易，可能需要额外的身份验证或授权。

   通过进行这些参数校验，你可以确保支付数据的完整性、正确性和安全性，减少错误交易、欺诈和其他支付问题的风险。

总之，接口参数校验是软件开发中至关重要的一步，有助于确保数据的安全性、完整性和正确性，提高用户体验，减少错误和异常，并确保合规性。不进行参数校验可能导致安全漏洞、数据损坏和用户体验问题。

## 前端已经校验了请求参数，后端接口为什么还要进行参数校验呢？

在前端进行参数校验是一个重要的做法，它可以提高用户体验，减少不必要的网络请求，以及减轻服务器负担。然而，<strong style="color:#ae3520;">前端参数校验不能被视为安全或完全可信的方式，因为客户端代码（前端）可以被用户篡改或绕过</strong>。因此，在后端进行参数校验是非常重要的，有以下几个原因：

1. 安全性：前端参数校验可以防止无效请求达到后端，但它不能完全保护后端免受恶意用户或攻击者的攻击。恶意用户可以绕过前端校验，直接发送伪造请求到后端。后端参数校验可以提供额外的安全层，确保仅接受合法和有效的数据。
2. 数据完整性：前端参数校验通常用于提高用户体验，但在某些情况下，用户可能禁用 JavaScript 或以其他方式绕过前端校验。此时，后端参数校验可以确保数据的完整性，防止不完整或无效的数据进入系统。
3. 一致性：后端参数校验可以确保数据符合应用程序的业务规则和一致性要求。即使前端通过校验，后端也需要验证数据是否符合期望，以确保不会出现错误的或不符合规则的数据。
4. 防止代码漏洞：前端和后端通常由不同的开发团队编写和维护。在复杂应用中，前端和后端之间的接口可能会发生变化，而前端可能没有及时更新以反映这些变化。后端参数校验可以充当最后的安全网，防止不匹配或不合规的数据进入系统。

总之，前端参数校验是有益的，但它不能代替后端参数校验，因为**后端参数校验是确保系统安全、数据完整性和业务一致性的最后一道防线，有助于防止潜在的问题和攻击**。因此，最佳做法是在前端和后端都进行参数校验，以建立全面的数据验证体系。

## 能用 if-else 进行参数校验，为什么要用参数校验框架呢？

虽然你可以使用 `if-else` 语句手动进行参数校验，但在实际的软件开发中使用参数校验框架具有以下优势：

1. **代码复用性和可维护性：** 参数校验框架允许你定义一次验证规则，然后在多个接口和方法中重复使用。这提高了代码的复用性，减少了重复编写相同校验逻辑的需要，同时也使代码更易于维护。
2. **规则中心化：** 参数校验框架允许你将参数验证规则集中管理，通常在配置文件或中央位置定义规则。这使得规则的维护和更改更为简单，而不必在每个接口或方法中进行手动更改。
3. **可配置性：** 使用参数校验框架，你可以配置各种验证规则，包括必需字段、最小/最大长度、数据类型、正则表达式等。这些规则可以根据不同接口的需求进行配置。
4. **错误处理和反馈：** 参数校验框架通常提供了强大的错误处理和反馈机制，能够生成详细的错误信息，有助于开发人员和用户更好地理解和解决问题。
5. **减少人为错误：** 手动编写参数校验代码容易出现错误。参数校验框架经过充分测试，可以减少人为错误的发生，提高代码的稳定性。
6. **提高安全性：** 参数校验框架通常包括防御性编程的最佳实践，能够帮助你防止一些常见的安全漏洞，如 SQL 注入、跨站点脚本攻击等。
7. **节省开发时间：** 使用参数校验框架可以加速开发过程，因为你无需从头开始编写每个接口的校验逻辑，而可以利用现有的框架和规则。
8. **提高一致性：** 参数校验框架确保了参数校验的一致性，因为它们应用相同的规则和标准，从而避免了不同开发人员或团队在不同接口中实施不同的校验逻辑。

尽管参数校验框架提供了众多优势，但对于小型项目或简单的接口，使用 `if-else` 语句进行参数校验可能是足够的。然而，对于大型和复杂的应用程序，以及需要高度可配置性和一致性的项目，使用参数校验框架通常是更明智的选择，可以提高开发效率和代码质量。

## Bean Validation 规范

<strong style="color:#ae3520;">Bean Validation 是规范</strong>，该规范定义了一组注解和 API，用于在 Java Bean 类上执行参数验证和数据校验，如 `@Null`、`@NotNull`、`@Min`、`@Max` 等注解，这些注解位于 `javax.validation.constraints` 包下，如下所示：<br />![image-20231013175157794](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310131751837.png)

而 <strong style="color:#ae3520;">Hibernate Validator 是 Bean Validation 规范的具体实现</strong>，由 Hibernate 社区进行维护。该实现在此基础上增加了一些其他注解，如 `@CreditCardNumber`、`@Length`、`@Range` 等注解，这些注解位于 `org.hibernate.validator.constraints` 包下，如下图所示：<br />![image-20231013180141529](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310131801573.png)

<strong style="color:#ae3520;">Spring Validation 是对 Hibernate Validator 的二次封装</strong>，用于支持 SpringMVC 参数的自动校验，并将校验信息封装进了特定的类中。其主要有如下优点：

1. **无缝集成**：Spring Validation 与 Spring 框架紧密集成，使其非常易于使用。Spring Boot 甚至提供了自动配置，可以快速启用 Spring Validation。
2. **支持多种验证框架**：Spring Validation 可以轻松集成不同的验证框架，包括 Bean Validation（通过 Hibernate Validator 或其他实现）、自定义验证器、以及 Spring 自带的验证器。
3. **丰富的验证注解**：Spring Validation 支持 Bean Validation 规范中定义的各种验证注解，如 `@NotNull`、`@Size`、`@Email`、`@Pattern` 等，以便快速创建验证规则。
4. **自定义验证规则**：你可以轻松创建自定义验证规则，以满足特定应用程序的需求。这些自定义验证器可以使用 Spring 提供的接口或实现自己的验证器。
5. **数据绑定和验证**：Spring Validation 可与 Spring 的数据绑定机制集成，允许你在验证之前自动将请求参数绑定到 Java Bean 对象上。
6. **错误处理和反馈**：Spring Validation 提供了丰富的错误处理和反馈机制，允许你生成详细的错误消息，将其返回给客户端或用于错误页面的显示。
7. **验证组**：Spring Validation 支持验证组的概念，使你可以定义和分组不同的验证规则，根据不同的使用情况应用它们。
8. **灵活性**：Spring Validation 可以轻松与其他 Spring 特性（如 AOP、Spring Security）一起使用，以实现更高级的验证和安全控制。
9. **规范性**：使用 Spring Validation 有助于遵循最佳实践和规范，以确保数据的有效性和安全性。

关于 Bean Validation、Hibernate Validator、JDK 以及 SpringBoot 各版本之间的对应关系如下所示：

| [Jakarta Bean Validation](https://beanvalidation.org/)       | [Hibernate Validator](http://hibernate.org/validator/)       | JDK          | SpringBoot |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------- | :--------- |
| JSR303 ➡️ [Bean Validation 1.0](https://beanvalidation.org/1.0/) | [4.3.1.Final](https://hibernate.org/validator/releases/4.3/) | 6            |            |
| JSR349 ➡️ [Bean Validation 1.1](https://beanvalidation.org/1.1/) | [5.1.1.Final](https://hibernate.org/validator/releases/5.1/) | 6 or 7       | 1.x        |
| JSR380 ➡️ [Bean Validation 2.0](https://beanvalidation.org/2.0-jsr380/) | [6.0.1.Final](https://hibernate.org/validator/releases/6.0/) | 8, 11 or 17  | 2.x        |
| [Jakarta Bean Validation 3.0](https://beanvalidation.org/3.0/) | [7.0.5.Final](https://hibernate.org/validator/releases/7.0/) | 8, 11 or 17  |            |
|                                                              | [8.0.0.Final]((https://hibernate.org/validator/releases/8.0/)) | 11, 17 or 21 |            |

以上版本之间的对应关系只作了解即可，在实际项目中开发过程中，只需根据项目中正在使用的 SpringBoot 版本号进行确定即可，因为在 SpringBoot 的 `spring-boot-dependencies` 依赖管理模块中早已确定各组件的版本号！

## 在 SpringBoot 中使用 Spring Validation 进行参数校验

### 引入依赖

> [!NOTE]
>
> 如果 SringBoot 版本小于 `2.3.x`，`spring-boot-starter-web` 启动器会自动引入 `spring-boot-starter-validation` 依赖；如果版本大于等于 `2.3.x` 版本的话，则需要手动引入 `spring-boot-starter-validation` 依赖！
>
> 对于 `spring-boot-starter-validation` 启动器而言，它会自动引入 `hibernate-validator` 依赖！

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
    <version>2.3.12.RELEASE</version>
</dependency>
```

### 常用注解

| 注解                 | 说明                                                         |
| :------------------- | :----------------------------------------------------------- |
| `@NotBlank`          | 用于字符串，字符串不能为 `null` 也不能为空字符串             |
| `@NotEmpty`          | 字符串同上，对于集合（`Map`,`List`,`Set`）不能为空，必须有元素 |
| `@NotNull`           | 不能为 `null`                                                |
| `@Null`              | 必须为 `null`                                                |
| `@Min(value)`        | 被标注的元素必须是一个数字，其值必须大于等于指定的最小值     |
| `@Max(value)`        | 被标注的元素必须是一个数字，其值必须小于等于指定的最大值     |
| `@DecimalMin(value)` | 被标注的元素必须是一个数字，其值必须大于等于指定的最小值     |
| `@DecimalMax(value)` | 被标注的元素必须是一个数字，其值必须小于等于指定的最大值     |
| `@Size(max, min)`    | 被标注的元素的大小必须在指定的范围内                         |
| `@Range`             | 被标注的元素必须在合适的范围内                               |
| `@Length`            | 被标注的字符串的大小必须在指定的范围内                       |
| `@Past`              | 被标注的元素必须是一个过去的日期                             |
| `@Future`            | 被标注的元素必须是一个将来的日期                             |
| `@AssertTrue`        | 被标注的元素必须为 `true`                                    |
| `@AssertFalse`       | 被标注的元素必须为 `false`                                   |
| `@Pattern(value)`    | 被标注的元素必须符合指定的正则表达式                         |
| `@Email`             | 被标注的元素必须是电子邮箱地址                               |

### 参数校验

假设咱们已经实现了一个 SpringBoot REST 控制器，并且想要验证一个客户端传入的输入。对于任何传入的 HTTP 请求，咱们可以校验以下三点:

- 请求体；
- 路径变量 (e.g. `id` in `/foos/{id}`)；
- 请求参数；

#### 请求体

在 POST 和 PUT 请求中，通常在请求体中传递 JSON 负载。SpringBoot 会自动将传入的 JSON 数据映射到 Java Bean 对象中。现在，咱们想检查传入的 Java Bean 对象是否满足咱们的要求。实现步骤如下所示：

1. 定义一个 Java Bean 对象用于接收前端传过来的 JSON 数据，在类的字段上声明约束注解，其中注解中的 `message` 消息字段可以使用 `el` 表达式，如 `{value}` 的形式；

   ```java
   @Data
   @Builder
   @AllArgsConstructor
   @NoArgsConstructor
   public class User {
       @NotNull(message = "id不能为空")
       private Long id;
       @NotBlank(message = "用户名不能为空")
       private String username;
       @NotBlank(message = "密码不能为空")
       @Length(min = 6, max = 20, message = "密码长度在{min}-{max}之间")
       private String password;
       @Min(value = 0, message = "年龄最小为{value}")
       @Max(value = 200, message = "年龄最大为{value}")
       private Integer age;
       @NotBlank(message = "邮箱不能为空")
       @Email(message = "邮箱格式不正确")
       private String email;
   }
   ```

2. 在 REST 控制器的方法入参处声明 `@Valid` 或 `@Validated` 注解；

   ```java
   @RestController
   @RequestMapping("/user")
   public class UserController {
       @PutMapping
       public User save(@Valid @RequestBody User user) {
           return user;
       }
   }
   ```

现在测试前端传递的参数不满足约束条件的情况，举个栗子，发送 PUT 请求 http://localhost:8888/user ，其中 `application/json` 类型的请求体数据如下所示：

```json
{
    "id": 60,
    "username": "许艳",
    "password": "12345",
    "email": "n.lem@tdld.org.cn",
    "age": -1
}
```

可知，`password` 密码的长度并不满足 6-20 位之间，并且 `age` 年龄小于要求的最小值 0，验证失败，此时抛出 `MethodArgumentNotValidException` 异常，控制台打印如下异常信息：<br />![image-20240812223802925](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122238048.png)

返回结果如下所示：<br />![image-20240812224851257](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122248349.png)

小伙伴们如果不清楚为什么输出如此格式的响应结果，可以查看 [SpringBoot-响应结果统一封装](./SpringBoot-响应结果统一封装.md#全局异常处理器) 文章。

> [!tip]
>
> - 当没有使用 `@RequestBody` 注解进行标注时，此时抛出的异常为 `BindException`，对应请求的 `Content-Type` 类型为 ` application/x-www-form-urlencoded` 或 `multipart/form-data` ➡️ 对应的表单提交；
>
> - 如果使用 `@RequestBody` 注解进行标注的话，则抛出的异常为 `MethodArgumentNotValidException`，对应请求的 `Content-Type` 类型为 `application/json`；
>

#### 路径变量和请求参数

验证路径变量和请求参数的方式与验证请求体的方式略有不同。在这种情况下，咱们不用验证复杂的 Java Bean 对象，因为路径变量和请求参数是基础数据类型（如 `int` 等）或它们的包装类型（如 `Integer` 等），因此咱们不需要像上面那样给类中的字段添加约束注解，而是直接在 SpringBoot 控制器的方法入参处声明一个约束注解（在本例中为 `@NotBlank` 和 `@Min` 注解）即可。

```java
@RestController
@RequestMapping("/user")
public class UserController {
    @PutMapping
    public User save(@Valid @RequestBody User user) {
        return user;
    }

    @GetMapping("echo") // [!code ++]
    public User query(@NotBlank(message = "用户名不能为空") @RequestParam String username,  // [!code ++]
                      @Min(value = 0, message = "年龄最小为{value}") @RequestParam Integer age) {  // [!code ++]
        return User.builder().id(1L).username(username).password("123456").age(age).email("15019474951@163.com").build();  // [!code ++]
    }  // [!code ++]
}
```

现在测试前端传递的参数不满足约束条件的情况，举个栗子，发送 GET 请求 http://localhost:8888/user/echo?username=&age=-1 ，返回结果如下所示：<br />![image-20240812232018007](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122320106.png)

可以发现，传入的用户名为空以及年龄小于 0 居然都通过了校验，这是为什么呢？这是因为在这种情况下，咱们<strong style="color:#ae3520;">除了需要在方法入参处声明约束注解（如 `@NotBlank`、`@Min` 等）之外，还必须在 `Controller` 类上标注 `@Validated` 注解</strong>，否则的话，约束注解是不会生效的！修改之后的代码如下所示：

```java
@RestController
@RequestMapping("/user")
@Validated // [!code ++]
public class UserController {
    @PutMapping
    public User save(@Valid @RequestBody User user) {
        return user;
    }

    @GetMapping("echo") 
    public User query(@NotBlank(message = "用户名不能为空") @RequestParam String username,  
                      @Min(value = 0, message = "年龄最小为{value}") @RequestParam Integer age) {  
        return User.builder().id(1L).username(username).password("123456").age(age).email("15019474951@163.com").build();  
    }  
}
```

再次发送 GET 请求 http://localhost:8888/user/echo?username=&age=-1 ，发现校验已经生效，不过验证失败，抛出 `ConstraintViolationException` 异常，控制台打印如下异常信息：<br />![image-20240812232706765](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122327880.png)

返回结果如下所示：<br />![image-20240812232955770](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122329872.png)

#### 快速失败模式

Spring Boot 使用的是 Bean Validation 规范的默认验证模式，它会尽可能验证所有字段，而不仅仅在遇到第一个验证失败时立即停止抛出异常。如果你想要启用快速失败验证模式，需要添加如下配置：

```java
@Configuration
public class ValidatorConfiguration {
    @Bean
    public Validator validator(AutowireCapableBeanFactory beanFactory) {
        try (ValidatorFactory validatorFactory = Validation.byProvider(HibernateValidator.class)
             .configure()
             .failFast(true)
             .constraintValidatorFactory(new SpringConstraintValidatorFactory(beanFactory))
             .buildValidatorFactory()) {
            return validatorFactory.getValidator();
        }
    }
}
```

启用快速失败验证，这有助于提高验证的效率和准确性，因为它可以在发现第一个错误时立即停止验证，而不用再浪费时间验证其他字段。

> [!NOTE]
>
> 如果当前配置类 `ValidatorConfiguration` 是在一个公共模块当中，则必须在<strong style="color:#ae3520;">自定义的自动配置类（即配置在 `spring.factories` 文件中的类）上标注 `@AutoConfigureBefore(ValidationAutoConfiguration.class)` 注解，在 SpringBoot 自带的 `ValidationAutoConfiguration` 自动配置类之前被加载</strong>，否则的话，上面自定义的 `Validator` 组件并不会生效！

再次发送请求，返回结果如下所示：<br />![image-20240812233409283](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122334377.png)

可以看到其在遇到第一个验证失败，即用户名为空的情况，验证会立即终止并抛出异常，不再进行后续字段的验证，由此说明咱们的快速失败模式已成功启用！

#### 级联校验

级联校验是指在验证一个对象时，会同时校验其关联（嵌套）对象，这样可以确保整个对象的数据完整性和有效性。

增加一个 `Address ` 类，然后在 `User` 类中添加一个 `Address ` 类型的属性，如下所示：

```java
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    @NotBlank(message = "省份不能为空")
    private String province;
    @NotBlank(message = "城市不能为空")
    private String city;
    @NotBlank(message = "街道不能为空")
    private String street;
}
```

```java
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @NotNull(message = "id不能为空")
    private Long id;
    @NotBlank(message = "用户名不能为空")
    private String username;
    @NotBlank(message = "密码不能为空")
    @Length(min = 6, max = 20, message = "密码长度在{min}-{max}之间")
    private String password;
    @Min(value = 0, message = "年龄最小为{value}")
    @Max(value = 200, message = "年龄最大为{value}")
    private Integer age;
    @NotBlank(message = "邮箱不能为空")
    @Email(message = "邮箱格式不正确")
    private String email;
    @Valid // [!code ++]
    private Address address; // [!code ++]
}
```

> [!IMPORTANT]
>
> <strong style="color:#ae3520;">请确保验证对象的关联对象属性上标注有 `@Valid` 注解</strong>，这样才会触发级联校验！！！

现在测试前端传递的参数不满足约束条件的情况，举个栗子，发送 PUT 请求 http://localhost:8888/user ，其中 `application/json` 类型的请求体数据如下所示：

```json
{
    "id": 23,
    "username": "雷霞",
    "password": "123456",
    "email": "r.uzxc@pkhax.pt",
    "address": {
        "province": "江西省",
        "city": "",
        "street": "in aliqua elit dolor est"
    },
    "age": 121
}
```

可知，在传递的 JSON 数据中，嵌套对象对应的 `address` 属性中的 `city` 字段为空，如果级联校验生效的话，将会导致验证失败，抛出 `MethodArgumentNotValidException` 异常，现在来看看是不是这样呢？控制台打印如下异常信息：<br />![image-20240812234248907](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122342028.png)

返回结果如下所示：<br />![image-20240812234433576](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408122344676.png)

#### 分组校验

在日常开发中，当新增实体对象（如订单、用户等等）时，是不需要验证主键 `id` 的，只有在修改实体对象时才需要去验证主键 `id` 是否为空的。遇到这种情况该怎么办呢？别急，Bean Validation 规范支持分组校验，它允许你定义和应用不同的验证规则（分组）来验证同一个对象的不同方面。以下是如何在 Spring Boot 中执行分组校验的一般步骤：

1. **定义验证分组**：创建以下两个分组接口，

   ```java
   public interface Insert {
   }
   ```

   ```java
   public interface Update {
   }
   ```

2. **在约束注解中指定分组**：修改原有 `User` 类，给主键 `id` 上标注的 `@NotNull` 注解指定分组为 `Update`，这样的话，这意味着主键 `id` 上标注的 `@NotNull` 注解只会在 `Update` 分组校验时才会生效，如下所示：

   ```java {6}
   @Data
   @Builder
   @AllArgsConstructor
   @NoArgsConstructor
   public class User {
       @NotNull(message = "id不能为空", groups = {Update.class})
       private Long id;
       @NotBlank(message = "用户名不能为空")
       private String username;
       @NotBlank(message = "密码不能为空")
       @Length(min = 6, max = 20, message = "密码长度在{min}-{max}之间")
       private String password;
       @Min(value = 0, message = "年龄最小为{value}")
       @Max(value = 200, message = "年龄最大为{value}")
       private Integer age;
       @NotBlank(message = "邮箱不能为空")
       @Email(message = "邮箱格式不正确")
       private String email;
       @NotNull(message = "地址不能为空")
       @Valid
       private Address address;
   }
   ```

   > [!IMPORTANT]
   >
   > <strong style="color:#ae3520;">约束注解如果没有明确指定分组，则默认属于 `javax.validation.groups.Default` 分组，即只在默认分组校验时生效</strong>。

3. **在控制器方法中指定分组**：在控制器方法中，使用 `@Validated` 注解并指定要使用的分组。修改原有 `UserController` 类，新增一个 POST 请求的 `create()` 方法 ，如下所示：

   ```java {12}
   @RestController
   @RequestMapping("/user")
   @Validated
   public class UserController {
       @PostMapping // [!code ++]
       public User create(@Validated(Insert.class) @RequestBody User user) { // [!code ++]
           // 此处只会校验 Insert 分组下的约束注解 // [!code ++]
           return user; // [!code ++]
       } // [!code ++]
   
       @PutMapping
       public User save(@Validated(Update.class) @RequestBody User user) {
           // 此处只会校验 Update 分组下的约束注解
           return user;
       }
   
       @GetMapping("echo")
       public User query(@NotBlank(message = "用户名不能为空") @RequestParam String username,
                         @Min(value = 0, message = "年龄最小为{value}") @RequestParam Integer age) {
           return User.builder().id(1L).username(username).password("123456").age(age).email("15019474951@163.com").build();
       }
   }
   ```

现在测试前端传递的参数不满足约束条件的情况，举个栗子，发送 PUT 请求 http://localhost:8888/user ，即对应的 `save()` 方法，`Update` 分组的情况，其中 `application/json` 类型的请求体数据如下所示：

```json
{
    "id": null,
    "username": "黄平",
    "password": "amet qui dolor in",
    "email": "r.fswmkbwn@gblykenzi.cm",
    "address": {
        "province": "甘肃省",
        "city": "重庆市",
        "street": "quis in"
    },
    "age": 125
}
```

可知，在传递的 JSON 数据中，主键 `id` 为空，如果分组校验生效的话，将会导致验证失败，抛出 `MethodArgumentNotValidException` 异常，现在来看看是不是这样呢？果然如此，控制台打印如下异常信息：<br />![image-20240813115822190](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131158315.png)

返回结果如下所示：<br />![image-20240813115638766](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131156927.png)

现在发送 POST 请求 http://localhost:8888/user ，即对应的 `create()` 方法，`Insert` 分组的情况，其中 `application/json` 类型的请求体数据如下所示：

```json
{
    "id": null,
    "username": "",
    "password": "amet qui dolor in",
    "email": "r.fswmkbwn@gblykenzi.cm",
    "address": {
        "province": "甘肃省",
        "city": "重庆市",
        "street": "quis in"
    },
    "age": 125
}
```

通过传递的 JSON 数据可知，除了主键 `id` 为空之外，用户名 `username` 也为空。简单分析一下：因为主键 `id` 只在 `Update` 分组校验时才会生效，所以即使主键 `id` 为空也没事。然而，`username` 用户名为空显然不满足约束条件，理论上应该在校验中被检测出来。但实际上，即使用户名为空也能通过校验，返回结果如下所示：<br />![image-20240813120832611](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131208733.png)

发生这种情况的原因是什么呢？正如前面所提到的，约束注解如果没有明确指定分组，则默认属于默认分组，即只在默认分组校验时生效。然而，我们现在校验的是 `Insert` 分组下的约束注解，并没有校验默认分组下的约束注解，因此即使用户名为空也不会报错。

若要同时校验 `Insert` 和默认分组下的约束注解，有两种方式可供选择：

- <strong style="color:#ae3520;">让 `Insert` 分组继承自 `Default` 默认分组</strong>；

  - 这种方式使得 `Insert` 分组自动包含了 `Default` 分组的所有约束注解。
  - 通过继承 `Default`，任何在 `Insert` 分组下的校验也会同时触发默认分组的校验。

  ```java {3}
  import javax.validation.groups.Default;
  
  public interface Insert extends Default {
  }
  ```

- <strong style="color:#ae3520;">使用 `@Validated` 注解同时指定 `Insert` 和 `Default` 分组</strong>；

  - 在控制器类或方法上使用 `@Validated` 注解，并同时指定 `Insert` 和 `Default` 分组。
  - 这样做可以确保在进行校验时，既会校验 `Insert` 分组下的约束注解，也会校验默认分组下的约束注解。
  
  ```java {6}
  @RestController
  @RequestMapping("/user")
  @Validated
  public class UserController {
      @PostMapping
      public User create(@Validated({Insert.class, Default.class}) @RequestBody User user) {
          // 此处只会校验 Insert 分组下的约束注解
          return user;
      }
  
      @PutMapping
      public User save(@Validated(Update.class) @RequestBody User user) {
          // 此处只会校验 Update 分组下的约束注解
          return user;
      }
  
      @GetMapping("echo")
      public User query(@NotBlank(message = "用户名不能为空") @RequestParam String username,
                        @Min(value = 0, message = "年龄最小为{value}") @RequestParam Integer age) {
          return User.builder().id(1L).username(username).password("123456").age(age).email("15019474951@163.com").build();
      }
  }
  ```

再次发送 POST 请求 http://localhost:8888/user ，发现已经可以校验出 `username` 用户名不满足约束条件，导致验证失败，抛出 `MethodArgumentNotValidException` 异常，控制台打印如下异常信息：<br />![image-20240813122418750](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131224892.png)

返回结果如下所示：<br/>![](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131226328.png)

可以看到，完全符合咱们的预期！

> [!TIP]
>
> `@Validated` 和 `@Valid` 注解的区别：
>
> |          | @Validated                                                   | @Valid                                                       |
> | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
> | 提供者   | JSR303 规范                                                  | Spring                                                       |
> | 作用点   | 可以标注在<strong style="color:#ae3520;">类、方法以及方法参数</strong>上，但是不能标注在成员属性上！ | 可以标注在**方法**、**构造方法**、**方法参数**以及**成员属性**（两者<strong style="color:#ae3520;">能否作用于成员属性上直接影响是否提供级联校验的功能</strong>）上！ |
> | 分组校验 | ✔️                                                            | ❌                                                            |
> | 级联校验 | ❌                                                            | ✔️                                                            |

#### 自定义校验规则

Spring Validation 虽然为咱们提供了许多特性，几乎可以满足日常开发中绝大多数参数校验场景，但是，当现有的约束注解不满足实际项目需要时该怎么办呢？不用慌！Spring Validation 作为一个优秀的框架，为了能应对更多复杂的业务场景，其具备很好的扩展能力，因此咱们只需要<strong style="color:#ae3520;">仿照现有的 `NotEmpty ` 注解和 `NotEmptyValidatorForArray` 校验器稍微进行改造一下，即可实现自己的校验规则</strong>。具体实现步骤如下所示：

1. **创建一个自定义的约束注解**：使用 `@Constraint` 注解标注该注解，并指定关联的校验器，其中校验器负责执行实际的验证逻辑；

   ```java
   @Constraint(validatedBy = UserStatusValidator.class)
   @Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER})
   @Retention(RetentionPolicy.RUNTIME)
   public @interface UserStatus {
     String message() default "用户状态不正确，值必须在1或2或3之中";
   
     Class<?>[] groups() default {};
   
     Class<? extends Payload>[] payload() default {};
   }
   ```

2. **创建校验器**：该校验器必须实现 `ConstraintValidator` 接口，并提供自定义的验证逻辑；

   ```java
   public class UserStatusValidator implements ConstraintValidator<UserStatus, Integer> {
     @Override
     public boolean isValid(Integer status, ConstraintValidatorContext constraintValidatorContext) {
       if (status == null) {
         return false;
       }
       return Arrays.asList(1, 2, 3).contains(status);
     }
   }
   ```

3. **应用自定义的约束注解**：修改原有的 `User` 类，增加一个被 `@UserStatus` 约束注解标注的属性 `status`，如下所示：

   ```java
   @Data
   @Builder
   @AllArgsConstructor
   @NoArgsConstructor
   public class User {
     @NotNull(message = "id不能为空", groups = {Update.class})
     private Long id;
     @NotBlank(message = "用户名不能为空")
     private String username;
     @NotBlank(message = "密码不能为空")
     @Length(min = 6, max = 20, message = "密码长度在{min}-{max}之间")
     private String password;
     @Min(value = 0, message = "年龄最小为{value}")
     @Max(value = 200, message = "年龄最大为{value}")
     private Integer age;
     @NotBlank(message = "邮箱不能为空")
     @Email(message = "邮箱格式不正确")
     private String email;
     @NotNull(message = "地址不能为空")
     @Valid
     private Address address;
     @UserStatus // [!code ++]
     private Integer status; // [!code ++]
   }
   ```

现在发送 POST 请求 http://localhost:8888/user ，即对应的 `create()` 方法，`Insert` 分组的情况，其中 `application/json` 类型的请求体数据如下所示：

```json
{
  "id": 96,
  "username": "杜洋",
  "password": "Excepteur",
  "email": "u.vyqdfew@tvqr.tr",
  "address": {
    "province": "香港特别行政区",
    "city": "中山市",
    "street": "amet velit"
  },
  "status": 24,
  "age": 79
}
```

通过传递的 JSON 数据可知，`status` 属性的值明显不符合要求，其值不在 [1, 2, 3] 之内。如果自定义的校验规则生效，这将导致验证失败，并抛出 `MethodArgumentNotValidException` 异常。现在我们来看看实际情况是否如此，控制台打印了如下异常信息：<br />![image-20240813141243149](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131412295.png)

返回结果如下所示：<br/>![image-20240813141409703](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131414832.png)

#### 手动校验

以上的示例都是通过约束注解来实现自动校验的。但在某些情况下，我们可能希望以编程的方式手动调用校验。这时就需要从容器中注入 `Validator` 对象，然后调用其 `validate()` 方法进行验证。

修改原有 `UserController` 类，新增一个 POST 请求的 `manual()` 方法 ，如下所示：

```java
@RestController
@RequestMapping("/user")
@Validated
@RequiredArgsConstructor // [!code ++]
public class UserController {
    private final Validator validator; // [!code ++]

    @PostMapping
    public User create(@Validated({Insert.class}) @RequestBody User user) {
        // 此处只会校验 Insert 分组下的约束注解
        return user;
    }

    @PutMapping
    public User save(@Validated(Update.class) @RequestBody User user) {
        // 此处只会校验 Update 分组下的约束注解
        return user;
    }

    @GetMapping("echo")
    public User query(@NotBlank(message = "用户名不能为空") @RequestParam String username,
                      @Min(value = 0, message = "年龄最小为{value}") @RequestParam Integer age) {
        return User.builder().id(1L).username(username).password("123456").age(age).email("15019474951@163.com").build();
    }

    @PostMapping("/manual")  // [!code ++]
    public User manual(@RequestBody User user) {  // [!code ++]
        // 手动校验，Insert 分组  // [!code ++]
        final Set<ConstraintViolation<User>> constraintViolations = validator.validate(user, Insert.class);  // [!code ++]
        if (!constraintViolations.isEmpty()) {  // [!code ++]
            throw new ConstraintViolationException(constraintViolations);  // [!code ++]
        }  // [!code ++]
        return user;  // [!code ++]
    }  // [!code ++]
}
```

现在测试前端传递的参数不满足约束条件的情况，举个栗子，发送 POST 请求 http://localhost:8888/manual ，其中 `application/json` 类型的请求体数据如下所示：

```json
{
    "id": null,
    "username": "",
    "password": "amet qui dolor in",
    "email": "r.fswmkbwn@gblykenzi.cm",
    "address": {
        "province": "甘肃省",
        "city": "重庆市",
        "street": "quis in"
    },
    "status": 1,
    "age": 125
}
```

通过传递的 JSON 数据可知，用户名 `username` 为空不满足约束条件。如果手动校验生效的话，应该抛出 `ConstraintViolationException` 异常。现在来看看是不是这样呢？果然如此，控制台打印了如下异常信息：<br />![image-20240813151902493](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131519661.png)

返回结果如下所示：<br/>![image-20240813153024586](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131530722.png)

### 约束注解与校验器的绑定原理

以 `@NotEmpty` 约束注解为例，其定义如下所示：<br />![image-20240813144541330](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131445467.png)

可知，`@NotEmpty` 注解可以用来校验字符串，集合，Map 以及数组类型的属性，而为了满足该注解可以用于校验多种类型的数据，所以需要为该注解适配多个对应的校验器，具体实现位于 `org.hibernate.validator.internal.metadata.core.ConstraintHelper` 类中，<br />![image-20240813145039521](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202408131450677.png)

如果约束注解的名称为 `xxx`，那么校验器的名称就是 `xxxValidator`，再细分到具体的类型则为 `xxxValidatorFor...`。

## 参考资料🎁

- [Spring Validation 最佳实践及其实现原理，参数校验没那么简单！](https://segmentfault.com/a/1190000023471742)
