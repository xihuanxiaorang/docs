# [SQL211 获取当前薪水第二多的员工的emp_no以及其对应的薪水salary](https://www.nowcoder.com/practice/8d2c290cc4e24403b98ca82ce45d04db?tpId=82&tags=&title=&difficulty=2&judgeStatus=&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0&gioEnter=menu)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>


## 题目描述

有一个薪水表salaries简况如下:

| emp_no | salary | from_date  | to_date    |
| ------ | ------ | ---------- | ---------- |
| 10001  | 88958  | 2002-06-22 | 9999-01-01 |
| 10002  | 72527  | 2001-08-02 | 9999-01-01 |
| 10003  | 43311  | 2001-12-01 | 9999-01-01 |

请你获取薪水第二多的员工的emp_no以及其对应的薪水salary，

若有多个员工的薪水为第二多的薪水，则将对应的员工的emp_no和salary全部输出，并按emp_no升序排序。

| emp_no | salary |
| ------ | ------ |
| 10002  | 72527  |


## SQL Schema
```sql
drop table if exists  `salaries` ; 
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
INSERT INTO salaries VALUES(10001,88958,'2002-06-22','9999-01-01');
INSERT INTO salaries VALUES(10002,72527,'2001-08-02','9999-01-01');
INSERT INTO salaries VALUES(10003,43311,'2001-12-01','9999-01-01');
```

## 答案

### 解法一：窗口函数

```sql
SELECT emp_no, salary
FROM (SELECT *, DENSE_RANK() OVER (ORDER BY salary DESC) AS `rn`
      FROM salaries) t
WHERE rn = 2
ORDER BY emp_no;
```

### 解法二：子查询

```sql
SELECT emp_no, salary
FROM salaries
WHERE salary = (SELECT salary FROM salaries GROUP BY salary ORDER BY salary DESC LIMIT 1 OFFSET 1)
ORDER BY emp_no;
```

