# Grid 网格布局

## 介绍

CSS Grid 布局（简称 “Grid” 或 “CSS Grid”）是一种基于二维网格的布局系统，与以往任何一种网页布局系统相比，它彻底改变了我们设计用户界面的方式。CSS 一直被用于布局我们的网页，但一直以来它在这方面做得并不出色。最初，我们使用表格进行布局，然后是浮动、定位以及内联块，但这些方法本质上都是变通方案，并且缺少许多重要的功能（例如垂直居中）。

要开始<strong style="color:#ae3520;">使用网格布局，你需要将一个容器元素定义为网格，使用 [`display: grid`](#display)；然后使用 [`grid-template-columns`](#grid-template-columns-grid-template-rows) 和 [`grid-template-rows`](#grid-template-columns-grid-template-rows) 设置列和行的大小；接着使用 [`grid-column`](#grid-column) 和 [`grid-row`](#grid-row) 将其子元素放置到网格中</strong>。与 Flexbox 类似，网格项的源顺序无关紧要。你的 CSS 可以按任意顺序放置它们，这使得使用媒体查询重新排列网格变得非常容易。想象一下，仅用几行 CSS 代码就能定义整个页面的布局，并完全重新排列它以适应不同的屏幕宽度。

Flexbox 也是一种非常出色的布局工具，但它的单向流布局适用于不同的场景——实际上，Grid 和 Flexbox 可以很好地协同工作！Grid 是第一个专门为解决我们长期以来一直用变通方法处理的布局问题而创建的 CSS 模块，Grid 是迄今为止引入的最强大的 CSS 模块之一。

## 重要概念

在深入探讨 CSS Grid 的概念之前，重要的是先理解相关的术语。由于这些术语在概念上都比较相似，如果不首先记住它们在 Grid 规范中的定义，很容易将它们混淆。但不用担心，术语并不多。

### Grid Container<span style="font-size:13px;color:#909399;"> - 网格容器</span>

应用 `display: grid` 或 `display: inline-grid` 的元素，它是所有网格项目的直接父级。在这个例子中，`container` 是网格容器。

::: code-group

```html
<div class="container">
    <div class="item item-1"> </div>
    <div class="item item-2"> </div>
    <div class="item item-3"> </div>
</div>
```

```css
.container {
	display: grid;
}
```

:::

### Grid Item<span style="font-size:13px;color:#909399;"> - 网格项</span>

网格容器的直接子元素。这里的 `item` 元素是网格项，但 `sub-item` 不是。

::: code-group

```html
<div class="container">
    <div class="item"> </div>
    <div class="item">
        <p class="sub-item"> </p>
    </div>
    <div class="item"> </div>
</div>
```

```css
.container {
	display: grid;
}
```

:::

### Grid Line<span style="font-size:13px;color:#909399;"> - 网格线</span>

构成网格结构的分割线。它们可以是垂直的（“列网格线”）或水平的（“行网格线”），并且位于行或列的两侧。这里的黄色线就是一个列网格线的例子。<br />![lines](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022226184.svg)

### Grid Cell<span style="font-size:13px;color:#909399;"> - 网格单元格</span>

两行相邻的行网格线和两列相邻的列网格线之间的空间。它是网格的一个单一“单位”。这里是指位于第 1 行和第 2 行网格线之间，以及第 3 列和第 4 列网格线之间的网格单元。<br />![cell](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022229424.svg)

### Grid Track<span style="font-size:13px;color:#909399;"> - 网格轨道</span>

两条相邻网格线之间的空间。你可以将它们视为网格的**列**或**行**。这里是指第二条和第三条列网格线之间的网格轨道。<br />![track](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022230723.svg)

### Grid Area<span style="font-size:13px;color:#909399;"> - 网格区域</span>

由四条网格线定义的矩形区域。一个网格区域可以由一个或多个网格单元(格)组成。这里是指第 1 行和第 3 行网格线之间，以及第 2 列和第 4 列网格线之间的网格区域。<br />![area](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022232439.svg)

### Grid Gutter<span style="font-size:13px;color:#909399;"> - 网格间距</span>

轨道之间的间隙，也就是两条相邻网格线之间的空白区域。这里是指第 2 列和第 3 列网格线之间的空白区域。<br />![gutter](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022242360.svg)

## 网格容器属性

### display

用途：**将元素定义为一个网格容器**，并为其内容建立一个新的网格格式化上下文。

值：

- `grid` – 创建一个块级网格容器；
- `inline-grid` – 创建一个内联级网格容器；

```css
.container {
    display: grid | inline-grid;
}
```

举个栗子：

::: code-group

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>块级网格容器</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </body>
</html>
```

```css {19}
* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
}

.container {
    width: 300px;
    height: 300px;
    border: solid 5px silver;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
}

