# AOP

## 楔子

AOP 是 OOP 的延续，是 Aspect Oriented Programming 的缩写，意思是<strong style="color:#ae3520;">面向切面编程</strong>，可以通过预编译和运行时动态代理，实现<strong style="color:#ae3520;">在不修改源代码的情况下给程序<u>动态统一</u>地添加功能</strong>。

日常开发中一些非业务，如**日志**、**事务**、**安全**等写在业务代码中，这些代码往往是重复的，复制粘贴式代码会给程序的维护带来不便。AOP 就将这些非业务代码与业务代码分开，这种解决方式也称之<strong style="color:#ae3520;">代理机制</strong>。

Spring AOP 是一种编程范式，主要目的是<strong style="color:#ae3520;">将非功能性需求从功能性需求中分离出来</strong>，达到<strong style="color:#ae3520;">解耦</strong>的目的。

## 术语

### 切面（Aspect）

" 切面 " 的官方抽象定义为 " 一个关注点的模块化，这个关注点可能会横切多个对象 "。在 Spring 中可以使用 XML(`<aop:aspect>`) 或注解 (`@Aspect`) 的方式进行实现。

> [!important]
>
> <strong style="color:#ae3520;font-size:19px;">切面 = 切入点 + 通知</strong>

### 连接点（JoinPoint）

表示需要在程序中插入横切关注点的扩展点，连接点可能是 **类初始化**、**方法执行**、**方法调用**、**字段调用** 或 **处理异常** 等等，但是 **在 Spring 中只支持【方法执行】连接点**。

### 通知（Advice）

在连接点上执行的行为，通知提供了在 AOP 中需要在切入点所选择的连接点处进行扩展现有行为的手段。在 Spring 中 **通过代理模式实现 AOP**，并 **通过拦截器模式以环绕连接点的拦截器链织入通知**。其中，一个切面可以包含多个通知。包括如下通知：

#### 前置通知（Before Advice）

前置通知是指在某连接点之前执行的通知，但这个通知不能阻止连接点之前代码的执行（除非它抛出一个异常）。

在 `<aop:aspect>` 里面使用 `<aop:before>` 元素进行声明。

#### 后置/最终通知（After Advice）

后置通知是指当某连接点退出时执行的通知（**不论是正常返回还是异常退出**）。

在 `<aop:aspect>` 里面使用 `<aop:after>` 元素进行声明。

#### 返回后通知（After Return Advice）

返回后通知是指在某连接点 **正常完成后执行** 的通知，不包括抛出异常的情况。

在 `<aop:aspect>` 里面使用 `<aop:returning>` 元素进行声明。

#### 异常通知（After Throwing Advice）

异常通知是指在方法抛出异常导致退出时执行的通知。

在 `<aop:aspect>` 里面使用 `<aop:throwing>` 元素进行声明。

#### 环绕通知（Around Advice）

环绕通知是指包围一个连接点的通知。这是最强大的一种通知类型。环绕通知可以在方法调用前后完成自定义的行为。它也会选择是否继续执行连接点或直接返回它自己的返回值或抛出异常来结束执行。

在 `<aop:aspect>` 里面使用 `<aop:around>` 元素进行声明。

### 切入点（PointCut）

切入点是指匹配连接点的断言，在 AOP 中通知和一个切入点表达式关联。切面中的所有通知所关注的连接点都由切入点表达式决定。

### 目标对象（Target Object）

需要被织入横切关注点的对象，即该对象是切入点选择的对象，需要被通知的对象，从而也可称为被通知对象；由于 Spring AOP 通过代理模式实现，从而这个对象永远是被代理对象。

### AOP 代理

在 Spring AOP 中有两种代理方式：**JDK 动态代理** 和 **Cglib 代理**。默认情况下，目标对象实现了接口时，采用 JDK 动态代理；反之，使用 Cglib 代理。强制使用 Cglib 代理需要将 `<aop:config>` 中的 `proxy-target-class` 属性设置为 true。

