# Spring-IOC 篇

## 环境搭建

1. 开发环境：`JDK17 + Maven 3.8.2 + SpringFramework 5.3.16`

2. 依赖的 jar 包

   ```xml
   <dependencies>
     <dependency>
         <groupId>org.springframework</groupId>
         <artifactId>spring-context</artifactId>
         <version>5.3.16</version>
     </dependency>
   </dependencies>
   ```

3. 右键单击 resources 资源目录，创建 Spring 配置文件 `applicationContext.xml`<br />![f76db65f-83b8-4c93-9638-598b63037f0d](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251648606.png)

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
   
   </beans>
   ```

4. 整合日志框架：Spring 与日志框架进行整合，利用日志框架可以输出 Spring 框架在运行过程中的一些重要信息，有助于了解 Spring 框架的运行过程。

   1. 添加依赖

      ```xml
      <!-- logback日志 -->
      <dependency>
          <groupId>ch.qos.logback</groupId>
          <artifactId>logback-classic</artifactId>
          <version>1.5.6</version>
      </dependency>
      ```
      
   2. 添加日志配置文件
   
      ```xml
      <?xml version="1.0" encoding="UTF-8"?>
      <configuration>
          <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
              <encoder>
                  <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %-5p %c{1}:%L - %m%n</pattern>
              </encoder>
          </appender>
      
          <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
              <encoder>
                  <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %-5p %c{1}:%L - %m%n</pattern>
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

## 小试牛刀

> [!IMPORTANT]
>
> 两个重要的概念：
>
> 1. **控制反转**(Inversion of Control，简称 IOC)：把对象创建的控制权交给 Spring 进行管理。
> 2. **依赖注入**(Dependcy Injection，简称 DI)：当一个类需要另一个类的时候，就意味着依赖，<strong style="color:#ae3520;">一旦出现依赖，就可以把另一个类作为本类的*成员变量*，最终通过 Spring 配置文件进行*注入* (即对成员变量赋值)</strong>，这样可以做到解耦合。

1. 创建需要 Spring 进行管理的类，如 Person 类，

   ```java
   @Getter
   @Setter
   public class Person {
       private String name;
       private Integer age;
   
       private Person() {
           System.out.println("Person -> 无参构造函数");
       }
   }
   ```

2. 在 Spring 核心配置文件中添加如下配置：

   ```xml {5}
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xmlns="http://www.springframework.org/schema/beans"
     xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
     <bean class="fun.xiaorang.spring.pojo.Person"/>
   </beans>
   ```

3. 编写测试方法，测试从 Spring 工厂中获取 Person 类的实例对象

   ```java
   public class ApiTest {
       private static ApplicationContext ctx;
   
       @BeforeAll
       public static void before() {
           ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
       }
   
       @Test
       public void test_00() {
           Person person = ctx.getBean(Person.class);
           System.out.println(person);
       }
   }
   ```

   运行结果如下所示：程序没有报错！能够获取到 Person 类的实例对象，并且 Person 类的无参构造方法被调用。<br />![9d37508f-fc40-4ea6-8cf1-7f773e1979ac](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251652297.png)

   > [!note]
   >
   > 当没有在 Spring 核心配置文件`applicationContext.xml` 文件中注册 `Person` 类时，如果从 `ApplicationContext`工厂中获取该类的实例对象则会报如下异常（找不到 `Person` 类的 Bean 定义信息）！![79a2c517-a836-4754-8228-6a0b1f8561c2](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251653252.png)

### 细节分析

1. `ApplicationContext`：是一个接口，主要用于 Bean 对象的创建和获取。其实现类主要有 `ClassPathXmlApplicationContext` 和 `AnnotationConfigApplicationContext`。`ApplicationContext` 工厂对象会占用大量内存，所以一个应用中应该只能存在一个这样的工厂对象，即应该采用 [单例模式](../../设计模式/创建型/单例模式.md) 实现，并且保证线程安全。<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251653654.png)

2. Spring 工厂创建出来的对象通常称之为 bean 或者 component（组件）；

3. 测试 `ApplicationContext`工厂对象中其他获取实例对象的方法：

   ```java
   @Test
   public void test_01() {
       Person person = ctx.getBean("person", Person.class);
       System.out.println(person);
       // 没有指定类型，返回值需要进行强转
       Person person1 = (Person) ctx.getBean("person");
       System.out.println(person1);
       // 使用该方法时，在spring配置文件中只能有一个class是Person的bean，否则会报错
       Person person2 = ctx.getBean(Person.class);
       System.out.println(person2);
       // 获取spring配置文件中所有bean标签的id
       String[] beanDefinitionNames = ctx.getBeanDefinitionNames();
       for (String beanDefinitionName : beanDefinitionNames) {
           System.out.println(beanDefinitionName);
       }
       // 用于判断是否存在指定id或者name值的bean
       System.out.println(ctx.containsBean("person"));
       // 用于判断是否存在指定id值的bean定义信息
       System.out.println(ctx.containsBeanDefinition("person"));
   }
   ```

   1. 当在配置文件中不存在 id 或者 name 为 "person" 的 bean 时，那么使用 `ctx.getBean("person", ...)` 获取 Person 实例对象时，则会抛出如下异常（找不到名称为 person 的 Bean 定义信息）！<br />![5df0ba5b-b324-43dd-9e12-a8a4b0456c0f](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251656754.png)

   2. 当配置文件中存在两个相同 class = Person 的 bean 时，那么使用 `ctx.getBean(Person.class)` 获取 Person 实例对象时，则会抛出如下异常（存在两个 Class 相同的 Bean 定义信息）！<br />![a9aede46-d297-4819-b473-e2b4bc9a04c7](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251657268.png)

   3. 当配置文件中存在两个 id 相同的 bean 时，在配置文件解析阶段就会抛出如下异常（已经存在 id 相同的 Bean 定义信息）！<br />![421d4881-3283-42f4-9d68-817e024aca41](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251658111.png)

   4. 当在 spring 配置文件中注册 bean 时，bean 标签里只有 class，没有 id 值，那么它默认的 id 值是 `全限定类名#0`。如 `<bean class="fun.xiaorang.spring.pojo.Person" />`，那么 id 值为 `fun.xiaorang.spring.pojo.Person#0`。如果这个 bean 只需要使用一次，那么可以省略 id 值，如果在其他 bean 中会引用（ref）到这个 bean，这个时候就需要设置 id 值。

   5. bean 标签中的 name 属性，为 bean 对象定义**别名**，在获取对象的时候也可以通过别名来获取。与 id 属性的区别如下：

      1. 别名可以定义多个 (用逗号分隔)，但是 id 属性只能有一个值；
      2. id 属性值，命名要求：必须以字母开头，可以使用字母，数字，下划线，连字符等符号，不可以以特殊字符开头 "/person"，虽然发展到现在 id 就像 name 一样没有了命名的限制。

