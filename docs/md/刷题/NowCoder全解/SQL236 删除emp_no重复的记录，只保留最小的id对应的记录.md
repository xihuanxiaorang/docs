# [SQL236 删除emp_no重复的记录，只保留最小的id对应的记录](https://www.nowcoder.com/practice/3d92551a6f6d4f1ebde272d20872cf05?tpId=82&tags=&title=&difficulty=2&judgeStatus=&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0&gioEnter=menu)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%87%8D%E5%A4%8D%E8%AE%B0%E5%BD%95%E9%97%AE%E9%A2%98-%23eebe77">
</div>


## 题目描述

删除emp_no重复的记录，只保留最小的id对应的记录。
```sql
CREATE TABLE IF NOT EXISTS titles_test (
id int(11) not null primary key,
emp_no int(11) NOT NULL,
title varchar(50) NOT NULL,
from_date date NOT NULL,
to_date date DEFAULT NULL);

insert into titles_test values ('1', '10001', 'Senior Engineer', '1986-06-26', '9999-01-01'),
('2', '10002', 'Staff', '1996-08-03', '9999-01-01'),
('3', '10003', 'Senior Engineer', '1995-12-03', '9999-01-01'),
('4', '10004', 'Senior Engineer', '1995-12-03', '9999-01-01'),
('5', '10001', 'Senior Engineer', '1986-06-26', '9999-01-01'),
('6', '10002', 'Staff', '1996-08-03', '9999-01-01'),

('7', '10003', 'Senior Engineer', '1995-12-03', '9999-01-01');
```



删除后titles_test表为(注：最后会`select * from titles_test`表来对比结果)

| id   | emp_no | title           | from_date  | to_date    |
| ---- | ------ | --------------- | ---------- | ---------- |
| 1    | 10001  | Senior Engineer | 1986-06-26 | 9999-01-01 |
| 2    | 10002  | Staff           | 1996-08-03 | 9999-01-01 |
| 3    | 10003  | Senior Engineer | 1995-12-03 | 9999-01-01 |
| 4    | 10004  | Senior Engineer | 1995-12-03 | 9999-01-01 |

## SQL Schema

```sql
drop table if exists titles_test;
CREATE TABLE titles_test (
   id int(11) not null primary key,
   emp_no  int(11) NOT NULL,
   title  varchar(50) NOT NULL,
   from_date  date NOT NULL,
   to_date  date DEFAULT NULL);

insert into titles_test values
('1', '10001', 'Senior Engineer', '1986-06-26', '9999-01-01'),
('2', '10002', 'Staff', '1996-08-03', '9999-01-01'),
('3', '10003', 'Senior Engineer', '1995-12-03', '9999-01-01'),
('4', '10004', 'Senior Engineer', '1995-12-03', '9999-01-01'),
('5', '10001', 'Senior Engineer', '1986-06-26', '9999-01-01'),
('6', '10002', 'Staff', '1996-08-03', '9999-01-01'),
('7', '10003', 'Senior Engineer', '1995-12-03', '9999-01-01');
```

## 答案
```sql
DELETE
FROM titles_test
WHERE id IN (SELECT *
             FROM (SELECT a.id
                   FROM titles_test a
                            INNER JOIN (SELECT emp_no, MIN(id) AS `min_id`
                                        FROM titles_test
                                        GROUP BY emp_no
                                        HAVING COUNT(*) > 1) b ON a.emp_no = b.emp_no AND a.id > b.min_id) c);
```

```sql
DELETE
FROM titles_test
WHERE id NOT IN (SELECT *
                 FROM (SELECT MIN(id)
                       FROM titles_test
                       GROUP BY emp_no) a);
```