> [!tip]
>
> 对于 **静态代理** 与 **动态代理** 的详细介绍可以参考设计模式中 [代理模式](../../../设计模式/结构型/代理模式.md) 这一篇文章，这里就不再赘述。

## Spring 5.0 通知方法执行顺序

```java
try{
	前置通知
	目标方法
	返回通知
} catch(Exception e) {
	异常通知
} finally {
	后置通知
}
```

1. 正常执行顺序
   1. 前置通知
   1. 目标方法
   1. 返回通知
   1. 后置通知

2. 异常执行顺序
   1. 前置通知
   2. 目标方法
   3. 异常通知
   4. 后置通知

## AOP 的两种配置方式

使用 AOP 有两种方式，一种是中规中矩的 **XML 配置** 方式，另一种则是比较方便和强大的 **注解** 方式。

### XML配置方式

1. 开发环境搭建

   1. 依赖的 jar 包

      ```xml
      <dependencies>  
          <dependency>  
              <groupId>org.springframework</groupId>  
              <artifactId>spring-aop</artifactId>  
              <version>${spring.version}</version>  
          </dependency>  
          <dependency>  
              <groupId>org.springframework</groupId>  
              <artifactId>spring-aspects</artifactId>  
              <version>${spring.version}</version>  
          </dependency>  
      </dependencies>
      ```

   2. Spring 核心配置文件

      ![](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202406221949700.png)

      ```xml
      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
      
      </beans>
      ```