.container div {
    background: blueviolet;
    background-clip: content-box;
    padding: 10px;
    border: 1px solid blueviolet;
    box-sizing: border-box;
    color: white;
    font-size: 25px;
}
```

:::

实现效果如下所示：<br />![image-20240902231056768](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022310815.png)

### grid-template-columns & grid-template-rows

使用由空格分隔的值列表来定义网格的列和行。这些值代表轨道的大小，它们之间的空格代表网格线。

值：

- `<track-size>` - 可以是一个固定的长度（例如`100px`）、一个百分比（相对于容器宽度的百分比，例如`50%`），或者使用`fr`单位表示的自由空间的一部分。`fr`单位代表“fraction”的缩写，表示可用空间的一个分数单位。例如，`1fr`意味着轨道将占据剩余空间的一等分。
- `<line-name>` – 可以给网格线指定任意名称，这对于复杂布局特别有用，因为可以通过名字来引用这些线。

```css
.container {
    grid-template-columns: ...  ...;
    /* e.g. 
    1fr 1fr
    minmax(10px, 1fr) 3fr
    repeat(5, 1fr)
    50px auto 100px 1fr
    */
    grid-template-rows: ... ...;
    /* e.g. 
    min-content 1fr min-content
    100px 1fr max-content
    */
}
```

网格线会自动被分配正数编号（-1 作为最后一行的另一种表示）。

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022334081.svg" alt="img" style="width: 50%" />

但你可以选择显式地命名这些线。注意线名字的括号语法：

```css
.container {
    grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
    grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409022336938.svg" alt="Grid with user named lines" style="width: 50%" />

> [!note]
>
> 一条线可以有多个名字。例如，在这里，第二条线将有两个名字：`row1-end` 和 `row2-start`。
>
> ```css
> .container {
>     grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
> }
> ```

如果你的定义中包含重复的部分，你可以使用 `repeat()` 语法来简化定义：

```css
.container {
    grid-template-columns: repeat(3, 20px [col-start]);
}
```

等价于如下定义：

```css
.container {
    grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```

如果多条线共享同一个名字，它们可以通过它们的线名字和计数来引用。

```css
.item {
    grid-column-start: col-start 2;
}
```

`fr` 单位允许你将轨道的大小设置为网格容器中可用空间的一个分数。例如，这将把每个项目设置为网格容器宽度的三分之一：

```css
.container {
    grid-template-columns: 1fr 1fr 1fr;
}
```

可用空间是在计算了所有非弹性项目之后得出的。在这个例子中，`fr` 单位可用的总空间不包括50像素：

```css
.container {
    grid-template-columns: 1fr 50px 1fr 1fr;
}
```

### grid-template-areas

通过引用 [`grid-area`](#grid-area) 属性指定的网格区域名称来定义网格模板。重复一个网格区域的名称会使内容跨越这些单元格。一个句点（`.`）表示一个空单元格。该语法本身提供了网格结构的可视化。

- `<grid-area-name>` – 使用 `grid-area` 指定的网格区域名称；
- `.` – 一个句点表示一个空的网格单元格；
- `none` – 不定义任何网格区域；

```css
.container {
    grid-template-areas: 
        "<grid-area-name> | . | none | ..."
        "...";
}
```

举个栗子：

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 50px);
    grid-template-rows: auto;
    grid-template-areas: 
        "header header header header"
        "main main . sidebar"
        "footer footer footer footer";
}

