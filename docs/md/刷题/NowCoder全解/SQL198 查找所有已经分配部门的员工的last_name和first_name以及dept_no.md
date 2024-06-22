# [SQL198 查找所有已经分配部门的员工的last_name和first_name以及dept_no](https://www.nowcoder.com/practice/6d35b1cd593545ab985a68cd86f28671?tpId=82&tags=&title=&difficulty=2&judgeStatus=&rp=1&sourceUrl=%2Fexam%2Finterview%3Forder%3D0&gioEnter=menu)

<div style="display:flex;">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6-%E7%AE%80%E5%8D%95-%2351b8b8?style=flat">
  <img style="margin-right: 8px;" alt="Static Badge" src="https://img.shields.io/badge/%E6%95%B0%E6%8D%AE%E5%BA%93-%23b1b3b8?style=flat">
</div>

## 题目描述

有一个员工表，employees简况如下:

| emp_no | birth_date | first_name | last_name | gender | hire_date  |
| ------ | ---------- | ---------- | --------- | ------ | ---------- |
| 10001  | 1953-09-02 | Georgi     | Facello   | M      | 1986-06-26 |
| 10002  | 1964-06-02 | Bezalel    | Simmel    | F      | 1985-11-21 |
| 10003  | 1959-12-03 | Parto      | Bamford   | M      | 1986-08-28 |
| 10004  | 1954-05-01 | Christian  | Koblick   | M      | 1986-12-01 |

有一个部门表，dept_emp简况如下:

| emp_no | dept_no | from_date  | to_date    |
| ------ | ------- | ---------- | ---------- |
| 10001  | d001    | 1986-06-26 | 9999-01-01 |
| 10002  | d002    | 1989-08-03 | 9999-01-01 |

请你查找所有已经分配部门的员工的last_name和first_name以及dept_no，未分配的部门的员工不显示，以上例子如下:

| last_name | first_name | dept_no |
| --------- | ---------- | ------- |
| Facello   | Georgi     | d001    |
| Simmel    | Bezalel    | d002    |

## SQL Schema

```sql
drop table if exists  `dept_emp` ; 
drop table if exists  `employees` ; 
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
INSERT INTO dept_emp VALUES(10001,'d001','1986-06-26','9999-01-01');
INSERT INTO dept_emp VALUES(10002,'d002','1996-08-03','9999-01-01');
INSERT INTO employees VALUES(10001,'1953-09-02','Georgi','Facello','M','1986-06-26');
INSERT INTO employees VALUES(10002,'1964-06-02','Bezalel','Simmel','F','1985-11-21');
INSERT INTO employees VALUES(10003,'1959-12-03','Parto','Bamford','M','1986-08-28');
INSERT INTO employees VALUES(10004,'1954-05-01','Chirstian','Koblick','M','1986-12-01');
```

## 答案

```sql
SELECT s.*, dm.dept_no
FROM salaries s
         INNER JOIN dept_manager dm on s.emp_no = dm.emp_no
ORDER BY s.emp_no;
```