2. 开发步骤

   1. 目标对象

      ```java
      @Service  
      public class MemberService {  
          private static final Logger LOGGER = LoggerFactory.getLogger(MemberService.class);  
        
          public Member get(Long id) {  
              LOGGER.info("getMemberById Method...");  
              return new Member();  
          }  
        
          public Member get() {  
              LOGGER.info("getMember Method...");  
              return new Member();  
          }  
        
          public void save(Member member) {  
              LOGGER.info("save Member Method...");  
          }  
        
          public boolean delete(Long id) throws Exception {  
              LOGGER.info("delete Method...");  
              throw new Exception("spring aop ThrowAdvice 演示");  
          }  
      }
      ```

      ```java
      public class Member {  
          private String name;  
          private Long id;  
        
          public String getName() {  
              return name;  
          }  
        
          public void setName(String name) {  
              this.name = name;  
          }  
        
          public Long getId() {  
              return id;  
          }  
        
          public void setId(Long id) {  
              this.id = id;  
          }  
      }
      ```

   2. 切面类

      ```java
      public class XmlAspect {  
          private static final Logger LOGGER = LoggerFactory.getLogger(XmlAspect.class);  
        
          public void before(JoinPoint joinPoint) {  
              LOGGER.info("before通知：{}", joinPoint);  
          }  
        
          public void after(JoinPoint joinPoint) {  
              LOGGER.info("after通知：{}", joinPoint);  
          }  
        
          public Object around(ProceedingJoinPoint joinPoint) {  
              try {  
                  LOGGER.info("around-before通知：{}", joinPoint);  
                  Object result = joinPoint.proceed();  
                  LOGGER.info("around-afterReturning通知：{}", joinPoint);  
                  return result;  
              } catch (Throwable e) {  
                  LOGGER.info("around-afterThrowing通知：{} with exception：{}", joinPoint, e.getMessage());  
                  throw new RuntimeException(e);  
              } finally {  
                  LOGGER.info("around-after通知：{}", joinPoint);  
              }  
          }  
        
          public void afterReturning(JoinPoint joinPoint, Object result) {  
              LOGGER.info("afterReturning通知：{}，返回值：{}", joinPoint, result);  
          }  
        
          public void afterThrowing(JoinPoint joinPoint, Exception e) {  
              LOGGER.info("afterThrowing通知：{} with exception：{}", joinPoint, e.getMessage());  
          }  
      }
      ```

      每个通知方法的第一个参数都是连接点（`JoinPoint`）。其实，在 Spring 中，<strong style="color:#ae3520;">任何通知方法都必须将第一个参数定义为 `JoinPoint` 类型用于接收当前连接点对象，否则 Spring 无法识别</strong>。`JoinPoint` 接口提供了一系列有用的方法，如 `getArgs()` 方法用于返回方法参数，`getThis()` 方法用于返回代理对象，`getTarget()` 方法用于返回目标对象、`getSignature()` 方法用于返回被通知的方法的相关信息和 `toString()` 方法用于打印正在被通知的方法的有用信息。

   3. 配置 Spring 核心配置文件

      ```xml
      <beans xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
             xmlns:aop="http://www.springframework.org/schema/aop"  
             xmlns="http://www.springframework.org/schema/beans"  
             xsi:schemaLocation="http://www.springframework.org/schema/beans  
             http://www.springframework.org/schema/beans/spring-beans.xsd       
             http://www.springframework.org/schema/aop       
             https://www.springframework.org/schema/aop/spring-aop.xsd">  
          <!--    目标类-->  
          <bean id="memberService" class="top.xiaorang.spring.aop.service.MemberService"/>  
          <!--    切面-->  
          <bean id="xmlAspect" class="top.xiaorang.spring.aop.aspect.XmlAspect"/>  
          <aop:config>  
              <!--        配置切面-->  
              <aop:aspect ref="xmlAspect">  
                  <!--            配置切入点-->  
                  <aop:pointcut id="pc" expression="execution(* top.xiaorang.spring.aop.service..*(..))"/>  
                  <!--            环绕通知-->  
                  <aop:around method="around" pointcut-ref="pc"/>  
                  <!--            前置通知-->  
                  <aop:before method="before" pointcut-ref="pc"/>  
                  <!-- 后置返回通知；returning属性：用于设置后置通知的第二个参数的名称，类型是Object -->  
                  <aop:after-returning method="afterReturning" pointcut-ref="pc" returning="result"/>  
                  <!-- 异常通知：如果没有异常，将不会执行增强；throwing属性：用于设置通知第二个参数的的名称、类型-->  
                  <aop:after-throwing method="afterThrowing" pointcut-ref="pc" throwing="e"/>  
                  <!--            后置通知-->  
                  <aop:after method="after" pointcut-ref="pc"/>  
              </aop:aspect>  
          </aop:config>  
      </beans>
      ```

      

   4. 测试类

      ```java
      @Test  
      public void test() {  
          ApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");  
          MemberService memberService = ctx.getBean("memberService", MemberService.class);  
          LOGGER.info("========================这是一条华丽的分割线========================");  
          memberService.get();  
          LOGGER.info("========================这是一条华丽的分割线========================");  
          try {  
              memberService.delete(1L);  
          } catch (Exception e) {  
              throw new RuntimeException(e);  
          }  
      }
      ```

      测试结果如下所示：

      ```
      2022-08-26 22:43:31 INFO  SpringTest:17 - ========================这是一条华丽的分割线========================
      2022-08-26 22:43:31 INFO  XmlAspect:28 - around-before通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
      2022-08-26 22:43:31 INFO  XmlAspect:19 - before通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
      2022-08-26 22:43:31 INFO  MemberService:23 - getMember Method...
      2022-08-26 22:43:31 INFO  XmlAspect:30 - around-afterReturning通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
      2022-08-26 22:43:31 INFO  XmlAspect:36 - around-after通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
      2022-08-26 22:43:31 INFO  XmlAspect:41 - afterReturning通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())，返回值：top.xiaorang.spring.aop.entity.Member@61386958
      2022-08-26 22:43:31 INFO  XmlAspect:23 - after通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
      2022-08-26 22:43:31 INFO  SpringTest:19 - ========================这是一条华丽的分割线========================
      2022-08-26 22:43:31 INFO  XmlAspect:28 - around-before通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
      2022-08-26 22:43:31 INFO  XmlAspect:19 - before通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
      2022-08-26 22:43:31 INFO  MemberService:32 - delete Method...
      2022-08-26 22:43:31 INFO  XmlAspect:33 - around-afterThrowing通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long)) with exception：spring aop ThrowAdvice 演示
      2022-08-26 22:43:31 INFO  XmlAspect:36 - around-after通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
      2022-08-26 22:43:31 INFO  XmlAspect:45 - afterThrowing通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long)) with exception：java.lang.Exception: spring aop ThrowAdvice 演示
      2022-08-26 22:43:31 INFO  XmlAspect:23 - after通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
      
      java.lang.RuntimeException: java.lang.RuntimeException: java.lang.Exception: spring aop ThrowAdvice 演示
      ```

