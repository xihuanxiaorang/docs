# WXML 语法

WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合 [基础组件](./基础组件.md)、[事件系统](./事件.md)，可以构建出页面的结构。

## [数据绑定](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html)

WXML 中的动态数据均来自对应 Page 的 data。

### 简单绑定

<strong style="color:#ae3520;">数据绑定使用 Mustache 语法（双大括号）将变量包起来</strong>，可以作用于：

#### 内容

```html
<view> {{ message }} </view>
```

```js
Page({
    data: {
        message: 'Hello MINA!'
    }
})
```

#### 组件属性（需要在双引号之内）

```html
<view id="item-{{id}}"> </view>
```

```js
Page({
    data: {
        id: 0
    }
})
```

#### 控制属性（需要在双引号之内）

```html
<view wx:if="{{condition}}"> </view>
```

```js
Page({
    data: {
        condition: true
    }
})
```

#### 关键字（需要在双引号之内）

`true`：boolean 类型的 true，代表真值。

`false`： boolean 类型的 false，代表假值。

```html
<checkbox checked="{{false}}"> </checkbox>
```

> [!note]
>
> <strong style="color:#ae3520;font-size:19px;">不要直接写 `checked="false"`，其计算结果是一个字符串，转成 boolean 类型后代表真值。</strong>

### 运算

可以在 <span v-pre>`{{ }}`</span> 内进行简单的运算，支持的有如下几种方式：

#### 三元运算

```html
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

#### 算数运算

```html
<view> {{a + b}} + {{c}} + d </view>
```

```js
Page({
    data: {
        a: 1,
        b: 2,
        c: 3
    }
})
```

view 中的内容为 `3 + 3 + d`。

#### 逻辑判断

```html
<view wx:if="{{length > 5}}"> </view>
```

#### 字符串运算

```html
<view>{{"hello" + name}}</view>
```

```js
Page({
    data:{
        name: 'MINA'
    }
})
```

#### 数据路径运算

```html
<view>{{object.key}} {{array[0]}}</view>
```

```js
Page({
    data: {
        object: {
            key: 'Hello '
        },
        array: ['MINA']
    }
})
```

### 组合

也可以在 Mustache 内直接进行组合，构成新的对象或者数组。

#### 数组

```html
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
```

```js
Page({
    data: {
        zero: 0
    }
})
```

最终组合成数组`[0, 1, 2, 3, 4]`。

#### 对象

```html
<template is="objectCombine" data="{{foo: a, bar: b}}"></template>
```

```js
Page({
    data: {
        a: 1,
        b: 2
    }
})
```

最终组合成的对象是 `{foo: 1, bar: 2}`。

也可以用扩展运算符 `...` 来将一个对象展开：

```html
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
```

```js
Page({
    data: {
        obj1: {
            a: 1,
            b: 2
        },
        obj2: {
            c: 3,
            d: 4
        }
    }
})
```

最终组合成的对象是 `{a: 1, b: 2, c: 3, d: 4, e: 5}`。

如果对象的 key 和 value 相同，也可以间接地表达：

```html
<template is="objectCombine" data="{{foo, bar}}"></template>
```

```js
Page({
    data: {
        foo: 'my-foo',
        bar: 'my-bar'
    }
})
```

最终组合成的对象是 `{foo: 'my-foo', bar:'my-bar'}`。

> [!note]
>
> 上述方式可以随意组合，但是如有存在变量名相同的情况，后边的会覆盖前面，如：
>
> ```html
> <template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>
> ```
>
> ```js
> Page({
>     data: {
>         obj1: {
>             a: 1,
>             b: 2
>         },
>         obj2: {
>             b: 3,
>             c: 4
>         },
>         a: 5
>     }
> })
> ```
>
> 最终组合成的对象是 `{a: 5, b: 3, c: 6}`。

> [!note]
>
> 花括号和引号之间如果有空格，将最终被解析成为字符串
>
> ```html
> <view wx:for="{{[1,2,3]}} ">{{item}}</view>
> ```
>
> 等同于
>
> ```html
> <view wx:for="{{[1,2,3] + ' '}}">
>   {{item}}
> </view>
> ```

## [列表渲染](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html)

### wx:for

在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

<strong style="color:#ae3520;">默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`</strong>。

```html
<view wx:for="{{array}}">{{index}}: {{item.message}}</view>
```

```js
Page({
    data: {
        array: [{
            message: 'foo',
        }, {
            message: 'bar'
        }]
    }
})
```

<strong style="color:#ae3520;">可以使用 `wx:for-item` 可以指定数组当前元素的变量名，`wx:for-index` 可以指定数组当前下标的变量名</strong>：

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">{{idx}}: {{itemName.message}}</view>
```

<strong style="color:#ae3520;">`wx:for` 也可以嵌套</strong>，下边是一个九九乘法表：

```html
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

### block wx:for

类似 `block wx:if`，也可以将 `wx:for` 用在`<block/>`标签上，以渲染一个包含多节点的结构块。例如：

```html
<block wx:for="{{[1, 2, 3]}}">
    <view> {{index}}: </view>
    <view> {{item}} </view>
</block>
```

### wx:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 [input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) 中的输入内容，[switch](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html) 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

