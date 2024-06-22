# [SQL226 将employees表的所有员工的last_name和first_name拼接起来作为Name](https://www.nowcoder.com/practice/6744b90bbdde40209f8ecaac0b0516fe?tpId=82&tags=&title=&difficulty=2&judgeStatus=&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0&gioEnter=menu)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>


## 题目描述

现有员工表employees如下：

| emp_no | birth_date | first_name | last_name | gender | hire_date  |
| ------ | ---------- | ---------- | --------- | ------ | ---------- |
| 10001  | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |
| 10002  | 1964-06-02 | Bezalel    | Simmel    | F      | 1985-11-21 |
| 10003  | 1959-12-03 | Parto      | Bamford   | M      | 1986-08-28 |
| 10004  | 1954-05-01 | Chirstian  | Koblick   | M      | 1986-12-01 |
| 10005  | 1955-01-21 | Kyoichi    | Maliniak  | M      | 1989-09-12 |
| 10006  | 1953-04-20 | Anneke     | Preusig   | F      | 1989-06-02 |
| 10007  | 1957-05-23 | Tzvetan    | Zielinski | F      | 1989-02-10 |
| 10008  | 1958-02-19 | Saniya     | Kalloufi  | M      | 1994-09-15 |
| 10009  | 1952-04-19 | Sumant     | Peac      | F      | 1985-02-18 |
| 10010  | 1963-06-01 | Duangkaew  | Piveteau  | F      | 1989-08-24 |
| 10011  | 1953-11-07 | Mary       | Sluis     | F      | 1990-01-22 |

请将employees表的所有员工的last_name和first_name拼接起来作为Name，中间以一个空格区分。

(注：sqllite,字符串拼接为 || 符号，不支持concat函数，mysql支持concat函数)。

### 输入描述：

无

### 输出描述：

| Name               |
| :----------------- |
| Facello Georgi     |
| Simmel Bezalel     |
| Bamford Parto      |
| Koblick Chirstian  |
| Maliniak Kyoichi   |
| Preusig Anneke     |
| Zielinski Tzvetan  |
| Kalloufi Saniya    |
| Peac Sumant        |
| Piveteau Duangkaew |
| Sluis Mary         |

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
INSERT INTO employees VALUES(10003,'1959-12-03','Parto','Bamford','M','1986-08-28');
INSERT INTO employees VALUES(10004,'1954-05-01','Chirstian','Koblick','M','1986-12-01');
INSERT INTO employees VALUES(10005,'1955-01-21','Kyoichi','Maliniak','M','1989-09-12');
INSERT INTO employees VALUES(10006,'1953-04-20','Anneke','Preusig','F','1989-06-02');
INSERT INTO employees VALUES(10007,'1957-05-23','Tzvetan','Zielinski','F','1989-02-10');
INSERT INTO employees VALUES(10008,'1958-02-19','Saniya','Kalloufi','M','1994-09-15');
INSERT INTO employees VALUES(10009,'1952-04-19','Sumant','Peac','F','1985-02-18');
INSERT INTO employees VALUES(10010,'1963-06-01','Duangkaew','Piveteau','F','1989-08-24');
INSERT INTO employees VALUES(10011,'1953-11-07','Mary','Sluis','F','1990-01-22');
```

## 答案
```sql
SELECT CONCAT(last_name, ' ', first_name) AS `Name`
FROM employees;
```