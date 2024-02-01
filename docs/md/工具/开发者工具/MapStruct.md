# MapStruct

> 官方文档地址：[MapStruct – Java bean mappings, the easy way!](https://mapstruct.org/)

## 介绍

### What is it?

MapStruct 是一个代码生成器，它基于**约定大于配置**的方式极大地简化了 Java Bean 类型之间映射的实现。生成的映射代码使用普通方法调用，因此是快速、类型安全和易于理解的。

### Why?

多层应用程序通常需要在不同的对象模型（例如，实体和 DTO）之间进行映射。编写这样的映射代码是一项乏味且容易出错的任务。MapStruct 的目标是通过自动化的方式尽量简化这项任务。

与其他映射框架相比，MapStruct 通过在编译时生成 Java Bean 映射，确保了高性能，同时为开发者提供了快速的反馈和全面的错误检查。

### How?

MapStruct 是一个集成到 Java 编译器中的注解处理器，它可以在命令行构建工具（如 Maven、Gradle 等）中使用，也可以在你喜欢的集成开发环境（IDE）中使用。

MapStruct 使用合理的默认设置，但在需要配置或实现特殊行为时也能给予开发者足够的灵活性。

---

MapStruct 是一个 **Java 注解处理器，用于为 Java Bean 类生成类型安全和性能良好的映射器**。

你只需**定义一个映射器接口，其中声明所需的映射方法**。在<u>编译</u>过程中，MapStruct 将**自动生成此接口的实现**。该实现使用普通的 Java 方法调用来进行源对象和目标对象之间的映射，不涉及反射等复杂机制。

与手动编写映射代码相比，MapStruct 通过生成代码来帮助你节省时间，因为手动编写这些代码通常很繁琐且容易出错。遵循**约定大于配置**的方式，MapStruct 在大多数情况下都提供了合理的默认值，不过在需要配置或实现特殊行为时也能给予开发者足够的灵活性。

与其他动态映射框架相比，MapStruct 具有以下优势：

- 通过普通方法调用而不是反射来实现快速执行；
- **编译时类型安全**: 只有可以相互映射的对象和属性才能进行映射，不会发生将订单实体映射到客户 DTO 等意外情况；
- 在构建时提供清晰的错误报告，如果出现以下情况：
  - 映射不完整 (未映射所有目标属性)；
  - 映射不正确 (找不到正确的映射方法或类型转换)；

## 设置

MapStruct 是基于 JSR 269 规范的 Java 注解处理器，因此可以在命令行构建（javac，Ant，Maven 等）以及 IDE 中使用。

它包含以下组件:

- `org.mapstruct`: 包含所需的注解，如 `@Mapping`；
- `org.mapstruct:mapstruct-processor`: 包含生成映射器实现的注解处理器；

### Apache Maven

对于 Maven 项目，如果想使用 MapStruct 的话，需要添加如下内容至 `pom.xml` 配置文件中：

```xml
...
<properties>
    <org.mapstruct.version>1.5.5.Final</org.mapstruct.version>
</properties>
...
<dependencies>
    <dependency>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct</artifactId>
        <version>${org.mapstruct.version}</version>
    </dependency>
</dependencies>
...
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.mapstruct</groupId>
                        <artifactId>mapstruct-processor</artifactId>
                        <version>${org.mapstruct.version}</version>
                    </path>
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins>
</build>
...
```

### 配置选项

MapStruct 代码生成器可以使用注解处理器选项进行配置。

当直接调用 javac 时，这些选项以 `-Akey=value` 的形式传递给编译器。当通过 Maven 使用 MapStruct 时，任何处理器选项都可以通过在 Maven 处理器插件的配置中使用 `compilerArgs` 进行传递，如下所示：

```xml
...
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.8.1</version>
    <configuration>
        <source>1.8</source>
        <target>1.8</target>
        <annotationProcessorPaths>
            <path>
                <groupId>org.mapstruct</groupId>
                <artifactId>mapstruct-processor</artifactId>
                <version>${org.mapstruct.version}</version>
            </path>
        </annotationProcessorPaths>
        <!-- due to problem in maven-compiler-plugin, for verbose mode add showWarnings -->
        <showWarnings>true</showWarnings>
        <compilerArgs>
            <arg>
                -Amapstruct.suppressGeneratorTimestamp=true
            </arg>
            <arg>
                -Amapstruct.suppressGeneratorVersionInfoComment=true
            </arg>
            <arg>
                -Amapstruct.verbose=true
            </arg>
        </compilerArgs>
    </configuration>
</plugin>
...
```

列举常用选项：

- `mapstruct.defaultComponentModel`，其常用的可选值有：
  - `default`：映射器不使用组件模型，通常通过 `Mappers#getMapper(Class)` 检索实例；
  - `spring`：生成的映射器是一个单例的 Spring Bean，可以通过 `@Autowired` 注解检索；
  - 至于其他的 `cdi`、`jsr330` 等等请自行参考文档 https://mapstruct.org/documentation/stable/reference/html/#configuration-options
- `mapstruct.defaultInjectionStrategy`：用于指定映射器（Mapper）中默认的依赖注入方式，该配置仅适用于基于注解的组件模型，例如 CDI（Contexts and Dependency Injection）、Spring 和 JSR 330。存在如下两个可选值：
  - `field`（默认值）：使用字段注入依赖。在生成的映射类中，依赖的目标对象通常作为字段声明，并在映射方法之前通过字段注入进行初始化。
  - `constructor`：使用构造函数注入依赖。在这种策略下，生成的映射类会创建构造函数，该构造函数将依赖的目标对象作为参数，通过构造函数注入来初始化依赖。

### IDE 支持

> [IDE Support – MapStruct](https://mapstruct.org/documentation/ide-support/)

以 IntelliJ IDEA 为例，安装 [MapStruct Support - IntelliJ IDEs Plugin | Marketplace (jetbrains.com)](https://plugins.jetbrains.com/plugin/10036-mapstruct-support) 插件，该插件具备如下 [特性](https://github.com/mapstruct/mapstruct-idea#features)：

- 代码补全 <br />![Code completion for source](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310170238644.gif)
- 转到声明 <br />![Go To Declaration](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310170238809.gif)
- 查找用法 <br />![Find usages from Source methods](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202310170238914.png)
- 高亮显示
- 快速修复

## 入门案例

下面演示如何使用 MapStruct 映射两个对象。

### 实体类和DTO

假设咱们有一个代表汽车的类（例如，JPA 实体）和一个附带的数据传输对象（DTO）。

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Car {
    private String make;
    private int numberOfSeats;
    private CarType type;

    public enum CarType {
        SEDAN, HATCHBACK, SUV
    }
}
```

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDto {
    private String make;
    private int seatCount;
    private String type;
}
```

这两种类型非常相似，只是座位计数属性有不同的名称，并且 type 属性在 Car 类中是一个特殊的枚举类型，但在 CatDto 中是一个普通字符串。

### 映射器接口

要生成一个用于将 Car 对象转换为 CarDto 对象的映射器，需要定义一个映射器接口，如下所示：

```java
@Mapper
public interface CarMapper {
    CarMapper INSTANCE = Mappers.getMapper(CarMapper.class);

    @Mapping(source = "numberOfSeats", target = "seatCount")
    CarDto carToCarDto(Car car);
}
```

- `@Mapper` 注解将接口标记为映射接口，并在编译过程中启用 MapStruct 处理器；
- 实际的映射方法需要接受源对象作为参数，并返回目标对象，方法名称任意；
- 对于源对象和目标对象中具有不同名称的属性，可以使用 `@Mapping` 注解来配置它们之间的映射关系。
- 在必要且可行的情况下，将执行类型转换，以便处理源对象和目标对象中类型不同的属性。例如，将枚举类型的属性转换为字符串类型。
- 当然，在该接口中可以存在多个映射方法，对于这些方法，MapStruct 会生成相应的实现代码。
- 接口实现的实例可以从 `Mappers` 类中获取。按照约定，接口通常声明一个名为 `INSTANCE` 的成员，以便客户端可以访问映射器的实现。

### 使用映射器

基于映射器接口，客户端可以以一种非常简单和类型安全的方式执行对象映射。如下所示：

```java
class CarMapperTest {
    @Test
    public void shouldMapCarToDto() {
        //given
        Car car = new Car("Morris", 5, Car.CarType.SEDAN);
        //when
        CarDto carDto = CarMapper.INSTANCE.carToCarDto(car);
        //then
        assertThat(carDto).isNotNull();
        assertThat(carDto.getMake()).isEqualTo("Morris");
        assertThat(carDto.getSeatCount()).isEqualTo(5);
        assertThat(carDto.getType()).isEqualTo("SEDAN");
    }
}
```

## 定义映射器

在本节中，你将学习如何使用 MapStruct 定义一个 Bean 映射器，以及可以选择的选项。

### 基本映射

要创建一个映射器，只需定义一个 Java 接口，其中包含所需的映射方法，并用 `org.mapstruct.Mapper` 注解进行标记。

```java
@Mapper
public interface CarMapper {
    CarMapper INSTANCE = Mappers.getMapper(CarMapper.class);

    @Mapping(source = "numberOfSeats", target = "seatCount")
    CarDto carToCarDto(Car car);
}
```

`@Mapper` 注解会在构建过程中让 MapStruct 代码生成器生成 `CarMapper` 接口的实现代码。

在生成的方法实现中，会将源类型（例如，`Car`）中的所有可读属性复制到目标类型（例如，`CarDto`）的相应属性中：

- 当属性与目标实体的属性具有相同的名称时，它们将自动进行映射；
- 如果目标实体中的属性名称与源属性不同，你可以使用 `@Mapping` 注解来指定它们之间的映射关系；

为了更好地理解 MapStruct 的工作原理，请查看以下由 MapStruct 生成的 `carToCarDto()` 方法的实现：

```java
public class CarMapperImpl implements CarMapper {

    @Override
    public CarDto carToCarDto(Car car) {
        if ( car == null ) {
            return null;
        }

        CarDto carDto = new CarDto();

        carDto.setSeatCount( car.getNumberOfSeats() );
        carDto.setMake( car.getMake() );
        if ( car.getType() != null ) {
            carDto.setType( car.getType().name() );
        }

        return carDto;
    }
}
```

MapStruct 的基本原理是生成看起来尽可能像是你亲手编写的代码。特别是这意味着这些值是通过普通的 getter/setter 调用从源复制到目标，而不是通过反射或类似的方式。

### 向映射器中添加自定义方法

在某些情况下，可能需要手动实现一个从一种类型到另一种类型的特定映射，而这种映射是 MapStruct 无法生成的。处理这个问题的一种方法是在另一个类上实现自定义方法，然后由 MapStruct 生成的映射器使用该方法。或者，在使用 Java 8 或更高版本时，你可以**直接在映射器接口中实现自定义方法作为默认方法**。如果参数和返回类型匹配的话，生成的代码将调用这些默认方法。

举个栗子，假设从 `Person` 到 `PersonDto` 的映射需要一些特殊逻辑，而这些特殊逻辑无法由 MapStruct 自动生成。然后，你可以像这样定义上一个示例中的映射器：

```java
@Mapper
public interface CarMapper {
    CarMapper INSTANCE = Mappers.getMapper(CarMapper.class);

    @Mapping(source = "numberOfSeats", target = "seatCount")
    CarDto carToCarDto(Car car);
    
    default PersonDto personToPersonDto(Person person) {
        //hand-written mapping logic
    }
}
```

在 `carToCarDto()` 方法中，MapStruct 会自动调用你手动实现的 `personToPersonDto()` 方法，以确保 `driver` 属性得到正确的映射。

### 使用抽象类代替接口

当你定义一个映射器时，你可以**选择使用抽象类代替接口**。使用抽象类后，你**可以在映射器中直接编写自定义方法，并且还可以在映射器中声明额外的字段**。MapStruct 会自动生成一个扩展了你的抽象类的实现类，其中包含了所有必需的映射方法的实现。这样，你既可以在抽象类中编写自定义逻辑，又可以充分利用 MapStruct 的自动生成功能。与使用默认方法（在接口中声明的方法）相比，它允许你在映射器中添加额外的字段，这些字段可以在映射过程中使用。

可以将上面的栗子改成如下所示：

```java
@Mapper
public abstract class CarMapper {

    @Mapping(...)
    ...
    public abstract CarDto carToCarDto(Car car);

    public PersonDto personToPersonDto(Person person) {
        //hand-written mapping logic
    }
}
```

MapStruct 将生成一个 `CarMapper` 的子类，并且该子类重写了 `carToCarDto()` 抽象方法。在生成的 `carToCarDto()` 方法中，当映射 `driver` 属性时，它将调用手动实现的 `personToPersonDto()` 方法。这意味着 MapStruct 会自动生成 `carToCarDto()` 方法的实现，同时调用手动实现的 `personToPersonDto()` 方法来处理 `driver` 属性的映射。

### 多来源参数的映射方法

<span style="background-color: rgb(251, 228, 231);">TODO</span>

## 与 Lombok 一起使用

MapStruct 从 1.2.0.Beta1 版本开始可以与 Lombok 1.16.14 及更高版本一起使用。MapStruct 会自动利用 Lombok 生成的 getter、setter 方法和构造函数，并在生成映射器时使用它们，从而减少手动编写代码的工作，让你的代码更简洁和易于维护，这两个工具的组合可以极大地提高开发效率。

Lombok 在 1.18.16 版本中引入了一个重大变化，需要添加一个额外的注解处理器 `lombok-mapstruct-binding`（适用于 Maven 项目），否则的话 MapStruct 将无法与 Lombok 一起正常工作。这个注解处理器的作用是用来解决 Lombok 和 MapStruct 模块之间的编译问题。通过添加它，可以确保 Lombok 和 MapStruct 在项目中协同工作，并避免潜在的编译问题。

完整配置如下所示：

```xml
<properties>
    <org.mapstruct.version>1.5.5.Final</org.mapstruct.version>
    <org.projectlombok.version>1.18.16</org.projectlombok.version>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
</properties>

<dependencies>
    <dependency>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct</artifactId>
        <version>${org.mapstruct.version}</version>
    </dependency>

    <!-- lombok dependency should not end up on classpath -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>${org.projectlombok.version}</version>
        <scope>provided</scope>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.mapstruct</groupId>
                        <artifactId>mapstruct-processor</artifactId>
                        <version>${org.mapstruct.version}</version>
                    </path>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                        <version>${org.projectlombok.version}</version>
                    </path>

                    <!-- additional annotation processor required as of Lombok 1.18.16 -->
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok-mapstruct-binding</artifactId>
                        <version>0.2.0</version>
                    </path>
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins>
</build>
```