4. 获取出来的对象是单例的。如下图，三种获取 Person 实例对象的方式打印出来的对象地址都是一样的，说明获取到的对象都是同一个。<br />![82c757ce-d908-4653-9906-2d36ce60ebd6](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251659550.png)

5. 在解析配置文件阶段会获取 bean 标签的相关信息，id 值为 "person"，class 值为 "fun.xiaorang.spring.pojo.Person"，会通过**反射**去调用 Person 类的构造方法创建对象。即使构造方法是**私有的**，也可以创建出实例对象保存在工厂中。

## 依赖注入 (Dependcy Injection)

🤔 什么是依赖注入？<br />🤓 通过 Spring 工厂以及配置文件为创建的实例对象(bean)的成员变量进行赋值。

🤔 为什么需要依赖注入？<br />🤓 解耦合：通过编码的方式给成员变量赋值，存在耦合，以后维护代码需要修改源码；如果使用依赖注入的方式，代码不需要修改，只需要修改配置文件中的值即可。

演示用的类还是原来的 Person 类，其存在 name 和 age 两个属性以及两个属性的 getter、setter 方法。

```java
public class Person {
    private String name;
    private Integer age;

    private Person() {
        System.out.println("Person -> 无参构造函数");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        System.out.println("给 Person 中的 name 属性赋值 " + name);
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        System.out.println("给 Person 中的 age 属性赋值 " + age);
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}
```

修改 Spring 核心配置文件 applicatContext.xml，在配置文件声明的 Person 类的 bean 标签中使用 property 子标签给 Person 类中的成员变量进行赋值。

```xml
<bean name="person" class="fun.xiaorang.spring.pojo.Person">
    <property name="name" value="xiaorang"/>
    <property name="age" value="18"/>
</bean>
```

增加测试方法，用于测试从 Spring 工厂获取出来的 Person 实例对象中的 name 、age 属性是否已经被赋值。

```java
@Test
public void test_02() {
    Person person = ctx.getBean(Person.class);
    System.out.println(person);
}
```

测试结果如下所示：发现从 Spring 工厂获取出来的 Person 实例对象中的 name、age 属性已经被赋上对应的值。<br />![9ff198a8-a195-4092-a689-1811b422f4ad](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251700232.png)<br />通过上面的代码以及输出结果，可以看出 Spring 底层通过反射调用对象的构造方法创建出实例对象，之后**调用对象的 setter 方法给成员变量赋值**，这种赋值方式称之为 **set 注入**。

### set 注入

🤔 什么是 set 注入？<br />🤓 Spring 创建出实例对象后，通过 Spring 配置文件使用 setter 方法的方式给 bean 实例对象中的成员变量进行赋值。

针对不同类型的成员变量，在 property 标签中需要嵌套其他子标签才能给成员变量赋值。<br />常见的成员变量类型有：

1. 八种基本数据类型 & String 类型，使用 property 标签嵌套 value 子标签；

   ```xml
   <property name="name">
     <value>xiaorang</value>
   </property>
   ```

   此时 IDEA 会提示你使用基于属性简化的方式给成员变量赋值，如下所示，不再使用 value 子标签，而是使用 property 标签中的 value 属性给成员变量赋值。

   ```xml
   <property name="age" value="18" />
   ```

2. 数组类型，使用 property 标签嵌套 array 子标签；

   ```xml
   <property name="emails">
       <array>
           <value>15019474951@163.com</value>
           <value>623052545@qq.com</value>
         	<value>2329862718@qq.com</value>
       </array>
   </property>
   ```

3. Set 集合，使用 property 标签嵌套 set 子标签；

   ```xml
   <property name="tels">
       <set>
           <value>15019474951</value>
           <value>13838384388</value>
       </set>
   </property>
   ```

4. List 集合，使用 property 标签嵌套 list 子标签；

   ```xml
   <property name="addresses">
       <list>
           <value>珠光村东区91栋413</value>
           <value>龙胜一小队xxx栋605</value>
       </list>
   </property>
   ```

5. Map 集合，使用 property 标签嵌套 map 子标签，map 子标签再嵌套 entry 子标签。其中，key 有特定的 key 标签，值根据对应类型选择标签即可。或者也可以选择基于属性简化的方式，使用 entry 子标签中的 key\value 属性。

   ```xml
   <property name="qqs">
       <map>
           <entry>
               <key>
                   <value>xiaorang</value>
               </key>
               <value>2329862718</value>
           </entry>
           <entry key="sanshi" value="623052545"/>
       </map>
   </property>
   ```

