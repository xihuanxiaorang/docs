# [SQL201 查找薪水记录超过15条的员工号emp_no以及其对应的记录次数t](https://www.nowcoder.com/practice/6d4a4cff1d58495182f536c548fee1ae?tpId=82&tags=&title=&difficulty=2&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>

## 题目描述

有一个薪水表，salaries简况如下:

| emp_no | salary | from_date  | to_date    |
| ------ | ------ | ---------- | ---------- |
| 10001  | 60117  | 1986-06-26 | 1987-06-26 |
| 10001  | 62102  | 1987-06-26 | 1988-06-25 |
| 10001  | 66074  | 1988-06-25 | 1989-06-25 |
| 10001  | 66596  | 1989-06-25 | 1990-06-25 |
| 10001  | 66961  | 1990-06-25 | 1991-06-25 |
| 10001  | 71046  | 1991-06-25 | 1992-06-24 |
| 10001  | 74333  | 1992-06-24 | 1993-06-24 |
| 10001  | 75286  | 1993-06-24 | 1994-06-24 |
| 10001  | 75994  | 1994-06-24 | 1995-06-24 |
| 10001  | 76884  | 1995-06-24 | 1996-06-23 |
| 10001  | 80013  | 1996-06-23 | 1997-06-23 |
| 10001  | 81025  | 1997-06-23 | 1998-06-23 |
| 10001  | 81097  | 1998-06-23 | 1999-06-23 |
| 10001  | 84917  | 1999-06-23 | 2000-06-22 |
| 10001  | 85112  | 2000-06-22 | 2001-06-22 |
| 10001  | 85097  | 2001-06-22 | 2002-06-22 |
| 10002  | 72527  | 1996-08-03 | 1997-08-03 |

请你查找薪水记录超过15条的员工号emp_no以及其对应的记录次数t，以上例子输出如下:

| emp_no | t    |
| ------ | ---- |
| 10001  | 16   |

## SQL Schema

```sql
drop table if exists  `salaries` ; 
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
INSERT INTO salaries VALUES(10001,60117,'1986-06-26','1987-06-26');
INSERT INTO salaries VALUES(10001,62102,'1987-06-26','1988-06-25');
INSERT INTO salaries VALUES(10001,66074,'1988-06-25','1989-06-25');
INSERT INTO salaries VALUES(10001,66596,'1989-06-25','1990-06-25');
INSERT INTO salaries VALUES(10001,66961,'1990-06-25','1991-06-25');
INSERT INTO salaries VALUES(10001,71046,'1991-06-25','1992-06-24');
INSERT INTO salaries VALUES(10001,74333,'1992-06-24','1993-06-24');
INSERT INTO salaries VALUES(10001,75286,'1993-06-24','1994-06-24');
INSERT INTO salaries VALUES(10001,75994,'1994-06-24','1995-06-24');
INSERT INTO salaries VALUES(10001,76884,'1995-06-24','1996-06-23');
INSERT INTO salaries VALUES(10001,80013,'1996-06-23','1997-06-23');
INSERT INTO salaries VALUES(10001,81025,'1997-06-23','1998-06-23');
INSERT INTO salaries VALUES(10001,81097,'1998-06-23','1999-06-23');
INSERT INTO salaries VALUES(10001,84917,'1999-06-23','2000-06-22');
INSERT INTO salaries VALUES(10001,85112,'2000-06-22','2001-06-22');
INSERT INTO salaries VALUES(10001,85097,'2001-06-22','2002-06-22');
INSERT INTO salaries VALUES(10001,88958,'2002-06-22','9999-01-01');
INSERT INTO salaries VALUES(10002,72527,'1996-08-03','1997-08-03');
```

## 答案

```sql
SELECT emp_no, COUNT(*) AS `t`
FROM salaries
GROUP BY emp_no
HAVING t > 15;
```

