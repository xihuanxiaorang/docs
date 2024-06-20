# [SQL171 零食类商品中复购率top3高的商品](https://www.nowcoder.com/practice/9c175775e7ad4d9da41602d588c5caf3?tpId=268&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Foj)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E4%B8%AD%E7%AD%89-%23f5b900?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>


## 题目描述

商品信息表tb_product_info

| id   | product_id | shop_id | tag  | in_price | quantity | release_time        |
| ---- | ---------- | ------- | ---- | -------- | -------- | ------------------- |
| 1    | 8001       | 901     | 零食 | 60       | 1000     | 2020-01-01 10:00:00 |
| 2    | 8002       | 901     | 零食 | 140      | 500      | 2020-01-01 10:00:00 |
| 3    | 8003       | 901     | 零食 | 160      | 500      | 2020-01-01 10:00:00 |

（product_id-商品ID, shop_id-店铺ID, tag-商品类别标签, in_price-进货价格, quantity-进货数量, release_time-上架时间）

订单总表tb_order_overall

| id   | order_id | uid  | event_time          | total_amount | total_cnt | status |
| ---- | -------- | ---- | ------------------- | ------------ | --------- | ------ |
| 1    | 301001   | 101  | 2021-09-30 10:00:00 | 140          | 1         | 1      |
| 2    | 301002   | 102  | 2021-10-01 11:00:00 | 235          | 2         | 1      |
| 3    | 301011   | 102  | 2021-10-31 11:00:00 | 250          | 2         | 1      |
| 4    | 301003   | 101  | 2021-10-02 10:00:00 | 300          | 2         | 1      |
| 5    | 301013   | 105  | 2021-10-02 10:00:00 | 300          | 2         | 1      |
| 6    | 301005   | 104  | 2021-10-03 10:00:00 | 170          | 1         | 1      |

（order_id-订单号, uid-用户ID, event_time-下单时间, total_amount-订单总金额, total_cnt-订单商品总件数, status-订单状态）

订单明细表tb_order_detail

| id   | order_id | product_id | price | cnt  |
| ---- | -------- | ---------- | ----- | ---- |
| 1    | 301001   | 8002       | 150   | 1    |
| 2    | 301011   | 8003       | 200   | 1    |
| 3    | 301011   | 8001       | 80    | 1    |
| 4    | 301002   | 8001       | 85    | 1    |
| 5    | 301002   | 8003       | 180   | 1    |
| 6    | 301003   | 8002       | 140   | 1    |
| 7    | 301003   | 8003       | 180   | 1    |
| 8    | 301013   | 8002       | 140   | 2    |
| 9    | 301005   | 8003       | 180   | 1    |

（order_id-订单号, product_id-商品ID, price-商品单价, cnt-下单数量）

**场景逻辑说明**：

- 用户将购物车中多件商品一起下单时，订单总表会生成一个订单（但此时未付款， **status-订单状态-****订单状态**为**0**表示待付款），在订单明细表生成该订单中每个商品的信息；
- 当用户支付完成时，在订单总表修改对应订单记录的**status-订单状态-****订单状态**为**1**表示已付款；
- 若用户退货退款，在订单总表生成一条交易总金额为负值的记录（表示退款金额，订单号为退款单号，订单状态为**2表示**已退款）。

**问题**：请统计零食类商品中复购率top3高的商品。

**注**：复购率指用户在一段时间内对某商品的重复购买比例，复购率越大，则反映出消费者对品牌的忠诚度就越高，也叫回头率

此处我们定义：某商品复购率 = 近90天内购买它至少两次的人数 ÷ 购买它的总人数

近90天指包含最大日期（记为当天）在内的近90天。结果中复购率保留3位小数，并按复购率倒序、商品ID升序排序

**输出示例**：

示例数据的输出结果如下：

| product_id | repurchase_rate |
| ---------- | --------------- |
| 8001       | 1.000           |
| 8002       | 0.500           |
| 8003       | 0.333           |

解释：

商品8001、8002、8003都是零食类商品，8001只被用户102购买了两次，复购率1.000；

商品8002被101购买了两次，被105购买了1次，复购率0.500；

商品8003被102购买两次，被101和105各购买1次，复购率为0.333。

