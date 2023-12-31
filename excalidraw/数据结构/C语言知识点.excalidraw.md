---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==

# Text Elements
& ^WfLb33R1

用于获取变量地址 ^azh1kdDK

* ^der1wS8P

用于获取或修改指针所指变量的值 ^FFlw1ZEE

取地址运算符 ^g6CZOqaw

间接运算符/取消引用运算符 ^7qQQOyGL

指针声明的两种格式： ^nzejHrIR

1. 变量类型* 变量名 ^DwJTjJJ2

2. 变量类型 *变量名 ^ENXqQ7mA

变量值 ^W7a1YqFV

变量类型 + 名称 ^4yLectuM

变量地址 ^bKEdpHNM

变量 ^EB2OyIY6

5 ^d7fln294

int number ^dEQoiu6J

0x0060FF24 ^1ry2xY8L

0x0060FF24 ^WljWOMGy

int* ptr ^3B9bEynn

0x0060FF20 ^aLK0iuEz

int* ptr = &number ^CMnXABaC

将指针赋值为某变量的地址 => 将指针指向这个变量  ^iO77tesG

使用间接运算符星号（*）+ 指针可以访问或修改指针所指变量的值 ^ByxxUcvt

举个栗子： ^oEukpII8

此时，
变量number的值=5，&number的值为变量number的地址=0x0060FF24
指针变量ptr的值为变量number的地址=0x0060FF24，&ptr的值为指针变量ptr的地址=0x60FF20，*ptr的值为变量number的值=5
可以通过*ptr=100来修改变量number的值=100 ^0OJoM8l8

指针最大的作用：构造数据结构，使用指针将不连续的内存空间连接到一起 ^hgspO4AU

链表，它是非连续，非顺序的存储结构，由一些节点组成，每个节点包含两部分：数据域 + 指针域
        数据域用来存储相应的数据，指针域用来存储下一个节点的地址，这些节点通过指针相连后，就形成了链表 ^YJ2hxA87

struct Node {
    int val;
    struct Node* next;
}; ^u28UsMIa

链表节点的数据结构定义 ^mM001MFK

指针，用于存储下一个节点的地址，类型为Node节点类型 ^jRn6ABJ3

数据，类型为int类型 ^xH1hmDX0

举个栗子： ^pvMv1c7L

声明5个节点：struct Node a,b,c,d,e;
分别赋值：a.val = 1;b.val=2;c.val=3;d.val=4;e.val=5;
通过next指针将它们依次相连：a.next = &b; b.next = &c; c.next = &d; d.next=&e; e.next = null;
声明指针head指向节点a：struct Node* head = &a; ^ccIpjoX9

1 ^oYVieOZD

2 ^b7aCf7gw

3 ^hazYOGn4

4 ^OcM7FZdW

5 ^5RJgvz0f

head ^b9Aflzs4

a ^RadFkqcW

b ^Ol8eBFdM

c ^UA3NpcJL

d ^UKmpdZHs

e ^9H5lHAdm

指针 ^gcqtxDQi

函数的参数传递 ^vfn8cqVM

存在两种方式：值传递和地址传递 ^qg5o9mzb

这种方式使用类型为整型、浮点型、字符型...的变量、常量、数组元素作为函数参数，实际上是将实参的值复制到形参相应的存储单元中，
即形参和实参分别占用不同的存储单元中，这种传递方式称为"参数的值传递"。 ^YBSChb7R

值传递 ^mGtr4nni

值传递的特点是单向传递，传递给形参的是实参的值，在函数被调用时才会给形参分配内存，调用结束后，就会释放内存。
形参值的任何变化并不会改变实参的值。 ^KJITawo0

#include <stdio.h>

int main()
{
    int a = 3, b = 4;
    printf("swap函数调用前: a = %d，b = %d\n", a, b);
    swap(a, b);
    printf("swap函数调用后: a = %d，b = %d\n", a, b);
    return 0;
}

void swap(int m, int n)
{
    int temp = m;
    m = n;
    n = temp;
} ^HQhgxtjP

举个栗子： ^d4oTf4rj

输出结果：swap 函数调用前后变量 a 和 b 的值并未发生交换，依旧是 a = 3, b = 4;  ^PIQ6J37l

地址传递 ^wServNZF

这种方式使用数组名或者指针作为函数参数，传递的是该数组的首地址或指针的值（指针所指向变量的地址），形参自然接收到的就是地址，
即形参与实参共用实参的存储空间，在函数调用过程中，并不会为形参开启新的存储空间，对形参的操作就是对实参本身的操作。 ^47CQs8nK

举个栗子： ^ivO7lTwF

3 ^3GWYuqTv

4 ^8gIMg9ap

p2 ^daaBequC

p1 ^nnZaU0qr

4 ^4GGw2kGt

4 ^CMx1Mr4I

p2 ^gu1t5V0u

p1 ^XBl8KPXh

4 ^GuFDXZKY

3 ^vCjvBFlh

p2 ^miKM9MTQ

p1 ^NwPE04Dk

#include <stdio.h>

int main()
{
    int a = 3, b = 4;
    printf("swap函数调用前: a = %d，b = %d\n", a, b);
    swap(&a, &b);
    printf("swap函数调用后: a = %d，b = %d\n", a, b);
    return 0;
}

void swap(int* p1, int* p2)
{
    int temp = *p1;
    *p1 = *p2;
    *p2 = temp;
} ^eebtiNa0

输出结果：swap 函数调用前后变量 a 和 b 的值发生交换，变成 a = 4, b = 3;  ^QXMv9wPl

结构体 ^cdJLTIur

声明结构体类型 ^aZid6Ot3

struct Student {
    int id; // 序号
    char *name; // 姓名
    int age; // 年龄
    double score; // 分数
}; ^KPVCqKif

结构体标签 ^EsKtKLxS

成员列表 ^xY25jeBJ

struct {
    int id; // 序号
    char *name; // 姓名
    int age; // 年龄
    double score; // 分数
} stu1, stu2; ^hLF9aWuL

变量列表 ^9mEVyo5M

匿名结构体，一般使用一次时可以使用这种方式 ^ydXHTYbp

typedef struct {
    int id; // 序号
    char *name; // 姓名
    int age; // 年龄
    double score; // 分数
} Student; ^SV8xgQNi

这种方式比较优雅，推荐使用！ ^OKyP6qXT

声明结构体变量 ^sqhTouLT

struct Student stu = {
        .id = 1,
        .name = "小让",
        .age = 28,
        .score = 59.9
}; ^v0S4NlB7

可以使用typedef关键字为类型重新定义名称：
typedef struct Student Student;
那么在声明结构体变量不再需要带上struct关键字 ^Ytvbv9Nc

Student stu = {
        .id = 1,
        .name = "小让",
        .age = 28,
        .score = 59.9
}; ^cfZRdYeG

结构体嵌套 ^bqiMY2Lv

typedef struct {
    int year; // 年
    int month; // 月
    int day; // 日
} Birthday;

typedef struct {
    int id; // 序号
    char *name; // 姓名
    int age; // 年龄
    double score; // 分数
    Birthday birthday; // 生日
} Student; ^utOJu1QO

结构体变量赋值 ^B6NJlrqK

第一种方式： ^6G2xvZpy

Student stu1 = {1001, "xiaorang", 28, 59.9f, {1995, 7, 13}}; ^X9yF8P1P

第二种方式： ^4WkJLEwY

Student stu2 = {.id = 1002, .name = "sxy", .age = 28, .score = 99.9f, {.year = 1995, .month = 3, .day = 20}}; ^jOyQuPm5

访问结构体成员 ^Yu80O44s

void printStudentInfo(Student student) {
    printf("学号:%d\t姓名:%s\t年龄:%d\t成绩:%.2f\t生日:%d-%d-%d\n", student.id, student.name, student.age,
           student.score, student.birthday.year, student.birthday.month, student.birthday.day);
} ^JfxQ7oP9

使用结构体变量 + 点号（.） + 成员 ^gGaXf0Q4

结构体指针 ^G0yhZd5y

void printStudentInfo(Student *pStudent) {
    printf("学号:%d\t姓名:%s\t年龄:%d\t成绩:%.2f\t生日:%d-%d-%d\n", pStudent->id, pStudent->name, pStudent->age,
           pStudent->score, pStudent->birthday.year, pStudent->birthday.month, pStudent->birthday.day);
} ^YI5J52vc

