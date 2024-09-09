# IntelliJ IDEA

## 快捷键

1. 显示快速修复（可用于生成变量、重构代码）：Alt + Enter
2. 将当前行移动到上一行或者下一行：Shift + Alt + ⬆ / Shift + Alt + ⬇
3. 复制当前行：Ctrl + D
4. 删除当前行：Ctrl + Y
5. 继承体系结构：Ctrl + H
6. 查看类中的方法：Ctrl + F12
7. 全局搜索：Shift + Shift
8. 全局替换：Ctrl + Shift + R
9. 生成构造方法、getter\setter方法、重写方法：Alt + Insert
10. 重命名：Shift + F6
11. 代码格式化：Ctrl + Alt + L
12. 调试时计算变量/方法返回值：Alt + F8
13. 上一步：Ctrl + Alt + ⬅
14. 下一步：Ctrl + Alt + ➡
15. 转到方法/接口具体实现，可跳过接口：Ctrl + Alt + B
16. 前往方法/接口/变量的定义处：Ctrl + B，等价于 Ctrl + 鼠标左键
17. 最近的文件：Ctrl + E
18. 包围方式：Ctrl + Alt + T
19. 大小写转换：Ctrl + Shift + U
20. 折叠：Ctrl + NumPad-
21. 展开：Ctrl + NumPad+
22. 显示图弹出层：Ctrl + Alt + U

## 配置

### 如何隐藏不想看到的文件夹或者文件？

File ➡ settings ➡ Editor ➡ File Types ➡ Ignore Files and Folders，配置不想看到的文件夹或者文件。<br />![](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041718338.png)

如果配置无误还能看到文件夹或者文件的话，请确保没有勾选显示排除的文件选项，如果勾选了的话取消勾选即可！<br />![](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041723979.png)

### 以 TODO 为例添加自定义的实时模板

设置 ➡ 编辑器 ➡ 实时模板，先创建一个属于自己的分组，组名可以根据自己的喜欢取；<br />![img](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041706690.png)在创建的分组下新建一个模板，以 <span style="background-color: rgb(251, 228, 231);">TODO</span> 为例，步骤如下所示：

1. 先右键选中新创建的分组，然后点击 + 号选择实时模板；<br />![img](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041707518.png)

2. 填写模板信息，缩写，描述信息，模板文本，以及编辑模板文本中涉及到的变量，最后选择该模板应用于 Java 环境；<br />![img](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041707094.png)

3. 设置 ➡ 编辑器 ➡ TODO，先创建一个模式，按照如下方式进行填写；<br />![img](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041707324.png)

4. 添加一个筛选器，名称任意，模式选择上面新建的，最后点击确定退出设置；<br />![img](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041708909.png)

5. 打开 TODO 窗口，选中咱们新建的筛选器，这样就只会显示出咱们添加的 TODO，把其他人或其他引入的第三方项目中的 TODO 给过滤掉！<br />![image.png](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308041708006.png)

### 设置文件的行分隔符为 LF

文件 ➡ 设置 ➡ 编辑器 ➡ 代码样式 ➡ 行分隔符。<br />![image-20240522203342601](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202405222033731.png)

## 插件

- 使用 IDE 内置插件系统安装（推荐）
  - **Preferences(Settings)** ➡️ **Plugins** ➡️ **Marketplace** ➡️ 搜索插件名称 ➡️ 点击 **Install** 按钮进行安装；