## SQL Schema

```sql
DROP TABLE IF EXISTS tb_order_overall;
CREATE TABLE tb_order_overall
(
    id           INT PRIMARY KEY AUTO_INCREMENT COMMENT '自增ID',
    order_id     INT     NOT NULL COMMENT '订单号',
    uid          INT     NOT NULL COMMENT '用户ID',
    event_time   datetime COMMENT '下单时间',
    total_amount DECIMAL NOT NULL COMMENT '订单总金额',
    total_cnt    INT     NOT NULL COMMENT '订单商品总件数',
    `status`     TINYINT NOT NULL COMMENT '订单状态'
) CHARACTER SET utf8
  COLLATE utf8_bin;

DROP TABLE IF EXISTS tb_product_info;
CREATE TABLE tb_product_info
(
    id           INT PRIMARY KEY AUTO_INCREMENT COMMENT '自增ID',
    product_id   INT     NOT NULL COMMENT '商品ID',
    shop_id      INT     NOT NULL COMMENT '店铺ID',
    tag          VARCHAR(12) COMMENT '商品类别标签',
    in_price     DECIMAL NOT NULL COMMENT '进货价格',
    quantity     INT     NOT NULL COMMENT '进货数量',
    release_time datetime COMMENT '上架时间'
) CHARACTER SET utf8
  COLLATE utf8_bin;

DROP TABLE IF EXISTS tb_order_detail;
CREATE TABLE tb_order_detail
(
    id         INT PRIMARY KEY AUTO_INCREMENT COMMENT '自增ID',
    order_id   INT     NOT NULL COMMENT '订单号',
    product_id INT     NOT NULL COMMENT '商品ID',
    price      DECIMAL NOT NULL COMMENT '商品单价',
    cnt        INT     NOT NULL COMMENT '下单数量'
) CHARACTER SET utf8
  COLLATE utf8_bin;

INSERT INTO tb_product_info(product_id, shop_id, tag, in_price, quantity, release_time)
VALUES (8001, 901, '零食', 60, 1000, '2020-01-01 10:00:00'),
       (8002, 901, '零食', 140, 500, '2020-01-01 10:00:00'),
       (8003, 901, '零食', 160, 500, '2020-01-01 10:00:00');

INSERT INTO tb_order_overall(order_id, uid, event_time, total_amount, total_cnt, `status`)
VALUES (301001, 101, '2021-09-30 10:00:00', 140, 1, 1),
       (301002, 102, '2021-10-01 11:00:00', 235, 2, 1),
       (301011, 102, '2021-10-31 11:00:00', 250, 2, 1),
       (301003, 101, '2021-11-02 10:00:00', 300, 2, 1),
       (301013, 105, '2021-11-02 10:00:00', 300, 2, 1),
       (301005, 104, '2021-11-03 10:00:00', 170, 1, 1);

INSERT INTO tb_order_detail(order_id, product_id, price, cnt)
VALUES (301001, 8002, 150, 1),
       (301011, 8003, 200, 1),
       (301011, 8001, 80, 1),
       (301002, 8001, 85, 1),
       (301002, 8003, 180, 1),
       (301003, 8002, 140, 1),
       (301003, 8003, 180, 1),
       (301013, 8002, 140, 2),
       (301005, 8003, 180, 1);
```

## 答案

```sql
WITH tmp AS (SELECT tpi.product_id, too.uid
             FROM tb_product_info tpi
                      INNER JOIN tb_order_detail tod on tpi.product_id = tod.product_id
                      INNER JOIN tb_order_overall too on tod.order_id = too.order_id
             WHERE tpi.tag = '零食'
               AND DATEDIFF((SELECT MAX(event_time) FROM tb_order_overall), too.event_time) <= 89
               AND too.status = 1)
SELECT product_id, ROUND(SUM(IF(cnt >= 2, 1, 0)) / COUNT(DISTINCT uid), 3) AS `repurchase_rate`
FROM (SELECT product_id, uid, COUNT(*) AS `cnt`
      FROM tmp
      GROUP BY product_id, uid) t
GROUP BY product_id
ORDER BY repurchase_rate DESC, product_id
LIMIT 3;
```

