# [SQL209 查找employees表emp_no与last_name的员工信息](https://www.nowcoder.com/practice/a32669eb1d1740e785f105fa22741d5c?tpId=82&tags=&title=&difficulty=2&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>


## 题目描述

有一个员工表employees简况如下:

| emp_no | birth_date | first_name | last_name | gender | hire_date  |
| ------ | ---------- | ---------- | --------- | ------ | ---------- |
| 10001  | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |
| 10002  | 1964-06-02 | Bezalel    | Simmel    | F      | 1985-11-21 |
| 10003  | 1959-12-03 | Bezalel    | Mary      | M      | 1986-08-28 |
| 10004  | 1954-05-01 | Christian  | Koblick   | M      | 1986-12-01 |
| 10005  | 1953-11-07 | Mary       | Sluis     | F      | 1990-01-22 |

请你查找employees表所有emp_no为奇数，且last_name不为Mary的员工信息，并按照hire_date逆序排列，以上例子查询结果如下:

| emp_no | birth_date | first_name | last_name | gender | hire_date  |
| ------ | ---------- | ---------- | --------- | ------ | ---------- |
| 10005  | 1953-11-07 | Mary       | Sluis     | F      | 1990-01-22 |
| 10001  | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |

## SQL Schema

```sql
drop table if exists  `employees` ; 
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
INSERT INTO employees VALUES(10001,'1953-09-02','Georgi','Facello','M','1986-06-26');
INSERT INTO employees VALUES(10002,'1964-06-02','Bezalel','Simmel','F','1985-11-21');
INSERT INTO employees VALUES(10003,'1959-12-03','Bezalel','Mary','M','1986-08-28');
INSERT INTO employees VALUES(10004,'1954-05-01','Chirstian','Koblick','M','1986-12-01');
INSERT INTO employees VALUES(10005,'1953-11-07','Mary','Sluis','F','1990-01-22');
```

## 答案
```sql
SELECT *
FROM employees
WHERE emp_no % 2 <> 0
  AND last_name <> 'Mary'
ORDER BY hire_date DESC;
```