使用结构体指针 + 箭头符号（->）+ 成员 ^sXjsNlhl

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.1",
	"elements": [
		{
			"type": "rectangle",
			"version": 475,
			"versionNonce": 339432467,
			"isDeleted": false,
			"id": "M7Hpxnh8lHm8RI2TlA8Qi",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 10,
			"angle": 0,
			"x": -1741.7595742066285,
			"y": 604.6219623840132,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 1192.8571428571431,
			"height": 1294.2857142857147,
			"seed": 324078645,
			"groupIds": [
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1692858101417,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 766,
			"versionNonce": 1183007251,
			"isDeleted": false,
			"id": "WfLb33R1",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1695.7985819296737,
			"y": 745.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 14.379989624023438,
			"height": 25,
			"seed": 562880351,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "9OZ3FP3vz7pZk8WKSSaI1",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "&",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "&",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 840,
			"versionNonce": 357701971,
			"isDeleted": false,
			"id": "azh1kdDK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1645.7985819296737,
			"y": 704.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 160,
			"height": 25,
			"seed": 1738786975,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "9OZ3FP3vz7pZk8WKSSaI1",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "用于获取变量地址",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "用于获取变量地址",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1927,
			"versionNonce": 1415030013,
			"isDeleted": false,
			"id": "9OZ3FP3vz7pZk8WKSSaI1",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1680.3447275101566,
			"y": 733.3413491659035,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 30.351692456951582,
			"height": 17.92245282769619,
			"seed": 562175249,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858194880,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WfLb33R1",
				"focus": -1.172461036977641,
				"gap": 11.804259125307453
			},
			"endBinding": {
				"elementId": "azh1kdDK",
				"focus": 0.8527522582833931,
				"gap": 4.194453123531275
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					30.351692456951582,
					-17.92245282769619
				]
			]
		},
		{
			"type": "text",
			"version": 743,
			"versionNonce": 532190771,
			"isDeleted": false,
			"id": "der1wS8P",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1389.7985819296737,
			"y": 746.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 10.319992065429688,
			"height": 25,
			"seed": 1948944031,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "15i6MvEim_rtM4R3qdu7D",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "*",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "*",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 929,
			"versionNonce": 639165811,
			"isDeleted": false,
			"id": "FFlw1ZEE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1347.8820975238361,
			"y": 703.7844364264902,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 300,
			"height": 25,
			"seed": 428965055,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "15i6MvEim_rtM4R3qdu7D",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "用于获取或修改指针所指变量的值",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "用于获取或修改指针所指变量的值",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 765,
			"versionNonce": 429810867,
			"isDeleted": false,
			"id": "g6CZOqaw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1711.7985819296737,
			"y": 787.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 120,
			"height": 25,
			"seed": 1627435633,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "取地址运算符",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "取地址运算符",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 800,
			"versionNonce": 1014322771,
			"isDeleted": false,
			"id": "7qQQOyGL",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1385.7985819296737,
			"y": 787.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 250,
			"height": 25,
			"seed": 1349365361,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "间接运算符/取消引用运算符",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "间接运算符/取消引用运算符",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "freedraw",
			"version": 730,
			"versionNonce": 1992102899,
			"isDeleted": false,
			"id": "3BfP0CB_I-Mej5bzghvC2",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": -1709.7985819296737,
			"y": 805.1456082912109,
			"strokeColor": "#ff8787",
			"backgroundColor": "#ced4da",
			"width": 109,
			"height": 8,
			"seed": 466572063,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					4,
					-1
				],
				[
					9,
					-2
				],
				[
					16,
					-3
				],
				[
					25,
					-4
				],
				[
					31,
					-5
				],
				[
					37,
					-6
				],
				[
					40,
					-7
				],
				[
					42,
					-7
				],
				[
					43,
					-7
				],
				[
					45,
					-7
				],
				[
					48,
					-8
				],
				[
					53,
					-8
				],
				[
					58,
					-8
				],
				[
					60,
					-8
				],
				[
					62,
					-8
				],
				[
					63,
					-8
				],
				[
					65,
					-8
				],
				[
					73,
					-8
				],
				[
					82,
					-8
				],
				[
					89,
					-8
				],
				[
					96,
					-8
				],
				[
					102,
					-8
				],
				[
					105,
					-8
				],
				[
					108,
					-8
				],
				[
					109,
					-8
				],
				[
					109,
					-8
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 759,
			"versionNonce": 947658131,
			"isDeleted": false,
			"id": "eYzd08_DhTw_gFyoXcKY3",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": -1387.7985819296737,
			"y": 802.1456082912109,
			"strokeColor": "#ff8787",
			"backgroundColor": "#ced4da",
			"width": 239,
			"height": 4,
			"seed": 1527798975,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1,
					0
				],
				[
					2,
					-1
				],
				[
					5,
					-2
				],
				[
					14,
					-3
				],
				[
					25,
					-3
				],
				[
					38,
					-3
				],
				[
					52,
					-3
				],
				[
					65,
					-3
				],
				[
					71,
					-3
				],
				[
					73,
					-3
				],
				[
					74,
					-3
				],
				[
					75,
					-3
				],
				[
					82,
					-3
				],
				[
					91,
					-3
				],
				[
					99,
					-3
				],
				[
					105,
					-2
				],
				[
					110,
					-2
				],
				[
					114,
					-2
				],
				[
					118,
					-2
				],
				[
					123,
					-2
				],
				[
					127,
					-2
				],
				[
					132,
					-2
				],
				[
					135,
					-2
				],
				[
					138,
					-2
				],
				[
					142,
					-2
				],
				[
					146,
					-2
				],
				[
					150,
					-2
				],
				[
					156,
					-2
				],
				[
					163,
					-2
				],
				[
					171,
					-2
				],
				[
					178,
					-4
				],
				[
					184,
					-4
				],
				[
					190,
					-4
				],
				[
					196,
					-4
				],
				[
					200,
					-4
				],
				[
					203,
					-4
				],
				[
					205,
					-4
				],
				[
					206,
					-4
				],
				[
					208,
					-4
				],
				[
					212,
					-4
				],
				[
					217,
					-4
				],
				[
					220,
					-4
				],
				[
					222,
					-4
				],
				[
					223,
					-4
				],
				[
					225,
					-4
				],
				[
					227,
					-4
				],
				[
					230,
					-4
				],
				[
					233,
					-4
				],
				[
					234,
					-4
				],
				[
					235,
					-4
				],
				[
					237,
					-4
				],
				[
					238,
					-4
				],
				[
					239,
					-4
				],
				[
					239,
					-4
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 879,
			"versionNonce": 753464115,
			"isDeleted": false,
			"id": "nzejHrIR",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1711.7985819296737,
			"y": 857.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 200,
			"height": 25,
			"seed": 334227737,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "指针声明的两种格式：",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "指针声明的两种格式：",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 860,
			"versionNonce": 1416238291,
			"isDeleted": false,
			"id": "DwJTjJJ2",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1609.7985819296737,
			"y": 890.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 181.21998596191406,
			"height": 25,
			"seed": 1705085591,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "1. 变量类型* 变量名",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1. 变量类型* 变量名",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 861,
			"versionNonce": 1586889331,
			"isDeleted": false,
			"id": "ENXqQ7mA",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1612.7985819296737,
			"y": 926.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 190.03997802734375,
			"height": 25,
			"seed": 1356741881,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "2. 变量类型 *变量名",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2. 变量类型 *变量名",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 1253,
			"versionNonce": 1144208403,
			"isDeleted": false,
			"id": "PhGanLFgAbum9-l9RJCwk",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1193.8767069296737,
			"y": 862.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 148,
			"height": 52,
			"seed": 124889399,
			"groupIds": [
				"Wb04Qr5lpECxSIfIWAnOh",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "W7a1YqFV"
				},
				{
					"id": "1dPnW6N3ewVRMeB4SyrtW",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 1233,
			"versionNonce": 1321964371,
			"isDeleted": false,
			"id": "W7a1YqFV",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1149.8767069296737,
			"y": 875.6456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 60,
			"height": 25,
			"seed": 540900631,
			"groupIds": [
				"Wb04Qr5lpECxSIfIWAnOh",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "变量值",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "PhGanLFgAbum9-l9RJCwk",
			"originalText": "变量值",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1285,
			"versionNonce": 1027846387,
			"isDeleted": false,
			"id": "4yLectuM",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1192.5329569296737,
			"y": 832.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 152.5,
			"height": 25,
			"seed": 776646649,
			"groupIds": [
				"Wb04Qr5lpECxSIfIWAnOh",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "变量类型 + 名称",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "变量类型 + 名称",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1258,
			"versionNonce": 237443731,
			"isDeleted": false,
			"id": "bKEdpHNM",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1159.8767069296737,
			"y": 927.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 80,
			"height": 25,
			"seed": 822047929,
			"groupIds": [
				"Wb04Qr5lpECxSIfIWAnOh",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "变量地址",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "变量地址",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 960,
			"versionNonce": 1848397875,
			"isDeleted": false,
			"id": "EB2OyIY6",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1325.7985819296737,
			"y": 883.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 40,
			"height": 25,
			"seed": 429294967,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "1dPnW6N3ewVRMeB4SyrtW",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "变量",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "变量",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 2466,
			"versionNonce": 287966744,
			"isDeleted": false,
			"id": "1dPnW6N3ewVRMeB4SyrtW",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1275.7985819296737,
			"y": 896.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 74,
			"height": 8,
			"seed": 2090034553,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700711776171,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "EB2OyIY6",
				"gap": 10,
				"focus": 0.2552995391705069
			},
			"endBinding": {
				"elementId": "PhGanLFgAbum9-l9RJCwk",
				"gap": 7.921875,
				"focus": 0.2604829093799682
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					74,
					-8
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1520,
			"versionNonce": 838318355,
			"isDeleted": false,
			"id": "-JiF5pdgekAXGiboSj_xd",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1068.7985819296737,
			"y": 1137.6456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 148,
			"height": 52,
			"seed": 733225433,
			"groupIds": [
				"2hICn_lVi2KuL4B3H7cwf",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "d7fln294"
				},
				{
					"id": "4Bqz2rOH4c-vK7lx13Rt1",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 1516,
			"versionNonce": 1925855768,
			"isDeleted": false,
			"id": "d7fln294",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1000.9785746054549,
			"y": 1151.1456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 12.3599853515625,
			"height": 25,
			"seed": 2086960825,
			"groupIds": [
				"2hICn_lVi2KuL4B3H7cwf",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776173,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "5",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "-JiF5pdgekAXGiboSj_xd",
			"originalText": "5",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1575,
			"versionNonce": 1302154739,
			"isDeleted": false,
			"id": "dEQoiu6J",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1042.1813944296737,
			"y": 1107.6456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 98.07991027832031,
			"height": 25,
			"seed": 347488153,
			"groupIds": [
				"2hICn_lVi2KuL4B3H7cwf",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "int number",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "int number",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1548,
			"versionNonce": 2068125587,
			"isDeleted": false,
			"id": "1ry2xY8L",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1044.7204569296737,
			"y": 1202.6456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 129.07992553710938,
			"height": 25,
			"seed": 1121772665,
			"groupIds": [
				"2hICn_lVi2KuL4B3H7cwf",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "0x0060FF24",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0x0060FF24",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 1548,
			"versionNonce": 1619176755,
			"isDeleted": false,
			"id": "5VNVeuCxmZ8x9_X-ZODRw",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1372.7985819296737,
			"y": 1137.6456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 148,
			"height": 52,
			"seed": 177719927,
			"groupIds": [
				"Hvv2onk065XRe5la8HOzv",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "WljWOMGy"
				},
				{
					"id": "4Bqz2rOH4c-vK7lx13Rt1",
					"type": "arrow"
				},
				{
					"id": "o2GASnHlQEQapQhqYQTA4",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 1544,
			"versionNonce": 810403864,
			"isDeleted": false,
			"id": "WljWOMGy",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1363.3385446982284,
			"y": 1151.1456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 129.07992553710938,
			"height": 25,
			"seed": 1212507031,
			"groupIds": [
				"Hvv2onk065XRe5la8HOzv",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776174,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "0x0060FF24",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "5VNVeuCxmZ8x9_X-ZODRw",
			"originalText": "0x0060FF24",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1608,
			"versionNonce": 1696922547,
			"isDeleted": false,
			"id": "3B9bEynn",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1336.1423319296737,
			"y": 1107.6456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 75.09992980957031,
			"height": 25,
			"seed": 1797445815,
			"groupIds": [
				"Hvv2onk065XRe5la8HOzv",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "int* ptr",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "int* ptr",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1577,
			"versionNonce": 688983379,
			"isDeleted": false,
			"id": "aLK0iuEz",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1348.6228006796737,
			"y": 1202.6456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 130.03993225097656,
			"height": 25,
			"seed": 2027203031,
			"groupIds": [
				"Hvv2onk065XRe5la8HOzv",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "0x0060FF20",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "0x0060FF20",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 2407,
			"versionNonce": 1868862488,
			"isDeleted": false,
			"id": "4Bqz2rOH4c-vK7lx13Rt1",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1212.7985819296737,
			"y": 1164.1456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 133,
			"height": 0,
			"seed": 1955808409,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700711776173,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "5VNVeuCxmZ8x9_X-ZODRw",
				"gap": 12,
				"focus": 0.019230769230769232
			},
			"endBinding": {
				"elementId": "-JiF5pdgekAXGiboSj_xd",
				"gap": 11,
				"focus": -0.019230769230769232
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					133,
					0
				]
			]
		},
		{
			"type": "text",
			"version": 927,
			"versionNonce": 483792019,
			"isDeleted": false,
			"id": "CMnXABaC",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1653.7438944296737,
			"y": 1154.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 184.87985229492188,
			"height": 25,
			"seed": 817606103,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "o2GASnHlQEQapQhqYQTA4",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "int* ptr = &number",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "int* ptr = &number",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 2512,
			"versionNonce": 2024828440,
			"isDeleted": false,
			"id": "o2GASnHlQEQapQhqYQTA4",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1455.8093546347518,
			"y": 1164.9833331844293,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 68.01077270507812,
			"height": 0.8165705348637857,
			"seed": 1695033239,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700711776173,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "CMnXABaC",
				"gap": 13.0546875,
				"focus": -0.026603972878088196
			},
			"endBinding": {
				"elementId": "5VNVeuCxmZ8x9_X-ZODRw",
				"gap": 15,
				"focus": 0.020359019264448337
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					68.01077270507812,
					-0.8165705348637857
				]
			]
		},
		{
			"type": "text",
			"version": 970,
			"versionNonce": 1073699187,
			"isDeleted": false,
			"id": "iO77tesG",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1697.0095194296737,
			"y": 989.1456082912109,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 472.03997802734375,
			"height": 25,
			"seed": 1210728569,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "将指针赋值为某变量的地址 => 将指针指向这个变量 ",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "将指针赋值为某变量的地址 => 将指针指向这个变量 ",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 956,
			"versionNonce": 2086253331,
			"isDeleted": false,
			"id": "ByxxUcvt",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1690.6662895751674,
			"y": 1032.1702586084828,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 592.8200073242188,
			"height": 25,
			"seed": 1259834681,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "使用间接运算符星号（*）+ 指针可以访问或修改指针所指变量的值",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "使用间接运算符星号（*）+ 指针可以访问或修改指针所指变量的值",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 835,
			"versionNonce": 460839091,
			"isDeleted": false,
			"id": "oEukpII8",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1700.7985819296737,
			"y": 1081.1456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 100,
			"height": 25,
			"seed": 2111533335,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "举个栗子：",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "举个栗子：",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1360,
			"versionNonce": 721439315,
			"isDeleted": false,
			"id": "0OJoM8l8",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1654.9860819296737,
			"y": 1244.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 1170.8394775390625,
			"height": 100,
			"seed": 2033879191,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "此时，\n变量number的值=5，&number的值为变量number的地址=0x0060FF24\n指针变量ptr的值为变量number的地址=0x0060FF24，&ptr的值为指针变量ptr的地址=0x60FF20，*ptr的值为变量number的值=5\n可以通过*ptr=100来修改变量number的值=100",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "此时，\n变量number的值=5，&number的值为变量number的地址=0x0060FF24\n指针变量ptr的值为变量number的地址=0x0060FF24，&ptr的值为指针变量ptr的地址=0x60FF20，*ptr的值为变量number的值=5\n可以通过*ptr=100来修改变量number的值=100",
			"lineHeight": 1.25,
			"baseline": 93
		},
		{
			"type": "text",
			"version": 853,
			"versionNonce": 1070172147,
			"isDeleted": false,
			"id": "hgspO4AU",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1713.7985819296737,
			"y": 1373.1456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 660,
			"height": 25,
			"seed": 1089987513,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "指针最大的作用：构造数据结构，使用指针将不连续的内存空间连接到一起",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "指针最大的作用：构造数据结构，使用指针将不连续的内存空间连接到一起",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1044,
			"versionNonce": 265949587,
			"isDeleted": false,
			"id": "YJ2hxA87",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1705.7985819296737,
			"y": 1413.1456082912102,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 1020,
			"height": 50,
			"seed": 510201207,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "链表，它是非连续，非顺序的存储结构，由一些节点组成，每个节点包含两部分：数据域 + 指针域\n        数据域用来存储相应的数据，指针域用来存储下一个节点的地址，这些节点通过指针相连后，就形成了链表",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "链表，它是非连续，非顺序的存储结构，由一些节点组成，每个节点包含两部分：数据域 + 指针域\n        数据域用来存储相应的数据，指针域用来存储下一个节点的地址，这些节点通过指针相连后，就形成了链表",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "freedraw",
			"version": 850,
			"versionNonce": 1281910579,
			"isDeleted": false,
			"id": "PFd3Q0NoYjubm4lTexFI0",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": -982.2985819296737,
			"y": 1426.1456082912098,
			"strokeColor": "#ff8787",
			"backgroundColor": "#ced4da",
			"width": 139,
			"height": 13,
			"seed": 476450585,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					9
				],
				[
					0.5815899581589958,
					9
				],
				[
					1.1631799163179917,
					5.75
				],
				[
					2.907949790794979,
					2.5
				],
				[
					8.142259414225942,
					-0.75
				],
				[
					14.539748953974897,
					-0.75
				],
				[
					22.10041841004184,
					-0.75
				],
				[
					30.242677824267783,
					-0.75
				],
				[
					37.80334728033473,
					-0.75
				],
				[
					41.29288702928871,
					-0.75
				],
				[
					42.45606694560669,
					-0.75
				],
				[
					43.03765690376569,
					-0.75
				],
				[
					43.61924686192469,
					-0.75
				],
				[
					47.69037656903766,
					-0.75
				],
				[
					52.92468619246862,
					-0.75
				],
				[
					57.57740585774059,
					-0.75
				],
				[
					61.06694560669456,
					2.5
				],
				[
					63.97489539748954,
					2.5
				],
				[
					66.30125523012552,
					2.5
				],
				[
					68.6276150627615,
					2.5
				],
				[
					71.5355648535565,
					2.5
				],
				[
					73.86192468619247,
					2.5
				],
				[
					76.76987447698745,
					2.5
				],
				[
					78.51464435146444,
					2.5
				],
				[
					80.25941422594143,
					2.5
				],
				[
					82.58577405857741,
					2.5
				],
				[
					84.91213389121339,
					2.5
				],
				[
					87.23849372384937,
					2.5
				],
				[
					90.72803347280335,
					2.5
				],
				[
					94.79916317991632,
					2.5
				],
				[
					99.4518828451883,
					2.5
				],
				[
					103.52301255230125,
					-4
				],
				[
					107.01255230125523,
					-4
				],
				[
					110.50209205020921,
					-4
				],
				[
					113.99163179916319,
					-4
				],
				[
					116.31799163179917,
					-4
				],
				[
					118.06276150627616,
					-4
				],
				[
					119.22594142259415,
					-4
				],
				[
					119.80753138075315,
					-4
				],
				[
					120.97071129707113,
					-4
				],
				[
					123.29707112970712,
					-4
				],
				[
					126.2050209205021,
					-4
				],
				[
					127.94979079497908,
					-4
				],
				[
					129.11297071129707,
					-4
				],
				[
					129.69456066945608,
					-4
				],
				[
					130.85774058577405,
					-4
				],
				[
					132.02092050209205,
					-4
				],
				[
					133.76569037656904,
					-4
				],
				[
					135.51046025104603,
					-4
				],
				[
					136.092050209205,
					-4
				],
				[
					136.67364016736403,
					-4
				],
				[
					137.836820083682,
					-4
				],
				[
					138.418410041841,
					-4
				],
				[
					139,
					-4
				],
				[
					139,
					-4
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1025,
			"versionNonce": 1004210387,
			"isDeleted": false,
			"id": "u28UsMIa",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1384.7985819296737,
			"y": 1479.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 228.03982543945312,
			"height": 100,
			"seed": 493745655,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "e8P0TNfNTrdEjiGU6iC-o",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "struct Node {\n    int val;\n    struct Node* next;\n};",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "struct Node {\n    int val;\n    struct Node* next;\n};",
			"lineHeight": 1.25,
			"baseline": 93
		},
		{
			"type": "text",
			"version": 794,
			"versionNonce": 318189587,
			"isDeleted": false,
			"id": "mM001MFK",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -1702.7985819296737,
			"y": 1498.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 220,
			"height": 25,
			"seed": 1570264247,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "e8P0TNfNTrdEjiGU6iC-o",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "链表节点的数据结构定义",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "链表节点的数据结构定义",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1864,
			"versionNonce": 64296957,
			"isDeleted": false,
			"id": "e8P0TNfNTrdEjiGU6iC-o",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1473.7985819296737,
			"y": 1505.6840593664763,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 75,
			"height": 13.891491466165462,
			"seed": 1946235095,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858194882,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "mM001MFK",
				"focus": -0.8213956739695479,
				"gap": 9
			},
			"endBinding": {
				"elementId": "u28UsMIa",
				"focus": -0.1669909426367056,
				"gap": 14
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					75,
					13.891491466165462
				]
			]
		},
		{
			"type": "text",
			"version": 879,
			"versionNonce": 463217907,
			"isDeleted": false,
			"id": "jRn6ABJ3",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1151.7985819296737,
			"y": 1570.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 506.27996826171875,
			"height": 25,
			"seed": 741658327,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "P4hOvpoz9XBQLzvklJ3lE",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "指针，用于存储下一个节点的地址，类型为Node节点类型",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "指针，用于存储下一个节点的地址，类型为Node节点类型",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 755,
			"versionNonce": 1073202227,
			"isDeleted": false,
			"id": "xH1hmDX0",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1138.7985819296737,
			"y": 1476.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 185.0199737548828,
			"height": 25,
			"seed": 1040552375,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "5zFB6SQS919MIiCzYVdiB",
					"type": "arrow"
				}
			],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "数据，类型为int类型",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "数据，类型为int类型",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1248,
			"versionNonce": 1489703005,
			"isDeleted": false,
			"id": "5zFB6SQS919MIiCzYVdiB",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1150.7985819296737,
			"y": 1488.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 113,
			"height": 31,
			"seed": 1198388665,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858194882,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "xH1hmDX0",
				"focus": 0.7736162411366638,
				"gap": 12
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-113,
					31
				]
			]
		},
		{
			"type": "arrow",
			"version": 1226,
			"versionNonce": 555941053,
			"isDeleted": false,
			"id": "P4hOvpoz9XBQLzvklJ3lE",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1162.7985819296737,
			"y": 1588.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 44,
			"height": 32,
			"seed": 181904695,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858194882,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jRn6ABJ3",
				"focus": -1.0051533562696726,
				"gap": 11
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-44,
					-32
				]
			]
		},
		{
			"type": "text",
			"version": 776,
			"versionNonce": 567710387,
			"isDeleted": false,
			"id": "pvMv1c7L",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1700.7985819296737,
			"y": 1599.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 100,
			"height": 25,
			"seed": 319937815,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "举个栗子：",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "举个栗子：",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 1107,
			"versionNonce": 695714899,
			"isDeleted": false,
			"id": "ccIpjoX9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1618.7985819296737,
			"y": 1643.1456082912098,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 918.9396362304688,
			"height": 100,
			"seed": 1427376535,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194852,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "声明5个节点：struct Node a,b,c,d,e;\n分别赋值：a.val = 1;b.val=2;c.val=3;d.val=4;e.val=5;\n通过next指针将它们依次相连：a.next = &b; b.next = &c; c.next = &d; d.next=&e; e.next = null;\n声明指针head指向节点a：struct Node* head = &a;",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "声明5个节点：struct Node a,b,c,d,e;\n分别赋值：a.val = 1;b.val=2;c.val=3;d.val=4;e.val=5;\n通过next指针将它们依次相连：a.next = &b; b.next = &c; c.next = &d; d.next=&e; e.next = null;\n声明指针head指向节点a：struct Node* head = &a;",
			"lineHeight": 1.25,
			"baseline": 93
		},
		{
			"type": "rectangle",
			"version": 742,
			"versionNonce": 1888986237,
			"isDeleted": false,
			"id": "0RvNvoqgFKUaem8kJP_Rs",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1594.3840089498954,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59,
			"height": 30,
			"seed": 564461239,
			"groupIds": [
				"BFxp9OOyXZLaUWJ-1cCfx",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "oYVieOZD"
				},
				{
					"id": "y_N4IedhyILU5WgqdeYaj",
					"type": "arrow"
				}
			],
			"updated": 1692858201370,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 672,
			"versionNonce": 687668248,
			"isDeleted": false,
			"id": "oYVieOZD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1567.0520082174735,
			"y": 1809.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 4.33599853515625,
			"height": 20,
			"seed": 1324388025,
			"groupIds": [
				"BFxp9OOyXZLaUWJ-1cCfx",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776175,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "1",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "0RvNvoqgFKUaem8kJP_Rs",
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 790,
			"versionNonce": 378014941,
			"isDeleted": false,
			"id": "FwKhSi-nhodQAXtPrBo5x",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1535.4793852572466,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 26,
			"height": 30,
			"seed": 912554423,
			"groupIds": [
				"BFxp9OOyXZLaUWJ-1cCfx",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858201370,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 765,
			"versionNonce": 2138143603,
			"isDeleted": false,
			"id": "e5YApYyOvT8SZv2SXsBzR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1483.4823326247301,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59,
			"height": 30,
			"seed": 1112755673,
			"groupIds": [
				"aMiz1YQM4wGt0Bk9MuEBZ",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "b7aCf7gw"
				},
				{
					"id": "p-2Zkxn3jNEDUHjQvmlpR",
					"type": "arrow"
				}
			],
			"updated": 1692858201370,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 696,
			"versionNonce": 104616728,
			"isDeleted": false,
			"id": "b7aCf7gw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1459.678331770238,
			"y": 1809.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 11.391998291015625,
			"height": 20,
			"seed": 1312697017,
			"groupIds": [
				"aMiz1YQM4wGt0Bk9MuEBZ",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776176,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "2",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "e5YApYyOvT8SZv2SXsBzR",
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 813,
			"versionNonce": 221746451,
			"isDeleted": false,
			"id": "7GO8XQYHNrSbTYxHYFq95",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1424.577708932081,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 26,
			"height": 30,
			"seed": 1450863513,
			"groupIds": [
				"aMiz1YQM4wGt0Bk9MuEBZ",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858201370,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 764,
			"versionNonce": 864434589,
			"isDeleted": false,
			"id": "VQSRnypnkRkvtLXuegZ6w",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1372.580656299565,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59,
			"height": 30,
			"seed": 1445336791,
			"groupIds": [
				"IXtHJ7RAvkWqrVSPq-uNM",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "hazYOGn4"
				},
				{
					"id": "snC4HRMct6hYLTHLI7YLB",
					"type": "arrow"
				}
			],
			"updated": 1692858201370,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 698,
			"versionNonce": 637995544,
			"isDeleted": false,
			"id": "hazYOGn4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1348.52865434644,
			"y": 1809.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 10.89599609375,
			"height": 20,
			"seed": 957031415,
			"groupIds": [
				"IXtHJ7RAvkWqrVSPq-uNM",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776177,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "3",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "VQSRnypnkRkvtLXuegZ6w",
			"originalText": "3",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 811,
			"versionNonce": 1697054205,
			"isDeleted": false,
			"id": "yEhsCInZ57DfJCCQRG3pa",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1313.6760326069157,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 26,
			"height": 30,
			"seed": 1376881943,
			"groupIds": [
				"IXtHJ7RAvkWqrVSPq-uNM",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858201370,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 778,
			"versionNonce": 592292947,
			"isDeleted": false,
			"id": "aqymJ4vl0rLbge8ybtL5G",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1261.6789799743995,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59,
			"height": 30,
			"seed": 1272705689,
			"groupIds": [
				"RSYPeYEtrIkUWMoOmkgoN",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "OcM7FZdW"
				},
				{
					"id": "3eh24aRy8pZjcf1HyMRFc",
					"type": "arrow"
				}
			],
			"updated": 1692858201370,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 709,
			"versionNonce": 664346904,
			"isDeleted": false,
			"id": "OcM7FZdW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1237.298975091587,
			"y": 1809.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 10.239990234375,
			"height": 20,
			"seed": 282343289,
			"groupIds": [
				"RSYPeYEtrIkUWMoOmkgoN",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776178,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "4",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "aqymJ4vl0rLbge8ybtL5G",
			"originalText": "4",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 824,
			"versionNonce": 1276815859,
			"isDeleted": false,
			"id": "pIWSr6pqV9UcmsJoLO1vn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1202.7743562817504,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 26,
			"height": 30,
			"seed": 472965209,
			"groupIds": [
				"RSYPeYEtrIkUWMoOmkgoN",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858201370,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 783,
			"versionNonce": 397632189,
			"isDeleted": false,
			"id": "8fVt6K0q4ZGp47L5IjaHW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1150.7773036492342,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59,
			"height": 30,
			"seed": 524913367,
			"groupIds": [
				"mJnGMmSfrkZz_kYL-LPZX",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "5RJgvz0f"
				},
				{
					"id": "kE8UarBjV__cWfaTsNivw",
					"type": "arrow"
				}
			],
			"updated": 1692858201370,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 714,
			"versionNonce": 598644760,
			"isDeleted": false,
			"id": "5RJgvz0f",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1126.2212962639803,
			"y": 1809.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 9.887985229492188,
			"height": 20,
			"seed": 1973426167,
			"groupIds": [
				"mJnGMmSfrkZz_kYL-LPZX",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776180,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "5",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "8fVt6K0q4ZGp47L5IjaHW",
			"originalText": "5",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 831,
			"versionNonce": 1477575453,
			"isDeleted": false,
			"id": "OCmPKa0664U6Gvm6p3SLP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1091.8726799565852,
			"y": 1804.1270083582674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 26,
			"height": 30,
			"seed": 401080599,
			"groupIds": [
				"mJnGMmSfrkZz_kYL-LPZX",
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858201370,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1124,
			"versionNonce": 2100672792,
			"isDeleted": false,
			"id": "p-2Zkxn3jNEDUHjQvmlpR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1518.2180415646417,
			"y": 1819.9511678770225,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 33.73570893991155,
			"height": 0.30068143027347105,
			"seed": 964403511,
			"groupIds": [
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776176,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "e5YApYyOvT8SZv2SXsBzR",
				"gap": 1,
				"focus": -0.016486747394236712
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					33.73570893991155,
					-0.30068143027347105
				]
			]
		},
		{
			"type": "arrow",
			"version": 1108,
			"versionNonce": 1181888536,
			"isDeleted": false,
			"id": "snC4HRMct6hYLTHLI7YLB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1407.9260414084292,
			"y": 1819.9116273137945,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 34.34538510886432,
			"height": 0.45191296195866926,
			"seed": 579143097,
			"groupIds": [
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776177,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "VQSRnypnkRkvtLXuegZ6w",
				"gap": 1,
				"focus": -0.10643559275665086
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					34.34538510886432,
					0.45191296195866926
				]
			]
		},
		{
			"type": "arrow",
			"version": 1089,
			"versionNonce": 701368088,
			"isDeleted": false,
			"id": "3eh24aRy8pZjcf1HyMRFc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1296.6132373704681,
			"y": 1819.1451430078425,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 33.93425739606869,
			"height": 0.317142592486789,
			"seed": 831178551,
			"groupIds": [
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776178,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "aqymJ4vl0rLbge8ybtL5G",
				"gap": 1,
				"focus": -0.04060854383640175
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					33.93425739606869,
					0.317142592486789
				]
			]
		},
		{
			"type": "arrow",
			"version": 1079,
			"versionNonce": 2131050008,
			"isDeleted": false,
			"id": "kE8UarBjV__cWfaTsNivw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1185.4275007193353,
			"y": 1820.0090302675455,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 33.65019707010106,
			"height": 0,
			"seed": 757504857,
			"groupIds": [
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776179,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "8fVt6K0q4ZGp47L5IjaHW",
				"gap": 1,
				"focus": -0.05880146061854248
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					33.65019707010106,
					0
				]
			]
		},
		{
			"type": "text",
			"version": 619,
			"versionNonce": 91789427,
			"isDeleted": false,
			"id": "b9Aflzs4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1558.8898014909369,
			"y": 1867.4177183463019,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 36.431976318359375,
			"height": 20,
			"seed": 2142128505,
			"groupIds": [
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "y_N4IedhyILU5WgqdeYaj",
					"type": "arrow"
				}
			],
			"updated": 1692858201370,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "head",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "head",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "arrow",
			"version": 1568,
			"versionNonce": 1339859480,
			"isDeleted": false,
			"id": "y_N4IedhyILU5WgqdeYaj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1552.3417438207184,
			"y": 1862.0548865849216,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 6.302609730251106,
			"height": 20.27841487169121,
			"seed": 87092185,
			"groupIds": [
				"JRGNRGYYNwIhitjaRA_EW",
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776175,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "b9Aflzs4",
				"gap": 5.362831761380221,
				"focus": -0.3034420229701562
			},
			"endBinding": {
				"elementId": "0RvNvoqgFKUaem8kJP_Rs",
				"gap": 7.649463354963018,
				"focus": 0.023414437321507522
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-6.302609730251106,
					-20.27841487169121
				]
			]
		},
		{
			"type": "text",
			"version": 602,
			"versionNonce": 988002771,
			"isDeleted": false,
			"id": "RadFkqcW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1559.9038950725162,
			"y": 1785.610189505465,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 10.6719970703125,
			"height": 20,
			"seed": 181123033,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "a",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "a",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 591,
			"versionNonce": 1888683891,
			"isDeleted": false,
			"id": "Ol8eBFdM",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1446.9550030759715,
			"y": 1785.2070130116351,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 8.12799072265625,
			"height": 20,
			"seed": 376232537,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "b",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "b",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 598,
			"versionNonce": 2051514643,
			"isDeleted": false,
			"id": "UA3NpcJL",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1335.492973742577,
			"y": 1784.3247927064829,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 8.031997680664062,
			"height": 20,
			"seed": 1095308729,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "c",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "c",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 600,
			"versionNonce": 1098385075,
			"isDeleted": false,
			"id": "UKmpdZHs",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1220.1040638920624,
			"y": 1786.0513100608548,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 9.103988647460938,
			"height": 20,
			"seed": 1343465079,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "d",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "d",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 593,
			"versionNonce": 1019918419,
			"isDeleted": false,
			"id": "9H5lHAdm",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1120.1067956931367,
			"y": 1784.188710232541,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 8.751998901367188,
			"height": 20,
			"seed": 1862221303,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "e",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "e",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 614,
			"versionNonce": 1242969587,
			"isDeleted": false,
			"id": "bmZtnDoDlqKzV1ZJwCfv6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1631.2140684034844,
			"y": 1627.1481229150047,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 866.5781499429113,
			"height": 128.2601436348143,
			"seed": 1026543545,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "K87vKLk7XifAtQGiSkvic",
					"type": "arrow"
				}
			],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "arrow",
			"version": 950,
			"versionNonce": 2006917981,
			"isDeleted": false,
			"id": "K87vKLk7XifAtQGiSkvic",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -1652.5907590092866,
			"y": 1701.966540035313,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 61.66353059366065,
			"height": 113.46089629233575,
			"seed": 967960249,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858194883,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "bmZtnDoDlqKzV1ZJwCfv6",
				"focus": 0.980060621553518,
				"gap": 21.376690605802196
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-32.88721631661906,
					80.57367997571669
				],
				[
					28.776314277041593,
					113.46089629233575
				]
			]
		},
		{
			"type": "arrow",
			"version": 1542,
			"versionNonce": 900313117,
			"isDeleted": false,
			"id": "15i6MvEim_rtM4R3qdu7D",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1382.552406961709,
			"y": 739.5067801559317,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 29.036871896755883,
			"height": 26.75141351697914,
			"seed": 1026560271,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858194883,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "der1wS8P",
				"focus": -0.9978342791824757,
				"gap": 6.638828135279255
			},
			"endBinding": {
				"elementId": "FFlw1ZEE",
				"focus": 0.9749100684535305,
				"gap": 5.6334375411170186
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					29.036871896755883,
					-26.75141351697914
				]
			]
		},
		{
			"type": "text",
			"version": 631,
			"versionNonce": 1397630067,
			"isDeleted": false,
			"id": "gcqtxDQi",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1697.9938187827847,
			"y": 618.8764674294232,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 72,
			"height": 45,
			"seed": 614925615,
			"groupIds": [
				"9E1P-qF6GFWNLU07i3nrV",
				"uNoKMn6hyIAA6zzdfLgu3"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858194853,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 4,
			"text": "指针",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "指针",
			"lineHeight": 1.25,
			"baseline": 32
		},
		{
			"type": "text",
			"version": 704,
			"versionNonce": 1250364723,
			"isDeleted": false,
			"id": "vfn8cqVM",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -212.75398197933526,
			"y": 618.2587735320684,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 252,
			"height": 45,
			"seed": 972208751,
			"groupIds": [
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 4,
			"text": "函数的参数传递",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "函数的参数传递",
			"lineHeight": 1.25,
			"baseline": 32
		},
		{
			"type": "text",
			"version": 649,
			"versionNonce": 188018387,
			"isDeleted": false,
			"id": "qg5o9mzb",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -209.57563001428332,
			"y": 678.2112176766826,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 300,
			"height": 25,
			"seed": 1686047357,
			"groupIds": [
				"hxhXL6oGy3if7xWnJH_mq",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "存在两种方式：值传递和地址传递",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "存在两种方式：值传递和地址传递",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "freedraw",
			"version": 320,
			"versionNonce": 1794481267,
			"isDeleted": false,
			"id": "9N03MY_hCSZvNCCxO5Z95",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 30,
			"angle": 0,
			"x": -65.74524261979224,
			"y": 692.3230472047006,
			"strokeColor": "#ff8787",
			"backgroundColor": "transparent",
			"width": 46.721718835170456,
			"height": 0.8055468764684974,
			"seed": 1533806387,
			"groupIds": [
				"hxhXL6oGy3if7xWnJH_mq",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					-1.6110937529368812
				],
				[
					1.2978255231990623,
					-1.6110937529368812
				],
				[
					2.595651046398308,
					-1.6110937529368812
				],
				[
					3.8934765695975533,
					-1.6110937529368812
				],
				[
					5.191302092796616,
					-1.6110937529368812
				],
				[
					6.489127615995861,
					-1.6110937529368812
				],
				[
					7.786953139195107,
					-1.6110937529368812
				],
				[
					9.08477866239417,
					-1.6110937529368812
				],
				[
					10.382604185593415,
					-1.6110937529368812
				],
				[
					11.68042970879266,
					-1.6110937529368812
				],
				[
					14.276080755190968,
					-1.6110937529368812
				],
				[
					15.573906278390213,
					-1.6110937529368812
				],
				[
					18.16955732478852,
					-1.6110937529368812
				],
				[
					19.467382847987768,
					-1.6110937529368812
				],
				[
					19.467382847987768,
					-1.879609378426374
				],
				[
					20.76520837118683,
					-1.879609378426374
				],
				[
					22.063033894386074,
					-1.879609378426374
				],
				[
					23.36085941758514,
					-1.879609378426374
				],
				[
					24.658684940784383,
					-1.879609378426374
				],
				[
					27.254335987182692,
					-2.1481250039158857
				],
				[
					29.849987033581183,
					-2.1481250039158857
				],
				[
					32.44563807997949,
					-2.1481250039158857
				],
				[
					35.0412891263778,
					-2.4166406294053786
				],
				[
					36.33911464957704,
					-2.4166406294053786
				],
				[
					37.63694017277629,
					-2.4166406294053786
				],
				[
					38.93476569597535,
					-2.4166406294053786
				],
				[
					40.232591219174594,
					-2.4166406294053786
				],
				[
					41.530416742373845,
					-2.4166406294053786
				],
				[
					42.828242265572904,
					-2.4166406294053786
				],
				[
					44.12606778877215,
					-2.4166406294053786
				],
				[
					45.4238933119714,
					-2.4166406294053786
				],
				[
					46.721718835170456,
					-2.4166406294053786
				],
				[
					46.721718835170456,
					-2.4166406294053786
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 357,
			"versionNonce": 361731603,
			"isDeleted": false,
			"id": "chXZd7C09nzilfZ11sERE",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 30,
			"angle": 0,
			"x": 18.837179409395674,
			"y": 687.4897659458898,
			"strokeColor": "#69db7c",
			"backgroundColor": "transparent",
			"width": 62.02710948807122,
			"height": 2.4166406294053786,
			"seed": 366995677,
			"groupIds": [
				"hxhXL6oGy3if7xWnJH_mq",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.1928290286168124,
					0
				],
				[
					3.578487085850269,
					0
				],
				[
					4.771316114467082,
					0
				],
				[
					7.156974171700538,
					0
				],
				[
					8.34980320031735,
					0
				],
				[
					9.542632228933995,
					0
				],
				[
					11.92829028616762,
					0.8055468764684974
				],
				[
					13.121119314784265,
					0.8055468764684974
				],
				[
					14.313948343401076,
					0.8055468764684974
				],
				[
					15.506777372017888,
					0.8055468764684974
				],
				[
					16.699606400634533,
					0.8055468764684974
				],
				[
					19.085264457868156,
					1.611093752936938
				],
				[
					22.663751543718426,
					1.611093752936938
				],
				[
					25.049409600951883,
					1.611093752936938
				],
				[
					26.24223862956853,
					1.611093752936938
				],
				[
					27.43506765818534,
					1.611093752936938
				],
				[
					27.43506765818534,
					2.4166406294053786
				],
				[
					28.627896686802153,
					2.4166406294053786
				],
				[
					29.820725715418796,
					2.4166406294053786
				],
				[
					32.20638377265242,
					2.4166406294053786
				],
				[
					35.78487085850269,
					2.4166406294053786
				],
				[
					38.17052891573615,
					2.4166406294053786
				],
				[
					40.556186972969606,
					2.4166406294053786
				],
				[
					41.74901600158642,
					2.4166406294053786
				],
				[
					42.94184503020323,
					2.4166406294053786
				],
				[
					44.134674058819876,
					2.4166406294053786
				],
				[
					45.32750308743669,
					2.4166406294053786
				],
				[
					46.520332116053495,
					2.4166406294053786
				],
				[
					47.713161144670146,
					2.4166406294053786
				],
				[
					50.098819201903765,
					2.4166406294053786
				],
				[
					51.29164823052041,
					2.4166406294053786
				],
				[
					53.677306287753865,
					1.611093752936938
				],
				[
					56.06296434498749,
					1.611093752936938
				],
				[
					57.255793373604135,
					1.611093752936938
				],
				[
					58.44862240222095,
					1.611093752936938
				],
				[
					59.64145143083776,
					1.611093752936938
				],
				[
					60.834280459454405,
					1.611093752936938
				],
				[
					62.02710948807122,
					1.611093752936938
				],
				[
					62.02710948807122,
					1.611093752936938
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 942,
			"versionNonce": 2046385075,
			"isDeleted": false,
			"id": "YBSChb7R",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -213.78882701544745,
			"y": 782.6433316616592,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1216.43994140625,
			"height": 50,
			"seed": 229594451,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "这种方式使用类型为整型、浮点型、字符型...的变量、常量、数组元素作为函数参数，实际上是将实参的值复制到形参相应的存储单元中，\n即形参和实参分别占用不同的存储单元中，这种传递方式称为\"参数的值传递\"。",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "这种方式使用类型为整型、浮点型、字符型...的变量、常量、数组元素作为函数参数，实际上是将实参的值复制到形参相应的存储单元中，\n即形参和实参分别占用不同的存储单元中，这种传递方式称为\"参数的值传递\"。",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 337,
			"versionNonce": 1683582291,
			"isDeleted": false,
			"id": "mGtr4nni",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -208.02269343875457,
			"y": 734.5694024272982,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 84,
			"height": 35,
			"seed": 1187930621,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 4,
			"text": "值传递",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "值传递",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "text",
			"version": 662,
			"versionNonce": 1476807411,
			"isDeleted": false,
			"id": "KJITawo0",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -211.50630614635384,
			"y": 843.8668845459766,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1080,
			"height": 50,
			"seed": 164382557,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "值传递的特点是单向传递，传递给形参的是实参的值，在函数被调用时才会给形参分配内存，调用结束后，就会释放内存。\n形参值的任何变化并不会改变实参的值。",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "值传递的特点是单向传递，传递给形参的是实参的值，在函数被调用时才会给形参分配内存，调用结束后，就会释放内存。\n形参值的任何变化并不会改变实参的值。",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 371,
			"versionNonce": 696677523,
			"isDeleted": false,
			"id": "HQhgxtjP",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -208.75582854023207,
			"y": 950.5211904224053,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 529.23974609375,
			"height": 425,
			"seed": 990168765,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "#include <stdio.h>\n\nint main()\n{\n    int a = 3, b = 4;\n    printf(\"swap函数调用前: a = %d，b = %d\\n\", a, b);\n    swap(a, b);\n    printf(\"swap函数调用后: a = %d，b = %d\\n\", a, b);\n    return 0;\n}\n\nvoid swap(int m, int n)\n{\n    int temp = m;\n    m = n;\n    n = temp;\n}",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "#include <stdio.h>\n\nint main()\n{\n    int a = 3, b = 4;\n    printf(\"swap函数调用前: a = %d，b = %d\\n\", a, b);\n    swap(a, b);\n    printf(\"swap函数调用后: a = %d，b = %d\\n\", a, b);\n    return 0;\n}\n\nvoid swap(int m, int n)\n{\n    int temp = m;\n    m = n;\n    n = temp;\n}",
			"lineHeight": 1.25,
			"baseline": 418
		},
		{
			"type": "freedraw",
			"version": 363,
			"versionNonce": 1485859379,
			"isDeleted": false,
			"id": "Yo-xxWbgcDaWqqbqKdK-i",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": -205.67824564348484,
			"y": 883.6919646489157,
			"strokeColor": "#ffd43b",
			"backgroundColor": "transparent",
			"width": 333.1707920806857,
			"height": 4.856717085724313,
			"seed": 837695581,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.971343417144908,
					0
				],
				[
					3.8853736685794615,
					0
				],
				[
					8.742090754303717,
					0
				],
				[
					12.627464422883179,
					0
				],
				[
					17.484181508607435,
					0
				],
				[
					21.36955517718684,
					0
				],
				[
					24.28358542862145,
					-0.971343417144908
				],
				[
					26.226272262911152,
					-0.971343417144908
				],
				[
					27.197615680056003,
					-0.971343417144908
				],
				[
					28.168959097200855,
					-0.971343417144908
				],
				[
					29.140302514345706,
					-0.971343417144908
				],
				[
					32.05433276578026,
					-0.971343417144908
				],
				[
					34.96836301721487,
					-0.971343417144908
				],
				[
					36.91104985150457,
					-0.971343417144908
				],
				[
					40.79642352008398,
					-0.971343417144908
				],
				[
					43.71045377151853,
					-0.971343417144908
				],
				[
					45.65314060580829,
					-0.971343417144908
				],
				[
					49.538514274387694,
					-0.971343417144908
				],
				[
					51.481201108677396,
					-0.971343417144908
				],
				[
					54.39523136011195,
					-0.971343417144908
				],
				[
					55.3665747772568,
					-0.971343417144908
				],
				[
					56.33791819440171,
					-0.971343417144908
				],
				[
					57.30926161154656,
					-0.971343417144908
				],
				[
					59.25194844583626,
					-0.971343417144908
				],
				[
					61.194635280125965,
					-0.971343417144908
				],
				[
					63.13732211441567,
					-0.971343417144908
				],
				[
					65.08000894870537,
					-0.971343417144908
				],
				[
					67.99403920013998,
					-0.971343417144908
				],
				[
					71.87941286871938,
					-0.971343417144908
				],
				[
					75.76478653729879,
					-0.971343417144908
				],
				[
					79.65016020587825,
					-0.971343417144908
				],
				[
					81.59284704016795,
					-0.971343417144908
				],
				[
					82.5641904573128,
					-0.971343417144908
				],
				[
					83.53553387445766,
					-0.971343417144908
				],
				[
					85.47822070874736,
					-0.971343417144908
				],
				[
					88.39225096018191,
					0
				],
				[
					91.30628121161652,
					0
				],
				[
					94.22031146305108,
					0
				],
				[
					98.10568513163048,
					0
				],
				[
					101.01971538306509,
					0
				],
				[
					102.96240221735479,
					0
				],
				[
					104.9050890516445,
					0
				],
				[
					106.8477758859342,
					0
				],
				[
					109.76180613736875,
					0
				],
				[
					111.70449297165851,
					0
				],
				[
					113.64717980594821,
					0
				],
				[
					114.61852322309306,
					0
				],
				[
					116.56121005738277,
					0
				],
				[
					118.50389689167247,
					0
				],
				[
					121.41792714310702,
					0
				],
				[
					124.33195739454163,
					0
				],
				[
					127.24598764597619,
					0
				],
				[
					128.21733106312104,
					0
				],
				[
					130.16001789741074,
					0
				],
				[
					132.10270473170044,
					0
				],
				[
					134.0453915659902,
					0
				],
				[
					135.9880784002799,
					0
				],
				[
					137.9307652345696,
					0
				],
				[
					138.90210865171446,
					0
				],
				[
					139.8734520688593,
					0
				],
				[
					140.84479548600416,
					0
				],
				[
					142.78748232029386,
					0
				],
				[
					145.70151257172847,
					0
				],
				[
					148.61554282316303,
					0
				],
				[
					152.50091649174243,
					0
				],
				[
					155.41494674317698,
					0
				],
				[
					156.3862901603219,
					0
				],
				[
					157.35763357746674,
					0
				],
				[
					158.3289769946116,
					0
				],
				[
					159.30032041175645,
					0
				],
				[
					161.24300724604615,
					0
				],
				[
					165.12838091462555,
					0
				],
				[
					167.0710677489153,
					0
				],
				[
					168.04241116606016,
					0
				],
				[
					169.013754583205,
					0
				],
				[
					170.95644141749472,
					0
				],
				[
					173.87047166892927,
					0
				],
				[
					176.78450192036382,
					0
				],
				[
					179.69853217179843,
					0
				],
				[
					181.64121900608814,
					-0.971343417144908
				],
				[
					182.612562423233,
					-0.971343417144908
				],
				[
					183.58390584037784,
					-0.971343417144908
				],
				[
					184.5552492575227,
					-0.971343417144908
				],
				[
					187.46927950895724,
					-0.971343417144908
				],
				[
					190.38330976039185,
					-0.971343417144908
				],
				[
					192.32599659468156,
					-0.971343417144908
				],
				[
					193.2973400118264,
					-0.971343417144908
				],
				[
					194.26868342897126,
					-0.971343417144908
				],
				[
					195.2400268461161,
					-0.971343417144908
				],
				[
					197.1827136804058,
					-0.971343417144908
				],
				[
					200.09674393184042,
					-0.971343417144908
				],
				[
					203.01077418327498,
					-0.971343417144908
				],
				[
					205.92480443470953,
					-0.971343417144908
				],
				[
					208.83883468614408,
					-0.971343417144908
				],
				[
					211.7528649375787,
					-0.971343417144908
				],
				[
					212.72420835472354,
					-0.971343417144908
				],
				[
					213.6955517718684,
					-0.971343417144908
				],
				[
					217.5809254404478,
					-0.971343417144908
				],
				[
					221.4662991090272,
					-0.971343417144908
				],
				[
					225.35167277760667,
					-0.971343417144908
				],
				[
					228.26570302904122,
					-0.971343417144908
				],
				[
					230.20838986333092,
					-0.971343417144908
				],
				[
					231.17973328047577,
					-0.971343417144908
				],
				[
					232.15107669762062,
					-0.971343417144908
				],
				[
					235.06510694905523,
					-0.971343417144908
				],
				[
					237.9791372004898,
					-0.971343417144908
				],
				[
					240.89316745192434,
					-0.971343417144908
				],
				[
					242.83585428621404,
					-1.9426868342897023
				],
				[
					243.8071977033589,
					-1.9426868342897023
				],
				[
					244.7785411205038,
					-1.9426868342897023
				],
				[
					247.69257137193836,
					-1.9426868342897023
				],
				[
					250.6066016233729,
					-1.9426868342897023
				],
				[
					255.46331870909722,
					-1.9426868342897023
				],
				[
					259.3486923776766,
					-1.9426868342897023
				],
				[
					262.26272262911124,
					-1.9426868342897023
				],
				[
					263.23406604625603,
					-1.9426868342897023
				],
				[
					264.20540946340094,
					-1.9426868342897023
				],
				[
					266.14809629769064,
					-1.9426868342897023
				],
				[
					269.06212654912514,
					-1.9426868342897023
				],
				[
					274.89018705199436,
					-1.9426868342897023
				],
				[
					279.74690413771856,
					-0.971343417144908
				],
				[
					284.6036212234429,
					0
				],
				[
					287.5176514748775,
					0
				],
				[
					288.4889948920223,
					0
				],
				[
					288.4889948920223,
					0.971343417144908
				],
				[
					291.4030251434569,
					0.971343417144908
				],
				[
					295.28839881203635,
					1.9426868342897023
				],
				[
					300.14511589776066,
					1.9426868342897023
				],
				[
					304.03048956634007,
					2.9140302514346104
				],
				[
					307.91586323491947,
					2.9140302514346104
				],
				[
					310.82989348635397,
					2.9140302514346104
				],
				[
					313.74392373778846,
					2.9140302514346104
				],
				[
					315.6866105720783,
					2.9140302514346104
				],
				[
					317.6292974063681,
					2.9140302514346104
				],
				[
					318.6006408235128,
					2.9140302514346104
				],
				[
					319.5719842406577,
					2.9140302514346104
				],
				[
					320.5433276578026,
					2.9140302514346104
				],
				[
					321.5146710749475,
					2.9140302514346104
				],
				[
					323.4573579092371,
					2.9140302514346104
				],
				[
					326.3713881606716,
					2.9140302514346104
				],
				[
					329.2854184121063,
					2.9140302514346104
				],
				[
					331.2281052463959,
					2.9140302514346104
				],
				[
					332.1994486635408,
					2.9140302514346104
				],
				[
					333.1707920806857,
					2.9140302514346104
				],
				[
					333.1707920806857,
					2.9140302514346104
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 242,
			"versionNonce": 705342419,
			"isDeleted": false,
			"id": "d4oTf4rj",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -210.33079357901659,
			"y": 917.1778454402264,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 1462368733,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "举个栗子：",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "举个栗子：",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 414,
			"versionNonce": 34322803,
			"isDeleted": false,
			"id": "PIQ6J37l",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -214.77862905145923,
			"y": 1393.9858080860756,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 794.639892578125,
			"height": 25,
			"seed": 469593043,
			"groupIds": [
				"CemY-kdVUhIbO9E4Gmy-m",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "输出结果：swap 函数调用前后变量 a 和 b 的值并未发生交换，依旧是 a = 3, b = 4; ",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "输出结果：swap 函数调用前后变量 a 和 b 的值并未发生交换，依旧是 a = 3, b = 4; ",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 393,
			"versionNonce": 2111443731,
			"isDeleted": false,
			"id": "wServNZF",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -222.5717997157994,
			"y": 1445.7869259268834,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 112,
			"height": 35,
			"seed": 200654877,
			"groupIds": [
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 4,
			"text": "地址传递",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "地址传递",
			"lineHeight": 1.25,
			"baseline": 25
		},
		{
			"type": "text",
			"version": 1295,
			"versionNonce": 1307326643,
			"isDeleted": false,
			"id": "47CQs8nK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -217.03396477098795,
			"y": 1499.1738439783937,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1240,
			"height": 50,
			"seed": 415094749,
			"groupIds": [
				"H69kID3vMg8M0Dl04_NlN",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "这种方式使用数组名或者指针作为函数参数，传递的是该数组的首地址或指针的值（指针所指向变量的地址），形参自然接收到的就是地址，\n即形参与实参共用实参的存储空间，在函数调用过程中，并不会为形参开启新的存储空间，对形参的操作就是对实参本身的操作。",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "这种方式使用数组名或者指针作为函数参数，传递的是该数组的首地址或指针的值（指针所指向变量的地址），形参自然接收到的就是地址，\n即形参与实参共用实参的存储空间，在函数调用过程中，并不会为形参开启新的存储空间，对形参的操作就是对实参本身的操作。",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "freedraw",
			"version": 294,
			"versionNonce": 1340648019,
			"isDeleted": false,
			"id": "RS-LiGU-Ff3magvhBucZ2",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": 288.5681960928665,
			"y": 1510.10910582345,
			"strokeColor": "#38d9a9",
			"backgroundColor": "transparent",
			"width": 98.10032136700329,
			"height": 1.0218783475729651,
			"seed": 343773661,
			"groupIds": [
				"H69kID3vMg8M0Dl04_NlN",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.0218783475729651,
					0
				],
				[
					8.175026780583607,
					-1.0218783475729651
				],
				[
					14.306296866021285,
					-1.0218783475729651
				],
				[
					19.415688603885997,
					-1.0218783475729651
				],
				[
					23.503201994177857,
					-1.0218783475729651
				],
				[
					24.525080341750822,
					-1.0218783475729651
				],
				[
					25.546958689323787,
					-1.0218783475729651
				],
				[
					26.568837036896753,
					-1.0218783475729651
				],
				[
					28.61259373204257,
					-1.0218783475729651
				],
				[
					31.678228774761465,
					-1.0218783475729651
				],
				[
					34.74386381748036,
					-1.0218783475729651
				],
				[
					35.76574216505321,
					-1.0218783475729651
				],
				[
					36.78762051262618,
					-1.0218783475729651
				],
				[
					37.80949886019914,
					-1.0218783475729651
				],
				[
					38.83137720777211,
					-1.0218783475729651
				],
				[
					40.87513390291804,
					-1.0218783475729651
				],
				[
					42.91889059806397,
					-1.0218783475729651
				],
				[
					43.94076894563682,
					-1.0218783475729651
				],
				[
					44.962647293209784,
					-1.0218783475729651
				],
				[
					48.02828233592868,
					-1.0218783475729651
				],
				[
					51.093917378647575,
					-1.0218783475729651
				],
				[
					54.15955242136636,
					-1.0218783475729651
				],
				[
					55.18143076893932,
					-1.0218783475729651
				],
				[
					56.20330911651229,
					-1.0218783475729651
				],
				[
					58.24706581165822,
					-1.0218783475729651
				],
				[
					63.35645754952293,
					-1.0218783475729651
				],
				[
					67.44397093981479,
					-1.0218783475729651
				],
				[
					70.50960598253357,
					-1.0218783475729651
				],
				[
					71.53148433010654,
					-1.0218783475729651
				],
				[
					72.5533626776795,
					-1.0218783475729651
				],
				[
					73.57524102525247,
					-1.0218783475729651
				],
				[
					74.59711937282543,
					-1.0218783475729651
				],
				[
					75.6189977203984,
					-1.0218783475729651
				],
				[
					76.64087606797136,
					-1.0218783475729651
				],
				[
					78.68463276311718,
					-1.0218783475729651
				],
				[
					81.75026780583607,
					-1.0218783475729651
				],
				[
					85.83778119612782,
					-1.0218783475729651
				],
				[
					89.92529458641968,
					-1.0218783475729651
				],
				[
					92.99092962913858,
					-1.0218783475729651
				],
				[
					94.01280797671154,
					-1.0218783475729651
				],
				[
					96.05656467185736,
					-1.0218783475729651
				],
				[
					97.07844301943032,
					-1.0218783475729651
				],
				[
					98.10032136700329,
					-1.0218783475729651
				],
				[
					98.10032136700329,
					-1.0218783475729651
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 347,
			"versionNonce": 1755703283,
			"isDeleted": false,
			"id": "E7SP7doYlJO26njUVqO5f",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": 431.6311647530797,
			"y": 1510.10910582345,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"width": 292.25720740586405,
			"height": 1.0218783475729651,
			"seed": 1590682931,
			"groupIds": [
				"H69kID3vMg8M0Dl04_NlN",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.0218783475729651,
					0
				],
				[
					3.0656350427187817,
					-1.0218783475729651
				],
				[
					9.196905128156573,
					-1.0218783475729651
				],
				[
					16.350053561167215,
					-1.0218783475729651
				],
				[
					24.525080341750822,
					-1.0218783475729651
				],
				[
					31.678228774761465,
					-1.0218783475729651
				],
				[
					33.721985469907395,
					-1.0218783475729651
				],
				[
					34.74386381748036,
					-1.0218783475729651
				],
				[
					35.76574216505321,
					-1.0218783475729651
				],
				[
					36.78762051262618,
					-1.0218783475729651
				],
				[
					39.85325555534507,
					-1.0218783475729651
				],
				[
					42.91889059806397,
					-1.0218783475729651
				],
				[
					43.94076894563682,
					-1.0218783475729651
				],
				[
					45.98452564078275,
					-1.0218783475729651
				],
				[
					48.02828233592868,
					-1.0218783475729651
				],
				[
					49.050160683501645,
					-1.0218783475729651
				],
				[
					50.07203903107461,
					-1.0218783475729651
				],
				[
					54.15955242136636,
					-1.0218783475729651
				],
				[
					58.24706581165822,
					-1.0218783475729651
				],
				[
					62.33457920195008,
					-1.0218783475729651
				],
				[
					66.42209259224171,
					-1.0218783475729651
				],
				[
					69.4877276349606,
					-1.0218783475729651
				],
				[
					71.53148433010654,
					-1.0218783475729651
				],
				[
					72.5533626776795,
					-1.0218783475729651
				],
				[
					75.6189977203984,
					-1.0218783475729651
				],
				[
					79.70651111069026,
					-1.0218783475729651
				],
				[
					83.79402450098189,
					-1.0218783475729651
				],
				[
					86.85965954370079,
					-1.0218783475729651
				],
				[
					89.92529458641968,
					-1.0218783475729651
				],
				[
					91.96905128156561,
					-1.0218783475729651
				],
				[
					94.01280797671154,
					-1.0218783475729651
				],
				[
					96.05656467185747,
					-1.0218783475729651
				],
				[
					98.1003213670034,
					-1.0218783475729651
				],
				[
					99.12219971457614,
					-1.0218783475729651
				],
				[
					101.16595640972207,
					-1.0218783475729651
				],
				[
					104.23159145244097,
					0
				],
				[
					108.31910484273283,
					0
				],
				[
					111.38473988545172,
					0
				],
				[
					115.47225327574358,
					0
				],
				[
					117.51600997088929,
					0
				],
				[
					119.55976666603522,
					0
				],
				[
					120.58164501360818,
					0
				],
				[
					122.62540170875411,
					0
				],
				[
					126.71291509904597,
					0
				],
				[
					130.80042848933783,
					0
				],
				[
					132.84418518448354,
					0
				],
				[
					134.88794187962947,
					0
				],
				[
					136.9316985747754,
					0
				],
				[
					138.97545526992133,
					0
				],
				[
					139.9973336174943,
					0
				],
				[
					141.01921196506726,
					0
				],
				[
					143.0629686602132,
					0
				],
				[
					145.10672535535912,
					0
				],
				[
					147.15048205050505,
					0
				],
				[
					151.23799544079668,
					0
				],
				[
					156.3473871786615,
					0
				],
				[
					160.43490056895337,
					0
				],
				[
					162.4786572640993,
					0
				],
				[
					164.52241395924523,
					0
				],
				[
					166.56617065439093,
					0
				],
				[
					168.60992734953686,
					0
				],
				[
					171.67556239225576,
					0
				],
				[
					175.76307578254762,
					0
				],
				[
					181.8943458679854,
					0
				],
				[
					192.11312934371483,
					0
				],
				[
					200.28815612429833,
					0
				],
				[
					205.39754786216315,
					0
				],
				[
					208.46318290488205,
					0
				],
				[
					209.485061252455,
					0
				],
				[
					212.5506962951739,
					0
				],
				[
					215.6163313378928,
					0
				],
				[
					219.70384472818444,
					0
				],
				[
					224.81323646604926,
					0
				],
				[
					229.9226282039141,
					0
				],
				[
					235.03201994177869,
					0
				],
				[
					238.09765498449758,
					0
				],
				[
					239.11953333207055,
					0
				],
				[
					240.1414116796435,
					0
				],
				[
					241.16329002721648,
					0
				],
				[
					242.18516837478944,
					0
				],
				[
					244.22892506993537,
					0
				],
				[
					248.31643846022723,
					0
				],
				[
					256.4914652408107,
					0
				],
				[
					263.6446136738215,
					0
				],
				[
					268.7540054116861,
					0
				],
				[
					271.819640454405,
					0
				],
				[
					272.84151880197794,
					0
				],
				[
					273.8633971495509,
					0
				],
				[
					274.88527549712387,
					0
				],
				[
					278.97278888741573,
					0
				],
				[
					282.0384239301346,
					0
				],
				[
					285.1040589728533,
					0
				],
				[
					288.1696940155722,
					0
				],
				[
					290.2134507107181,
					0
				],
				[
					291.2353290582911,
					0
				],
				[
					292.25720740586405,
					0
				],
				[
					292.25720740586405,
					0
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 328,
			"versionNonce": 506098067,
			"isDeleted": false,
			"id": "CbKE2uiMiHHtvKzyLF2Mf",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 20,
			"angle": 0,
			"x": 591.0441869744601,
			"y": 1537.69982120792,
			"strokeColor": "#ffd43b",
			"backgroundColor": "transparent",
			"width": 296.3447207961558,
			"height": 4.087513390291861,
			"seed": 1554424733,
			"groupIds": [
				"H69kID3vMg8M0Dl04_NlN",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.0218783475729651,
					0
				],
				[
					6.131270085437791,
					-1.0218783475729651
				],
				[
					13.28441851844832,
					-1.0218783475729651
				],
				[
					19.41568860388611,
					-1.0218783475729651
				],
				[
					25.546958689323674,
					-1.0218783475729651
				],
				[
					28.61259373204257,
					-1.0218783475729651
				],
				[
					29.634472079615534,
					-1.0218783475729651
				],
				[
					30.6563504271885,
					-1.0218783475729651
				],
				[
					32.70010712233443,
					-1.0218783475729651
				],
				[
					36.78762051262629,
					-1.0218783475729651
				],
				[
					41.89701225049089,
					-1.0218783475729651
				],
				[
					45.98452564078275,
					-1.0218783475729651
				],
				[
					49.050160683501645,
					-1.0218783475729651
				],
				[
					52.11579572622054,
					-1.0218783475729651
				],
				[
					55.181430768939435,
					-1.0218783475729651
				],
				[
					57.225187464085366,
					-1.0218783475729651
				],
				[
					58.2470658116581,
					-1.0218783475729651
				],
				[
					60.290822506804034,
					-1.0218783475729651
				],
				[
					63.35645754952293,
					-1.0218783475729651
				],
				[
					68.46584928738775,
					-1.0218783475729651
				],
				[
					72.55336267767962,
					-1.0218783475729651
				],
				[
					77.66275441554421,
					-1.0218783475729651
				],
				[
					79.70651111069014,
					-1.0218783475729651
				],
				[
					80.72838945826311,
					-1.0218783475729651
				],
				[
					82.77214615340904,
					-1.0218783475729651
				],
				[
					86.8596595437009,
					-1.0218783475729651
				],
				[
					94.01280797671143,
					-2.0437566951459303
				],
				[
					102.18783475729515,
					-2.0437566951459303
				],
				[
					109.34098319030568,
					-3.0656350427188954
				],
				[
					115.47225327574347,
					-4.087513390291861
				],
				[
					116.49413162331643,
					-4.087513390291861
				],
				[
					117.5160099708894,
					-4.087513390291861
				],
				[
					118.53788831846236,
					-4.087513390291861
				],
				[
					119.55976666603533,
					-4.087513390291861
				],
				[
					127.73479344661882,
					-4.087513390291861
				],
				[
					135.90982022720254,
					-4.087513390291861
				],
				[
					145.106725355359,
					-4.087513390291861
				],
				[
					153.28175213594272,
					-4.087513390291861
				],
				[
					159.4130222213803,
					-4.087513390291861
				],
				[
					163.50053561167215,
					-4.087513390291861
				],
				[
					164.5224139592451,
					-4.087513390291861
				],
				[
					165.54429230681808,
					-4.087513390291861
				],
				[
					169.63180569710994,
					-3.0656350427188954
				],
				[
					175.7630757825475,
					-3.0656350427188954
				],
				[
					183.93810256313122,
					-2.0437566951459303
				],
				[
					194.15688603886065,
					-2.0437566951459303
				],
				[
					201.3100344718714,
					-1.0218783475729651
				],
				[
					207.4413045573092,
					-1.0218783475729651
				],
				[
					210.50693960002786,
					-1.0218783475729651
				],
				[
					212.5506962951738,
					-1.0218783475729651
				],
				[
					213.57257464274676,
					-1.0218783475729651
				],
				[
					214.59445299031972,
					-1.0218783475729651
				],
				[
					218.68196638061158,
					-1.0218783475729651
				],
				[
					223.7913581184764,
					-1.0218783475729651
				],
				[
					230.94450655148694,
					-1.0218783475729651
				],
				[
					234.01014159420583,
					-1.0218783475729651
				],
				[
					238.0976549844977,
					-1.0218783475729651
				],
				[
					241.1632900272166,
					-1.0218783475729651
				],
				[
					242.18516837478955,
					-1.0218783475729651
				],
				[
					243.2070467223623,
					-1.0218783475729651
				],
				[
					244.22892506993526,
					-1.0218783475729651
				],
				[
					245.25080341750822,
					-1.0218783475729651
				],
				[
					248.31643846022712,
					-1.0218783475729651
				],
				[
					252.40395185051898,
					-1.0218783475729651
				],
				[
					259.55710028352973,
					-1.0218783475729651
				],
				[
					265.6883703689673,
					-1.0218783475729651
				],
				[
					270.7977621068321,
					-1.0218783475729651
				],
				[
					273.863397149551,
					-1.0218783475729651
				],
				[
					276.9290321922697,
					-1.0218783475729651
				],
				[
					277.95091053984265,
					-1.0218783475729651
				],
				[
					278.9727888874156,
					-1.0218783475729651
				],
				[
					279.9946672349886,
					-1.0218783475729651
				],
				[
					282.0384239301345,
					-1.0218783475729651
				],
				[
					286.1259373204264,
					-1.0218783475729651
				],
				[
					290.21345071071823,
					-2.0437566951459303
				],
				[
					294.30096410100987,
					-2.0437566951459303
				],
				[
					295.32284244858283,
					-2.0437566951459303
				],
				[
					296.3447207961558,
					-2.0437566951459303
				],
				[
					296.3447207961558,
					-2.0437566951459303
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 248,
			"versionNonce": 1907148595,
			"isDeleted": false,
			"id": "ivO7lTwF",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -216.23970760817156,
			"y": 1565.29053659239,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 1068208467,
			"groupIds": [
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "举个栗子：",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "举个栗子：",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 694,
			"versionNonce": 2039703763,
			"isDeleted": false,
			"id": "nxutBcJuzV-hNRL8EQmMr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 526.1287261610792,
			"y": 1711.176893677586,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60.29082250680426,
			"height": 35,
			"seed": 483129981,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "3GWYuqTv"
				},
				{
					"id": "gzwMBRta_yxB5D-KyAzyV",
					"type": "arrow"
				},
				{
					"id": "oEAZz6ODXvLzgiZ187M1D",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 657,
			"versionNonce": 1842587160,
			"isDeleted": false,
			"id": "3GWYuqTv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 549.4641398558875,
			"y": 1716.176893677586,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 13.6199951171875,
			"height": 25,
			"seed": 1391576243,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776180,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "3",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "nxutBcJuzV-hNRL8EQmMr",
			"originalText": "3",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 749,
			"versionNonce": 2058020691,
			"isDeleted": false,
			"id": "dhMOl3yeEHgoxMuiqbTUo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 637.9784737110858,
			"y": 1711.480313185353,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60.29082250680426,
			"height": 35,
			"seed": 1632161981,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "8gIMg9ap"
				},
				{
					"id": "uYINckk5nLClaKgF-Krvc",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 718,
			"versionNonce": 1571019288,
			"isDeleted": false,
			"id": "8gIMg9ap",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 661.7238910680036,
			"y": 1716.480313185353,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.79998779296875,
			"height": 25,
			"seed": 1758048541,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776181,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "4",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "dhMOl3yeEHgoxMuiqbTUo",
			"originalText": "4",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 738,
			"versionNonce": 316417075,
			"isDeleted": false,
			"id": "daaBequC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 662.4857280434112,
			"y": 1779.793319211478,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 24.0999755859375,
			"height": 25,
			"seed": 697519037,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "uYINckk5nLClaKgF-Krvc",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "p2",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "p2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 2094,
			"versionNonce": 805503000,
			"isDeleted": false,
			"id": "uYINckk5nLClaKgF-Krvc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 672.0711915445991,
			"y": 1775.6272245014177,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 8.759130555214142,
			"height": 17.92074325880003,
			"seed": 1081626333,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776180,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "daaBequC",
				"gap": 4.166094710060406,
				"focus": 0.35324178855589833
			},
			"endBinding": {
				"elementId": "dhMOl3yeEHgoxMuiqbTUo",
				"gap": 11.226168057264658,
				"focus": 0.4871541525656308
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-8.759130555214142,
					-17.92074325880003
				]
			]
		},
		{
			"type": "text",
			"version": 688,
			"versionNonce": 189271315,
			"isDeleted": false,
			"id": "nnZaU0qr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 542.7301347670011,
			"y": 1779.2652079234247,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 15.279983520507812,
			"height": 25,
			"seed": 574335027,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "gzwMBRta_yxB5D-KyAzyV",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "p1",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "p1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 2009,
			"versionNonce": 1565094424,
			"isDeleted": false,
			"id": "gzwMBRta_yxB5D-KyAzyV",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 552.5369905195003,
			"y": 1775.1604962822337,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.3252465073381927,
			"height": 23.907252241423066,
			"seed": 110987283,
			"groupIds": [
				"uXUeTKY1761VyT439YXF9",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776180,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "nnZaU0qr",
				"gap": 4.104711641190988,
				"focus": 0.23600409981469306
			},
			"endBinding": {
				"elementId": "nxutBcJuzV-hNRL8EQmMr",
				"gap": 5.076350363224492,
				"focus": 0.10218576368055061
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.3252465073381927,
					-23.907252241423066
				]
			]
		},
		{
			"type": "rectangle",
			"version": 623,
			"versionNonce": 1767776755,
			"isDeleted": false,
			"id": "iJh7BTs2JZdQkkQJm0OsL",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 526.1287261610792,
			"y": 1841.9875210894477,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60.29082250680426,
			"height": 35,
			"seed": 2092019507,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "4GGw2kGt"
				},
				{
					"id": "QJOLhhZb3trKslKt6j-N4",
					"type": "arrow"
				},
				{
					"id": "J_tqMaPSdn5D0zdYRWrE9",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 589,
			"versionNonce": 1399810072,
			"isDeleted": false,
			"id": "4GGw2kGt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 549.8741435179969,
			"y": 1846.9875210894477,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.79998779296875,
			"height": 25,
			"seed": 599478483,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776181,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "4",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "iJh7BTs2JZdQkkQJm0OsL",
			"originalText": "4",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 680,
			"versionNonce": 155193459,
			"isDeleted": false,
			"id": "xHi-xEbH8WXBSg25S7T-b",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 637.9784737110849,
			"y": 1842.2909405972148,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60.29082250680426,
			"height": 35,
			"seed": 677363315,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "CMx1Mr4I"
				},
				{
					"id": "Dd3RA8GHsXAaDMNcxTi1e",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 649,
			"versionNonce": 1582210072,
			"isDeleted": false,
			"id": "CMx1Mr4I",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 661.7238910680027,
			"y": 1847.2909405972148,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.79998779296875,
			"height": 25,
			"seed": 627406867,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776182,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "4",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "xHi-xEbH8WXBSg25S7T-b",
			"originalText": "4",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 669,
			"versionNonce": 29909331,
			"isDeleted": false,
			"id": "gu1t5V0u",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 662.4857280434107,
			"y": 1910.6039466233399,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 24.0999755859375,
			"height": 25,
			"seed": 415432115,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "Dd3RA8GHsXAaDMNcxTi1e",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "p2",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "p2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1885,
			"versionNonce": 253116952,
			"isDeleted": false,
			"id": "Dd3RA8GHsXAaDMNcxTi1e",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 672.0711915445986,
			"y": 1906.4378519132795,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 8.759130555214256,
			"height": 17.920743258799803,
			"seed": 2107559763,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776181,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "gu1t5V0u",
				"gap": 4.166094710060406,
				"focus": 0.35324178855589833
			},
			"endBinding": {
				"elementId": "xHi-xEbH8WXBSg25S7T-b",
				"gap": 11.226168057264658,
				"focus": 0.4871541525656188
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-8.759130555214256,
					-17.920743258799803
				]
			]
		},
		{
			"type": "text",
			"version": 619,
			"versionNonce": 1634983475,
			"isDeleted": false,
			"id": "XBl8KPXh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 542.7301347670009,
			"y": 1910.0758353352865,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 15.279983520507812,
			"height": 25,
			"seed": 642739443,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "QJOLhhZb3trKslKt6j-N4",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "p1",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "p1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1800,
			"versionNonce": 1750479896,
			"isDeleted": false,
			"id": "QJOLhhZb3trKslKt6j-N4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 552.5369905195,
			"y": 1905.9711236940955,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.3252465073381927,
			"height": 23.907252241423066,
			"seed": 1448826515,
			"groupIds": [
				"K9it91r1mxl_qDT8qNycT",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776181,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "XBl8KPXh",
				"gap": 4.104711641190988,
				"focus": 0.23600409981469306
			},
			"endBinding": {
				"elementId": "iJh7BTs2JZdQkkQJm0OsL",
				"gap": 5.076350363224492,
				"focus": 0.10218576368055814
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.3252465073381927,
					-23.907252241423066
				]
			]
		},
		{
			"type": "rectangle",
			"version": 549,
			"versionNonce": 8521491,
			"isDeleted": false,
			"id": "401LCOAbL_31UCkVUmGBY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 529.8115718241853,
			"y": 1973.6492535454943,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60.29082250680426,
			"height": 35,
			"seed": 1435495709,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "GuFDXZKY"
				},
				{
					"id": "DHK-S-ZSifj-d3_XgWWia",
					"type": "arrow"
				},
				{
					"id": "Ba9QoROBWOEUwwU3EhYCo",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 516,
			"versionNonce": 1503701528,
			"isDeleted": false,
			"id": "GuFDXZKY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 553.5569891811031,
			"y": 1978.6492535454943,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.79998779296875,
			"height": 25,
			"seed": 313409917,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776182,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "4",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "401LCOAbL_31UCkVUmGBY",
			"originalText": "4",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 606,
			"versionNonce": 590898579,
			"isDeleted": false,
			"id": "rnPYDnspUI68U19hmlrey",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 641.6613193741914,
			"y": 1973.9526730532614,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60.29082250680426,
			"height": 35,
			"seed": 1438845405,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "vCjvBFlh"
				},
				{
					"id": "mATzKUXHEeCY-rdS9xFrr",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 578,
			"versionNonce": 1221516824,
			"isDeleted": false,
			"id": "vCjvBFlh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 664.9967330689998,
			"y": 1978.9526730532614,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 13.6199951171875,
			"height": 25,
			"seed": 2145371709,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776183,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "3",
			"rawText": "",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "rnPYDnspUI68U19hmlrey",
			"originalText": "3",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 595,
			"versionNonce": 1012353651,
			"isDeleted": false,
			"id": "miKM9MTQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 666.1685737065172,
			"y": 2042.265679079386,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 24.0999755859375,
			"height": 25,
			"seed": 1407579805,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "mATzKUXHEeCY-rdS9xFrr",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "p2",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "p2",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1659,
			"versionNonce": 123667480,
			"isDeleted": false,
			"id": "mATzKUXHEeCY-rdS9xFrr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 675.7540372077052,
			"y": 2038.0995843693263,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 8.75913055521437,
			"height": 17.92074325880003,
			"seed": 1015487229,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776182,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "miKM9MTQ",
				"gap": 4.166094710060065,
				"focus": 0.3532417885558918
			},
			"endBinding": {
				"elementId": "rnPYDnspUI68U19hmlrey",
				"gap": 11.226168057264658,
				"focus": 0.4871541525656201
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-8.75913055521437,
					-17.92074325880003
				]
			]
		},
		{
			"type": "text",
			"version": 545,
			"versionNonce": 1639045971,
			"isDeleted": false,
			"id": "NwPE04Dk",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 546.412980430107,
			"y": 2041.737567791333,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 15.279983520507812,
			"height": 25,
			"seed": 1380234077,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "DHK-S-ZSifj-d3_XgWWia",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 20,
			"fontFamily": 4,
			"text": "p1",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "p1",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1574,
			"versionNonce": 716731928,
			"isDeleted": false,
			"id": "DHK-S-ZSifj-d3_XgWWia",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 556.2198361826062,
			"y": 2037.6328561501423,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.3252465073381927,
			"height": 23.90725224142352,
			"seed": 561004477,
			"groupIds": [
				"NuHMOZMYi2Gq3H_9QN7jX",
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776182,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "NwPE04Dk",
				"gap": 4.104711641191102,
				"focus": 0.23600409981469278
			},
			"endBinding": {
				"elementId": "401LCOAbL_31UCkVUmGBY",
				"gap": 5.076350363224492,
				"focus": 0.10218576368055816
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.3252465073381927,
					-23.90725224142352
				]
			]
		},
		{
			"type": "text",
			"version": 262,
			"versionNonce": 743938099,
			"isDeleted": false,
			"id": "eebtiNa0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -214.59984017785303,
			"y": 1606.137329212995,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 529.23974609375,
			"height": 425,
			"seed": 1117389523,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "#include <stdio.h>\n\nint main()\n{\n    int a = 3, b = 4;\n    printf(\"swap函数调用前: a = %d，b = %d\\n\", a, b);\n    swap(&a, &b);\n    printf(\"swap函数调用后: a = %d，b = %d\\n\", a, b);\n    return 0;\n}\n\nvoid swap(int* p1, int* p2)\n{\n    int temp = *p1;\n    *p1 = *p2;\n    *p2 = temp;\n}",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "#include <stdio.h>\n\nint main()\n{\n    int a = 3, b = 4;\n    printf(\"swap函数调用前: a = %d，b = %d\\n\", a, b);\n    swap(&a, &b);\n    printf(\"swap函数调用后: a = %d，b = %d\\n\", a, b);\n    return 0;\n}\n\nvoid swap(int* p1, int* p2)\n{\n    int temp = *p1;\n    *p1 = *p2;\n    *p2 = temp;\n}",
			"lineHeight": 1.25,
			"baseline": 418
		},
		{
			"type": "text",
			"version": 303,
			"versionNonce": 414980563,
			"isDeleted": false,
			"id": "QXMv9wPl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -217.36197442518278,
			"y": 2053.603077280396,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 734.6398315429688,
			"height": 25,
			"seed": 977178717,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "输出结果：swap 函数调用前后变量 a 和 b 的值发生交换，变成 a = 4, b = 3; ",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "输出结果：swap 函数调用前后变量 a 和 b 的值发生交换，变成 a = 4, b = 3; ",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 301,
			"versionNonce": 878667635,
			"isDeleted": false,
			"id": "0nMaSBbb8SZKy0OjL75FF",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -129.89438992641095,
			"y": 1876.8264854512988,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 162.96592059244836,
			"height": 33.14561096795569,
			"seed": 1077607069,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "oEAZz6ODXvLzgiZ187M1D",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "arrow",
			"version": 1195,
			"versionNonce": 1031130136,
			"isDeleted": false,
			"id": "oEAZz6ODXvLzgiZ187M1D",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -21.409386541163684,
			"y": 1869.4607941250863,
			"strokeColor": "#ffa94d",
			"backgroundColor": "transparent",
			"width": 548.7554859975623,
			"height": 116.93034980362131,
			"seed": 487689235,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700711776180,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "0nMaSBbb8SZKy0OjL75FF",
				"gap": 7.365691326212527,
				"focus": -0.5358656260589251
			},
			"endBinding": {
				"elementId": "nxutBcJuzV-hNRL8EQmMr",
				"gap": 6.353550643879089,
				"focus": -0.7394196934686667
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					548.7554859975623,
					-116.93034980362131
				]
			]
		},
		{
			"type": "rectangle",
			"version": 294,
			"versionNonce": 997398611,
			"isDeleted": false,
			"id": "q7aPBdQQceZU3M2zVo7Yb",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -189.74063195188637,
			"y": 1956.007667208081,
			"strokeColor": "#f783ac",
			"backgroundColor": "transparent",
			"width": 100.35754431964335,
			"height": 23.938496810190145,
			"seed": 1970163005,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "J_tqMaPSdn5D0zdYRWrE9",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "arrow",
			"version": 993,
			"versionNonce": 1505365528,
			"isDeleted": false,
			"id": "J_tqMaPSdn5D0zdYRWrE9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -84.77953055336027,
			"y": 1966.935295297607,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 602.1452659178601,
			"height": 93.61410409924497,
			"seed": 1888908403,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700711776181,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "q7aPBdQQceZU3M2zVo7Yb",
				"gap": 4.603557078882744,
				"focus": 0.3781031343378613
			},
			"endBinding": {
				"elementId": "iJh7BTs2JZdQkkQJm0OsL",
				"gap": 8.762990796579288,
				"focus": -0.35087214801265737
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					602.1452659178601,
					-93.61410409924497
				]
			]
		},
		{
			"type": "rectangle",
			"version": 285,
			"versionNonce": 1223030067,
			"isDeleted": false,
			"id": "ho_sMRNfUQkzmIPqVl29t",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -190.66134336766288,
			"y": 1983.6290096813784,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"width": 111.40608130896189,
			"height": 27.62134247329641,
			"seed": 1059047197,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "Ba9QoROBWOEUwwU3EhYCo",
					"type": "arrow"
				}
			],
			"updated": 1692858086535,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "arrow",
			"version": 769,
			"versionNonce": 1978912792,
			"isDeleted": false,
			"id": "Ba9QoROBWOEUwwU3EhYCo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -71.88957073248866,
			"y": 1992.518522536924,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 592.0174403443185,
			"height": 6.88526966513723,
			"seed": 416454877,
			"groupIds": [
				"PBl-mJ-xsL4k26_mV8EhP",
				"Roc4Vej-OZTrH5qb1O07T",
				"DNYCIbxS3XinpPPMF65XT",
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700711776182,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ho_sMRNfUQkzmIPqVl29t",
				"gap": 7.365691326212314,
				"focus": -0.2896327717831155
			},
			"endBinding": {
				"elementId": "401LCOAbL_31UCkVUmGBY",
				"gap": 9.683702212355456,
				"focus": 0.3349591385573476
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					592.0174403443185,
					-6.88526966513723
				]
			]
		},
		{
			"type": "rectangle",
			"version": 347,
			"versionNonce": 779582995,
			"isDeleted": false,
			"id": "OHLLLO2ZOUcyvI7KLAqJI",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 10,
			"angle": 0,
			"x": -243.48652082485296,
			"y": 604.6219623840132,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f8f0fc",
			"width": 1278.75,
			"height": 1495.25,
			"seed": 172990773,
			"groupIds": [
				"pyp6ru9m5szEMeCaOTiJ8"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1692858086535,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 893,
			"versionNonce": 634384883,
			"isDeleted": false,
			"id": "cdJLTIur",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 617.06909367143,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 108,
			"height": 45,
			"seed": 2048994517,
			"groupIds": [
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 4,
			"text": "结构体",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "结构体",
			"lineHeight": 1.25,
			"baseline": 32
		},
		{
			"type": "text",
			"version": 580,
			"versionNonce": 1423350461,
			"isDeleted": false,
			"id": "aZid6Ot3",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 681.9761010149339,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 140,
			"height": 25,
			"seed": 1516851227,
			"groupIds": [
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "声明结构体类型",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "声明结构体类型",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 755,
			"versionNonce": 2105752467,
			"isDeleted": false,
			"id": "KPVCqKif",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2950.1238073267505,
			"y": 756.063877053529,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 197.48793029785156,
			"height": 120,
			"seed": 1999900277,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "ETe16lA7fA7u_zFd7BYLP",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "struct Student {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n};",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "struct Student {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n};",
			"lineHeight": 1.25,
			"baseline": 114
		},
		{
			"type": "rectangle",
			"version": 587,
			"versionNonce": 2081307421,
			"isDeleted": false,
			"id": "_V690_KFRCMHTx9yn6IOs",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2928.45364843138,
			"y": 778.1758472454342,
			"strokeColor": "#3bc9db",
			"backgroundColor": "transparent",
			"width": 155.11056085039422,
			"height": 79.96009532210246,
			"seed": 136889211,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "gsPim3bVMmc4J09uQ-_g0",
					"type": "arrow"
				},
				{
					"id": "ETe16lA7fA7u_zFd7BYLP",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 624,
			"versionNonce": 1063014707,
			"isDeleted": false,
			"id": "EsKtKLxS",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2828.653830209808,
			"y": 719.2578822712533,
			"strokeColor": "#69db7c",
			"backgroundColor": "transparent",
			"width": 80,
			"height": 20,
			"seed": 1056114875,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "AG0yIbA7i23C_dNFoZGpJ",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "结构体标签",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "结构体标签",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 579,
			"versionNonce": 808636285,
			"isDeleted": false,
			"id": "Hvu1orAVUwE4VNAKte4dj",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2900.798277116968,
			"y": 757.1337168975124,
			"strokeColor": "#69db7c",
			"backgroundColor": "transparent",
			"width": 60.72157614685966,
			"height": 18.036111726790068,
			"seed": 891752859,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "AG0yIbA7i23C_dNFoZGpJ",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "arrow",
			"version": 1665,
			"versionNonce": 1019327187,
			"isDeleted": false,
			"id": "AG0yIbA7i23C_dNFoZGpJ",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2873.478274772325,
			"y": 751.121679655249,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 37.60999987180071,
			"height": 17.703755132625986,
			"seed": 1508472891,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Hvu1orAVUwE4VNAKte4dj",
				"focus": -0.706213062410864,
				"gap": 6.012037242263432
			},
			"endBinding": {
				"elementId": "EsKtKLxS",
				"focus": 0.6266208449541797,
				"gap": 7.214444690716846
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					37.60999987180071,
					-17.703755132625986
				]
			]
		},
		{
			"type": "text",
			"version": 550,
			"versionNonce": 797300701,
			"isDeleted": false,
			"id": "xY25jeBJ",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2730.657623160916,
			"y": 796.8131626964505,
			"strokeColor": "#3bc9db",
			"backgroundColor": "transparent",
			"width": 64,
			"height": 20,
			"seed": 1551434997,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "gsPim3bVMmc4J09uQ-_g0",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "成员列表",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "成员列表",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "arrow",
			"version": 1580,
			"versionNonce": 1447682163,
			"isDeleted": false,
			"id": "gsPim3bVMmc4J09uQ-_g0",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2766.1286428902695,
			"y": 827.4745526319937,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 29.45898248709034,
			"height": 19.839722899469052,
			"seed": 1770845493,
			"groupIds": [
				"7Mcxe0B5QdkoPCw55LaNl",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_V690_KFRCMHTx9yn6IOs",
				"focus": 0.7201782981837562,
				"gap": 7.214444690716164
			},
			"endBinding": {
				"elementId": "xY25jeBJ",
				"focus": 0.785339938051129,
				"gap": 6.012037242262977
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					29.45898248709034,
					-19.839722899469052
				]
			]
		},
		{
			"type": "text",
			"version": 523,
			"versionNonce": 1947784253,
			"isDeleted": false,
			"id": "hLF9aWuL",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2650.249707911633,
			"y": 731.2405279405293,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 197.48793029785156,
			"height": 120,
			"seed": 532492827,
			"groupIds": [
				"iD5E_sdwWbfFcKDXSEYbb",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "struct {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n} stu1, stu2;",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "struct {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n} stu1, stu2;",
			"lineHeight": 1.25,
			"baseline": 114
		},
		{
			"type": "rectangle",
			"version": 520,
			"versionNonce": 364599827,
			"isDeleted": false,
			"id": "Uko7AYUNXT8Bh5MeawgJv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2641.2316520482377,
			"y": 832.2427536105533,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"width": 73.94805807983914,
			"height": 19.839722899468995,
			"seed": 366707733,
			"groupIds": [
				"iD5E_sdwWbfFcKDXSEYbb",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "1MNNRRlx2ZeDu-OZH7_V9",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			}
		},
		{
			"type": "text",
			"version": 632,
			"versionNonce": 969753757,
			"isDeleted": false,
			"id": "9mEVyo5M",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2534.8185928601765,
			"y": 866.5113658914545,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"width": 64,
			"height": 20,
			"seed": 1315700347,
			"groupIds": [
				"iD5E_sdwWbfFcKDXSEYbb",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "1MNNRRlx2ZeDu-OZH7_V9",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "变量列表",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "变量列表",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "arrow",
			"version": 1385,
			"versionNonce": 135045043,
			"isDeleted": false,
			"id": "1MNNRRlx2ZeDu-OZH7_V9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2575.099242383341,
			"y": 860.499328649191,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 34.869816005127404,
			"height": 13.827685657205677,
			"seed": 993403387,
			"groupIds": [
				"iD5E_sdwWbfFcKDXSEYbb",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Uko7AYUNXT8Bh5MeawgJv",
				"focus": 0.27556398903648066,
				"gap": 8.416852139168668
			},
			"endBinding": {
				"elementId": "9mEVyo5M",
				"focus": -0.5575659414752934,
				"gap": 5.410833518036725
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					34.869816005127404,
					13.827685657205677
				]
			]
		},
		{
			"type": "text",
			"version": 591,
			"versionNonce": 1146398973,
			"isDeleted": false,
			"id": "ydXHTYbp",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2653.255726532764,
			"y": 709.5971938683813,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 336,
			"height": 20,
			"seed": 1211329179,
			"groupIds": [
				"iD5E_sdwWbfFcKDXSEYbb",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "匿名结构体，一般使用一次时可以使用这种方式",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "匿名结构体，一般使用一次时可以使用这种方式",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 540,
			"versionNonce": 1466184019,
			"isDeleted": false,
			"id": "SV8xgQNi",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2276.9986663918085,
			"y": 732.8311400117674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 197.48793029785156,
			"height": 120,
			"seed": 97733333,
			"groupIds": [
				"dVYC0aw-GUMhdAB_RmoGe",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "TyhpdUVDObofO-pTbHJoQ",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "typedef struct {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n} Student;",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "typedef struct {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n} Student;",
			"lineHeight": 1.25,
			"baseline": 114
		},
		{
			"type": "text",
			"version": 578,
			"versionNonce": 1697677661,
			"isDeleted": false,
			"id": "OKyP6qXT",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2276.3187890612285,
			"y": 711.7549427637899,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 224,
			"height": 20,
			"seed": 854360757,
			"groupIds": [
				"dVYC0aw-GUMhdAB_RmoGe",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "这种方式比较优雅，推荐使用！",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "这种方式比较优雅，推荐使用！",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "freedraw",
			"version": 597,
			"versionNonce": 622366451,
			"isDeleted": false,
			"id": "mju6PlCMXQNQIS7T6XqsJ",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 20,
			"angle": 0,
			"x": -2128.4692277563845,
			"y": 721.7842841069083,
			"strokeColor": "#69db7c",
			"backgroundColor": "transparent",
			"width": 53.03043178523387,
			"height": 2.039631991739725,
			"seed": 590875413,
			"groupIds": [
				"dVYC0aw-GUMhdAB_RmoGe",
				"07m_Fe5e6DdXZEavrhBVf",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.6798773305798704,
					0
				],
				[
					1.3597546611598545,
					0
				],
				[
					2.719509322319709,
					0
				],
				[
					4.07926398347945,
					0
				],
				[
					5.4390186446393045,
					0
				],
				[
					6.118895975219289,
					0
				],
				[
					6.798773305799159,
					0
				],
				[
					7.478650636379143,
					0
				],
				[
					8.838405297538998,
					0
				],
				[
					10.198159958698739,
					0
				],
				[
					12.917669281018448,
					0
				],
				[
					14.277423942178302,
					0
				],
				[
					14.957301272758286,
					0
				],
				[
					15.637178603338157,
					0
				],
				[
					16.31705593391814,
					0
				],
				[
					17.67681059507788,
					0
				],
				[
					19.036565256237736,
					0
				],
				[
					19.71644258681772,
					0
				],
				[
					20.39631991739759,
					0
				],
				[
					21.076197247977575,
					0
				],
				[
					23.1158292397173,
					0
				],
				[
					24.475583900877155,
					0
				],
				[
					27.874970553776734,
					0
				],
				[
					29.23472521493659,
					0
				],
				[
					29.914602545516573,
					0
				],
				[
					30.594479876096443,
					0
				],
				[
					32.63411186783617,
					0
				],
				[
					33.99386652899602,
					-0.6798773305799273
				],
				[
					36.03349852073586,
					-0.6798773305799273
				],
				[
					37.393253181895716,
					-0.6798773305799273
				],
				[
					38.073130512475586,
					-0.6798773305799273
				],
				[
					38.75300784305546,
					-0.6798773305799273
				],
				[
					39.43288517363544,
					-0.6798773305799273
				],
				[
					40.11276250421531,
					-0.6798773305799273
				],
				[
					40.792639834795295,
					-0.6798773305799273
				],
				[
					41.472517165375166,
					-1.3597546611598545
				],
				[
					42.15239449595515,
					-1.3597546611598545
				],
				[
					42.83227182653502,
					-1.3597546611598545
				],
				[
					43.512149157115005,
					-1.3597546611598545
				],
				[
					44.192026487694875,
					-1.3597546611598545
				],
				[
					44.87190381827486,
					-1.3597546611598545
				],
				[
					45.55178114885473,
					-1.3597546611598545
				],
				[
					46.2316584794346,
					-1.3597546611598545
				],
				[
					46.911535810014584,
					-1.3597546611598545
				],
				[
					47.591413140594454,
					-2.039631991739725
				],
				[
					48.27129047117444,
					-2.039631991739725
				],
				[
					48.95116780175431,
					-2.039631991739725
				],
				[
					49.63104513233429,
					-2.039631991739725
				],
				[
					50.310922462914164,
					-2.039631991739725
				],
				[
					50.99079979349415,
					-2.039631991739725
				],
				[
					51.67067712407402,
					-2.039631991739725
				],
				[
					52.350554454654,
					-2.039631991739725
				],
				[
					53.03043178523387,
					-2.039631991739725
				],
				[
					53.03043178523387,
					-2.039631991739725
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 344,
			"versionNonce": 1102204349,
			"isDeleted": false,
			"id": "sqhTouLT",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 941.0420033382288,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 140,
			"height": 25,
			"seed": 2058463125,
			"groupIds": [
				"piFl-3o-rR26wTAFc5jzC",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "声明结构体变量",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "声明结构体变量",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 403,
			"versionNonce": 598751379,
			"isDeleted": false,
			"id": "v0S4NlB7",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2952.7530601960502,
			"y": 994.3805875315027,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 190.847900390625,
			"height": 120,
			"seed": 636626645,
			"groupIds": [
				"piFl-3o-rR26wTAFc5jzC",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "KgpbYP88avp1AQ7pN4dIo",
					"type": "arrow"
				},
				{
					"id": "ETe16lA7fA7u_zFd7BYLP",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "struct Student stu = {\n        .id = 1,\n        .name = \"小让\",\n        .age = 28,\n        .score = 59.9\n};",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "struct Student stu = {\n        .id = 1,\n        .name = \"小让\",\n        .age = 28,\n        .score = 59.9\n};",
			"lineHeight": 1.25,
			"baseline": 114
		},
		{
			"type": "text",
			"version": 856,
			"versionNonce": 1492880925,
			"isDeleted": false,
			"id": "Ytvbv9Nc",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2665.5206859162736,
			"y": 969.2539512945743,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 354.7679443359375,
			"height": 60,
			"seed": 151901019,
			"groupIds": [
				"piFl-3o-rR26wTAFc5jzC",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "KgpbYP88avp1AQ7pN4dIo",
					"type": "arrow"
				},
				{
					"id": "AKZvK8iOVjfI-RmMxBAn5",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "可以使用typedef关键字为类型重新定义名称：\ntypedef struct Student Student;\n那么在声明结构体变量不再需要带上struct关键字",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "可以使用typedef关键字为类型重新定义名称：\ntypedef struct Student Student;\n那么在声明结构体变量不再需要带上struct关键字",
			"lineHeight": 1.25,
			"baseline": 54
		},
		{
			"type": "arrow",
			"version": 1022,
			"versionNonce": 1893838387,
			"isDeleted": false,
			"id": "KgpbYP88avp1AQ7pN4dIo",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -2777.9065210800613,
			"y": 1057.65448800423,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 102.53645529086384,
			"height": 66.14845743122567,
			"seed": 919914005,
			"groupIds": [
				"piFl-3o-rR26wTAFc5jzC",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "v0S4NlB7",
				"focus": 0.5635808704949433,
				"gap": 11.75278911598889
			},
			"endBinding": {
				"elementId": "Ytvbv9Nc",
				"focus": 0.8883899211255307,
				"gap": 9.849379872924146
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					102.53645529086384,
					-66.14845743122567
				]
			]
		},
		{
			"type": "text",
			"version": 409,
			"versionNonce": 1241367165,
			"isDeleted": false,
			"id": "cfZRdYeG",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": -2272.8497852952023,
			"y": 981.1801245008205,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 177.887939453125,
			"height": 120,
			"seed": 993500955,
			"groupIds": [
				"piFl-3o-rR26wTAFc5jzC",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "AKZvK8iOVjfI-RmMxBAn5",
					"type": "arrow"
				},
				{
					"id": "TyhpdUVDObofO-pTbHJoQ",
					"type": "arrow"
				}
			],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"customData": {
				"legacyTextWrap": true
			},
			"fontSize": 16,
			"fontFamily": 4,
			"text": "Student stu = {\n        .id = 1,\n        .name = \"小让\",\n        .age = 28,\n        .score = 59.9\n};",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Student stu = {\n        .id = 1,\n        .name = \"小让\",\n        .age = 28,\n        .score = 59.9\n};",
			"lineHeight": 1.25,
			"baseline": 114
		},
		{
			"type": "arrow",
			"version": 948,
			"versionNonce": 798191571,
			"isDeleted": false,
			"id": "AKZvK8iOVjfI-RmMxBAn5",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2513.5256307777595,
			"y": 1042.8845661654361,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 229.09799568938467,
			"height": 54.85134273055994,
			"seed": 2000447035,
			"groupIds": [
				"piFl-3o-rR26wTAFc5jzC",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Ytvbv9Nc",
				"focus": 0.4656147935043028,
				"gap": 13.630614870861791
			},
			"endBinding": {
				"elementId": "cfZRdYeG",
				"focus": 0.16275398687514034,
				"gap": 11.57784979317239
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					108.83178805582145,
					54.85134273055994
				],
				[
					229.09799568938467,
					14.196851181092942
				]
			]
		},
		{
			"type": "text",
			"version": 430,
			"versionNonce": 1501194973,
			"isDeleted": false,
			"id": "bqiMY2Lv",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 1151.7361699276341,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 278446363,
			"groupIds": [
				"FnyBrFYHqBTTOjvLlhkuh",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "结构体嵌套",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "结构体嵌套",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 326,
			"versionNonce": 1641807219,
			"isDeleted": false,
			"id": "utOJu1QO",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2950.8384692136287,
			"y": 1190.4567439673222,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 237.1038818359375,
			"height": 260,
			"seed": 716965717,
			"groupIds": [
				"FnyBrFYHqBTTOjvLlhkuh",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "typedef struct {\n    int year; // 年\n    int month; // 月\n    int day; // 日\n} Birthday;\n\ntypedef struct {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n    Birthday birthday; // 生日\n} Student;",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "typedef struct {\n    int year; // 年\n    int month; // 月\n    int day; // 日\n} Birthday;\n\ntypedef struct {\n    int id; // 序号\n    char *name; // 姓名\n    int age; // 年龄\n    double score; // 分数\n    Birthday birthday; // 生日\n} Student;",
			"lineHeight": 1.25,
			"baseline": 254
		},
		{
			"type": "arrow",
			"version": 602,
			"versionNonce": 939722557,
			"isDeleted": false,
			"id": "TyhpdUVDObofO-pTbHJoQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2210.827034187077,
			"y": 866.7702801144059,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.19012002862609734,
			"height": 98.54291828853786,
			"seed": 1157145661,
			"groupIds": [
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "SV8xgQNi",
				"focus": 0.2558088489431302,
				"gap": 13.939140102638476
			},
			"endBinding": {
				"elementId": "cfZRdYeG",
				"focus": -0.1883742475914844,
				"gap": 15.866926097876785
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.19012002862609734,
					98.54291828853786
				]
			]
		},
		{
			"type": "text",
			"version": 192,
			"versionNonce": 50452243,
			"isDeleted": false,
			"id": "B6NJlrqK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 1476.2719973549142,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 140,
			"height": 25,
			"seed": 254878269,
			"groupIds": [
				"n8ZI5r8g2ieao8D6YejaQ",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "结构体变量赋值",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "结构体变量赋值",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 565,
			"versionNonce": 133765021,
			"isDeleted": false,
			"id": "6G2xvZpy",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2910.796885274493,
			"y": 1520.6623154013505,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 96,
			"height": 20,
			"seed": 927134109,
			"groupIds": [
				"yf64cMxzn5WYqn6dTgGaI",
				"n8ZI5r8g2ieao8D6YejaQ",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "第一种方式：",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "第一种方式：",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 521,
			"versionNonce": 1635482803,
			"isDeleted": false,
			"id": "X9yF8P1P",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2811.971876109877,
			"y": 1519.3915610302038,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 467.2316589355469,
			"height": 20,
			"seed": 1934447005,
			"groupIds": [
				"yf64cMxzn5WYqn6dTgGaI",
				"n8ZI5r8g2ieao8D6YejaQ",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "Student stu1 = {1001, \"xiaorang\", 28, 59.9f, {1995, 7, 13}};",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Student stu1 = {1001, \"xiaorang\", 28, 59.9f, {1995, 7, 13}};",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 219,
			"versionNonce": 596515837,
			"isDeleted": false,
			"id": "4WkJLEwY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2907.999951052853,
			"y": 1559.4809515403788,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 96,
			"height": 20,
			"seed": 1764757203,
			"groupIds": [
				"t4zQgCaOgHz6wP18Gpr92",
				"n8ZI5r8g2ieao8D6YejaQ",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "第二种方式：",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "第二种方式：",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 199,
			"versionNonce": 955215443,
			"isDeleted": false,
			"id": "jOyQuPm5",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2811.971876109876,
			"y": 1560.413262947592,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 885.343505859375,
			"height": 20,
			"seed": 1633332733,
			"groupIds": [
				"t4zQgCaOgHz6wP18Gpr92",
				"n8ZI5r8g2ieao8D6YejaQ",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "Student stu2 = {.id = 1002, .name = \"sxy\", .age = 28, .score = 99.9f, {.year = 1995, .month = 3, .day = 20}};",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Student stu2 = {.id = 1002, .name = \"sxy\", .age = 28, .score = 99.9f, {.year = 1995, .month = 3, .day = 20}};",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 283,
			"versionNonce": 583242845,
			"isDeleted": false,
			"id": "Yu80O44s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 1601.1998315055812,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 140,
			"height": 25,
			"seed": 1130184221,
			"groupIds": [
				"y07_VITXR2wIhneBCDN-Y",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "访问结构体成员",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "访问结构体成员",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 282,
			"versionNonce": 204745715,
			"isDeleted": false,
			"id": "JfxQ7oP9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2906.5383527318695,
			"y": 1666.6778686148843,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 864.991455078125,
			"height": 80,
			"seed": 1468083283,
			"groupIds": [
				"Xwt1UAIRWlnDZsrkoZ7Gn",
				"y07_VITXR2wIhneBCDN-Y",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "void printStudentInfo(Student student) {\n    printf(\"学号:%d\\t姓名:%s\\t年龄:%d\\t成绩:%.2f\\t生日:%d-%d-%d\\n\", student.id, student.name, student.age,\n           student.score, student.birthday.year, student.birthday.month, student.birthday.day);\n}",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "void printStudentInfo(Student student) {\n    printf(\"学号:%d\\t姓名:%s\\t年龄:%d\\t成绩:%.2f\\t生日:%d-%d-%d\\n\", student.id, student.name, student.age,\n           student.score, student.birthday.year, student.birthday.month, student.birthday.day);\n}",
			"lineHeight": 1.25,
			"baseline": 74
		},
		{
			"type": "text",
			"version": 340,
			"versionNonce": 560660669,
			"isDeleted": false,
			"id": "gGaXf0Q4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2900.9444842885887,
			"y": 1642.6113409557547,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 264.38397216796875,
			"height": 20,
			"seed": 1345785715,
			"groupIds": [
				"uWbf154Op0Xp0wKjnK0yO",
				"Xwt1UAIRWlnDZsrkoZ7Gn",
				"y07_VITXR2wIhneBCDN-Y",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "使用结构体变量 + 点号（.） + 成员",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "使用结构体变量 + 点号（.） + 成员",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "freedraw",
			"version": 248,
			"versionNonce": 1062221203,
			"isDeleted": false,
			"id": "ZieLI1kJ6oLTg2u1uSMP_",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 20,
			"angle": 0,
			"x": -2762.326137876825,
			"y": 1653.512617754672,
			"strokeColor": "#f783ac",
			"backgroundColor": "transparent",
			"width": 44.44678306683045,
			"height": 1.550469176749857,
			"seed": 1187561203,
			"groupIds": [
				"uWbf154Op0Xp0wKjnK0yO",
				"Xwt1UAIRWlnDZsrkoZ7Gn",
				"y07_VITXR2wIhneBCDN-Y",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-0.5168230589165432
				],
				[
					0.5168230589165432,
					-0.5168230589165432
				],
				[
					1.5504691767496297,
					-0.5168230589165432
				],
				[
					3.100938353499714,
					-0.5168230589165432
				],
				[
					4.134584471332801,
					-0.5168230589165432
				],
				[
					5.168230589166342,
					-0.5168230589165432
				],
				[
					6.201876706999428,
					-0.5168230589165432
				],
				[
					6.201876706999428,
					-1.0336461178333138
				],
				[
					6.7186997659159715,
					-1.0336461178333138
				],
				[
					7.752345883749513,
					-1.0336461178333138
				],
				[
					9.302815060499142,
					-1.0336461178333138
				],
				[
					11.37010729616577,
					-1.0336461178333138
				],
				[
					13.437399531832398,
					-1.0336461178333138
				],
				[
					16.02151482641557,
					-1.0336461178333138
				],
				[
					17.055160944248655,
					-1.0336461178333138
				],
				[
					17.571984003165653,
					-1.0336461178333138
				],
				[
					18.088807062082196,
					-1.0336461178333138
				],
				[
					18.60563012099874,
					-1.0336461178333138
				],
				[
					19.122453179915283,
					-1.0336461178333138
				],
				[
					20.156099297748824,
					-1.0336461178333138
				],
				[
					21.18974541558191,
					-1.550469176749857
				],
				[
					22.223391533414997,
					-1.550469176749857
				],
				[
					23.77386071016508,
					-1.550469176749857
				],
				[
					24.290683769081625,
					-1.550469176749857
				],
				[
					24.807506827998168,
					-1.550469176749857
				],
				[
					25.324329886915166,
					-1.550469176749857
				],
				[
					25.84115294583171,
					-1.550469176749857
				],
				[
					26.357976004748252,
					-1.550469176749857
				],
				[
					27.39162212258134,
					-1.550469176749857
				],
				[
					28.942091299331423,
					-1.550469176749857
				],
				[
					29.97573741716451,
					-1.550469176749857
				],
				[
					30.492560476081508,
					-1.550469176749857
				],
				[
					31.526206593914594,
					-1.550469176749857
				],
				[
					32.55985271174768,
					-1.550469176749857
				],
				[
					33.07667577066468,
					-1.550469176749857
				],
				[
					33.59349882958122,
					-1.550469176749857
				],
				[
					34.62714494741431,
					-1.550469176749857
				],
				[
					36.17761412416439,
					-1.550469176749857
				],
				[
					37.21126024199748,
					-1.550469176749857
				],
				[
					38.24490635983102,
					-1.550469176749857
				],
				[
					38.761729418747564,
					-1.550469176749857
				],
				[
					39.27855247766411,
					-1.550469176749857
				],
				[
					40.31219859549719,
					-1.550469176749857
				],
				[
					40.82902165441419,
					-1.550469176749857
				],
				[
					41.86266777224728,
					-1.550469176749857
				],
				[
					42.37949083116382,
					-1.550469176749857
				],
				[
					42.896313890080364,
					-1.550469176749857
				],
				[
					43.41313694899736,
					-1.550469176749857
				],
				[
					43.929960007913905,
					-1.550469176749857
				],
				[
					44.44678306683045,
					-1.550469176749857
				],
				[
					44.44678306683045,
					-1.550469176749857
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "arrow",
			"version": 575,
			"versionNonce": 1160110365,
			"isDeleted": false,
			"id": "ETe16lA7fA7u_zFd7BYLP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2767.903615816707,
			"y": 865.1611216361316,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 34.739300504731546,
			"height": 159.11181872719726,
			"seed": 2002431315,
			"groupIds": [
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_V690_KFRCMHTx9yn6IOs",
				"focus": -0.7011473815897705,
				"gap": 7.02517906859498
			},
			"endBinding": {
				"elementId": "v0S4NlB7",
				"focus": 0.7923967210888989,
				"gap": 19.30518328672224
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					32.28878941211042,
					84.66478696431159
				],
				[
					-2.4505110926211273,
					159.11181872719726
				]
			]
		},
		{
			"type": "text",
			"version": 189,
			"versionNonce": 1903823667,
			"isDeleted": false,
			"id": "G0yhZd5y",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2955.0594741824293,
			"y": 1770.6866801459666,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 1790656691,
			"groupIds": [
				"2WulFjWQA7kWMNTE3KEyT",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "结构体指针",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "结构体指针",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 229,
			"versionNonce": 56997245,
			"isDeleted": false,
			"id": "YI5J52vc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2914.1834075099564,
			"y": 1831.848664279863,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 921.6314697265625,
			"height": 80,
			"seed": 1617939123,
			"groupIds": [
				"VHWvhTA_B4BZ0quC54dDR",
				"2WulFjWQA7kWMNTE3KEyT",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "void printStudentInfo(Student *pStudent) {\n    printf(\"学号:%d\\t姓名:%s\\t年龄:%d\\t成绩:%.2f\\t生日:%d-%d-%d\\n\", pStudent->id, pStudent->name, pStudent->age,\n           pStudent->score, pStudent->birthday.year, pStudent->birthday.month, pStudent->birthday.day);\n}",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "void printStudentInfo(Student *pStudent) {\n    printf(\"学号:%d\\t姓名:%s\\t年龄:%d\\t成绩:%.2f\\t生日:%d-%d-%d\\n\", pStudent->id, pStudent->name, pStudent->age,\n           pStudent->score, pStudent->birthday.year, pStudent->birthday.month, pStudent->birthday.day);\n}",
			"lineHeight": 1.25,
			"baseline": 74
		},
		{
			"type": "text",
			"version": 247,
			"versionNonce": 387460307,
			"isDeleted": false,
			"id": "sXjsNlhl",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -2913.2101678272784,
			"y": 1810.1697880877275,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 298.33599853515625,
			"height": 20,
			"seed": 1687275283,
			"groupIds": [
				"VHWvhTA_B4BZ0quC54dDR",
				"2WulFjWQA7kWMNTE3KEyT",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 4,
			"text": "使用结构体指针 + 箭头符号（->）+ 成员",
			"rawText": "",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "使用结构体指针 + 箭头符号（->）+ 成员",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "freedraw",
			"version": 242,
			"versionNonce": 661388765,
			"isDeleted": false,
			"id": "NzSLayIoTXaYzK3hzTi__",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 20,
			"angle": 0,
			"x": -2774.5488522069327,
			"y": 1820.5976119086588,
			"strokeColor": "#d2bab0",
			"backgroundColor": "transparent",
			"width": 85.08065223300628,
			"height": 1.402428333511125,
			"seed": 904469629,
			"groupIds": [
				"VHWvhTA_B4BZ0quC54dDR",
				"2WulFjWQA7kWMNTE3KEyT",
				"_Ehu9dZKp1nPCzY_udUY5",
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.46747611117052656,
					0
				],
				[
					2.3373805558517233,
					0
				],
				[
					4.207285000533375,
					0
				],
				[
					5.6097133340445,
					0
				],
				[
					6.077189445214572,
					0
				],
				[
					6.544665556385098,
					0
				],
				[
					7.4796177787256966,
					0
				],
				[
					8.882046112236822,
					0
				],
				[
					10.751950556918473,
					0
				],
				[
					12.154378890429598,
					0
				],
				[
					13.556807223940723,
					0
				],
				[
					14.491759446281321,
					0
				],
				[
					15.42671166862192,
					0
				],
				[
					16.361663890962973,
					0
				],
				[
					17.29661611330357,
					0
				],
				[
					17.764092224473643,
					0
				],
				[
					18.23156833564417,
					0
				],
				[
					18.699044446814696,
					0
				],
				[
					19.633996669155295,
					0
				],
				[
					20.568948891495893,
					0
				],
				[
					22.906329447347616,
					0
				],
				[
					24.30875778085874,
					0
				],
				[
					25.711186114369866,
					0
				],
				[
					26.178662225540393,
					0
				],
				[
					26.64613833671092,
					0
				],
				[
					27.581090559051518,
					0
				],
				[
					28.048566670222044,
					0
				],
				[
					29.91847111490324,
					0
				],
				[
					31.320899448414366,
					0
				],
				[
					33.65828000426609,
					-0.4674761111702992
				],
				[
					35.52818444894774,
					-0.4674761111702992
				],
				[
					37.865565004799464,
					-0.9349522223405984
				],
				[
					39.26799333831059,
					-0.9349522223405984
				],
				[
					39.735469449481116,
					-1.402428333511125
				],
				[
					40.20294556065119,
					-1.402428333511125
				],
				[
					40.670421671821714,
					-1.402428333511125
				],
				[
					41.60537389416231,
					-1.402428333511125
				],
				[
					43.475278338843964,
					-1.402428333511125
				],
				[
					46.28013500586576,
					-1.402428333511125
				],
				[
					49.08499167288801,
					-1.402428333511125
				],
				[
					51.88984833991026,
					-1.402428333511125
				],
				[
					54.22722889576198,
					-1.402428333511125
				],
				[
					55.162181118103035,
					-1.402428333511125
				],
				[
					55.62965722927311,
					-1.402428333511125
				],
				[
					56.097133340443634,
					-1.402428333511125
				],
				[
					56.564609451613705,
					-1.402428333511125
				],
				[
					57.03208556278423,
					-1.402428333511125
				],
				[
					57.49956167395476,
					-1.402428333511125
				],
				[
					57.96703778512483,
					-1.402428333511125
				],
				[
					58.90199000746588,
					-1.402428333511125
				],
				[
					61.23937056331761,
					-1.402428333511125
				],
				[
					63.10927500799926,
					-1.402428333511125
				],
				[
					64.04422723033986,
					-1.402428333511125
				],
				[
					64.51170334150993,
					-1.402428333511125
				],
				[
					65.44665556385098,
					-1.402428333511125
				],
				[
					66.8490838973621,
					-1.402428333511125
				],
				[
					68.25151223087278,
					-1.402428333511125
				],
				[
					70.12141667555443,
					-1.402428333511125
				],
				[
					71.05636889789503,
					-1.402428333511125
				],
				[
					71.99132112023608,
					-1.402428333511125
				],
				[
					72.45879723140615,
					-1.402428333511125
				],
				[
					72.92627334257668,
					-1.402428333511125
				],
				[
					73.3937494537472,
					-1.402428333511125
				],
				[
					73.86122556491728,
					-1.402428333511125
				],
				[
					75.2636538984284,
					-1.402428333511125
				],
				[
					76.198606120769,
					-1.402428333511125
				],
				[
					76.66608223193953,
					-1.402428333511125
				],
				[
					76.66608223193953,
					-0.9349522223405984
				],
				[
					77.13355834311005,
					-0.9349522223405984
				],
				[
					78.06851056545065,
					-0.4674761111702992
				],
				[
					78.53598667662118,
					-0.4674761111702992
				],
				[
					79.00346278779125,
					0
				],
				[
					79.47093889896178,
					0
				],
				[
					79.93841501013185,
					0
				],
				[
					80.40589112130237,
					0
				],
				[
					80.8733672324729,
					0
				],
				[
					81.34084334364297,
					0
				],
				[
					82.27579556598403,
					0
				],
				[
					82.7432716771541,
					0
				],
				[
					83.21074778832462,
					0
				],
				[
					83.67822389949515,
					0
				],
				[
					84.14570001066522,
					0
				],
				[
					84.61317612183575,
					0
				],
				[
					85.08065223300628,
					0
				],
				[
					85.08065223300628,
					0
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "rectangle",
			"version": 372,
			"versionNonce": 1405164147,
			"isDeleted": false,
			"id": "Imq7f8etpj8tlzgTj8aC1",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 0,
			"opacity": 10,
			"angle": 0,
			"x": -2982.3465803655868,
			"y": 604.6219623840132,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f8f1ee",
			"width": 935.1710956343261,
			"height": 1324.5281714406317,
			"seed": 1585145981,
			"groupIds": [
				"IeBfDlXiyBPMbcARsCfAl"
			],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1692858098787,
			"link": null,
			"locked": false
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 3172.8986934523623,
		"scrollY": 173.67863285408203,
		"zoom": {
			"value": 0.3
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"prevTextMode": "parsed",
	"files": {}
}
```
%%