### 注解方式

使用注解配置 Spring AOP 总体分为两步：第一步是编写一个配置类，使用 `@ComponentScan` 注解激活自动扫描组件功能，同时使用 **`@EnableAspectJAutoProxy`** 激活自动代理功能；第二步是为切面类标注 `@Aspect` 注解。

1. 配置类

   在类上增加如下注解：

   - `@Configuration` 配置类注解，相当于 XML 配置文件中的 `<bean class=""/>`，试了下，这个注解好像不加也没有影响
   - 包扫描注解 `@ComponentScan("top.xiaorang.spring.aop")` ，等价于 XML 配置文件中的 `<context:component-scan base-package="top.xiaorang.spring.aop" />`
   - 开启 Spring Aop 注解 `@EnableAspectJAutoProxy`，等价于 XML 配置文件中的 `<aop:aspectj-autoproxy/>`

   ```java
   @Configuration  
   @ComponentScan("top.xiaorang.spring.aop")  
   @EnableAspectJAutoProxy  
   public class AopConfig {  
   }
   ```

2. 切面类

   与 XML 配置方式中切面类的代码差不多，只不过需要在类上增加 `@Component` 和 `@Aspect` 注解。其中，`pointcut()` 方法用来配置切入点，无方法体，主要是为了方便同类中其他方法使用此处配置的切入点。

   ```java
   @Component  
   @Aspect  
   public class AnnotationAspect {  
       private static final Logger LOGGER = LoggerFactory.getLogger(AnnotationAspect.class);  
     
       @Pointcut("execution(* top.xiaorang.spring.aop.service..*(..))")  
       public void pointcut() {  
       }  
       @Before("pointcut()")  
       public void before(JoinPoint joinPoint) {  
           LOGGER.info("before通知：{}", joinPoint);  
       }  
     
       @After("pointcut()")  
       public void after(JoinPoint joinPoint) {  
           LOGGER.info("after通知：{}", joinPoint);  
       }  
     
       @Around("pointcut()")  
       public Object around(ProceedingJoinPoint joinPoint) {  
           try {  
               LOGGER.info("around-before通知：{}", joinPoint);  
               Object result = joinPoint.proceed();  
               LOGGER.info("around-afterReturning通知：{}", joinPoint);  
               return result;  
           } catch (Throwable e) {  
               LOGGER.info("around-afterThrowing通知：{} with exception：{}", joinPoint, e.getMessage());  
               throw new RuntimeException(e);  
           } finally {  
               LOGGER.info("around-after通知：{}", joinPoint);  
           }  
       }  
     
       @AfterReturning(value = "pointcut()", returning = "result")  
       public void afterReturning(JoinPoint joinPoint, Object result) {  
           LOGGER.info("afterReturning通知：{}，返回值：{}", joinPoint, result);  
       }  
     
       @AfterThrowing(value = "pointcut()", throwing = "e")  
       public void afterThrowing(JoinPoint joinPoint, Exception e) {  
           LOGGER.info("afterThrowing通知：{} with exception：{}", joinPoint, e.getMessage());  
       }  
   }
   ```