- 手动安装
  - 到 [JetBrains Marketplace](https://plugins.jetbrains.com/) 上下载与你的 IDE 兼容的最新版本的插件包；
  - **Preferences(Settings)** > **Plugins** > ⚙ > **从磁盘安装插件...** > 选择插件包并安装（无需解压）

安装好后重新启动 **IDE** 即可。

### Translation

插件地址：[Translation - IntelliJ IDEs Plugin | Marketplace (jetbrains.com)](https://plugins.jetbrains.com/plugin/8579-translation)

官方文档地址：[TranslationPlugin ❤️ Yii.Guxing (yiiguxing.github.io)](https://yiiguxing.github.io/TranslationPlugin/#/)

> TranslationPlugin 是一个基于 IntelliJ IDE/Android Studio 的翻译插件。它集成了<u>谷歌翻译</u>、<u>微软翻译</u>、<u>DeepL 翻译</u>、<u>有道翻译</u>、<u>百度翻译</u>等众多翻译引擎，在你的 IDE 内随时对想要翻译的文本、代码注释、代码文档等进行翻译

大多数翻译服务都需要注册账号才能访问他们的服务（如：OpenAI、DeepL、有道翻译等）。因此您可能需要注册一个帐号，并获取其**认证密钥**， 然后在插件内绑定**认证密钥**：**Preferences(Settings)** ➡️ **Tools** ➡️ **Translation** ➡️ **常规** ➡️ **翻译引擎** ➡️  **配置...**

以**有道翻译**为例，登陆控制台 ➡️ 应用总览 ➡️ 创建应用 ➡️ 填写相关信息（如应用名称：IntelliJ IDEA Translation，选择服务：文本翻译和文档翻译，接入方式选择：API，应用类别：实用工具） ➡️ 确定。 <br />![image-20230821210629353](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308212106442.png)

![image-20230821204858627](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308212048685.png)

复制应用 ID 以及密钥信息，如下所示：<br />![image-20230821205230332](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308212052416.png)

### LeetCode Editor

插件地址：[LeetCode Editor - IntelliJ IDEs Plugin | Marketplace (jetbrains.com)](https://plugins.jetbrains.com/plugin/12132-leetcode-editor)

官方文档地址：[leetcode-editor/README_ZH.md at master · shuzijun/leetcode-editor (github.com)](https://github.com/shuzijun/leetcode-editor/blob/master/README_ZH.md)

文档已经详细介绍了插件的使用方法，借鉴官方的自定义代码生成配置，一步步摸索完善，如下所示：<br />![image-20230827100950224](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308271009333.png)

- CodeFileName

  ```
  $!velocityTool.camelCaseName(${question.titleSlug})_${question.frontendQuestionId}
  ```

- TemplateConstant

  ```
  package fun.xiaorang.leetcode.editor.cn;
  
  /**
   * @author liulei
   * @description <a href="https://leetcode.cn/problems/${question.titleSlug}/" style="font-weight:bold;font-size:11px;">LeetCode.${question.frontendQuestionId}.${question.title}<a/>
   * @github <a href="https://github.com/xihuanxiaorang/java-study">java-study</a>
   * @Copyright 博客：<a href="https://docs.xiaorang.fun">小让の码场</a>  - show me the code
   * @date $!velocityTool.date()
   */
  public class $!velocityTool.camelCaseName(${question.titleSlug})_${question.frontendQuestionId} {
    public static void main(String[] args) {
         Solution solution = new $!velocityTool.camelCaseName(${question.titleSlug})_${question.frontendQuestionId}().new Solution();
    }
    
    ${question.code}
  }
  ```

## Tips✨

### 快速生成测试类

对某个类快速生成测试类：选中需要生成测试代码的类 ➡ 右键 ➡ Go To ➡ Test ➡ Create New Test。<br />![](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404031625987.png)

## 激活🚀

1. 访问 [JETBRA.IN CHECKER | IPFS](https://3.jetbra.in/) 网站，选择一个在线的节点进入，如下所示：<br />![image-20240907181203506](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071812676.png)
2. 下载 & 解压 jetbra.zip <br />![image-20240907181348206](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071813297.png)
3. 双击运行 `scripts` 文件夹中的 `install-current-user.vbs` 程序，如下所示：<br />![image-20240907182002635](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071820697.png)
4. 然后回到刚才的网站，点击对应软件的图标复制激活码，将其粘贴到要激活软件的激活码处。<br />![image-20240907182607887](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071826975.png)