`wx:key` 的值以两种形式提供：

1. 字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
2. 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会<strong style="color:#ae3520;">确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率</strong>。

> [!note]
>
> 如不提供 `wx:key`，会报一个 `warning`， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。

### 示例代码

```html
<switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>
<button bindtap="switch"> Switch </button>
<button bindtap="addToFront"> Add to the front </button>

<switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>
<button bindtap="addNumberToFront"> Add to the front </button>
```

```js
Page({
    data: {
        objectArray: [
            {id: 5, unique: 'unique_5'},
            {id: 4, unique: 'unique_4'},
            {id: 3, unique: 'unique_3'},
            {id: 2, unique: 'unique_2'},
            {id: 1, unique: 'unique_1'},
            {id: 0, unique: 'unique_0'},
        ],
        numberArray: [1, 2, 3, 4]
    },
    switch: function(e) {
        const length = this.data.objectArray.length
        for (let i = 0; i < length; ++i) {
            const x = Math.floor(Math.random() * length)
            const y = Math.floor(Math.random() * length)
            const temp = this.data.objectArray[x]
            this.data.objectArray[x] = this.data.objectArray[y]
            this.data.objectArray[y] = temp
        }
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addToFront: function(e) {
        const length = this.data.objectArray.length
        this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addNumberToFront: function(e){
        this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
        this.setData({
            numberArray: this.data.numberArray
        })
    }
}).
```

### 注意事项

当 `wx:for` 的值为字符串时，会将字符串解析成字符串数组

```html
<view wx:for="array">
  {{item}}
</view>
```

等同于

```html
<view wx:for="{{['a','r','r','a','y']}}">
  {{item}}
</view>
```

> [!note]
>
> 花括号和引号之间如果有空格，将最终被解析成为字符串
>
> ```html
> <view wx:for="{{[1,2,3]}} ">
>   {{item}}
> </view>
> ```
>
> 等同于
>
> ```html
> <view wx:for="{{[1,2,3] + ' '}}" >
>   {{item}}
> </view>
> ```

## [条件渲染](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html)

### wx:if

在框架中，使用 `wx:if=""` 来判断是否需要渲染该代码块：

```html
<view wx:if="{{condition}}"> True </view>
```

也可以用 `wx:elif` 和 `wx:else` 来添加一个 else 块：

```html
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

### block wx:if

因为 `wx:if` 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 `<block/>` 标签将多个组件包装起来，并在上边使用 `wx:if` 控制属性。

```html
<block wx:if="{{true}}">
    <view> view1 </view>
    <view> view2 </view>
</block>
```

> [!note]
>
>  <strong style="color:#ae3520;font-size:19px;">`<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。</strong>

### `wx:if` vs `hidden`

因为 `wx:if` 之中的模板也可能包含数据绑定，所以当 `wx:if` 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。

同时 `wx:if` 也是<strong style="color:#ae3520;">惰性的</strong>，如果在初始渲染条件为 `false`，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。

相比之下，`hidden` 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。

一般来说，`wx:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 `hidden` 更好，如果在运行时条件不大可能改变则 `wx:if` 较好。

## 模板

WXML 提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。

### 定义模板

使用 name 属性，作为模板的名字。然后在`<template/>`内定义代码片段，如：

```html
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

### 使用模板

使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入，如：

```html
<template is="msgItem" data="{{...item}}"/>
```

```js
Page({
    data: {
        item: {
            index: 0,
            msg: 'this is a template',
            time: '2016-09-15'
        }
    }
})
```

<strong style="color:#ae3520;">is 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板</strong>：

```html
<template name="odd">
    <view> odd </view>
</template>
<template name="even">
    <view> even </view>
</template>

<block wx:for="{{[1, 2, 3, 4, 5]}}">
    <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

### 模板的作用域

模板拥有自己的作用域，只能使用 data 传入的数据以及模板定义文件中定义的 `<wxs />` 模块。

## 引用

WXML 提供两种文件引用方式 `import` 和 `include`。

### import

`import`可以在该文件中使用目标文件定义的 `template`，如：

在 item.wxml 中定义了一个叫 `item` 的`template`：

```html
<!-- item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 index.wxml 中引用了 item.wxml，就可以使用 `item` 模板：

```html
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

#### import 的作用域

import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。

**如：C import B，B import A，在C中可以使用B定义的`template`，在B中可以使用A定义的`template`，但是C不能使用A定义的`template`**。

```html
<!-- A.wxml -->
<template name="A">
    <text> A template </text>
</template>
```

```html
<!-- B.wxml -->
<import src="a.wxml"/>
<template name="B">
    <text> B template </text>
</template>
```

```html
<!-- C.wxml -->
<import src="b.wxml"/>
<template is="A"/>  <!-- Error! Can not use tempalte when not import A. -->
<template is="B"/>
```

### include

`include` 可以将目标文件**除了** `<template/>` `<wxs/>` 外的整个代码引入，相当于是拷贝到 `include` 位置，如：

```html
<!-- index.wxml -->
<include src="header.wxml"/>
<view> body </view>
<include src="footer.wxml"/>
```

```html
<!-- header.wxml -->
<view> header </view>
```

```html
<!-- footer.wxml -->
<view> footer </view>
```