3. 测试类

   ```java
   @Test  
   public void test1() {  
       ApplicationContext ctx = new AnnotationConfigApplicationContext(AopConfig.class);  
       MemberService memberService = ctx.getBean("memberService", MemberService.class);  
       LOGGER.info("========================这是一条华丽的分割线========================");  
       memberService.get();  
       LOGGER.info("========================这是一条华丽的分割线========================");  
       try {  
           memberService.delete(1L);  
       } catch (Exception e) {  
           throw new RuntimeException(e);  
       }  
   }
   ```

   测试结果如下所示：

   ```
   2022-08-26 23:23:14 INFO  SpringTest:33 - ========================这是一条华丽的分割线========================
   2022-08-26 23:23:14 INFO  AnnotationAspect:39 - around-before通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
   2022-08-26 23:23:14 INFO  AnnotationAspect:28 - before通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
   2022-08-26 23:23:14 INFO  MemberService:25 - getMember Method...
   2022-08-26 23:23:14 INFO  AnnotationAspect:53 - afterReturning通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())，返回值：top.xiaorang.spring.aop.entity.Member@248e319b
   2022-08-26 23:23:14 INFO  AnnotationAspect:33 - after通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
   2022-08-26 23:23:14 INFO  AnnotationAspect:41 - around-afterReturning通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
   2022-08-26 23:23:14 INFO  AnnotationAspect:47 - around-after通知：execution(Member top.xiaorang.spring.aop.service.MemberService.get())
   2022-08-26 23:23:14 INFO  SpringTest:35 - ========================这是一条华丽的分割线========================
   2022-08-26 23:23:14 INFO  AnnotationAspect:39 - around-before通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
   2022-08-26 23:23:14 INFO  AnnotationAspect:28 - before通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
   2022-08-26 23:23:14 INFO  MemberService:34 - delete Method...
   2022-08-26 23:23:14 INFO  AnnotationAspect:58 - afterThrowing通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long)) with exception：spring aop ThrowAdvice 演示
   2022-08-26 23:23:14 INFO  AnnotationAspect:33 - after通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
   2022-08-26 23:23:14 INFO  AnnotationAspect:44 - around-afterThrowing通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long)) with exception：spring aop ThrowAdvice 演示
   2022-08-26 23:23:14 INFO  AnnotationAspect:47 - around-after通知：execution(boolean top.xiaorang.spring.aop.service.MemberService.delete(Long))
   
   java.lang.RuntimeException: java.lang.RuntimeException: java.lang.Exception: spring aop ThrowAdvice 演示
   ```

## 切入点表达式详解

通常情况下，表达式中使用 `execution` 就可以满足大部分要求，格式如下：

```markdown
execution(modifiers-pattern? ret-type-pattern declaring-type-pattern? name-pattern(param-pattern) throws-pattern?)
```

其中各参数的含义如下：

- modifiers-pattern：方法的操作权限
- ret-type-pattern：方法的返回值
- declaring-type-pattern：方法所在的包
- name-pattern：方法名
- param-pattern：参数名
- throws-pattern：异常  

除 ret-type-pattern 和 name-pattern 之外，其余参数都是可选的。下面给出一些通用切入点表达式的例子：

| 表达式                                                   | 含义                                      |
| -------------------------------------------------------- | ----------------------------------------- |
| `execution(public * *(..))`                              | 任意公共方法                              |
| `execution(* set*(..))`                                  | 任何一个名字以“set”开始的方法             |
| `execution(* top.xiaorang.service.AccountService.*(..))` | AccountService 接口中定义的任意方法       |
| `execution(* top.xiaorang.service..*.*(..))`             | 在 service 包下任意类中的任意方法         |
| `execution（* top.xiaorang.service..*.*(..))`            | 在 service 包以及子包下任意类中的任意方法 |

此外 Spring 支持如下三个逻辑运算符来组合切入点表达式：

| &&   | 要求连接点同时匹配两个切入点表达式 |
| ---- | ---------------------------------- |
| \|\| | 要求连接点匹配任意个切入点表达式   |
| !    | 要求连接点不匹配指定的切入点表达式 |