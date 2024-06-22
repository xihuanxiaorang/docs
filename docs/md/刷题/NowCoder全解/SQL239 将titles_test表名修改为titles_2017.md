# [SQL239 将titles_test表名修改为titles_2017](https://www.nowcoder.com/practice/5277d7f92aa746ab8aa42886e5d570d4?tpId=82&tags=&title=&difficulty=2&judgeStatus=&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0&gioEnter=menu)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>


## 题目描述

将titles_test表名修改为titles_2017。
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


## SQL Schema
```sql
drop table if exists titles_test;
drop table if exists titles_2017;
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
ALTER TABLE titles_test rename to titles_2017;
```