.item-a {
    grid-area: header;
}
.item-b {
    grid-area: main;
}
.item-c {
    grid-area: sidebar;
}
.item-d {
    grid-area: footer;
}
```

这将创建一个四列三行的网格。整个顶部行将由 `header` 区域组成。中间行将由两个 `main` 区域、一个空单元格和一个 `sidebar` 区域组成。最后一行全部是 `footer` 区域。<br /><img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409031349143.svg" alt="Example of grid-template-areas" style="width: 50%" />

在你的声明中，每一行需要有相同数量的单元格。

你<strong style="color:#ae3520;">可以使用任意数量的相邻句点来声明一个单个的空单元格。只要句点之间没有空格，它们就代表一个单个的单元格</strong>。

> [!note]
>
> <strong style="color:#ae3520;">使用这种语法时你并不是在命名线，而是在命名区域</strong>。当你<strong style="color:#ae3520;">使用这种语法时，区域两端的线实际上是自动被命名的</strong>。如果你的网格区域名称是 `foo`，那么该区域的起始行线和起始列线的名称将是 `foo-start`，而其最后一行线和最后一列线的名称将是 `foo-end`。这意味着某些线可能有多个名字，例如上面示例中最左边的线，它将有三个名字：`header-start`、`main-start` 和 `footer-start`。

### grid-template

使用简写形式可以在单个声明中同时设置 [`grid-template-rows`](#grid-template-columns-grid-template-rows)、[`grid-template-columns`](#grid-template-columns-grid-template-rows) 和 [`grid-template-areas`](#grid-template-areas)。

值：

- `none` – 将这三个属性设置为它们的初始值。
- `<grid-template-rows> / <grid-template-columns>` – 分别将[`grid-template-columns`](#grid-template-columns-grid-template-rows) 和 [`grid-template-rows`](#grid-template-columns-grid-template-rows) 设置为指定的值，并将 [`grid-template-areas`](#grid-template-areas) 设置为 `none`。

```css
.container {
    grid-template: none | <grid-template-rows> / <grid-template-columns>;
}
```

它还接受一种更为复杂但非常实用的语法来同时指定这三个属性。以下是一个示例：

```css
.container {
    grid-template:
        [row1-start] "header header header" 25px [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
```

等价于：

```css
.container {
    grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
    grid-template-columns: auto 50px auto;
    grid-template-areas: 
        "header header header" 
        "footer footer footer";
}
```

由于 `grid-template` 不会重置隐式网格属性（[`grid-auto-columns`](#grid-auto-columns)、[`grid-auto-rows`](#grid-auto-rows) 和 [`grid-auto-flow`](#grid-auto-flow)），而这可能是你在大多数情况下想要做的，因此建议使用 [`grid`](#grid) 属性而不是 `grid-template`。

### column-gap & row-gap & grid-column-gap & grid-row-gap

设置列/行之间的间隙（gutter）的宽度。

值：

- `<line-size>` – 一个长度值；

```css
.container {
    /* standard */
    column-gap: <line-size>;
    row-gap: <line-size>;

    /* old */
    grid-column-gap: <line-size>;
    grid-row-gap: <line-size>;
}
```

举个栗子：

```css
.container {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px; 
    column-gap: 10px;
    row-gap: 15px;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409032301628.svg" alt="Example of grid-column-gap and grid-row-gap" style="width: 50%" />

间隙只会在列/行之间创建，不会出现在外部边缘。

> [!note]
>
> `grid-` 前缀将被移除，并且 `grid-column-gap` 和 `grid-row-gap` 将被重命名为 `column-gap` 和 `row-gap`。无前缀的属性已经在 Chrome 68+、Safari 11.2 Release 50+ 和 Opera 54+ 中得到支持。

### gap & grid-gap

`gap` 属性是一个简写属性，用于同时设置 [`row-gap` 和 `column-gap`](#column-gap-row-gap-grid-column-gap-grid-row-gap)。

值：

- `<grid-row-gap> <grid-column-gap>` – 长度值；

```css
.container {
    /* standard */
    gap: <grid-row-gap> <grid-column-gap>;

    /* old */
    grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

举个栗子：

```css
.container {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px; 
    gap: 15px 10px;
}
```

如果只提供一个值，那么这个值将同时应用于行间隙和列间隙。如果提供两个值，第一个值应用于行间隙，第二个值应用于列间隙。如果未指定行间隙，它将默认为列间隙的值。

> [!note]
>
> `grid-` 前缀已被废弃（但谁知道呢，可能永远不会真正从浏览器中移除）。实际上，`grid-gap` 已重命名为 `gap`。无前缀的属性已经在 Chrome 68+、Safari 11.2 Release 50+ 和 Opera 54+ 中得到支持。

### justify-items

用于沿着行的方向（水平方向）对齐网格项。它决定了网格项在每个单元格内的水平对齐方式。此属性针对容器内的所有网格项。

值：

- `start`：将网格项对齐到单元格的起始边缘（靠左对齐）。
- `end`：将网格项对齐到单元格的结束边缘（靠右对齐）。
- `center`：将网格项在单元格内居中对齐。
- `stretch`：将网格项填充到整个单元格的宽度，默认行为。

```css
.container {
    justify-items: start | end | center | stretch;
}
```

举个栗子：

```css
.container {
    justify-items: start;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041150533.svg" alt="Example of justify-items set to start" style="width: 50%" />

```css
.container {
    justify-items: end;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041150110.svg" alt="Example of justify-items set to end" style="width: 50%" />

```css
.container {
    justify-items: center;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041150915.svg" alt="Example of justify-items set to center" style="width: 50%" />

```css
.container {
    justify-items: stretch;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041150968.svg" alt="Example of justify-items set to stretch" style="width: 50%" />

这种行为也可以通过 [`justify-self`](#justify-self) 属性单独设置在每个网格项上。

### align-items

用于沿着列的方向（垂直方向）对齐网格项。它决定了网格项在每个单元格内的垂直对齐方式。此属性针对容器内的所有网格项。

值：

- `stretch`：将网格项填充到整个单元格的高度，默认行为。
- `start`：将网格项对齐到单元格的起始边缘（顶部对齐）。
- `end`：将网格项对齐到单元格的结束边缘（底部对齐）。
- `center`：将网格项将在单元格内居中对齐。
- `baseline`：将网格项沿文本基线对齐。如果有多个文本行，可以使用 `first baseline` 或 `last baseline` 来指定沿第一行或最后一行的基线对齐。

```css
.container {
    align-items: start | end | center | stretch;
}
```

举个栗子：

```css
.container {
    align-items: start;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041210986.svg" alt="Example of align-items set to start" style="width: 50%" />

```css
.container {
    align-items: end;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041211934.svg" alt="Example of align-items set to end" style="width: 50%" />

```css
.container {
    align-items: center;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041211705.svg" alt="Example of align-items set to center" style="width: 50%" />

```css
.container {
    align-items: stretch;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409041212233.svg" alt="Example of align-items set to stretch" style="width: 50%" />

[`align-self`](#align-self) 属性用于单独控制每个网格项在单元格内的垂直对齐方式。这与 `align-items` 类似，但 [`align-self`](#align-self) 是针对单个网格项的。

### place-items

`place-items` 属性允许你在单个声明中同时控制网格项在单元格内的垂直对齐（`align-items`）和水平对齐（`justify-items`）。

值：

- `<align-items> / <justify-items>` – 第一个值设置 `align-items`（垂直对齐），第二个值设置 `justify-items`（水平对齐）。如果省略了第二个值，则第一个值将同时分配给 `align-items` 和 `justify-items`。

```css
.center {
    display: grid;
    place-items: center;
}
```

### justify-content

有时候，你的网格总大小可能会小于其网格容器的大小。这种情况通常发生在所有网格项都是用非弹性单位（如像素 `px`）来设置尺寸的时候。在这种情况下，你可以设置网格在网格容器内的对齐方式。此属性沿着内联（行）轴对齐网格（与 [`align-content`](#align-content) 沿着块（列）轴对齐相反）。

值：

- `start` – 将网格对齐到网格容器的起始边缘（靠左对齐）。
- `end` – 将网格对齐到网格容器的结束边缘（靠右对齐）。
- `center` – 将网格居中对齐在网格容器内。
- `stretch` – 调整网格项的大小，以使网格填满网格容器的整个宽度。
- `space-around` – 在每个网格项之间放置等量的空间，并在两端放置一半大小的空间。
- `space-between` – 在每个网格项之间放置等量的空间，在两端不留空间。
- `space-evenly` – 在每个网格项之间放置等量的空间，包括两端。

```css
.container {
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
```

举个栗子：

```css
.container {
    justify-content: start;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042236187.svg" alt="Example of justify-content set to start" style="width: 50%" />

```css
.container {
    justify-content: end;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042237467.svg" alt="Example of justify-content set to end" style="width: 50%" />

```css
.container {
    justify-content: center;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042237859.svg" alt="Example of justify-content set to center" style="width: 50%" />

```css
.container {
    justify-content: stretch;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042238723.svg" alt="Example of justify-content set to stretch" style="width: 50%" />

```css
.container {
    justify-content: space-around;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042238705.svg" alt="Example of justify-content set to space-around" style="width: 50%" />

```css
.container {
    justify-content: space-between;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042238268.svg" alt="Example of justify-content set to space-between" style="width: 50%" />

```css
.container {
    justify-content: space-evenly;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409042239127.svg" alt="Example of justify-content set to space-evenly" style="width: 50%" />

### align-content

有时候，你的网格总大小可能会小于其网格容器的大小。这种情况通常发生在所有网格项都是用非弹性单位（如像素 `px`）来设置尺寸的时候。在这种情况下，你可以设置网格在网格容器内的对齐方式。此属性沿着块（列）轴对齐网格（与 [`justify-content`](#justify-content) 沿着内联（行）轴对齐相反）。

值：

- `start` – 把网格靠顶部对齐。
- `end` – 把网格靠底部对齐。
- `center` – 把网格居中对齐。
- `stretch` – 调整网格项的大小，以使网格填满整个容器的高度。
- `space-around` – 在每个网格项之间放置等量的空间，并在两端放置一半大小的空间。
- `space-between` – 在每个网格项之间放置等量的空间，在两端不留空间。
- `space-evenly` – 在每个网格项之间放置等量的空间，包括两端。

```css
.container {
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
```

举个栗子：

```css
.container {
    align-content: start;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050849582.svg" alt="Example of align-content set to start" style="width: 50%" />

```css
.container {
    align-content: end;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050847501.svg" alt="Example of align-content set to end" style="width: 50%" />

```css
.container {
    align-content: center;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050847565.svg" alt="Example of align-content set to center" style="width: 50%" />

```css
.container {
    align-content: stretch;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050847648.svg" alt="Example of align-content set to stretch" style="width: 50%" />

```css
.container {
    align-content: space-around;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050848527.svg" alt="Example of align-content set to space-around" style="width: 50%" />

```css
.container {
    align-content: space-between;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050848569.svg" alt="Example of align-content set to space-between" style="width: 50%" />

```css
.container {
    align-content: space-evenly;    
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050848578.svg" alt="Example of align-content set to space-evenly" style="width: 50%" />

### place-content

`place-content` 属性允许你在单个声明中同时控制网格在容器内的垂直对齐（[`align-content`](#align-content)）和水平对齐（[`justify-content`](#justify-content)）。

值：

- `<align-content> / <justify-content>` – 第一个值设置 `align-content`（垂直对齐），第二个值设置 `justify-content`（水平对齐）。如果省略了第二个值，则第一个值将同时分配给 `align-content` 和 `justify-content`。

除 Edge 之外，所有主流浏览器都支持 `place-content` 简写属性。

### grid-auto-columns & grid-auto-rows

指定任何自动生成的网格轨道（也称为隐式网格轨道）的大小。当网格中的网格项多于单元格，或者当网格项放置在显式网格之外时，将创建隐式轨道。（请参阅[显式网格和隐式网格之间的区别](https://css-tricks.com/difference-explicit-implicit-grids/)）。

值：

- `<track-size>` – 可以是长度值（如 `px`、`em`）、百分比值（如 `%`），或者是自由空间的一部分（使用 `fr` 单位）。

```css
.container {
    grid-auto-columns: <track-size> ...;
    grid-auto-rows: <track-size> ...;
}
```

为了说明隐式网格轨道是如何生成的？请考虑以下情况：

```css
.container {
    grid-template-columns: 60px 60px;
    grid-template-rows: 90px 90px;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050848546.svg" alt="Example of 2x2 grid" style="width: 50%" />

这将创建一个 2 x 2 网格。 

但是现在想象一下你使用 [`grid-column`](#grid-column) 和 [`grid-row`](#grid-row) 来定位你的网格项，如下所示：

```css
.item-a {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
.item-b {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050849465.svg" alt="Example of implicit tracks" style="width: 50%" />

我们说过了 .item-b 从第 5 列开始，到第 6 列结束，但我们从未定义过第 5 列和第 6 列。因为我们引用了不存在的线，所以会创建宽度为 0 的隐式轨道来填充间隙。我们可以使用 [`grid-auto-columns`](#grid-auto-columns-grid-auto-rows) 和 [`grid-auto-rows`](#grid-auto-columns-grid-auto-rows) 来指定这些隐式轨道的宽度：

```css
.container {
    grid-auto-columns: 60px;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050849211.svg" alt="grid-auto-columns-rows" style="width: 50%" />

### grid-auto-flow

如果你有未明确放置在网格上的网格项，自动放置算法将会启动以自动放置这些网格项。此属性用于控制自动放置算法的工作方式。

值：

- `row` – 告诉自动放置算法逐行填充，必要时添加新行（默认）。
- `column` – 告诉自动放置算法逐列填充，必要时添加新列。
- `dense` – 告诉自动放置算法尽可能地填充网格中的空洞，如果后面出现较小的网格项，则会将其放置在前面的空洞中。

```css
.container {
    grid-auto-flow: row | column | row dense | column dense;
}
```

> [!note]
>
> 使用 `dense` 选项只会改变网格项的视觉顺序，但不会改变在 DOM 中的实际顺序。这可能会导致网格项在视觉上看起来是无序的，这对可访问性不利。

举个栗子：

```html
<section class="container">
    <div class="item-a">item-a</div>
    <div class="item-b">item-b</div>
    <div class="item-c">item-c</div>
    <div class="item-d">item-d</div>
    <div class="item-e">item-e</div>
</section>
```

定义了一个具有五列和两行的网格，并设置了 `grid-auto-flow` 为 `row`（这也是默认值）。

```css
.container {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px 60px;
    grid-template-rows: 30px 30px;
    grid-auto-flow: row;
}
```

将网格项放置在网格上时，只显式指定了两个网格项的位置，其余的网格项将由自动放置算法来处理。

```css
.item-a {
    grid-column: 1;
    grid-row: 1 / 3;
}
.item-e {
    grid-column: 5;
    grid-row: 1 / 3;
}
```

由于我们设置了 `grid-auto-flow` 为 `row`，我们的网格将会像这样显示。注意观察那三个我们没有放置的项（`item-b`、`item-c` 和 `item-d`）是如何逐行填充可用的行的：

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050849699.svg" alt="Example of grid-auto-flow set to row" style="width: 50%" />

如果我们将 `grid-auto-flow` 改为 `column`，那么 `item-b`、`item-c` 和 `item-d` 将会按列向下填充：

```css
.container {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px 60px;
    grid-template-rows: 30px 30px;
    grid-auto-flow: column;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409050849030.svg" alt="Example of grid-auto-flow set to column" style="width: 50%" />

### grid

`grid` 简写属性可以让你在单个声明中同时设置多个与网格相关的属性：[`grid-template-rows`](#grid-template-columns-grid-template-rows)、[`grid-template-columns`](#grid-template-columns-grid-template-rows)、[`grid-template-areas`](#grid-template-areas)、[`grid-auto-rows`](#grid-auto-columns-grid-auto-rows)、[`grid-auto-columns`](#grid-auto-columns-grid-auto-rows) 和 [`grid-auto-flow`](#grid-auto-flow)（注意：你只能在单个网格声明中指定显式或隐式网格属性）。

值：

- `none` – 将所有子属性设置为其初始值。
- `<grid-template>` – 与 [`grid-template`](#grid-template) 简写属性相同。
- `<grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?` – 设置 [`grid-template-rows`](#grid-template-columns-grid-template-rows)为指定的值。如果 `/` 后面有 `auto-flow` 关键字，则设置 [`grid-auto-flow`](#grid-auto-flow) 为 `column`。如果另外指定了 `dense` 关键字，则自动放置算法使用“密集”打包算法。如果省略了 [`grid-template-columns`](#grid-template-columns-grid-template-rows)，则将其设置为 `auto`。
- `[ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>` – 设置 [`grid-template-columns`](#grid-template-columns-grid-template-rows) 为指定的值。如果 `/` 前面有 `auto-flow` 关键字，则设置 [`grid-auto-flow`](#grid-auto-flow) 为 `row`。如果另外指定了 `dense` 关键字，则自动放置算法使用“密集”打包算法。如果省略了 [`grid-template-rows`](#grid-template-columns-grid-template-rows)，则将其设置为 `auto`。

举个栗子：

以下两个代码块是等价的：

```css
.container {
    grid: 100px 300px / 3fr 1fr;
}

.container {
    grid-template-rows: 100px 300px;
    grid-template-columns: 3fr 1fr;
}
```

以下两个代码块是等价的：

```css
.container {
    grid: auto-flow / 200px 1fr;
}

.container {
    grid-auto-flow: row;
    grid-template-columns: 200px 1fr;
}
```

以下两个代码块是等价的：

```css
.container {
    grid: auto-flow dense 100px / 1fr 2fr;
}

.container {
    grid-auto-flow: row dense;
    grid-auto-rows: 100px;
    grid-template-columns: 1fr 2fr;
}
```

以下两个代码块是等价的：

```css
.container {
    grid: 100px 300px / auto-flow 200px;
}

.container {
    grid-template-rows: 100px 300px;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
}
```

它还接受一种更复杂但非常实用的语法，可以一次性设置所有属性。你指定 `grid-template-areas`、`grid-template-rows` 和 `grid-template-columns`，而所有其他的子属性则设置为它们的初始值。你所做的是将网格线名和轨道大小与它们各自的网格区域一起内联指定。用一个例子来说明是最容易理解的：

```css
.container {
    grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
```

等价于：

```css
.container {
    grid-template-areas: 
        "header header header"
        "footer footer footer";
    grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
    grid-template-columns: auto 50px auto;
}
```

## 网格项属性

### grid-column-start & grid-column-end & grid-row-start & grid-row-end

通过引用特定的网格线来指定网格项在网格中的位置。`grid-column-start` / `grid-row-start` 是网格项开始的线，而 `grid-column-end` / `grid-row-end` 是网格项结束的线。

值：

- `<line>` – 可以是一个数字，用来引用编号的网格线，或者是一个名称，用来引用命名的网格线。
- `span <number>` – 网格项将跨越指定数量的网格轨道。
- `span <name>` – 网格项将跨越直到遇到下一个具有所提供名称的线。
- `auto` – 表示自动放置，自动跨越，或者默认跨越一个轨道。

```css
.item {
    grid-column-start: <number> | <name> | span <number> | span <name> | auto;
    grid-column-end: <number> | <name> | span <number> | span <name> | auto;
    grid-row-start: <number> | <name> | span <number> | span <name> | auto;
    grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```

举个栗子：

```css
.item-a {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409051301099.svg" alt="Example of grid-row/column-start/end" style="width: 50%;" />

```css
.item-b {
    grid-column-start: 1;
    grid-column-end: span col4-start;
    grid-row-start: 2;
    grid-row-end: span 2;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409051302541.svg" alt="Example of grid-row/column-start/end" style="width: 50%" />

如果没有声明 `grid-column-end` 或 `grid-row-end`，网格项将默认跨越一个轨道。

网格项可以相互重叠，你可以使用 `z-index` 来控制它们的堆叠顺序。

更多关于 `span` 语法的信息，请参阅 [DigitalOcean 的这篇文章](https://www.digitalocean.com/community/tutorials/css-css-grid-layout-span-keyword?utm_medium=content_acq&utm_source=css-tricks&utm_campaign=&utm_content=awareness_bestsellers)。

### grid-column & grid-row

`grid-column` 和 `grid-row` 分别是 [`grid-column-start`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) + [`grid-column-end`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) 以及 [`grid-row-start`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) + [`grid-row-end`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) 的简写形式。

值：

- `<start-line> / <end-line>` – 每一项都可以接受与长版本相同的值，包括 `span`。

```css
.item {
    grid-column: <start-line> / <end-line> | <start-line> / span <value>;
    grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```

举个栗子：

```css
.item-c {
    grid-column: 3 / span 2;
    grid-row: third-line / 4;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409051311714.svg" alt="Example of grid-column/grid-row" style="width: 50%" />

如果没有声明结束线的值，网格项将默认跨越一个轨道。

### grid-area

给一个网格项命名，以便它可以被使用 [`grid-template-areas`](#grid-template-areas) 属性创建的模板所引用。或者，此属性可以用作 [`grid-row-start`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) +[`grid-column-start`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end)+ [`grid-row-end`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) + [`grid-column-end`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) 的更简短的简写形式。

值：

- `<name>` – 你自己选择的一个名称。
- `<row-start> / <column-start> / <row-end> / <column-end>` – 可以是数字或网格线的名称。

```css
.item {
    grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```

举个栗子：

作为一种为网格项指定名称的方法:

```css
.item-d {
    grid-area: header;
}
```

作为[`grid-row-start`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) +[`grid-column-start`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end)+ [`grid-row-end`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) + [`grid-column-end`](#grid-column-start-grid-column-end-grid-row-start-grid-row-end) 的简写形式：

```css
.item-d {
    grid-area: 1 / col4-start / last-line / 6;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409052156463.svg" alt="Example of grid-area" style="width: 50%" />

### justify-self

沿内联 (行) 轴对齐单元格内的网格项（与 [`align-self`](#align-self) 不同，[`align-self`](#align-self) 沿块（列）轴对齐）。此值适用于单个网格项内的内容。

值：

- `start` – 将网格项对齐到单元格的起始边缘（靠左对齐）。
- `end` – 将网格项对齐到单元格的结束边缘（靠右对齐）。
- `center` – 将网格项居中对齐在单元格内。
- `stretch` – 填充整个单元格的宽度（这是默认值）。

```css
.item {
    justify-self: start | end | center | stretch;
}
```

举个栗子：

```css
.item-a {
    justify-self: start;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409052240816.svg" alt="Example of justify-self set to start" style="width: 50%" />

```css
.item-a {
    justify-self: end;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409052240233.svg" alt="alt=&quot;Example" style="width: 50%" />

```css
.item-a {
    justify-self: center;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071117635.svg" alt="Example of justify-self set to center" style="width: 50%" />

```css
.item-a {
    justify-self: stretch;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071118794.svg" alt="Example of justify-self set to stretch" style="width: 50%" />

### align-self

沿块（列）轴对齐单元格内的网格项（与 [`justify-self`](#justify-self) 不同，[`justify-self`](#justify-self) 沿内联（行）轴对齐）。此值适用于单个网格项内的内容。

值：

- `start` – 将网格项对齐到单元格的起始边缘（顶部对齐）。
- `end` – 将网格项对齐到单元格的结束边缘（底部对齐）。
- `center` – 将网格项居中对齐在单元格内。
- `stretch` – 填充到整个单元格的高度（默认值）。

```css
.item {
    align-self: start | end | center | stretch;
}
```

举个栗子：

```css
.item-a {
    align-self: start;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071119251.svg" alt="Example of align-self set to start" style="width: 50%" />

```css
.item-a {
    align-self: end;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409052239619.svg" alt="Example of align-self set to end" style="width: 50%" />

```css
.item-a {
    align-self: center;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409052239407.svg" alt="Example of align-self set to center" style="width: 50%" />

```css
.item-a {
    align-self: stretch;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071119568.svg" alt="Example of align-self set to stretch" style="width :50%;" />

要对齐网格中的所有项，还可以通过 [`align-items`](#align-items) 属性在网格容器上设置此行为。

### place-self

`place-content` 属性允许你在单个声明中同时设置 [`align-self`](#align-self) 和 [`justify-self`](#justify-self) 属性。

值：

- `auto` – 布局模式的“默认”对齐方式。
- `<align-self> / <justify-self>` – 第一个值设置 `align-self`，第二个值设置 `justify-self`。如果省略了第二个值，则第一个值将被赋给两个属性。

举个栗子：

```css
.item-a {
    place-self: center;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071149532.svg" alt="place self set to center" style="width: 50%;" />

```css
.item-a {
    place-self: center stretch;
}
```

<img src="https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409071153422.svg" alt="place set set to center stretch" style="width: 50%" />

除 Edge 之外，所有主流浏览器都支持 `place-self` 简写属性。

## 特殊单位与函数

### 分数单位

在 CSS Grid 中，你可能会大量使用[分数单位](https://css-tricks.com/introduction-fr-css-unit/)，比如 `1fr`。它们基本上意味着“剩余空间的一部分”。所以像这样的声明：

```css
grid-template-columns: 1fr 3fr;
```

这意味着大致是 25% 和 75%。不过，这些百分比值比分数单位更为固定。例如，如果你给基于百分比的列添加了内边距，现在你就打破了 100% 的宽度（假设使用的是 content-box 盒模型）。分数单位与其他单位结合使用时更加友好，正如你可以想象的那样：

```css
grid-template-columns: 50px min-content 1fr;
```

### 尺寸关键字

在定义行和列的尺寸时，你可以使用你熟悉的长度单位，如 `px`、`rem`、`%` 等，但你还可以使用一些关键字：

- `min-content`：内容的最小尺寸。想象一段像 “E pluribus unum” 这样的文本，`min-content` 很可能是单词 “pluribus” 的宽度。

- `max-content`：内容的最大尺寸。想象一下上面的句子，`max-content` 就是整个句子的长度。

- `auto`：这个关键字与 `fr` 单位类似，但在分配剩余空间时，它会“输掉”与 `fr` 单位的竞争。也就是说，`auto` 会在没有其他竞争者的情况下尽可能地扩展，但在有 `fr` 单位存在时，`fr` 单位会优先获得剩余的空间。

- `Fractional units`：见上文所述，如 `1fr`，表示剩余空间的一部分。

### 尺寸函数

1. `fit-content()` 函数是一个非常有用的尺寸函数，它使得元素的尺寸能够根据其内容进行调整。

   - 语法：`fit-content(<length>)` 函数允许你指定一个最大值，该值可以是一个长度单位（如 `px`、`em`、`rem` 等）或一个百分比。

   - 根据公式 min(maximum size, max(minimum size, argument)) 调整大小。

   - 确保元素至少能够容纳其内容（相当于 `min-content`），并且确保元素不会超过指定的最大宽度或高度（相当于 `max-content` 与给定值的限制）。

2. `minmax()` 函数确实如其名所示：它为长度设置一个最小值和最大值，这在结合相对单位使用时非常有用。例如，你可能希望一列只能缩小到一定程度。[这非常有用，很可能正是你所需要的](https://css-tricks.com/you-want-minmax10px-1fr-not-1fr/)。

   ```css
   grid-template-columns: minmax(100px, 1fr) 3fr;
   ```

3. `min()` & `max()`。

### `repeat()` 函数和关键字

`repeat()` 函数是一个非常强大的工具，它允许你重复定义一组轨道，使得你可以轻松地创建重复的行或列。

```css
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

/* easier: */
grid-template-columns: repeat(8, 1fr);

/* especially when: */
grid-template-columns: repeat(8, minmax(10px, 1fr));
```

`repeat()` 函数的基本语法如下：

```css
repeat(<number>, <track-size>)
```

或

```css
repeat(auto-fill, <track-size>)
```

或

```css
repeat(auto-fit, <track-size>)
```

参数说明：

1. `<number>`：
   - 指定轨道的数量。
   - 例如：`repeat(3, 100px)` 表示创建 3 个宽度为 100px 的轨道。
2. `auto-fill`：
   - <strong style="color:#ae3520;">动态地填充轨道，直到填满容器</strong>。
   - <strong style="color:#ae3520;">在一排中尽可能多地放置列，即使这些列是空的</strong>。
   - 例如：`repeat(auto-fill, 100px)` 表示创建尽可能多的 100px 宽度的轨道，直到填满容器。
3. `auto-fit`：
   - 类似于 `auto-fill`，但会<strong style="color:#ae3520;">自动调整轨道大小，确保轨道能够均匀分布并且容器没有空余空间</strong>。
   - <strong style="color:#ae3520;">将现有的列适配到可用空间中。优先扩展列以填充空间，而不是保留空列</strong>。
   - 例如：`repeat(auto-fit, minmax(100px, 1fr))` 表示创建尽可能多的轨道，每个轨道宽度至少为 100px，但不超过剩余空间的一部分。
4. `<track-size>`：
   - 指定轨道的大小。
   - 可以是固定的长度（如 `100px`）、百分比（如 `50%`）、分数单位（如 `1fr`），或者 `minmax()` 函数。

下面将介绍一个在 CSS Grid 中非常著名且极其有用的代码片段或技巧：

```css
grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
```

[auto-fill vs. auto-fit](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)

<div style="resize: horizontal;overflow: hidden;height: 454px;">
    <iframe height="450" style="width: 100%;height:100%;overflow: hidden;" scrolling="no" title="Grid by Example 37: auto-fill vs. auto-fit" src="https://codepen.io/rachelandrew/embed/dpYzZq?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/rachelandrew/pen/dpYzZq">
      Grid by Example 37: auto-fill vs. auto-fit</a> by Rachel Andrew (<a href="https://codepen.io/rachelandrew">@rachelandrew</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

## 示例代码

### Fluid columns snippet

Fluid width columns that break into more or less columns as space is available, with no media queries!

<div style="resize: horizontal;overflow: hidden;min-width: 320px;height: 454px;">
    <iframe  height="450" style="width: 100%;height:100%;overflow: hidden;" scrolling="no" title="That Grid Thing Everybody Loves 'Cause It's Awesome" src="https://codepen.io/chriscoyier/embed/xBmYJN?default-tab=&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/chriscoyier/pen/xBmYJN">
        That Grid Thing Everybody Loves 'Cause It's Awesome</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>)
        on <a href="https://codepen.io">CodePen</a>
    </iframe>
</div>
该 CSS 片段可以让网格中的列根据容器的可用空间自动调整数量，而无需使用媒体查询来实现响应式布局。

### A Bar Chart

<div style="resize: horizontal;overflow: hidden;height: 454px;">
    <iframe height="450" style="width: 100%;height:100%;overflow: hidden;" scrolling="no" title="A Bar Chart With CSS Grid" src="https://codepen.io/xiaorang/embed/GRbzRaa?default-tab=&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/xiaorang/pen/GRbzRaa">
      A Bar Chart With CSS Grid</a> by liulei (<a href="https://codepen.io/xiaorang">@xiaorang</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

###  The Holy Grail Layout

<div style="resize: horizontal;overflow: hidden;height: 454px;">
    <iframe height="450" style="width: 100%;height:100%;overflow: hidden;" scrolling="no" title="Holy Grail Layout with Grid" src="https://codepen.io/xiaorang/embed/MWMLayw?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/xiaorang/pen/MWMLayw">
        Holy Grail Layout with Grid</a> by liulei (<a href="https://codepen.io/xiaorang">@xiaorang</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

### A Calendar in Three Lines of CSS

<div style="resize: both;overflow: hidden;height: 454px;">
    <iframe height="450" style="width: 100%;height:100%;overflow: hidden;" scrolling="no" title="CSS Grid: Calendar" src="https://codepen.io/xiaorang/embed/poXGgzN?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/xiaorang/pen/poXGgzN">
        CSS Grid: Calendar</a> by liulei (<a href="https://codepen.io/xiaorang">@xiaorang</a>)
        on <a href="https://codepen.io">CodePen</a>.
    </iframe>
</div>

## 兼容性

截至 2017 年 3 月，大多数浏览器已经原生支持无前缀的 CSS Grid：包括 Chrome（包括 Android 版）、Firefox、Safari（包括 iOS 版）和 Opera。另一方面，Internet Explorer 10 和 11 也支持它，但它们使用的是旧版本的实现和过时的语法。现在是使用网格布局的时候了！

![image-20240901093951119](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409010939266.png)

<div align="center"><a href="https://caniuse.com/css-grid">CSS Grid Layout (level 1) | Can I use... Support tables for HTML5, CSS3, etc</a></div>

## 参考资料🎁

- 📃文档
  - [网格布局 - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout)
  - [CSS Grid PlayGround | Terminology | Mozilla (mozilladevelopers.github.io)](https://mozilladevelopers.github.io/playground/css-grid)
  - [CSS Grid Layout Guide | CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [CSS Grid 网格布局教程 - 阮一峰的网络日志 (ruanyifeng.com)](https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
  - [栅格系统 | 后盾人 (houdunren.com)](https://doc.houdunren.com/系统课程/css/11%20栅格系统.html)
  - [Understanding the CSS Grid Layout Module Web Design Tutorials | Envato Tuts+ (tutsplus.com)](https://webdesign.tutsplus.com/series/understanding-the-css-grid-layout-module--cms-1079)
  - [Learn CSS Grid - A Guide to Learning CSS Grid | Jonathan Suh](https://learncssgrid.com/)
- 📺视频
  - [像开法拉利一样写CSS3 ，grid布局-程序员来体验未来的CSS3布局方式 ，grid 栅格系统真香](https://www.bilibili.com/video/BV134411m7dJ?p=3&vd_source=84272a2d7f72158b38778819be5bc6ad)
- 🛠️工具

  ![css-grid-poster](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img2/202409010940321.png)
