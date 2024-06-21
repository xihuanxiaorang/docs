# [SQL180 某宝店铺的SPU数量](https://www.nowcoder.com/practice/2b6ea6b8fe634d2cbc39be46db411ca4?tpId=268&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Foj)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>

## 题目描述

11月结束后，小牛同学需要对其在某宝的网店就11月份用户交易情况和产品情况进行分析以更好的经营小店。

已知产品情况表product_tb如下（其中，item_id指某款号的具体货号，style_id指款号，tag_price表示标签价格，inventory指库存量）：

| item_id | style_id | tag_price | inventory |
| ------- | -------- | --------- | --------- |
| A001    | A        | 100       | 20        |
| A002    | A        | 120       | 30        |
| A003    | A        | 200       | 15        |
| B001    | B        | 130       | 18        |
| B002    | B        | 150       | 22        |
| B003    | B        | 125       | 10        |
| B004    | B        | 155       | 12        |
| C001    | C        | 260       | 25        |
| C002    | C        | 280       | 18        |

请你统计每款的SPU（货号）数量，并按SPU数量降序排序，以上例子的输出结果如下：

| style_id | SPU_num |
| -------- | ------- |
| B        | 4       |
| A        | 3       |
| C        | 2       |

## SQL Schema

```sql
drop table if exists product_tb;
CREATE TABLE product_tb
(
    item_id   char(10) NOT NULL,
    style_id  char(10) NOT NULL,
    tag_price int(10)  NOT NULL,
    inventory int(10)  NOT NULL
);
INSERT INTO product_tb
VALUES ('A001', 'A', 100, 20);
INSERT INTO product_tb
VALUES ('A002', 'A', 120, 30);
INSERT INTO product_tb
VALUES ('A003', 'A', 200, 15);
INSERT INTO product_tb
VALUES ('B001', 'B', 130, 18);
INSERT INTO product_tb
VALUES ('B002', 'B', 150, 22);
INSERT INTO product_tb
VALUES ('B003', 'B', 125, 10);
INSERT INTO product_tb
VALUES ('B004', 'B', 155, 12);
INSERT INTO product_tb
VALUES ('C001', 'C', 260, 25);
INSERT INTO product_tb
VALUES ('C002', 'C', 280, 18);
```

## 答案

```sql
SELECT style_id, COUNT(*) AS `SPU_num`
FROM product_tb
GROUP BY style_id
ORDER BY SPU_num DESC;
```

