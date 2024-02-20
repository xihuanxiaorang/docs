# ArrayList源码分析

> [!note]
>
> 本文记录 ArrayList 源码分析，基于 JDK1.8。

## 基本介绍

1. ArrayList 可以看成是 “**长度可调节的数组**”，因此又称之为**动态数组**，可以包含任何类型数据（包括 null，可重复）。

2. ArrayList 继承自 AbstractList 抽象类，实现了 List、[RandomAccess](#randomaccess接口)、Cloneable 和 Serializable 接口，其继承关系体系图如下所示：

   ```plantuml
   @startuml
   
   class ArrayList<E> extends AbstractList implements List,RandomAccess,Cloneable,Serializable {}
   class AbstractList<E> extends AbstractCollection implements List {}
   class AbstractCollection<E> implements Collection {}
   
   interface List<E> extends Collection {}
   interface Collection<E> extends Iterable {}
   interface Iterable<E> {}
   interface RandomAccess {}
   interface Serializable {}
   interface Cloneable {}
   
   @enduml
   ```

3. ArrayList 存取元素是**有序**的；

4. ArrayList 大体和 Vector 一致，唯一的区别是 ArrayList 是**非线程安全**的，Vector 是线程安全的，但 Vector 线程安全的代价比较大，推荐使用 CopyOnWriteArrayList，后面文章再做记录。 

## 底层数据结构（顺序表）

> [!tip] 
>
> 线性表是由 n（n >= 0）相同类型的数据元素组成的有限序列，它是最基本、最常用的一种线性结构。
>
> 线性表有两种储存方式：<u>**顺序存储**</u>和<u>**链式存储**</u>。采用顺序存储的线性表被称为**顺序表**，采用链式存储的线性表被称为**链表**。<br />![image-20230823033246771](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308230332887.png)
>
> 表中 ai-1 领先于 ai，ai 领先于 ai+1，称 ai-1 是 ai 的**直接前驱**元素，ai+1 是 ai 的**直接后继**元素。
>
> 当 i = 1,2,...,n-1 时，ai 有且仅有一个直接后继，当 i=2,3,...,n 时，ai 有且仅有一个直接前驱。<br />
> 等价于⬇️ <br />
> 除第一个元素外，每个元素都有唯一的**直接前驱**；除最后一个元素外，每个元素都有唯一的**直接后继**。
>
> 线性表中元素的个数 n（n >= 0）定义为线性表的长度，当 n = 0 时称为**空表**。
>
> 在非空表中的每个数据元素都有一个确定的位置，如 a1 是第一个数据元素，an 是最后一个数据元素，ai 是第 i 个数据元素，称 i 为数据元素 ai 在线性表中的**位序**。

顺序表是一种用**一段连续的存储单元依次存储数据元素的线性结构**，即**逻辑上相邻的数据元素在物理上的存储位置也是相邻的**。

其特点如下所示：

1. **连续存储**： 顺序表中的元素在内存中是连续存储的，每个元素的地址是紧挨着的；
2. **随机访问**： 由于元素连续存储，可以**通过下标或索引来快速访问顺序表中的任意元素**。这种随机访问的时间复杂度为 O(1)，即不受顺序表长度的影响，具有高效的特点。
3. **插入和删除效率相对较低**： 在顺序表中插入或删除元素，特别是在中间位置，可能需要移动大量元素。这会导致插入和删除的平均时间复杂度为 O(n)。
4. **动态扩展的代价**： 如果顺序表容量不足，需要进行动态扩展，即**重新分配更大的数组并复制数据**。这个过程可能会带来一定的时间开销。
5. **适用场景**： 顺序表适用于对随机访问较为频繁，插入和删除操作较少的场景。例如，用于快速索引数据、需要高效访问大量数据的情况。

## 重要属性

### 成员变量

```java
/**
 * 数组缓冲区，数组列表的元素被存储在其中。数组列表的容量就是这个数组缓冲区的长度。
 * 当添加第一个元素时，如果 elementData == DEFAULT_CAPACITY_EMPTY_ELEMENT_DATA 的话，则进行第一次扩容，容量大小变为 DEFAULT_CAPACITY = 10。
 */
private Object[] elementData;
/**
 * 数组中元素的数量
 */
private int size;
```

### 静态常量

```java
/**
 * 默认的初始容量
 */
private static final int DEFAULT_CAPACITY = 10;
/**
 * 用于空实例的共享空数组实例
 */
private static final Object[] EMPTY_ELEMENT_DATA = {};

/**
 * 用于默认大小(10)的空实例的共享空数组实例。
 * 将它与 EMPTY_ELEMENT_DATA 区别开来，以了解添加第一个元素时要膨胀多少
 */
private static final Object[] DEFAULT_CAPACITY_EMPTY_ELEMENT_DATA = {};
```

1. DEFAULT_CAPACITY：**默认初始化容量** = 10。
2. EMPTY_ELEMENTDATA：用于空实例的共享空数组实例，如果**使用有参构造器进行初始化时并且指定初始化容量参数 = 0** 的话，此时 elementData 被赋值为 EMPTY_ELEMENTDATA，这种情况下，**在添加第一个元素时数组容量会变为 1**。
3. DEFAULTCAPACITY_EMPTY_ELEMENTDATA：用于默认大小(10)的空实例的共享空数组实例，将它与 EMPTY_ELEMENTDATA 区别开来，以便了解添加第一个元素时数组容量要扩容至多少。如果**使用无参构造器进行初始化**的话，此时 elementData 被赋值为 DEFAULTCAPACITY_EMPTY_ELEMENTDATA，这种情况下，**在第一次添加元素时数组容量会变为默认初始化容量（10）**。

## 知识储备

Arrays 类的 `copyOf(U[] original, int newLength, Class<? extends T[]> newType)` 方法用于复制指定数组 original 到新数组，新数组的长度为 newLength，新数组元素类型为 newType。

1. 如果新数组的长度大于旧数组，那么多出的那部分用 null 填充；
2. 如果新数组的长度小于旧数组，那么少的那部分直接截取掉。

举两个栗子：

```java
Long[] array1 = new Long[]{1L, 2L, 3L};
Object[] array2 = Arrays.copyOf(array1, 5, Object[].class);
System.out.println(Arrays.toString(array2)); // [1, 2, 3, null, null]

Object[] array3 = Arrays.copyOf(array1, 1, Object[].class);
System.out.println(Arrays.toString(array3)); // [1]
```

重载方法 `copyOf(T[] original, int newLength)` 用于复制指定数组 original 到新数组，新数组的长度为 newLength，新数组元素类型和旧数组一致。

`copyOf(U[] original, int newLength, Class<? extends T[]> newType)` 方法的大概逻辑如下所示：

```java
public static <T,U> T[] copyOf(U[] original, int newLength, Class<? extends T[]> newType) {
  T[] copy = (T[]) new Object[newLength];
  System.arraycopy(original, 0, copy, 0, Math.min(original.length, newLength));
  return copy;
}
```

`copyOf` 方法内部调用 System 类的 native 方法 `arraycopy(Object src, int srcPos, Object dest, int destPos, int length)`：

1. `src`：需要被拷贝的旧数组；
2. `srcPos`：旧数组开始拷贝的起始位置；
3. `dest`：拷贝目标数组；
4. `destPos`：目标数组的起始拷贝位置；
5. `length`：拷贝的长度。

举例：

```java
Long[] array1 = new Long[]{1L, 2L, 3L};
Object[] array2 = new Object[5];
System.arraycopy(array1, 0, array2, 0, 3);
System.out.println(Arrays.toString(array2)); // [1, 2, 3, null, null]
```

指定位置插入元素：

```java
Long[] array1 = new Long[]{1L, 2L, 3L, null, null, null};
int index = 1;
System.arraycopy(array1, index, array1, index + 1, 3 - index);
array1[index] = 0L;
System.out.println(Arrays.toString(array1)); // [1, 0, 2, 3, null, null]
```

## 主要操作

### 初始化

> [!important]
>
> **在无参构造函数和指定初始容量为0的有参构造参数中并没有对数组进行初始化**，而是**在第一次添加元素的时候才会对数组进行初始化**，这样设计的目的主要是为了**延迟初始化，避免内存的浪费**，因为有可能发生数组在初始化了之后用户后面并没有向其中添加任何元素，这样就会造成不必要的浪费。

无参构造函数，elementData 为 DEFAULTCAPACITY_EMPTY_ELEMENTDATA。

```java
/**
 * 无参构造函数
 */
public ArrayList() {
  this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
```

创建容量大小为 initialCapacity 的 ArrayList，如果 initialCapacity < 0，则抛出 IllegalArgumentException 异常；如果 initialCapacity = 0，则 elementData 为 EMPTY_ELEMENTDATA。

```java
/**
 * 构造具有指定初始容量的空数组
 *
 * @param initialCapacity 初始容量大小
 * @throws IllegalArgumentException 如果指定的初始容量为负数
 */
public ArrayList(int initialCapacity) {
  if (initialCapacity > 0) {
    this.elementData = new Object[initialCapacity];
  } else if (initialCapacity == 0) {
    this.elementData = EMPTY_ELEMENTDATA;
  } else {
    throw new IllegalArgumentException("Illegal Capacity: "+ initialCapacity);
  }
}
```

创建一个包含指定集合 c 数据的 ArrayList。

```java
public ArrayList(Collection<? extends E> c) {
    elementData = c.toArray();
    if ((size = elementData.length) != 0) {
        // c.toArray might (incorrectly) not return Object[] (see 6260652)
        if (elementData.getClass() != Object[].class)
            elementData = Arrays.copyOf(elementData, size, Object[].class);
    } else {
        // replace with empty array.
        this.elementData = EMPTY_ELEMENTDATA;
    }
}
```

不知道小伙伴们有没有注意到，上面为什么要多此一举使用 `Arrays.copyOf(elementData, size, Object[].class)` 复制一遍数组呢？这是因为在某些情况下调用集合的 `toArray()` 方法返回的类型并不是 `Object[].class`，比如：

```java
Long[] array1 = {1L, 2L};
List<Long> list1 = Arrays.asList(array1);
Object[] array2 = list1.toArray();
System.out.println(array2.getClass() == Object[].class); // false

List<Long> list2 = new ArrayList<>();
System.out.println(list2.toArray().getClass() == Object[].class); // true
```

### 添加元素

#### 在尾部添加元素

1. 先判断当前数组是否已满无法再添加元素，如果已满的话，则说明数组此时容量不足需要先进行[扩容](#扩容)操作；
2. 在数组的末尾添加元素；
3. 元素个数加一 size++；

```java
/**
 * 在数组的尾部添加元素
 *
 * @param e 待添加的元素
 */
public boolean add(E e) {
  // 确定数组容量，如果数组容量不足的话则需要进行扩容
  ensureCapacityInternal(size + 1);  // Increments modCount!!
  elementData[size++] = e;
  return true;
}
```

#### 在指定位置添加元素

1. **索引合法性检查**，如果索引 `index < 0 || index > size` 的话，则抛出**索引越界异常**！

2. 判断数组目前是否已满无法再添加元素，如果已满的话，则说明数组此时容量不足需要先进行[扩容](#扩容)操作；

3. 由于数组元素在内存中是“紧挨着的”，它们之间没有空间再存放任何数据，所以在指定的位置添加元素时，需要**将该元素之后的所有元素都向后移动一位，也就是用前一个元素的值覆盖后一个元素的值，最后再用新元素的值覆盖指定位置上的值即可**。

   > [!Note]
   >
   > 数组中的某个区段整体往后挪的时候，一定是后面的先动！否则的话，会出现数据覆盖的情况!

   对应到代码中则体现为**倒序遍历**，**用前一个元素的值覆盖后一个元素的值**。如下所示：

   ```java
   for (int i = size; i > index; i--) {
       elementData[i] = elementData[i - 1];
   }
   ```

   等价于使用 `System.arraycopy()` 方法从原数组 index 位置开始，拷贝到原数组 index + 1 位置开始，拷贝的数量 = size - index。

   ```java
   System.arraycopy(data, index, data, index + 1, size - index);
   ```

   ![image-20230823183333737](https://fastly.jsdelivr.net/gh/xihuanxiaorang/img/202308231833797.png)

4. 元素个数加一 size++；

```java
public void add(int index, E element) {
  // 索引合法性检查，如果索引不符合条件的话则抛出索引越界异常
  rangeCheckForAdd(index);
  // 确定数组容量，如果数组容量不足的话则需要进行扩容
  ensureCapacityInternal(size + 1);  // Increments modCount!!
  // 数组指定位置插入元素 => 将指定位置后面的所有元素往后面移动一个位置
  System.arraycopy(elementData, index, elementData, index + 1, size - index);
  // 在指定位置处放入新元素
  elementData[index] = element;
  // 元素个数加一
  size++;
}

/**
 * 检查添加元素时索引是否越界
 *
 * @param index 索引位置
 * @throws IndexOutOfBoundsException 如果索引越界的话
 */
private void rangeCheckForAdd(int index) {
  if (index > size || index < 0) {
    throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
  }
}
```

#### 扩容

1. 计算数组所需的最小容量 minCapacity；
   1. 目前 minCapacity 为方法实参 =  size + 1 = 目前数组中的元素个数 + 1；
   2. 如果 elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA 的话，则取 minCapacity（size + 1） 与 DEFAULT_CAPACITY（10）两者较大的数赋值给 minCapacity；

2. 数组所需最小的容量确定之后，需要判断当前数组的容量是否小于所需的最小容量，如果是的话，则需要进行扩容操作⤵；
3. 扩容操作：
   1. **确定新数组容量大小**。公式：`newCapacity = oldCapacity + (oldCapacity >> 1)`，其中 oldCapacity >> 1 进行位运算，右移一位，即为 oldCapacity 的一半 => **新数组的容量 = 原数组容量的1.5倍** = 原数组容量 + 原数组容量 >> 1；
   2. **数据拷贝**。新数组容量大小确定之后，则需要进行数据拷贝操作。 `Arrays.copyOf()` 方法实际上就是创建一个新的数组，然后在方法的内部调用 `System.arraycopy()` 方法将原数组中的所有数据全部拷贝到新创建的数组中。


```java
private void ensureCapacityInternal(int minCapacity) {
  ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}

/**
 * 计算数组目前所需的最小容量
 */
private static int calculateCapacity(Object[] elementData, int minCapacity) {
  if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
    return Math.max(DEFAULT_CAPACITY, minCapacity);
  }
  return minCapacity;
}

/**
 * 确定数组容量，如果数组容量小于目前所需的最小容量，则需要进行扩容操作
 */
private void ensureExplicitCapacity(int minCapacity) {
  modCount++;

  // overflow-conscious code
  if (minCapacity - elementData.length > 0)
    grow(minCapacity);
}

/**
 * 扩容操作，
 * ① 新数组的容量 = 原数组容量 + 原数组容量 >> 1 = 原数组容量的1.5倍；
 * ② 新数组的容量大小确定之后，将原数组中的所有数据全部拷贝到新数组当中
 */
private void grow(int minCapacity) {
  // overflow-conscious code
  int oldCapacity = elementData.length;
  // 新数组的容量 = 原数组容量的1.5倍
  int newCapacity = oldCapacity + (oldCapacity >> 1);
  if (newCapacity - minCapacity < 0)
    newCapacity = minCapacity;
  if (newCapacity - MAX_ARRAY_SIZE > 0)
    newCapacity = hugeCapacity(minCapacity);
  // minCapacity is usually close to size, so this is a win:
  // 将原数组中的所有数据全部拷贝到新数组当中
  elementData = Arrays.copyOf(elementData, newCapacity);
}
```

### 获取元素

```java
public E get(int index) {
  // 索引合法性检查，如果索引不符合条件的话则抛出索引越界异常
  rangeCheck(index);
  // 直接返回数组指定位置元素
  return elementData(index);
}

E elementData(int index) {
  return (E) elementData[index];
}
```

### 设置指定位置元素为指定值

```java
public E set(int index, E element) {
  // 索引合法性检查，如果索引不符合条件的话则抛出索引越界异常
  rangeCheck(index);
  // 根据下标获取旧值
  E oldValue = elementData(index);
  // 设置新值
  elementData[index] = element;
  // 返回旧值
  return oldValue;
}
```

### 删除元素

#### 删除指定位置元素

1. **索引合法性检查**，如果索引 `index >= size` 的话，则抛出**索引越界异常**！
2. 获取指定位置元素（需要被删除的元素）；
3. 采用数组拷贝的方式实现将索引 index 后面的元素全部依次往前移动一位，覆盖 index 处的元素，该过程需要移动的元素个数 = size - index - 1;
4. 将将删除元素前数组中的最后一个元素置为 `null`，以便进行垃圾回收；
5. 元素个数减一 size--；

```java
public E remove(int index) {
  // 索引合法性检查，如果索引不符合条件的话则抛出索引越界异常
  rangeCheck(index);

  modCount++;
  // 获取指定位置元素（需要被删除的元素）
  E oldValue = elementData(index);
  // 计算删除指定位置元素时总共需要移动的元素个数
  int numMoved = size - index - 1;
  if (numMoved > 0)
    // 采用数组拷贝的方式实现将索引index后面的元素全部依次往前移动一位，覆盖index处的元素
    System.arraycopy(elementData, index+1, elementData, index, numMoved);
  // 将删除元素前数组中的最后一个元素置为空以便进行垃圾回收 && 数组中元素的个数减一
  elementData[--size] = null; // clear to let GC do its work
  // 返回被删除的元素
  return oldValue;
}
```

#### 删除指定元素

1. 遍历数组；
2. 找到第一个目标元素的索引位置；
3. `fastRemove()` 方法的实现方式与 `remove(index)` 方法一致，都是采用数组拷贝的方式实现将索引 index 后面的元素全部依次往前移动一位，覆盖 index 处的元素，该过程需要移动的元素个数 = size - index - 1；

```java
/**
 * 遍历数组，找到第一个目标元素，然后删除
 */
public boolean remove(Object o) {
  if (o == null) {
    for (int index = 0; index < size; index++)
      if (elementData[index] == null) {
        fastRemove(index);
        return true;
      }
  } else {
    for (int index = 0; index < size; index++)
      if (o.equals(elementData[index])) {
        fastRemove(index);
        return true;
      }
  }
  return false;
}

/**
 * 实现方式与和remove(index)一致，都是采用数组拷贝的方式实现将索引index后面的元素全部依次往前移动一位，覆盖index处的元素
 */
private void fastRemove(int index) {
  modCount++;
  int numMoved = size - index - 1;
  if (numMoved > 0)
    System.arraycopy(elementData, index+1, elementData, index, numMoved);
  elementData[--size] = null; // clear to let GC do its work
}
```

### 将数组容量调整为数组中的元素个数

该方法用于将数组容量调整为实际元素个数大小，当一个 ArrayList 元素个数不会发生改变时，可以调用该方法减少内存占用。

```java
public void trimToSize() {
  modCount++;
  if (size < elementData.length) {
    elementData = (size == 0)
      ? EMPTY_ELEMENTDATA
      : Arrays.copyOf(elementData, size);
  }
}
```

## RandomAccess接口

RandomAccess 接口是一个空接口，不包含任何方法，只是作为一个**标识**：

```java
package java.util;

public interface RandomAccess {
}
```

实现该接口的类说明其支持**快速随机访问**，比如 ArrayList 实现了该接口，说明 ArrayList 支持快速随机访问。**所谓快速随机访问指的是通过元素的下标即可快速获取元素对象，无需遍历**，而 LinkedList 则没有这个特性，元素获取必须遍历链表。

在 Collections 类的 `binarySearch(List<? extends Comparable<? super T>> list, T key)` 方法中，可以看到 RandomAccess 的应用：

```java
public static <T>
  int binarySearch(List<? extends Comparable<? super T>> list, T key) {
  if (list instanceof RandomAccess || list.size()<BINARYSEARCH_THRESHOLD)
    return Collections.indexedBinarySearch(list, key);
  else
    return Collections.iteratorBinarySearch(list, key);
}
```

当 list 实现了 RandomAccess 接口时，调用 `indexedBinarySearch()` 方法，否则调用 `iteratorBinarySearch()` 方法。所以当我们遍历集合时，如果集合实现了 RandomAccess 接口，优先选择普通 for 循环，其次 foreach；遍历未实现 RandomAccess 的接口，优先选择 iterator 遍历。
