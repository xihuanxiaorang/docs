# 组件 v-model

## 基本用法

**`v-model` 可以在组件上使用以实现双向绑定**。

从 Vue 3.4 开始，👍**推荐的实现方式是使用 [`defineModel()`](https://cn.vuejs.org/api/sfc-script-setup.html#definemodel) 宏
**：

```vue
<!-- Child.vue -->
<script setup>
  const model = defineModel()

  function update() {
    model.value++
  }
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
</template>
```

父组件可以用 `v-model` 绑定一个值：

```html
<!-- Parent.vue -->
<Child v-model="count"/>
```

**`defineModel()` 返回的值是一个 ref**。**它可以像其他 ref 一样被访问以及修改**
，不过<strong style="font-size:18px;color:#95d475;">它能起到在父组件和当前变量之间的双向绑定的作用</strong>：

- 它的 `.value` 和父组件的 `v-model` 的值同步；
- 当它被子组件变更了，会触发父组件绑定的值一起更新。

这意味着你也**可以用 `v-model` 把这个 ref 绑定到一个原生 input 元素上，在提供相同的 `v-model` 用法的同时轻松包装原生
input 元素**：

```vue

<script setup>
  const model = defineModel()
</script>

<template>
  <input v-model="model"/>
</template>
```

[▶ 演练场示例](https://play.vuejs.org/#eNqFUtFKwzAU/ZWYlyrMFtGn0RV0DFSYigq+5KW0t11mmoQknZPSf/cm3erAMZ/ae87JvefmpKO3WsebFuiUprYwXDtiwbU6Y5I3WhlHOmKgIj2pjGpIhNJopOYrLsodESeh8r1QwGShpHWksTWZ+Qbn0T0IociHMqI8iy6YTJNhHk7CwkGjRe4AK0LS1VXWdeFw36cJVgEdxm0uG1WCmDGKPKNZOgxGSZocdKET6iyaqHgdr62SuGDnuzBaqEZzAeZZO44mGZ2SwHguR49fjwFzpoXJHi9WUHwewdd26zFGXwxYMBtgdORcbmpwA714e4It/o8k7tAKVJ8gX8Eq0XqPg+yulSXaPtAFtw8hCy7rd7vYOpB2v5Q36pV90DOKycxPrP5r9zq+CeeY7PEWx1iPPJFdyD4PjLmEiktY+ur8n4CtzmW2/CZc6tah0JeBCMBhxv7LKEn+5Nv/AKJA6mA=)

### 底层机制

`defineModel` 是一个便利宏。编译器将其展开为以下内容：

- **一个名为 `modelValue` 的 prop**，**本地 ref 的值与其同步**；
- **一个名为 `update:modelValue` 的事件**，当**本地 ref 的值发生变更时触发**。

在 3.4 版本之前，你一般会按照如下的方式来实现上述相同的子组件：

```vue

<script setup>
  const props = defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
```

> [!note]
>
> 以下为本人在官方文档的基础上进行的改动，我觉得这样才更加诠释了 `defineModel` 的所有作用。
>
> ```vue
> <script setup>
> import {ref, watch} from 'vue' // [!code ++]
> const props = defineProps(['modelValue'])
> const emit = defineEmits(['update:modelValue'])
> const model = ref(props.modelValue); // [!code ++]
> watch(model, (newValue) => { // [!code ++]
>   emit('update:modelValue', newValue); // [!code ++]
> }) // [!code ++]
> </script>
> 
> <template>
>   <input :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" /> // [!code --]
> 	<input v-model="model" /> // [!code ++]
> </template>
> ```

如你所见，这显得冗长得多。然而，**这样写有助于理解其底层机制**。

因为 **`defineModel` 声明了一个 prop**，你可以**通过给 `defineModel` 传递选项，来声明底层 prop 的选项**：

```js
// 使 v-model 必填
const model = defineModel({required: true})

// 提供一个默认值
const model = defineModel({default: 0})
```

> [!warning]
>
> **如果为 `defineModel` prop 设置了一个 `default` 值且父组件没有为该 prop 提供任何值，会导致父组件与子组件之间不同步**
> 。在下面的示例中，父组件的 `myRef` 是 undefined，而子组件的 `model` 是 1：
>
> ```js
> // 子组件：
> const model = defineModel({ default: 1 })
> 
> // 父组件
> const myRef = ref()
> ```
>
> ```html
> <Child v-model="myRef"></Child>
> ```

## `v-model` 的参数 {#v-model-arguments}

组件上的 `v-model` 也可以接受一个参数：

```html

<MyComponent v-model:title="bookTitle"/>
```

**在子组件中**，我们可以**通过将字符串作为第一个参数传递给 `defineModel()` 来支持相应的参数**：

```vue
<!-- MyComponent.vue -->
<script setup>
  const title = defineModel('title')
</script>

<template>
  <input type="text" v-model="title"/>
</template>
```

[▶ 在演练场中尝试一下](https://play.vuejs.org/#eNqFUstOwzAQ/BXLl4BUGiE4lbQSoB5AKiDg6EuUblqXxLbsdUkV5d9Zuw8CKuWUeGY8mt1xy2+NGa498BHPXGGlQeYAvZkIJWujLbKWWShZx0qra5aQNDlQs829pj8FCnf0MO1hwTe5EUqoQiuHDCVWwMbB7yxZX9R6DhXL7cLXwQCavDYVJOdCZek2CoWgAwLhOQKdGMuWl5O23Vl1XZbSOeL9LDvvUVSNBY9fwVlK0izt+fEBR0fhSrkYrpxWtIU2uAlekJmswD4blBRe8BGLTODyqtKfjxFD62Gwx4slFB9H8JVrAib4iwUHdk1RDhzS/IBbevr2BA39H0iawofgJ8hXcLryIeNWdufVnGL3dDHtQyxMqsW7mzYIyu2HCkGDsot6wamysMe/Rv+OezW8jveE6miLv1o/8pp+PoE5lFLBLLR0lkTwv96lMp7ub0wsNK5i3/PJhrsvo4j7bw==)

如果需要额外的 prop 选项，应该在 model 名称之后传递：

```js
const title = defineModel('title', {required: true})
```

:::details 3.4 之前的用法

```vue
<!-- MyComponent.vue -->
<script setup>
  defineProps({
    title: {
      required: true
    }
  })
  defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

[▶ 在演练场中尝试一下](https://play.vuejs.org/#eNqFUk1PwzAM/StRhNQhjVYITqNDfGgHkIAJuBEOVettGW0S8lE2Vf3vOOk2Chpwamy/Pj/br6GXSsW1Azqiqck1V5YYsE6dM8ErJbUlDdEwIy2ZaVmRCKHRrnS3vpb4EiDsphwnvZznjc6YYCKXwlhiuS2BjD3fIKqPKllASTI9d5UngFVWqRKiQybSpJOCIjCwgPnMAkaEpIvj86bZULVtmmAc8n0tG+5RQI0ZDV9GSYLQNOnx0SG1BsXN+DxeGilwC41nYzRHMl6CflCWo3hGRyRUfC0rS/lxG3JWOxhu8/kC8rc9+aVZ+RyjUw0GdI1SdjWL84PtypOne1jhe1fEKZwX/kfxEYwsndfYwa6cKFB2DxfU3oSDcTF/NpOVBWG2Q3mhHtkGPKN4Mr/H30b/knsSn4b/mGhxiz+uvsdNnQWUlsqMSQEzLmDqg0HgDhfa9dHw7riGoicP26AxOhKouEUbdSQTDMzgJXKqwJt2J49e/zERF8qhH9cquCPslYzqrHQ+DhrjrWcuAhbTB77t4HufITmA2s/c7SUOFId7ndZ+An3cK8M=)

:::

## 多个 `v-model` 绑定

利用刚才在 [`v-model` 参数](#v-model-arguments)小节中学到的指定参数与事件名的技巧，我们可以在*
*单个组件实例上创建多个 `v-model` 双向绑定**。

**组件上的每一个 `v-model` 都会同步不同的 prop**，而无需额外的选项：

```html

<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

```vue

<script setup>
  const firstName = defineModel('firstName')
  const lastName = defineModel('lastName')
</script>

<template>
  <input type="text" v-model="firstName"/>
  <input type="text" v-model="lastName"/>
</template>
```

[▶ 在演练场中尝试一下](https://play.vuejs.org/#eNqFkstOwzAQRX/F8iZFKokQrEpaiUcXVKIgHjtvonTSuiS2ZTulKMq/M06xSaFqd/ac6/Ed+zb0Rql4UwMd0dTkmitLDNhaTZjglZLakoZoKEhLCi0rEqE0CujdgBZZBT8sTnzBdYyumWAil8JYUnBt7Nwpx67bIJrJlYjOPC6zfXovwcE02TlCL7ixUKkys4A7QtLVxaRpen3bluA+NGrbNEFJJw0uN+eVXEA5CqfGjIY1o4H7Loj9EmmC3dKk54IOqTU4QMGX8dpIgU/YuAsZzWWleAn6SVmOAzI6Ih1xLCtL+TnralbXMPT1fAX5x4H62mxdjdFnDTjIBq0EZjO9BLvD09c5bHEdIM5Sl6g+Al/AyLJ2Hney21os0HZP17l96H6bi+WbmW4tCOOHckadsu30jOKv3x0Z/dfuZXzVnWOixVfsp+ZADv9HaAEFF/DoPmsQBXAwT3tSXz8VLi5UbYn9Ui4Ctns5H44/kXGhOHngaIjab06CMpw=)

:::details 3.4 之前的用法

```vue

<script setup>
  const props = defineProps({
    firstName: String,
    lastName: String
  })
  const emit = defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input type="text" :value="props.firstName" @input="$emit('update:firstName', $event.target.value)"/>
  <input type="text" :value="props.lastName" @input="$emit('update:lastName', $event.target.value)"/>
</template>
```

[▶ 在演练场中尝试一下](https://play.vuejs.org/#eNqNUk1v1DAQ/SuWVSlbackKwSmkFV97oIdSUThhDlF2suuS2JY9CYui/HfGTu0GsS29eeY9P7/xvJG/MyYfeuAFL11tpUHmAHtzKZTsjLbIRmahYRNrrO5YRtQsQd8cWFV1cI/lm9jwitkboYSqtXLIGmkdXnvmhVdbZVf6oLLzCLfV3+hHDR4sN7Mj8kIFQmfaCoEqxsrDy8txXOhOE6M6CU1TuSFKoCaXw4tO76At0q0LwdNZ8IRHFYLjkdANqZWbhQu+5uhogEbu8zunFX3h6B8UvNadkS3YzwYlDSh4wQLisapt9a+r0EPbwzr26wPUP0/079zR9wS/sUCDDGQlYVjZPeAMb2+v4UjnBNIsfUvsJ8Av4HTbe48z7X2vdmR7wQtuP4VtS7X/6rZHBOXiUN6oZ06BLzht/cMToz/YfZW/DveEmugXl6k5kcM5I8Zq4yggO2ikghtfrYJy2mDBbtGSy2AmLi426aUUN+gkJqUtFW71PevNjtb6kI1szWIvamU//hNKqUyPDH8bHx0MP86KoWp7X4cB8mXe3gY+QWfe0eqUhTMYQGE+/1wepM7vs/i89xYBfuS5NN1jr/0b/OkPc/dysQ==)

:::

## 处理 `v-model` 修饰符

在学习输入绑定时，我们知道了 `v-model` 有一些[内置的修饰符](../基础/表单输入绑定.md#修饰符)，例如 `.trim`，`.number` 和
`.lazy`。在某些场景下，你可能想要一个自定义组件的 `v-model` 支持自定义的修饰符。

我们来创建一个自定义的修饰符 `capitalize`，它会自动将 `v-model` 绑定输入的字符串值第一个字母转为大写：

```html

<MyComponent v-model.capitalize="myText"/>
```

通过**像这样解构 `defineModel()` 的返回值，可以在子组件中访问添加到组件 `v-model` 的修饰符**：

```vue

<script setup>
  const [model, modifiers] = defineModel()

  console.log(modifiers) // { capitalize: true }
</script>

<template>
  <input type="text" v-model="model"/>
</template>
```

为了能够**基于修饰符选择性地调节值的读取和写入方式**，我们可以**给 `defineModel()` 传入 `get` 和 `set` 这两个选项**。*
*这两个选项在从模型引用中读取或设置值时会接收到当前的值，并且它们都应该返回一个经过处理的新值**。下面是一个例子，展示了如何利用
`set` 选项来应用 `capitalize` (首字母大写) 修饰符：

```vue

<script setup>
  const [model, modifiers] = defineModel({
    set(value) {
      if (modifiers.capitalize) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
      return value
    }
  })
</script>

<template>
  <input type="text" v-model="model"/>
</template>
```

[▶ 在演练场中尝试一下](https://play.vuejs.org/#eNp9UsGO0zAQ/ZWRL01FSUFwKlmkZbUHkBYQlBPmEKWT1otjW/YkNFT9d8ZOm0arsqfE82bmvZl5B3HrXN61KFaiCJVXjiAgte69NKpx1hMcwGMNR6i9bWDGqbMReujvLP8ZNHSC8+UkFvvO3kkjTWVNIGj6Ne4JbmLDbDabS1MsB05m4wdh43RJyC+A9U4FUMa1BFXpFJVa/cUA2KHvaafMFnrbArOgX8X8Yiqme9nYDer8UnkjxUAvBSyZoFhO2MRCUGCNtdrmj8EaXsYh9pSi4pZKo//iSPEMUqwgIRErtbZ/PqUY+RYX53i1w+r3lfhj2MeYFF89BvQdSjFiVPotsrYI33//nHSOIM/Sas5+BvyGweo2ahzSPrRmw7IneUntx3Q3Xt463O8JTTgPFYXGzGPKl4IvF7f5v9Evct/kb1OdNEfe4pPjXzHV4ISf6TwL4I+qFfrwi12xwVoZfIhIlpi4JutK3eL8zByrrcZc22021rKPIqbqS2hy+LEW2HbUegOpZV7tSn9L2at5TvaHc+jvyoDZHF6c8KBVhdnrU3Oe72mH89jP27gYLEy9ixakwYAne0ZPxu9VSx7/ATEPOpk=)

:::details 3.4 之前的用法

```vue

<script setup>
  const props = defineProps({
    modelValue: String,
    modelModifiers: {default: () => ({})}
  })

  const emit = defineEmits(['update:modelValue'])

  function emitValue(e) {
    let value = e.target.value
    if (props.modelModifiers.capitalize) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
  }
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue"/>
</template>
```

[▶ 在演练场中尝试一下](https://play.vuejs.org/#eNp9U02P0zAQ/SsjX5KKkoLgFNoVy6oHkBZWbOGCOUTppPXi2JbtlJaq/52x3aZZ6O4p8bz5eG8+9uzamGLTISvZ1NVWGA8OfWeuuBKt0dbDHiw2cIDG6hYycs166HZ3o+lPofJHuJgMbCFv9o4rrmqtnId2t8Cth1lImGfZiKvpJNWkavTw2BpZeaQXwGItHAhlOg91ZYSvpPiDDnCDdufXQq1gpzugKmjL4D8dktm8bPUSZXGOnHGWynMGEyownQyqsTHzjjg2YlU8OK2oGfuQk7OaUgqJ9ovxgjRwVkJEAlZJqX9/ijZvOxyf7PUa618X7A9uG2yc3Vl0aDfIWY/5yq6QuAV4fv858uxB0tJJ8n4G/IpOyy5wTG4fOrUk2gO/yPZjnBs1b+HmW4/KnUQFosHzEP05o8mFbj4l/Uz3TfE2xnF1oC7+M/wLS5U2wVhtHC3CEhuh8C688pg8ju17JTss4d5bYhoJRfOtXopGoHU9EQqvOulLyEcwu4J8f6CdSmToJ5XCVoSVS5Xm9HD5j6wzS5p8ea6W/XwUEG0UlWNMHMtJpL062rFIHSiiIaCiyaOo4jHVwQaOTqyhTxO/Rb2u7LXPX40Kr78Zg/amckiKXhxxJ0WN+esoLYoLn8Ayv6BjnILImRyfOa9pOi2/M+E0fDoMKGMwGQZaYl4C38cIwvoGcfb/JR3+AvrRei8=)

:::

### 带参数的 `v-model` 修饰符

这里是另一个例子，展示了如何在使用多个不同参数的 `v-model` 时使用修饰符：

```html

<UserName
  v-model:first-name.capitalize="first"
  v-model:last-name.uppercase="last"
/>
```

```vue

<script setup>
  const [firstName, firstNameModifiers] = defineModel('firstName')
  const [lastName, lastNameModifiers] = defineModel('lastName')

  console.log(firstNameModifiers) // { capitalize: true }
  console.log(lastNameModifiers) // { uppercase: true}
</script>
```

:::details 3.4 之前的用法

```vue

<script setup>
  const props = defineProps({
    firstName: String,
    lastName: String,
    firstNameModifiers: {default: () => ({})},
    lastNameModifiers: {default: () => ({})}
  })
  defineEmits(['update:firstName', 'update:lastName'])

  console.log(props.firstNameModifiers) // { capitalize: true }
  console.log(props.lastNameModifiers) // { uppercase: true}
</script>
```

:::