6. Properties 集合，使用 property 标签嵌套 props 子标签，props 子标签内部又可以嵌套多个 prop 子标签。

   ```xml
   <property name="p">
       <props>
           <prop key="birthday">1995-07-13</prop>
           <prop key="height">168cm</prop>
       </props>
   </property>
   ```

7. 复杂的 JDK 类型，如 Date 类型，Spring 提供的默认的日期类型格式为 yyyy/MM/dd

   ```xml
   <property name="recordDate" value="2022/03/17"/>
   ```

   如果你的日期格式为 yyyy-MM-dd 的话，Spring 将无法进行转换，将会抛出如下异常！如果想解决该异常，此时就需要 [自定义类型转换器](#自定义类型转换器) 才行！ <br />![579c91b7-ae7b-49ba-a559-829b37e88c7b](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251702648.png)

8. 自定义对象类型，当类中的成员变量是自定义对象类型的时候 (即程序员自己创建的类)，给其赋值时可以使用 property 标签嵌套 bean 子标签。

   ```xml
   <bean class="fun.xiaorang.spring.service.UserServiceImpl">
         <property name="userDao">
             <bean class="fun.xiaorang.spring.dao.UserDao"/>
         </property>
     </bean>
   ```

   上面这种注入方式虽然运行的结果没有问题，但实际上被注入的 UserDao 对象多次创建，造成资源的浪费。正确的做法应该是使用 bean 标签创建一个 UserDao 对象，然后在给 UserServiceImpl 实例对象中的成员变量 userDao 赋值时，直接引用（ref）已经创建好的 UserDao 实例对象即可。

   ```xml
   <bean id="userDao" class="fun.xiaorang.spring.dao.UserDao"/>
   <bean class="fun.xiaorang.spring.service.UserServiceImpl">
       <property name="userDao" ref="userDao"/>
   </bean>
   ```

编写测试案例用于测试不同类型成员变量如何通过 setter 注入的方式进行赋值。

1. 需要 Spring 进行管理的类如下所示：

   ```java
   @Data
   public class Customer implements Serializable {
       private String name;
       private Integer age;
       private String[] emails;
       private Set<String> tels;
       private List<String> addresses;
       private Map<String, String> qqs;
       private Properties p;
       private Date recordDate;
   }
   ```

   ```java
   public interface UserService {
       /**
        * 保存用户信息
        */
       void save();
   }
   ```

   ```java
   public class UserServiceImpl implements UserService {
       private UserDao userDao;
   
       public UserDao getUserDao() {
           return userDao;
       }
   
       public void setUserDao(UserDao userDao) {
           this.userDao = userDao;
       }
   
       @Override
       public void save() {
           userDao.save();
       }
   }
   ```

   ```java
   public class UserDao {
       public void save() {
           System.out.println("保存用户信息");
       }
   }
   ```

2. Spring 核心配置文件 applicationContext.xml 中添加如下配置：

   ```xml
   <bean class="fun.xiaorang.spring.pojo.Customer">
       <property name="name" value="xiaorang"/>
       <property name="age" value="18"/>
       <property name="emails">
           <array>
               <value>15019474951@163.com</value>
               <value>623052545@qq.com</value>
               <value>2329862718@qq.com</value>
           </array>
       </property>
       <property name="tels">
           <set>
               <value>15019474951</value>
               <value>13838384388</value>
           </set>
       </property>
       <property name="addresses">
           <list>
               <value>珠光村东区91栋413</value>
               <value>龙胜一小队xxx栋605</value>
           </list>
       </property>
       <property name="qqs">
           <map>
               <entry>
                   <key>
                       <value>xiaorang</value>
                   </key>
                   <value>2329862718</value>
               </entry>
               <entry key="sanshi" value="623052545"/>
           </map>
       </property>
       <property name="p">
           <props>
               <prop key="birthday">1995-07-13</prop>
               <prop key="height">168cm</prop>
           </props>
       </property>
       <property name="recordDate" value="2022/03/17"/>
   </bean>
   
   <bean id="userDao" class="fun.xiaorang.spring.dao.UserDao"/>
   
   <bean class="fun.xiaorang.spring.service.UserServiceImpl">
       <property name="userDao" ref="userDao"/>
   </bean>
   ```

3. 测试方法如下所示：

   ```java
   @Test
   public void test_03() {
       Customer customer = ctx.getBean(Customer.class);
       System.out.println(customer);
   
       UserService userService = ctx.getBean(UserService.class);
       userService.save();
   }
   ```

   测试结果如下所示：可以看到 Customer 中的成员变量都已被赋值；从 Spring 容器中获取 UserService 接口类型的实例对象时，是能获取到的，为其实现类类型 UserServiceImpl 的实例对象，并且 UserServiceImpl 实例对象中的 UserDao 类型的成员变量也已被赋值，不然的话调用 UserDao 类中的 save() 方法则会抛出 NPE 异常！现在没有出现异常，反过来说明自定义对象类型的成员变量也已经被赋值。<br />![4f76d828-7ce5-416e-879e-6f3760d1ea97](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251706096.png)

### 构造注入

🤔 什么是构造注入？<br />🤓 Spring 通过构造方法的方式创建实例对象的同时就给对象中的成员变量进行赋值。

演示用的类还是原来的 Person 类，不过在原来的基础上增加一个 address 属性以及 address 属性的 getter、setter 方法。为了演示使用构造方法的方式给成员变量进行赋值，此时在 Person 类中加上多个重载的构造方法。如下所示：

```java
public class Person {
    private String name;
    private Integer age;
    private String address;

    private Person() {
        System.out.println("Person -> 无参构造函数");
    }

    public Person(String name) {
        System.out.println("Person -> 只有name参数的构造函数");
        this.name = name;
    }

    public Person(String name, Integer age, String address) {
        System.out.println("Person -> 全参构造函数");
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public Person(String name, String address, Integer age) {
        System.out.println("Person -> 全参构造函数2");
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        System.out.println("给 Person 中的 name 属性赋值 " + name);
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        System.out.println("给 Person 中的 age 属性赋值 " + age);
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        System.out.println("给 Person 中的 address 属性赋值 " + address);
        this.address = address;
    }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + ", address='" + address + '\'' + '}';
    }
}
```

修改 Spring 核心配置文件 applicatContext.xml，在配置文件声明的 Person 类的 bean 标签中使用 constructor-arg 子标签给 Person 类中的成员变量进行赋值。

```xml
<bean id="person" class="fun.xiaorang.spring.pojo.Person">
    <constructor-arg value="xiaorang"/>
    <constructor-arg value="18"/>
    <constructor-arg value="珠光村东区91栋413"/>
</bean>
```

直接使用测试方法 test_00() 即可测试从 Spring 工厂获取出来的 Person 实例对象中的 name 、age、address 属性是否已经通过构造注入的方式被赋值。测试结果如下所示：从测试结果中可以看出，发现调用的是 Person 类的全参构造方法，并没有调用其无参构造方法；Person 实例对象中的 name\age\address 成员变量均被赋值。<br />![94be9b3d-c2e7-4450-9aa8-d5f476b59f0c](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251706737.png)<br />**❗ 注意 存在多个重载的构造方法时如何确定使用哪个构造方法创建实例对象？** 

- 参数个数不同时：通过嵌套的 `constructor-arg` 标签数量即可区分。  
- 构造参数个数相同时：通过 `constructor-arg` 标签中的 `name` 属性进行区分。  

## 创建复杂对象

### 何为简单对象？复杂对象？

1. 简单对象？指的是可以直接通过 new 构造方法的方式创建出来的对象。如 Person、Customer、UserServiceImpl、UserDao 等等；
2. 复杂对象？指的是不能直接通过 new 构造方法的方式创建出来的对象。如 Connection、SqlSessionFactory 等等；

```java
try (InputStream inputStream = JdbcTest.class.getClassLoader().getResourceAsStream("db.properties")) {
    Properties properties = new Properties();
    properties.load(inputStream);
    String url = properties.getProperty("jdbc.url");
    String username = properties.getProperty("jdbc.username");
    String password = properties.getProperty("jdbc.password");
    Connection connection = DriverManager.getConnection(url, username, password);
    LOGGER.info("【建立数据库连接】：{}", CONNECTION);
} catch (IOException | SQLException e) {
    throw new RuntimeException(e);
}
```

```java
try (InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml")) {
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
```

### 三种创建复杂对象的方式

#### 实现 FactoryBean 接口

如何让 Spring 工厂管理 Connection 实例对象的创建呢？步骤如下，

1. 定义一个 ConnectionFactoryBean 类，实现 FactoryBean 接口

   ```java
   public class ConnectionFactoryBean implements FactoryBean<Connection> {
       private String url;
       private String username;
       private String password;
   
       @Override
       public Connection getObject() throws Exception {
           return DriverManager.getConnection(url, username, password);
       }
   
       @Override
       public Class<?> getObjectType() {
           return Connection.class;
       }
   
       public String getUrl() {
           return url;
       }
   
       public void setUrl(String url) {
           this.url = url;
       }
   
       public String getUsername() {
           return username;
       }
   
       public void setUsername(String username) {
           this.username = username;
       }
   
       public String getPassword() {
           return password;
       }
   
       public void setPassword(String password) {
           this.password = password;
       }
   }
   ```

2. 在 Spring 核心配置文件中注册该 FactoryBean

   ```xml
   <!--    实现FactoryBean接口的方式创建复杂对象，推荐-->
   <bean class="fun.xiaorang.spring.factorybean.ConnectionFactoryBean">
       <property name="url"
                 value="jdbc:mysql://localhost:3306/atguigudb?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"/>
       <property name="username" value="root"/>
       <property name="password" value="123456"/>
   </bean>
   ```

3. 编写测试方法，测试是否能从 Spring 工厂中获取 Connection 类的实例对象

   ```java
   @Test
   public void test_04() {
       Connection connection = ctx.getBean(Connection.class);
       Connection connection1 = ctx.getBean(Connection.class);
       System.out.println(connection);
       System.out.println(connection1);
   }
   ```

   测试结果如下所示：<br />![1067374d-5e29-48ea-af86-75763c15f2c8](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251708288.png)

> [!TIP]
>
> 代码分析：
>
> 1. 在使用 `getBean()` 方法获取简单对象时，获取到的都是 bean 标签中 class 属性对应的类的对象；而在使用 `getBean()` 方法获取复杂对象 (实现了 `FactoryBean` 接口) 时，获取到的是 bean 标签中 class 属性对应的类的对象中 `getObject()` 方法返回的对象。
> 2. `FactoryBean` 接口中定义的 `isSingleton()` 方法返回 true 则表示创建的是一个单例对象，只会创建一次；如果返回的是 false，则每一次都会创建一个新的对象。此处的数据库连接对象 (connection) 则返回 false，表示在使用的时候都应该每次获取一个新的对象。
> 3. 现在使用 `ctx.getBean("connection")` 获取到的是 `getObject()` 方法中返回的对象，如果就是想获取 FactoryBean 接口的实现类呢？那么需要使用 `ctx.getBean("&connection")`，获取到的就是 FactoryBean 实例对象。
>
> 在调用 `getBean()` 方法从 Spring 工厂获取实例对象时，会先通过 `instanceof()` 方法判断是否是 FactoryBean 接口的实现类？如果是的话，则返回 `getObject()` 方法中返回的对象。使用该方式创建复杂对象，是 Spring 原生提供的，**后续在 Spring 整合其他框架时，会大量应用到 FactoryBean**。

#### 实例工厂的方式

1. 定义一个工厂类，提供一个获取相应实例对象的公共方法；

   ```java
   public class ConnectionFactory {
       private String url;
       private String username;
       private String password;
   
       public Connection getConnection() throws SQLException {
           return DriverManager.getConnection(url, username, password);
       }
   
       public String getUrl() {
           return url;
       }
   
       public void setUrl(String url) {
           this.url = url;
       }
   
       public String getUsername() {
           return username;
       }
   
       public void setUsername(String username) {
           this.username = username;
       }
   
       public String getPassword() {
           return password;
       }
   
       public void setPassword(String password) {
           this.password = password;
       }
   }
   ```

2. 在 Spring 核心配置文件中注册该工厂类，与此同时，注册一个 Connection 的 Bean，bean 标签中的

   1. factory-bean 属性为该工厂类所对应的 bean 标签的 id 属性；
   2. factory-method 属性为该工厂类中提供的用于创建实例对象的公共方法；
   3. scope 属性存在两个值，singleton 指定创建出来的实例对象是单例的，即多次获取出来的实例对象是同一个；prototype 表示创建出来的实例对象是多例的，即多次获取出来的实例对象不是同一个。没有指定 scope 属性的话默认是单例的。

   ```xml
   <!--    实例工厂的方式创建复杂对象-->
   <bean id="connectionFactory" class="fun.xiaorang.spring.factorybean.ConnectionFactory">
       <property name="url"
                 value="jdbc:mysql://localhost:3306/atguigudb?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"/>
       <property name="username" value="root"/>
       <property name="password" value="123456"/>
   </bean>
   
   <bean id="connection" factory-bean="connectionFactory" factory-method="getConnection" scope="prototype"/>
   ```

3. 运行测试方法 `test_04()`，注意，测试之前，先注释掉配置文件中前一种方式的 FactoryBean 所对应的标签，否则会抛出异常！

   测试结果如下所示：因为指定了 bean 标签中的 scope 属性为 prototype，所以从 Spring 工厂获取出来的 Connection 实例对象并不是同一个，在打印的信息中可以发现创建了 ConnectionFactory 工厂类的单例对象，但是并没有打印出创建 Connection 实例对象的信息，这是为什么？盲猜一波是因为 Connection 是多例的，在调用 `getBean()` 方法的时候才去创建其实例对象，并不像单例对象那样，在配置文件解析阶段就已经确定，详情的话见下文 [对象的生命周期](#Bean-Lifecycle)。<br />![e68ec5a0-fea6-466b-be4c-4e2154ca7554](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251712829.png)

> [!TIP]
>
> 代码分析：
>
> 1. 使用这种方式创建复杂对象的最终效果能达到与前面实现 FactoryBean 接口的方式一样，都可以控制创建出来的实例对象是单例的 or 多例的，如果没有指定 bean 标签中的 scope 属性的话，默认创建出来的实例对象为单例的。
> 2. 为什么要控制创建实例对象的次数呢？因为有的对象开销比较大，创建多个容易造成内存资源的浪费，比如说 SqlSessionFactroy。
> 3. 什么样的对象只创建一次？什么样的对象每次都需要创建新的(多例)？创建一次的对象(单例)，如 SqlSessionFactroy、xxxService、xxxDao 等等。创建多次的对象(多例)，如 Connection、SqlSession 等等，因为每次控制事务时不一样，所以需要新的。总结：可以共用，并且线程安全的，就可以只需要创建一次，反之则需要创建新的。
> 4. 如何控制对象的创建次数呢？
>    1. 如果是前一种方式通过实现 FactoryBean 接口创建复杂对象，可以通过 FactoryBean 接口实现类中重写的 `isSignleton()`方法控制，如果返回 true，则只会创建一次对象，获取出来的对象是单例的；如果返回 false，则每次都会创建出新的对象，获取出来的对象是多例的。
>    2. 其余情况(包括简单对象的创建、实例工厂创建复杂对象、以及下一小节将要提到的静态工厂创建复杂对象)都可以通过 bean 标签中的 scope 属性来控制，没有指定该属性的话则默认值为 signleton，即单例的。

#### 静态工厂的方式

1. 定义一个工厂类，提供一个获取相应实例对象的公共静态方法；

   ```java
   public class StaticConnectionFactory {
       private static final String URL = "jdbc:mysql://localhost:3306/atguigudb?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai";
       private static final String USERNAME = "root";
       private static final String PASSWORD = "123456";
   
       public static Connection getConnection() throws SQLException {
           return DriverManager.getConnection(URL, USERNAME, PASSWORD);
       }
   }
   ```

2. 在 Spring 核心配置文件中注册该工厂类，bean 标签中的 class 属性为该工厂类，factory-method 属性为该工厂类中提供的用于创建实例对象的公共静态方法；

   ```xml
   <!--    静态工厂的方式创建复杂对象-->
   <bean id="connection" class="fun.xiaorang.spring.factorybean.StaticConnectionFactory"
         factory-method="getConnection" scope="prototype"/>
   ```

3. 运行测试方法 `test_04()`，注意，测试之前，先注释掉配置文件中前一种方式的 ConnectionFactory 所对应的标签，否则会抛出异常！测试结果如下所示：<br/>![ad342634-6bac-4825-a6d6-3d59bef61808](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251714994.png)

## 对象的生命周期(Bean Lifecycle) {#Bean-Lifecycle}

🤔 什么是对象的生命周期？<br />🤓 指的是一个对象从创建到初始化最后到销毁的一个完整过程。

对象生命周期的三个阶段：

1. 创建阶段：表示 Spring 工厂何时创建对象

   1. 当创建的是单例对象时，即 bean 标签中的 scope 属性为 singleton(或缺省) 时，

      1. 非懒加载，即 bean 标签中的 lazy-init 属性为 false 时，在 Spring 工厂创建的同时就会创建出该对象并给该对象中的成员变量进行赋值(依赖注入)；

         前面案例中的 Person 就是一个典型的非懒加载的单例对象，运行测试方法 `test_00()`，结果如下所示：<br />![d565a51b-7e02-4795-aaec-dbdc831608c8](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251716647.png)

      2. 懒加载，即 bean 标签中的 lazy-init 属性为 true 时，则会推迟到获取对象时才去创建对象；

         1. 修改配置文件中 class = Person 的 bean 标签中的 lazy-init 属性为 true

            ```xml
            <bean id="person" class="fun.xiaorang.spring.pojo.Person" lazy-init="true">
                <constructor-arg value="xiaorang"/>
                <constructor-arg value="18"/>
                <constructor-arg value="珠光村东区91栋413"/>
            </bean>
            ```

         2. 运行测试方法 `test_00()`，结果如下所示：每次都是推迟到获取对象时才去创建对象。

            ![241b1434-b9a3-4d94-a346-9ffccee079e9](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251718575.png)

      3. 当创建的是多例对象时，则会每次都推迟到获取对象时才去创建一个新的实例对象。

         1. 修改配置文件中 class = Person 的 bean 标签中的 scope 属性为 prototype

            ```xml
            <bean id="person" class="fun.xiaorang.spring.pojo.Person" scope="prototype">
                <constructor-arg value="xiaorang"/>
                <constructor-arg value="18"/>
                <constructor-arg value="珠光村东区91栋413"/>
            </bean>
            ```

         2. 修改测试方法 `test_00()`

            ```java
            @Test
            public void test_00() {
                Person person = ctx.getBean(Person.class);
                Person person1 = ctx.getBean(Person.class);
                System.out.println(person);
                System.out.println(person1);
                System.out.println(person == person1);
            }
            ```

            运行结果如下所示：可以看出获取出来的两个对象并不是同一个对象，并且每次都是推迟到获取对象时才去创建一个新的对象。<br />![3369b169-17d3-4928-ba88-8dc0dace24d5](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251719128.png)

2. 初始化阶段：Spring 工厂在创建完对象之后，调用对象的初始化方法完成对应的初始化操作（如资源的初始化、io、connection、网络等）。其中的初始化方法需要根据实际情况由程序员提供，然后交由 Spring 工厂进行调用即可。存在以下实现方式：

   1. 创建的对象实现 InitializingBean 接口，重写接口中的 `afterPropertiesSet()` 方法，该方法就是用来完成对象初始化操作的地方；
   2. 创建的对象不实现 InitializingBean 接口，而是提供一个普通的初始化方法，放在该对象所对应的 bean 标签中的 init-method 属性中。

   将两种实现方式放在一起进行演示，定义一个类既实现 InitializingBean 接口又提供一个普通的初始化方法。

   ```java {1,17-24}
   public class Student implements InitializingBean {
       private String name;
       private String age;
       private Integer sex;
   
       private Student() {
           System.out.println("Student -> 无参构造方法");
       }
   
       public Student(String name, String age, Integer sex) {
           System.out.println("Student -> 全参构造方法");
           this.name = name;
           this.age = age;
           this.sex = sex;
       }
   
       @Override
       public void afterPropertiesSet() {
           System.out.println("InitializingBean接口中的afterPropertiesSet初始化方法");
       }
   
       public void initMethod() {
           System.out.println("自定义的普通方法作为初始化方法");
       }
   
       public String getName() {
           return name;
       }
   
       public void setName(String name) {
           System.out.println("给 Student 类中的 name 属性赋值 " + name);
           this.name = name;
       }
   
       public String getAge() {
           return age;
       }
   
       public void setAge(String age) {
           System.out.println("给 Student 类中的 age 属性赋值 " + age);
           this.age = age;
       }
   
       public Integer getSex() {
           return sex;
       }
   
       public void setSex(Integer sex) {
           System.out.println("给 Student 类中的 sex 属性赋值 " + (sex == 0 ? "男" : "女"));
           this.sex = sex;
       }
   
       @Override
       public String toString() {
           return "Student{" + "name='" + name + '\'' + ", age='" + age + '\'' + ", sex=" + sex + '}';
       }
   }
   ```

   在 Spring 核心配置文件中注册该 bean 对象，其中，bean 标签中的 class 属性为该类，init-method 属性为该类中的普通初始化方法。

   ```xml
   <bean id="student" class="fun.xiaorang.spring.pojo.Student" init-method="initMethod">
       <property name="name" value="xiaorang"/>
       <property name="age" value="18"/>
       <property name="sex" value="0"/>
   </bean>
   ```

   编写测试方法，用于测试这两种实现初始化操作的方式是否都生效？

   ```java
   @Test
   public void test_05() {
       Student student = ctx.getBean(Student.class);
       System.out.println(student);
   }
   ```

   测试结果如下所示：<br />![d187c32f-dfba-4769-8299-c66f232b212e](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251721583.png)

   > [!TIP]
   >
   > 细节分析：
   >
   > 1. 先通过反射调用 Student 类的私有无参构造方法创建出实例对象；
   > 2. 然后使用 set 注入的方式给实例对象中的成员变量 name\age\sex 赋值；
   > 3. 最后才执行重写 InitializingBean 接口中的 `afterPropertiesSet()` 方法和自定义的`initMethod()` 初始化方法。

3. 销毁阶段：在 Spring 销毁对象之前，会先调用对象的销毁方法完成销毁操作（如资源释放、io、connection 等等）。Spring 会在关闭工厂的时候销毁创建出来的对象，其中的销毁方法需要根据实际情况由程序员提供，然后交由 Spring 工厂进行调用即可。存在以下实现方式：

   1. 创建的对象实现 DisposableBean 接口，重写接口中的 `destroy()` 方法，该方法就是用来完成对象销毁操作的地方；
   2. 创建的对象不实现 DisposableBean 接口，而是提供一个普通的销毁方法，放在该对象所对应的 bean 标签中的 destroy-method 属性中。

   将两种实现方式放在一起进行演示，修改 Student 类，使其既实现 DisposableBean 接口又提供一个普通的销毁方法。

   ```java {1,26-33}
   public class Student implements InitializingBean, DisposableBean {
       private String name;
       private String age;
       private Integer sex;
   
       private Student() {
           System.out.println("Student -> 无参构造方法");
       }
   
       public Student(String name, String age, Integer sex) {
           System.out.println("Student -> 全参构造方法");
           this.name = name;
           this.age = age;
           this.sex = sex;
       }
   
       @Override
       public void afterPropertiesSet() {
           System.out.println("InitializingBean接口中的afterPropertiesSet初始化方法");
       }
   
       public void initMethod() {
           System.out.println("自定义的普通方法作为初始化方法");
       }
   
       @Override
       public void destroy() {
           System.out.println("DisposableBean接口中的destroy销毁方法");
       }
   
       public void destroyMethod() {
           System.out.println("自定义的普通方法作为销毁方法");
       }
   
       public String getName() {
           return name;
       }
   
       public void setName(String name) {
           System.out.println("给 Student 类中的 name 属性赋值 " + name);
           this.name = name;
       }
   
       public String getAge() {
           return age;
       }
   
       public void setAge(String age) {
           System.out.println("给 Student 类中的 age 属性赋值 " + age);
           this.age = age;
       }
   
       public Integer getSex() {
           return sex;
       }
   
       public void setSex(Integer sex) {
           System.out.println("给 Student 类中的 sex 属性赋值 " + (sex == 0 ? "男" : "女"));
           this.sex = sex;
       }
   
       @Override
       public String toString() {
           return "Student{" + "name='" + name + '\'' + ", age='" + age + '\'' + ", sex=" + sex + '}';
       }
   }
   ```

   修改 Spring 核心配置文件中 Student 类所对应的 bean 标签 ，增加 destroy-method 属性为该类中的普通销毁方法。

   ```xml
   <bean id="student" class="fun.xiaorang.spring.pojo.Student" init-method="initMethod" destroy-method="destroyMethod">
     <property name="name" value="xiaorang"/>
     <property name="age" value="18"/>
     <property name="sex" value="0"/>
   </bean>
   ```

   依旧使用测试方法 `test_05()`进行测试，不过需要修改 `ctx` 静态成员变量的类型为 ClassPathXmlApplicationContext，增加 `after()` 方法用于手动关闭 Spring 工厂来触发对象的销毁操作。

   ```java
   public class ApiTest {
       private static ClassPathXmlApplicationContext ctx;
   
       @BeforeAll
       public static void before() {
           ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
       }
   
       @AfterAll
       public static void after() {
           ctx.close();
       }
   }
   ```

   测试结果如下所示：<br />![31779b3d-e78c-4aab-8eac-641f52562a50](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251724831.png)

> [!TIP]
>
> 细节分析：再次完善 Bean 的生命周期流程：创建 ➡️ 初始化 ➡️ 销毁
>
> 1. 先通过反射调用 Student 类的私有无参构造方法创建出实例对象；
> 2. 然后使用 set 注入的方式给实例对象中的成员变量 name\age\sex 赋值；
> 3. 然后会先执行重写 InitializingBean 接口中的 `afterPropertiesSet()` 方法，然后才执行自定义的`initMethod()` 初始化方法。
> 4. 最后在关闭 Spring 工厂的时候，会先执行 DisposableBean 接口中的 `destroy() `方法，然后才执行自定义的 `destroyMethod()` 销毁方法。销毁方法只针对单例对象！

## 配置文件参数化

🤔 什么叫配置文件参数化？<br />🤓 说白了就是把 spring 配置文件中需要经常修改的信息维护到另一个专门用于配置的小文件中。这样的话，在以后修改配置的过程中就不需要从 spring 配置文件中的几千行信息中去查找，而是直接在小配置文件中改动即可，这样也便于维护。

以前面实例工厂案例为例，演示一下如何将数据库连接配置信息放到一个专门的配置文件 db.properties 中，实现步骤如下所示：

1. 增加数据库连接配置文件 db.properties。注意，key 加个前缀避免重复！

   ```properties
   jdbc.url=jdbc:mysql://localhost:3306/atguigudb?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai
   jdbc.username=root
   jdbc.password=123456
   ```

2. 将 db.properties 配置文件整合到 Spring 核心配置文件中

   ```xml
   <context:property-placeholder location="db.properties"/>
   
   <!--    实例工厂的方式创建复杂对象-->
   <bean id="connectionFactory" class="fun.xiaorang.spring.factorybean.ConnectionFactory">
     <property name="url" value="${jdbc.url}"/>
     <property name="username" value="${jdbc.username}"/>
     <property name="password" value="${jdbc.password}"/>
   </bean>
   
   <bean id="connection" factory-bean="connectionFactory" factory-method="getConnection" scope="prototype"/>
   ```

3. 运行测试方法 `test_04()`，测试结果如下所示：<br />![e4bb6529-9d50-4372-b5b7-43731b6d365f](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251726390.png)


## 自定义类型转换器

想必小伙伴应该还记得在使用 set 注入方式给成员变量赋值时，碰到过一个问题，那就是 Spring 只支持将格式为 "yyyy/MM/dd" 的日期类型字符串转换为 Date 类型，当你使用格式为 "yyyy-MM-dd" 的日期类型字符串时，Spring 是无法将该字符串转换成 Date 类型的，会抛出如下异常信息！<br />![8048373d-8080-4855-89cc-88425d52e0c6](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251726578.png)<br />这是为什么呢？因为 Spring 虽然提供了一堆默认的类型转换器，但是默认提供的支持日期类型的转换器只支持将格式为 "yyyy/MM/dd" 的日期类型字符串转换为 Date 类型，如果想将格式为 "yyyy-MM-dd" 的日期类型字符串转换成 Date 类型，此时就需要自定义类型转换器！那么如何自定义一个类型转换器呢？步骤如下：

1. 定义一个类实现 Converter 接口，该实现类就是一个类型转换器。其中，日期字符串默认格式为 "yyyy/MM/dd"，如果想将格式改为 "yyyy-MM-dd"，则在配置文件中给成员变量 pattern 赋值即可。

   ```java
   public class MyDateConverter implements Converter<String, Date> {
       private String pattern = "yyyy/MM/dd";
   
       @Override
       public Date convert(String source) {
           try {
               SimpleDateFormat sdf = new SimpleDateFormat(pattern);
               return sdf.parse(source);
           } catch (ParseException e) {
               e.printStackTrace();
           }
           return null;
       }
   
       public String getPattern() {
           return pattern;
       }
   
       public void setPattern(String pattern) {
           this.pattern = pattern;
       }
   }
   ```

2. 在 Spring 核心配置文件中注册该类型转换器才会生效！其中，ConversionServiceFactoryBean 类所对应的 bean 标签的 id 必须为 conversionService，否则的话不会生效！

   ```xml
   <bean id="myDateConverter" class="fun.xiaorang.spring.converter.MyDateConverter">
       <property name="pattern" value="yyyy-MM-dd"/>
   </bean>
   
   <bean id="conversionService" class="org.springframework.context.support.ConversionServiceFactoryBean">
       <property name="converters">
           <set>
               <ref bean="myDateConverter"/>
           </set>
       </property>
   </bean>
   ```

3. 运行测试方法 `test_03()`，在运行测试方法之前，修改 Spring 核心配置文件中 Customer 类中 recordDate 属性所对应的 property 标签，令其 value 属性值为 "2022-03-17"；测试结果如下所示：<br />![dad5b51f-538e-4c31-a036-a24bf3b5da4c](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251727546.png)


## BeanPostProcessor

🤔 BeanPostProcessor 接口干嘛用的？<br />🤓 用于对 Spring 工厂创建的对象进行再加工，算是 Spring 提供的<strong style="color:#ae3520;font-size:19px;">扩展点</strong>，非常非常重要！以后在 Spring 源码分析中会着重分析该接口并看到 Spring 是如何利用该接口进行扩展的（如 Spring 中的 AOP 底层就是在该接口定义的 `postProcessAfterInitialization()` 方法中使用 JDK 动态代理对 Bean 对象进行代理增强的）。

那么如何自定义一个 BeanPostProcessor？步骤如下：

1. 定义一个类实现 BeanPostProcessor 接口，该接口中定义了两个方法，一个为 `postProcessBeforeInitialization()` 方法，运行在 InitializingBean 接口的 `afterPropertiesSet()` 初始化方法之前；另一个`postProcessAfterInitialization()` 方法则运行在自定义的 `init-method`初始化方法之后。为了方便截图打印出来的信息，咱们只重写其中的 `postProcessAfterInitialization()`方法。

   ```java
   public class MyBeanPostProcessor implements BeanPostProcessor {
       /*@Override
       public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
           System.out.println("使用BeanPostProcessor接口中的before方法对 " + beanName + "进行增强");
           return bean;
       }*/
   
       @Override
       public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
           System.out.println("使用BeanPostProcessor接口中的after方法对 " + beanName + "进行增强");
           return bean;
       }
   }
   ```

2. 在 Spring 核心配置文件中注册该 BeanPostProcessor。

   ```xml
   <bean class="fun.xiaorang.spring.beanpostprocessor.MyBeanPostProcessor"/>
   ```

3. 运行测试方法 `test_03()`，测试结果如下所示：<br />![0f6b0a33-0b61-4ca2-ab46-6d564cb8cecd](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202307251728265.png)

   > [!TIP]
   >
   > 细节分析：再次完善 Bean 的生命周期流程：创建 ➡️ 初始化 ➡️ 销毁
   >
   > 1. 先通过反射调用 Student 类的私有无参构造方法创建出实例对象；
   > 2. 然后使用 set 注入的方式给实例对象中的成员变量 name\age\sex 赋值；
   > 3. 然后执行 BeanPostProcessor 接口中的 `postProcessBeforeInitialization()` 方法；
   > 4. 然后会先执行重写 InitializingBean 接口中的 `afterPropertiesSet()` 方法，然后才执行自定义的`initMethod()` 初始化方法；
   > 5. 然后执行 BeanPostProcessor 接口中的 `postProcessAfterInitialization()` 方法；
   > 6. 最后在关闭 Spring 工厂的时候，会先执行 DisposableBean 接口中的 `destroy() `方法，然后才执行自定义的 `destroyMethod()` 销毁方法。销毁方法只针对单例对象！
   >
   > BeanPostProcessor 接口会对 Spring 工厂创建出来的所有 Bean 对象进行增强！