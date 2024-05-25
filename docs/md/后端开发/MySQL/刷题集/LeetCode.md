# SQL刷题 - LeetCode

| 题目                                                         | 难度                                         | 标签                                                         |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| [175. 组合两个表](#combine-two-tables)                       | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [176. 第二高的薪水](#second-highest-salary)                  | <strong style="color:#f5b900;">中等</strong> |                                                              |
| [177. 第N高的薪水](#nth-highest-salary)                      | <strong style="color:#f5b900;">中等</strong> |                                                              |
| [178. 分数排名](#rank-scores)                                | <strong style="color:#f5b900;">中等</strong> | <Badge type="tip" text="窗口函数" />                         |
| [180. 连续出现的数字](#consecutive-numbers)                  | <strong style="color:#f5b900;">中等</strong> | <Badge type="tip" text="窗口函数" /> <Badge type="warning" text="连续问题" /> |
| [181. 超过经理收入的员工](#employees-earning-more-than-their-managers) | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [182. 查找重复的电子邮箱](#duplicate-emails)                 | <strong style="color:#51b8b8;">简单</strong> | <Badge type="warning" text="重复问题" />                     |
| [183. 从不订购的客户](#customers-who-never-order)            | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [184. 部门工资最高的员工](#department-highest-salary)        | <strong style="color:#f5b900;">中等</strong> |                                                              |
| [185. 部门工资前三高的所有员工](#department-top-three-salaries) | <strong style="color:#e63338;">困难</strong> | <Badge type="tip" text="窗口函数" />                         |
| [196. 删除重复的电子邮箱](#delete-duplicate-emails)          | <strong style="color:#51b8b8;">简单</strong> | <Badge type="warning" text="重复问题" />                     |
| [197. 上升的温度](#rising-temperature)                       | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [262. 行程和用户](#trips-and-users)                          | <strong style="color:#e63338;">困难</strong> |                                                              |
| [511. 游戏玩法分析 I](#game-play-analysis-i)                 | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [550. 游戏玩法分析 IV](#game-play-analysis-iv)               | <strong style="color:#f5b900;">中等</strong> |                                                              |
| [570. 至少有5名直接下属的经理](#managers-with-at-least-5-direct-reports) | <strong style="color:#f5b900;">中等</strong> |                                                              |
| [577. 员工奖金](#employee-bonus)                             | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [584. 寻找用户推荐人](#find-customer-referee)                | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [585. 2016年的投资](#investments-in-2016)                    | <strong style="color:#f5b900;">中等</strong> |                                                              |
| [586. 订单最多的客户](#customer-placing-the-largest-number-of-orders) | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [595. 大的国家](#big-countries)                              | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [596. 超过5名学生的课](#classes-more-than-5-students)        | <strong style="color:#51b8b8;">简单</strong> |                                                              |
| [601. 体育馆的人流量](#human-traffic-of-stadium)             | <strong style="color:#e63338;">困难</strong> | <Badge type="tip" text="窗口函数" /> <Badge type="warning" text="连续问题" /> |

## [175. 组合两个表](https://leetcode.cn/problems/combine-two-tables/) {#combine-two-tables}

::: code-group

```markdown [题目]
表: Person

+-------------+---------+
| 列名         | 类型     |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
personId 是该表的主键（具有唯一值的列）。
该表包含一些人的 ID 和他们的姓和名的信息。

表: Address

+-------------+---------+
| 列名         | 类型    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
addressId 是该表的主键（具有唯一值的列）。
该表的每一行都包含一个 ID = PersonId 的人的城市和州的信息。

编写解决方案，报告 Person 表中每个人的姓、名、城市和州。如果 personId 的地址不在 Address 表中，则报告为 null 。
以 任意顺序 返回结果表。
结果格式如下所示。

示例 1:

输入: 
Person表:
+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
Address表:
+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
输出: 
+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
解释: 
地址表中没有 personId = 1 的地址，所以它们的城市和州返回 null。
addressId = 1 包含了 personId = 2 的地址信息。
```

```sql [SQL Schema]
Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255));
Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255));
Truncate table Person;
insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen');
insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob');
Truncate table Address;
insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York');
insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California');
```

```sql [答案]
SELECT firstName, lastName, city, state
FROM person p
         LEFT JOIN address a ON p.personId = a.personId;
```

:::

## [176. 第二高的薪水](https://leetcode.cn/problems/second-highest-salary/) {#second-highest-salary}

::: code-group

```markdown [题目]
Employee 表：
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
在 SQL 中，id 是这个表的主键。
表的每一行包含员工的工资信息。
 
查询并返回 Employee 表中第二高的薪水 。如果不存在第二高的薪水，查询应该返回 null(Pandas 则返回 None) 。
查询结果如下例所示。

示例 1：

输入：
Employee 表：
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
输出：
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
示例 2：

输入：
Employee 表：
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
输出：
+---------------------+
| SecondHighestSalary |
+---------------------+
| null                |
+---------------------+
```

```sql [SQL Schema]
Create table If Not Exists Employee
(
    id     int,
    salary int
);
Truncate table Employee;
insert into Employee (id, salary)
values ('1', '100');
insert into Employee (id, salary)
values ('2', '200');
insert into Employee (id, salary)
values ('3', '300');
```

```sql [答案]
SELECT IFNULL((SELECT DISTINCT salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET 1),
              NULL) AS 'SecondHighestSalary';
```

:::

## [177. 第N高的薪水](https://leetcode.cn/problems/nth-highest-salary/) {#nth-highest-salary}

::: code-group

``` markdown [题目]
表: Employee

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
在 SQL 中，id 是该表的主键。
该表的每一行都包含有关员工工资的信息。
 
查询 Employee 表中第 n 高的工资。如果没有第 n 个最高工资，查询结果应该为 null 。
查询结果格式如下所示。

示例 1:

输入: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
n = 2
输出: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
示例 2:

输入: 
Employee 表:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
输出: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
```

```sql [SQL Schema]
Create table If Not Exists Employee
(
    Id     int,
    Salary int
);
Truncate table Employee;
insert into Employee (id, salary)
values ('1', '100');
insert into Employee (id, salary)
values ('2', '200');
insert into Employee (id, salary)
values ('3', '300');
```

```sql [答案]
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE M INT;
    SET M = N - 1;
    RETURN (
        # Write your MySQL query statement below.
        SELECT IFNULL((SELECT DISTINCT Salary
                       FROM employee
                       ORDER BY Salary DESC
                       LIMIT 1 OFFSET M), NULL));
END;
```

```sql [函数用法]
SELECT getNthHighestSalary(2);
```

:::

> [!tip]
>
> 函数创建失败时的解决方案：
>
> ```sql
> SET GLOBAL log_bin_trust_function_creators = TRUE;
> ```

## [178. 分数排名](https://leetcode.cn/problems/rank-scores/) {#rank-scores}

::: code-group

```markdown [题目]
表: Scores

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| score       | decimal |
+-------------+---------+
id 是该表的主键（有不同值的列）。
该表的每一行都包含了一场比赛的分数。Score 是一个有两位小数点的浮点值。
 
编写一个解决方案来查询分数的排名。排名按以下规则计算:

分数应按从高到低排列。
如果两个分数相等，那么两个分数的排名应该相同。
在排名相同的分数后，排名数应该是下一个连续的整数。换句话说，排名之间不应该有空缺的数字。
按 score 降序返回结果表。
查询结果格式如下所示。

示例 1:

输入: 
Scores 表:
+----+-------+
| id | score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
输出: 
+-------+------+
| score | rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
```

```sql [SQL Schema]
Create table If Not Exists Scores (id int, score DECIMAL(3,2));
Truncate table Scores;
insert into Scores (id, score) values ('1', '3.5');
insert into Scores (id, score) values ('2', '3.65');
insert into Scores (id, score) values ('3', '4.0');
insert into Scores (id, score) values ('4', '3.85');
insert into Scores (id, score) values ('5', '4.0');
insert into Scores (id, score) values ('6', '3.65');
```

```sql [答案]
SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) `rank`
FROM Scores
ORDER BY score DESC;
```

:::

## [180. 连续出现的数字](https://leetcode.cn/problems/consecutive-numbers/) {#consecutive-numbers}

::: code-group

```markdown [题目]
表：Logs

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| num         | varchar |
+-------------+---------+
在 SQL 中，id 是该表的主键。
id 是一个自增列。

找出所有至少连续出现三次的数字。
返回的结果表中的数据可以按 任意顺序 排列。
结果格式如下面的例子所示：

示例 1:

输入：
Logs 表：
+----+-----+
| id | num |
+----+-----+
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |
+----+-----+
输出：
Result 表：
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
解释：1 是唯一连续出现至少三次的数字。
```

```sql [SQL Schema]
Create table If Not Exists Logs (id int, num int);
Truncate table Logs;
insert into Logs (id, num) values ('1', '1');
insert into Logs (id, num) values ('2', '1');
insert into Logs (id, num) values ('3', '1');
insert into Logs (id, num) values ('4', '2');
insert into Logs (id, num) values ('5', '1');
insert into Logs (id, num) values ('6', '2');
insert into Logs (id, num) values ('7', '2');
```

:::

> [!note]
>
> 前提条件：由官方给出的测试用例可以推断出，id 如果不连续的话，即使 num 是连续的也不作数！如下所示：
>
> ```markdown
> | id | num |
> | -- | --- |
> | 1  | 1   |
> | 2  | 1   |
> | 4  | 1   |
> | 5  | 1   |
> | 6  | 2   |
> | 7  | 1   |
> ```

> [!tip]
>
> 解法一：三表联查
>
> ```sql
> SELECT DISTINCT l1.num AS ConsecutiveNums
> FROM Logs l1
>     INNER JOIN Logs l2 ON l1.id = l2.id - 1 AND l1.num = l2.num
>     INNER JOIN Logs l3 ON l2.id = l3.id - 1 AND l2.num = l3.num;
> ```

> [!tip]
>
> 解法二：利用 ROW_NUMBER() 排名窗口函数
>
> - 如果 num 是连续的话，num 所对应的 id 和 rank 值都是同时加一，因此它们之间的差值肯定是一个定值；
> - 如果 num 不是连续的话，num 所对应的 id 和 rank 值之间的差值会不相同。
>
> 因此，针对 num, (id - rank) 进行分组，然后使用聚合函数 COUNT(*) 取出大于等于 3 的 num 即可。
>
> ```sql
> SELECT DISTINCT num AS ConsecutiveNums
> FROM (SELECT num,
>              id - CAST(ROW_NUMBER() OVER (PARTITION BY num ORDER BY id) AS SIGNED) AS `diff`
>       FROM Logs) t
> GROUP BY num, diff
> HAVING COUNT(*) >= 3;
> ```

> [!tip]
>
> 解法三：利用 LAG() 和 LEAD() 取值窗口函数，如果 num 是连续的话，则当前行的 num 值与上下两行的 num 值应该相等。
>
> 对于该解法，即使 id 不连续，只要 num 是连续的则认为 num 是连续的。与咱们提出的前提条件不符（与官方其中一个测试用例相悖），因此该解法无法通过提交。
>
> ```sql
> SELECT DISTINCT num AS ConsecutiveNums
> FROM (SELECT num,
>              LAG(num, 1, NULL) OVER (ORDER BY id)  AS num1,
>              LEAD(num, 1, NULL) OVER (ORDER BY id) AS num2
>       FROM Logs) t
> WHERE num = num1
>   AND num = num2;
> ```

## [181. 超过经理收入的员工](https://leetcode.cn/problems/employees-earning-more-than-their-managers/) {#employees-earning-more-than-their-managers}

::: code-group

```markdown [题目]
表：Employee 

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id 是该表的主键（具有唯一值的列）。
该表的每一行都表示雇员的ID、姓名、工资和经理的ID。

编写解决方案，找出收入比经理高的员工。
以 任意顺序 返回结果表。
结果格式如下所示。

示例 1:

输入: 
Employee 表:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
输出: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
解释: Joe 是唯一挣得比经理多的雇员。
```

```sql [SQL Schema]
Create table If Not Exists Employee (id int, name varchar(255), salary int, managerId int);
Truncate table Employee;
insert into Employee (id, name, salary, managerId) values ('1', 'Joe', '70000', '3');
insert into Employee (id, name, salary, managerId) values ('2', 'Henry', '80000', '4');
insert into Employee (id, name, salary, managerId) values ('3', 'Sam', '60000', NULL);
insert into Employee (id, name, salary, managerId) values ('4', 'Max', '90000', NULL);
```

```sql [答案]
SELECT e.name AS `Employee`
FROM employee e
         INNER JOIN employee m ON e.managerId = m.id
WHERE e.salary > m.salary;
```

:::

## [182. 查找重复的电子邮箱](https://leetcode.cn/problems/duplicate-emails/) {#duplicate-emails}

::: code-group

```markdown [题目]
表: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id 是该表的主键（具有唯一值的列）。
此表的每一行都包含一封电子邮件。电子邮件不包含大写字母。

编写解决方案来报告所有重复的电子邮件。 请注意，可以保证电子邮件字段不为 NULL。
以 任意顺序 返回结果表。
结果格式如下例。

示例 1:

输入: 
Person 表:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
输出: 
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
解释: a@b.com 出现了两次。
```

```sql [SQL Schema]
Create table If Not Exists Person (id int, email varchar(255));
Truncate table Person;
insert into Person (id, email) values ('1', 'a@b.com');
insert into Person (id, email) values ('2', 'c@d.com');
insert into Person (id, email) values ('3', 'a@b.com');
```

```sql [答案]
SELECT email
FROM person
GROUP BY email
HAVING COUNT(email) > 1;
```

:::

## [183. 从不订购的客户](https://leetcode.cn/problems/customers-who-never-order/) {#customers-who-never-order}

::: code-group

```markdown [题目]
Customers 表：

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
在 SQL 中，id 是该表的主键。
该表的每一行都表示客户的 ID 和名称。
Orders 表：

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
在 SQL 中，id 是该表的主键。
customerId 是 Customers 表中 ID 的外键( Pandas 中的连接键)。
该表的每一行都表示订单的 ID 和订购该订单的客户的 ID。 

找出所有从不点任何东西的顾客。
以 任意顺序 返回结果表。
结果格式如下所示。

示例 1：

输入：
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
输出：
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
```

```sql [SQL Schema]
Create table If Not Exists Customers (id int, name varchar(255));
Create table If Not Exists Orders (id int, customerId int);
Truncate table Customers;
insert into Customers (id, name) values ('1', 'Joe');
insert into Customers (id, name) values ('2', 'Henry');
insert into Customers (id, name) values ('3', 'Sam');
insert into Customers (id, name) values ('4', 'Max');
Truncate table Orders;
insert into Orders (id, customerId) values ('1', '3');
insert into Orders (id, customerId) values ('2', '1');
```

```sql [解法一（连表查询）]
SELECT c.name AS `Customers`
FROM customers c
         LEFT JOIN orders o ON c.id = o.customerId
WHERE o.id IS NULL;
```

```sql [解法二（子查询）]
SELECT c.name AS `Customers`
FROM customers c
WHERE c.id NOT IN (SELECT customerId FROM orders);
```

:::

## [184. 部门工资最高的员工](https://leetcode.cn/problems/department-highest-salary/) {#department-highest-salary}

::: code-group

```markdown [题目]
表： Employee

+--------------+---------+
| 列名          | 类型    |
+--------------+---------+
| id           | int     |
| name         | varchar |
| salary       | int     |
| departmentId | int     |
+--------------+---------+
在 SQL 中，id是此表的主键。
departmentId 是 Department 表中 id 的外键（在 Pandas 中称为 join key）。
此表的每一行都表示员工的 id、姓名和工资。它还包含他们所在部门的 id。

表： Department

+-------------+---------+
| 列名         | 类型    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
在 SQL 中，id 是此表的主键列。
此表的每一行都表示一个部门的 id 及其名称。

查找出每个部门中薪资最高的员工。
按 任意顺序 返回结果表。
查询结果格式如下例所示。

示例 1:

输入：
Employee 表:
+----+-------+--------+--------------+
| id | name  | salary | departmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Jim   | 90000  | 1            |
| 3  | Henry | 80000  | 2            |
| 4  | Sam   | 60000  | 2            |
| 5  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
Department 表:
+----+-------+
| id | name  |
+----+-------+
| 1  | IT    |
| 2  | Sales |
+----+-------+
输出：
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Jim      | 90000  |
| Sales      | Henry    | 80000  |
| IT         | Max      | 90000  |
+------------+----------+--------+
解释：Max 和 Jim 在 IT 部门的工资都是最高的，Henry 在销售部的工资最高。
```

```sql [SQL Schema]
Create table If Not Exists Employee (id int, name varchar(255), salary int, departmentId int);
Create table If Not Exists Department (id int, name varchar(255));
Truncate table Employee;
insert into Employee (id, name, salary, departmentId) values ('1', 'Joe', '70000', '1');
insert into Employee (id, name, salary, departmentId) values ('2', 'Jim', '90000', '1');
insert into Employee (id, name, salary, departmentId) values ('3', 'Henry', '80000', '2');
insert into Employee (id, name, salary, departmentId) values ('4', 'Sam', '60000', '2');
insert into Employee (id, name, salary, departmentId) values ('5', 'Max', '90000', '1');
Truncate table Department;
insert into Department (id, name) values ('1', 'IT');
insert into Department (id, name) values ('2', 'Sales');
```

```sql [解法一]
SELECT d.name AS `Department`, e.name AS `Employee`, e.salary AS `Salary`
FROM department d
         INNER JOIN employee e ON d.id = e.departmentId
WHERE (e.departmentId, e.salary) IN (SELECT e.departmentId, MAX(e.salary) AS `salary`
                                     FROM employee e
                                     GROUP BY e.departmentId);
```

```sql [解法二（排名窗口函数）]
SELECT d.name AS `Department`, t.name AS `Employee`, t.salary AS `Salary`
FROM department d
         INNER JOIN (SELECT name,
                            salary,
                            departmentId,
                            DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) AS `rn`
                     FROM employee) t ON d.id = t.departmentId
WHERE t.rn = 1;
```

:::

## [185. 部门工资前三高的所有员工](https://leetcode.cn/problems/department-top-three-salaries/) {#department-top-three-salaries}

::: code-group

```markdown [题目]
表: Employee

+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| id           | int     |
| name         | varchar |
| salary       | int     |
| departmentId | int     |
+--------------+---------+
id 是该表的主键列(具有唯一值的列)。
departmentId 是 Department 表中 ID 的外键（reference 列）。
该表的每一行都表示员工的ID、姓名和工资。它还包含了他们部门的ID。

表: Department

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id 是该表的主键列(具有唯一值的列)。
该表的每一行表示部门ID和部门名。

公司的主管们感兴趣的是公司每个部门中谁赚的钱最多。一个部门的 高收入者 是指一个员工的工资在该部门的 不同 工资中 排名前三 。
编写解决方案，找出每个部门中 收入高的员工 。
以 任意顺序 返回结果表。
返回结果格式如下所示。

示例 1:

输入: 
Employee 表:
+----+-------+--------+--------------+
| id | name  | salary | departmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 85000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
| 7  | Will  | 70000  | 1            |
+----+-------+--------+--------------+
Department  表:
+----+-------+
| id | name  |
+----+-------+
| 1  | IT    |
| 2  | Sales |
+----+-------+
输出: 
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Joe      | 85000  |
| IT         | Randy    | 85000  |
| IT         | Will     | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+
解释:
在IT部门:
- Max的工资最高
- 兰迪和乔都赚取第二高的独特的薪水
- 威尔的薪水是第三高的

在销售部:
- 亨利的工资最高
- 山姆的薪水第二高
- 没有第三高的工资，因为只有两名员工
```

```sql [SQL Schema]
Create table If Not Exists Employee (id int, name varchar(255), salary int, departmentId int);
Create table If Not Exists Department (id int, name varchar(255));
Truncate table Employee;
insert into Employee (id, name, salary, departmentId) values ('1', 'Joe', '85000', '1');
insert into Employee (id, name, salary, departmentId) values ('2', 'Henry', '80000', '2');
insert into Employee (id, name, salary, departmentId) values ('3', 'Sam', '60000', '2');
insert into Employee (id, name, salary, departmentId) values ('4', 'Max', '90000', '1');
insert into Employee (id, name, salary, departmentId) values ('5', 'Janet', '69000', '1');
insert into Employee (id, name, salary, departmentId) values ('6', 'Randy', '85000', '1');
insert into Employee (id, name, salary, departmentId) values ('7', 'Will', '70000', '1');
Truncate table Department;
insert into Department (id, name) values ('1', 'IT');
insert into Department (id, name) values ('2', 'Sales');
```

```sql [答案（排名窗口函数）]
SELECT d.name AS `Department`, t.name AS `Employee`, t.salary AS `Salary`
FROM department d
         INNER JOIN (SELECT name,
                            salary,
                            departmentId,
                            DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) AS `rn`
                     FROM employee) t ON d.id = t.departmentId
WHERE t.rn <= 3;
```

:::

## [196. 删除重复的电子邮箱](https://leetcode.cn/problems/delete-duplicate-emails/) {#delete-duplicate-emails}

::: code-group

```markdown [题目]
表: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id 是该表的主键列(具有唯一值的列)。
该表的每一行包含一封电子邮件。电子邮件将不包含大写字母。

编写解决方案 删除 所有重复的电子邮件，只保留一个具有最小 id 的唯一电子邮件。
（对于 SQL 用户，请注意你应该编写一个 DELETE 语句而不是 SELECT 语句。）
（对于 Pandas 用户，请注意你应该直接修改 Person 表。）
运行脚本后，显示的答案是 Person 表。驱动程序将首先编译并运行您的代码片段，然后再显示 Person 表。Person 表的最终顺序 无关紧要 。
返回结果格式如下示例所示。

示例 1:

输入: 
Person 表:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
输出: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
解释: john@example.com重复两次。我们保留最小的Id = 1。
```

```sql [SQL Schema]
Create table If Not Exists Person (Id int, Email varchar(255));
Truncate table Person;
insert into Person (id, email) values ('1', 'john@example.com');
insert into Person (id, email) values ('2', 'bob@example.com');
insert into Person (id, email) values ('3', 'john@example.com');
```

```sql [解法一（连表查询）]
DELETE p
FROM person p
         INNER JOIN
     (SELECT MIN(id) AS `min_id`, email
      FROM person
      GROUP BY email
      HAVING COUNT(email) > 1) t ON p.email = t.email AND p.id != t.min_id;
```

```sql [解法二（子查询）]
DELETE p
FROM person p
WHERE p.id NOT IN (SELECT t.min_id FROM (SELECT MIN(id) AS `min_id` FROM person GROUP BY email) t);
```

```sql [解法三（笛卡尔积，非等值筛选）]
DELETE p1
FROM person p1
         INNER JOIN person p2 ON p1.email = p2.email AND p1.id > p2.id;
```

```sql [解法四（排名窗口函数）]
DELETE p
FROM person p
WHERE id IN (SELECT id
             FROM (SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS `rn`
                   FROM person) t
             WHERE t.rn > 1);
```

:::

## [197. 上升的温度](https://leetcode.cn/problems/rising-temperature/) {#rising-temperature}

::: code-group

```markdown [题目]
表： Weather

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| recordDate    | date    |
| temperature   | int     |
+---------------+---------+
id 是该表具有唯一值的列。
没有具有相同 recordDate 的不同行。
该表包含特定日期的温度信息
 
编写解决方案，找出与之前（昨天的）日期相比温度更高的所有日期的 id 。
返回结果 无顺序要求 。
结果格式如下例子所示。

示例 1：

输入：
Weather 表：
+----+------------+-------------+
| id | recordDate | Temperature |
+----+------------+-------------+
| 1  | 2015-01-01 | 10          |
| 2  | 2015-01-02 | 25          |
| 3  | 2015-01-03 | 20          |
| 4  | 2015-01-04 | 30          |
+----+------------+-------------+
输出：
+----+
| id |
+----+
| 2  |
| 4  |
+----+
解释：
2015-01-02 的温度比前一天高（10 -> 25）
2015-01-04 的温度比前一天高（20 -> 30）
```

```sql [SQL Schema]
Create table If Not Exists Weather (id int, recordDate date, temperature int);
Truncate table Weather;
insert into Weather (id, recordDate, temperature) values ('1', '2015-01-01', '10');
insert into Weather (id, recordDate, temperature) values ('2', '2015-01-02', '25');
insert into Weather (id, recordDate, temperature) values ('3', '2015-01-03', '20');
insert into Weather (id, recordDate, temperature) values ('4', '2015-01-04', '30');
```

```sql [答案（自连接）]
SELECT w2.id
FROM weather w1
         INNER JOIN weather w2 ON DATEDIFF(w2.recordDate, w1.recordDate) = 1
WHERE w2.temperature > w1.temperature;
```

:::

## [262. 行程和用户](https://leetcode.cn/problems/trips-and-users/) {#trips-and-users}

::: code-group

```markdown [题目]
表：Trips
+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| id          | int      |
| client_id   | int      |
| driver_id   | int      |
| city_id     | int      |
| status      | enum     |
| request_at  | date     |     
+-------------+----------+
id 是这张表的主键（具有唯一值的列）。
这张表中存所有出租车的行程信息。每段行程有唯一 id ，其中 client_id 和 driver_id 是 Users 表中 users_id 的外键。
status 是一个表示行程状态的枚举类型，枚举成员为(‘completed’, ‘cancelled_by_driver’, ‘cancelled_by_client’) 。

表：Users

+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| users_id    | int      |
| banned      | enum     |
| role        | enum     |
+-------------+----------+
users_id 是这张表的主键（具有唯一值的列）。
这张表中存所有用户，每个用户都有一个唯一的 users_id ，role 是一个表示用户身份的枚举类型，枚举成员为 (‘client’, ‘driver’, ‘partner’) 。
banned 是一个表示用户是否被禁止的枚举类型，枚举成员为 (‘Yes’, ‘No’) 。
 
取消率 的计算方式如下：(被司机或乘客取消的非禁止用户生成的订单数量) / (非禁止用户生成的订单总数)。
编写解决方案找出 "2013-10-01" 至 "2013-10-03" 期间非禁止用户（乘客和司机都必须未被禁止）的取消率。非禁止用户即 banned 为 No 的用户，禁止用户即 banned 为 Yes 的用户。其中取消率 Cancellation Rate 需要四舍五入保留 两位小数 。
返回结果表中的数据 无顺序要求 。
结果格式如下例所示。

示例 1：

输入： 
Trips 表：
+----+-----------+-----------+---------+---------------------+------------+
| id | client_id | driver_id | city_id | status              | request_at |
+----+-----------+-----------+---------+---------------------+------------+
| 1  | 1         | 10        | 1       | completed           | 2013-10-01 |
| 2  | 2         | 11        | 1       | cancelled_by_driver | 2013-10-01 |
| 3  | 3         | 12        | 6       | completed           | 2013-10-01 |
| 4  | 4         | 13        | 6       | cancelled_by_client | 2013-10-01 |
| 5  | 1         | 10        | 1       | completed           | 2013-10-02 |
| 6  | 2         | 11        | 6       | completed           | 2013-10-02 |
| 7  | 3         | 12        | 6       | completed           | 2013-10-02 |
| 8  | 2         | 12        | 12      | completed           | 2013-10-03 |
| 9  | 3         | 10        | 12      | completed           | 2013-10-03 |
| 10 | 4         | 13        | 12      | cancelled_by_driver | 2013-10-03 |
+----+-----------+-----------+---------+---------------------+------------+
Users 表：
+----------+--------+--------+
| users_id | banned | role   |
+----------+--------+--------+
| 1        | No     | client |
| 2        | Yes    | client |
| 3        | No     | client |
| 4        | No     | client |
| 10       | No     | driver |
| 11       | No     | driver |
| 12       | No     | driver |
| 13       | No     | driver |
+----------+--------+--------+
输出：
+------------+-------------------+
| Day        | Cancellation Rate |
+------------+-------------------+
| 2013-10-01 | 0.33              |
| 2013-10-02 | 0.00              |
| 2013-10-03 | 0.50              |
+------------+-------------------+
解释：
2013-10-01：
  - 共有 4 条请求，其中 2 条取消。
  - 然而，id=2 的请求是由禁止用户（user_id=2）发出的，所以计算时应当忽略它。
  - 因此，总共有 3 条非禁止请求参与计算，其中 1 条取消。
  - 取消率为 (1 / 3) = 0.33
2013-10-02：
  - 共有 3 条请求，其中 0 条取消。
  - 然而，id=6 的请求是由禁止用户发出的，所以计算时应当忽略它。
  - 因此，总共有 2 条非禁止请求参与计算，其中 0 条取消。
  - 取消率为 (0 / 2) = 0.00
2013-10-03：
  - 共有 3 条请求，其中 1 条取消。
  - 然而，id=8 的请求是由禁止用户发出的，所以计算时应当忽略它。
  - 因此，总共有 2 条非禁止请求参与计算，其中 1 条取消。
  - 取消率为 (1 / 2) = 0.50
```

```sql [SQL Schema]
Create table If Not Exists Trips (id int, client_id int, driver_id int, city_id int, status ENUM('completed', 'cancelled_by_driver', 'cancelled_by_client'), request_at varchar(50));
Create table If Not Exists Users (users_id int, banned varchar(50), role ENUM('client', 'driver', 'partner'));
Truncate table Trips;
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('1', '1', '10', '1', 'completed', '2013-10-01');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('2', '2', '11', '1', 'cancelled_by_driver', '2013-10-01');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('3', '3', '12', '6', 'completed', '2013-10-01');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('4', '4', '13', '6', 'cancelled_by_client', '2013-10-01');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('5', '1', '10', '1', 'completed', '2013-10-02');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('6', '2', '11', '6', 'completed', '2013-10-02');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('7', '3', '12', '6', 'completed', '2013-10-02');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('8', '2', '12', '12', 'completed', '2013-10-03');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('9', '3', '10', '12', 'completed', '2013-10-03');
insert into Trips (id, client_id, driver_id, city_id, status, request_at) values ('10', '4', '13', '12', 'cancelled_by_driver', '2013-10-03');
Truncate table Users;
insert into Users (users_id, banned, role) values ('1', 'No', 'client');
insert into Users (users_id, banned, role) values ('2', 'Yes', 'client');
insert into Users (users_id, banned, role) values ('3', 'No', 'client');
insert into Users (users_id, banned, role) values ('4', 'No', 'client');
insert into Users (users_id, banned, role) values ('10', 'No', 'driver');
insert into Users (users_id, banned, role) values ('11', 'No', 'driver');
insert into Users (users_id, banned, role) values ('12', 'No', 'driver');
insert into Users (users_id, banned, role) values ('13', 'No', 'driver');
```

```sql [答案]
SELECT request_at AS `Day`, ROUND(SUM(IF(status = 'completed', 0, 1)) / COUNT(*), 2) AS `Cancellation Rate`
FROM trips
WHERE client_id IN (SELECT users_id
                    FROM users
                    WHERE banned = 'No'
                      AND role = 'client')
  AND driver_id IN (SELECT users_id
                    FROM users
                    WHERE banned = 'No'
                      AND role = 'driver')
  AND request_at BETWEEN '2013-10-01' and '2013-10-03'
GROUP BY request_at;
```

:::

## [511. 游戏玩法分析 I](https://leetcode.cn/problems/game-play-analysis-i/) {#game-play-analysis-i}

::: code-group

```markdown [题目]
活动表 Activity：

+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
在 SQL 中，表的主键是 (player_id, event_date)。
这张表展示了一些游戏玩家在游戏平台上的行为活动。
每行数据记录了一名玩家在退出平台之前，当天使用同一台设备登录平台后打开的游戏的数目（可能是 0 个）。
查询每位玩家 第一次登录平台的日期。

查询结果的格式如下所示：

Activity 表：
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+

Result 表：
+-----------+-------------+
| player_id | first_login |
+-----------+-------------+
| 1         | 2016-03-01  |
| 2         | 2017-06-25  |
| 3         | 2016-03-02  |
+-----------+-------------+
```

```sql [SQL Schema]
Create table If Not Exists Activity (player_id int, device_id int, event_date date, games_played int);
Truncate table Activity;
insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-01', '5');
insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-05-02', '6');
insert into Activity (player_id, device_id, event_date, games_played) values ('2', '3', '2017-06-25', '1');
insert into Activity (player_id, device_id, event_date, games_played) values ('3', '1', '2016-03-02', '0');
insert into Activity (player_id, device_id, event_date, games_played) values ('3', '4', '2018-07-03', '5');
```

```sql [答案]
SELECT player_id, MIN(event_date) AS `first_login`
FROM activity
GROUP BY player_id;
```

:::

## [550. 游戏玩法分析 IV](https://leetcode.cn/problems/game-play-analysis-iv/) {#game-play-analysis-iv}

::: code-group

```markdown [题目]
Table: Activity

+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
（player_id，event_date）是此表的主键（具有唯一值的列的组合）。
这张表显示了某些游戏的玩家的活动情况。
每一行是一个玩家的记录，他在某一天使用某个设备注销之前登录并玩了很多游戏（可能是 0）。

编写解决方案，报告在首次登录的第二天再次登录的玩家的 比率，四舍五入到小数点后两位。换句话说，你需要计算从首次登录日期开始至少连续两天登录的玩家的数量，然后除以玩家总数。
结果格式如下所示：

示例 1：

输入：
Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-03-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+
输出：
+-----------+
| fraction  |
+-----------+
| 0.33      |
+-----------+
解释：
只有 ID 为 1 的玩家在第一天登录后才重新登录，所以答案是 1/3 = 0.33
```

```sql [SQL Schema]
Create table If Not Exists Activity (player_id int, device_id int, event_date date, games_played int);
Truncate table Activity;
insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-01', '5');
insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-02', '6');
insert into Activity (player_id, device_id, event_date, games_played) values ('2', '3', '2017-06-25', '1');
insert into Activity (player_id, device_id, event_date, games_played) values ('3', '1', '2016-03-02', '0');
insert into Activity (player_id, device_id, event_date, games_played) values ('3', '4', '2018-07-03', '5');
```

```sql [答案]
SELECT ROUND(COUNT(DISTINCT a.player_id) / COUNT(t.player_id), 2) AS `fraction`
FROM (SELECT player_id, MIN(event_date) AS `first_date`
      FROM activity
      GROUP BY player_id) t
         LEFT JOIN activity a
                   ON a.player_id = t.player_id AND DATEDIFF(a.event_date, t.first_date) = 1;
```

:::

## [570. 至少有5名直接下属的经理](https://leetcode.cn/problems/managers-with-at-least-5-direct-reports/) {#managers-with-at-least-5-direct-reports}

::: code-group

```markdown [题目]
表: Employee

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| department  | varchar |
| managerId   | int     |
+-------------+---------+
id 是此表的主键（具有唯一值的列）。
该表的每一行表示雇员的名字、他们的部门和他们的经理的id。
如果managerId为空，则该员工没有经理。
没有员工会成为自己的管理者。
 
编写一个解决方案，找出至少有五个直接下属的经理。
以 任意顺序 返回结果表。
查询结果格式如下所示。

示例 1:

输入: 
Employee 表:
+-----+-------+------------+-----------+
| id  | name  | department | managerId |
+-----+-------+------------+-----------+
| 101 | John  | A          | Null      |
| 102 | Dan   | A          | 101       |
| 103 | James | A          | 101       |
| 104 | Amy   | A          | 101       |
| 105 | Anne  | A          | 101       |
| 106 | Ron   | B          | 101       |
+-----+-------+------------+-----------+
输出: 
+------+
| name |
+------+
| John |
+------+
```

```sql [SQL Schema]
Create table If Not Exists Employee (id int, name varchar(255), department varchar(255), managerId int);
Truncate table Employee;
insert into Employee (id, name, department, managerId) values ('101', 'John', 'A', NULL);
insert into Employee (id, name, department, managerId) values ('102', 'Dan', 'A', '101');
insert into Employee (id, name, department, managerId) values ('103', 'James', 'A', '101');
insert into Employee (id, name, department, managerId) values ('104', 'Amy', 'A', '101');
insert into Employee (id, name, department, managerId) values ('105', 'Anne', 'A', '101');
insert into Employee (id, name, department, managerId) values ('106', 'Ron', 'B', '101');
```

```sql [答案]
SELECT name
FROM employee
WHERE id IN (SELECT managerId
             FROM employee
             WHERE managerId IS NOT NULL
             GROUP BY managerId
             HAVING COUNT(*) >= 5);
```

:::

## [577. 员工奖金](https://leetcode.cn/problems/employee-bonus/) {#employee-bonus}

::: code-group

```markdown [题目]
表：Employee 

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| empId       | int     |
| name        | varchar |
| supervisor  | int     |
| salary      | int     |
+-------------+---------+
empId 是该表中具有唯一值的列。
该表的每一行都表示员工的姓名和 id，以及他们的工资和经理的 id。

表：Bonus

+-------------+------+
| Column Name | Type |
+-------------+------+
| empId       | int  |
| bonus       | int  |
+-------------+------+
empId 是该表具有唯一值的列。
empId 是 Employee 表中 empId 的外键(reference 列)。
该表的每一行都包含一个员工的 id 和他们各自的奖金。
 
编写解决方案，报告每个奖金 少于 1000 的员工的姓名和奖金数额。
以 任意顺序 返回结果表。
结果格式如下所示。

示例 1：

输入：
Employee table:
+-------+--------+------------+--------+
| empId | name   | supervisor | salary |
+-------+--------+------------+--------+
| 3     | Brad   | null       | 4000   |
| 1     | John   | 3          | 1000   |
| 2     | Dan    | 3          | 2000   |
| 4     | Thomas | 3          | 4000   |
+-------+--------+------------+--------+
Bonus table:
+-------+-------+
| empId | bonus |
+-------+-------+
| 2     | 500   |
| 4     | 2000  |
+-------+-------+
输出：
+------+-------+
| name | bonus |
+------+-------+
| Brad | null  |
| John | null  |
| Dan  | 500   |
+------+-------+
```

```sql [SQL Schema]
Create table If Not Exists Employee (empId int, name varchar(255), supervisor int, salary int);
Create table If Not Exists Bonus (empId int, bonus int);
Truncate table Employee;
insert into Employee (empId, name, supervisor, salary) values ('3', 'Brad', NULL, '4000');
insert into Employee (empId, name, supervisor, salary) values ('1', 'John', '3', '1000');
insert into Employee (empId, name, supervisor, salary) values ('2', 'Dan', '3', '2000');
insert into Employee (empId, name, supervisor, salary) values ('4', 'Thomas', '3', '4000');
Truncate table Bonus;
insert into Bonus (empId, bonus) values ('2', '500');
insert into Bonus (empId, bonus) values ('4', '2000');
```

```sql [答案]
SELECT e.name, b.bonus
FROM employee e
         LEFT JOIN bonus b ON e.empId = b.empId
WHERE b.bonus < 1000
   OR b.bonus IS NULL;
```

:::

## [584. 寻找用户推荐人](https://leetcode.cn/problems/find-customer-referee/) {#find-customer-referee}

::: code-group

```markdown [题目]
表: Customer

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
在 SQL 中，id 是该表的主键列。
该表的每一行表示一个客户的 id、姓名以及推荐他们的客户的 id。
找出那些 没有被 id = 2 的客户 推荐 的客户的姓名。
以 任意顺序 返回结果表。
结果格式如下所示。

示例 1：

输入： 
Customer 表:
+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
输出：
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
```

```sql [SQL Schema]
Create table If Not Exists Customer (id int, name varchar(25), referee_id int);
Truncate table Customer;
insert into Customer (id, name, referee_id) values ('1', 'Will', NULL);
insert into Customer (id, name, referee_id) values ('2', 'Jane', NULL);
insert into Customer (id, name, referee_id) values ('3', 'Alex', '2');
insert into Customer (id, name, referee_id) values ('4', 'Bill', NULL);
insert into Customer (id, name, referee_id) values ('5', 'Zack', '1');
insert into Customer (id, name, referee_id) values ('6', 'Mark', '2');
```

```sql [答案]
SELECT name
FROM customer
WHERE referee_id <> 2
   OR referee_id IS NULL;
```

:::

## [585. 2016年的投资](https://leetcode.cn/problems/investments-in-2016/) {#investments-in-2016}

::: code-group

```markdown [题目]
Insurance 表：

+-------------+-------+
| Column Name | Type  |
+-------------+-------+
| pid         | int   |
| tiv_2015    | float |
| tiv_2016    | float |
| lat         | float |
| lon         | float |
+-------------+-------+
pid 是这张表的主键(具有唯一值的列)。
表中的每一行都包含一条保险信息，其中：
pid 是投保人的投保编号。
tiv_2015 是该投保人在 2015 年的总投保金额，tiv_2016 是该投保人在 2016 年的总投保金额。
lat 是投保人所在城市的纬度。题目数据确保 lat 不为空。
lon 是投保人所在城市的经度。题目数据确保 lon 不为空。
 
编写解决方案报告 2016 年 (tiv_2016) 所有满足下述条件的投保人的投保金额之和：
他在 2015 年的投保额 (tiv_2015) 至少跟一个其他投保人在 2015 年的投保额相同。
他所在的城市必须与其他投保人都不同（也就是说 (lat, lon) 不能跟其他任何一个投保人完全相同）。
tiv_2016 四舍五入的 两位小数 。
查询结果格式如下例所示。

示例 1：

输入：
Insurance 表：
+-----+----------+----------+-----+-----+
| pid | tiv_2015 | tiv_2016 | lat | lon |
+-----+----------+----------+-----+-----+
| 1   | 10       | 5        | 10  | 10  |
| 2   | 20       | 20       | 20  | 20  |
| 3   | 10       | 30       | 20  | 20  |
| 4   | 10       | 40       | 40  | 40  |
+-----+----------+----------+-----+-----+
输出：
+----------+
| tiv_2016 |
+----------+
| 45.00    |
+----------+
解释：
表中的第一条记录和最后一条记录都满足两个条件。
tiv_2015 值为 10 与第三条和第四条记录相同，且其位置是唯一的。

第二条记录不符合任何一个条件。其 tiv_2015 与其他投保人不同，并且位置与第三条记录相同，这也导致了第三条记录不符合题目要求。
因此，结果是第一条记录和最后一条记录的 tiv_2016 之和，即 45 。
```

```sql [SQL Schema]
Create Table If Not Exists Insurance (pid int, tiv_2015 float, tiv_2016 float, lat float, lon float);
Truncate table Insurance;
insert into Insurance (pid, tiv_2015, tiv_2016, lat, lon) values ('1', '10', '5', '10', '10');
insert into Insurance (pid, tiv_2015, tiv_2016, lat, lon) values ('2', '20', '20', '20', '20');
insert into Insurance (pid, tiv_2015, tiv_2016, lat, lon) values ('3', '10', '30', '20', '20');
insert into Insurance (pid, tiv_2015, tiv_2016, lat, lon) values ('4', '10', '40', '40', '40');
```

```sql [答案]
SELECT
	ROUND( SUM( tiv_2016 ), 2 ) AS `tiv_2016` 
FROM
	insurance 
WHERE
	tiv_2015 IN ( SELECT tiv_2015 FROM insurance GROUP BY tiv_2015 HAVING COUNT(*) > 1 ) 
	AND ( lat, lon ) IN ( SELECT lat, lon FROM insurance GROUP BY lat, lon HAVING COUNT(*) = 1 );
```

:::

## [586. 订单最多的客户](https://leetcode.cn/problems/customer-placing-the-largest-number-of-orders/) {#customer-placing-the-largest-number-of-orders}

::: code-group

```markdown [题目]
表: Orders

+-----------------+----------+
| Column Name     | Type     |
+-----------------+----------+
| order_number    | int      |
| customer_number | int      |
+-----------------+----------+
在 SQL 中，Order_number是该表的主键。
此表包含关于订单ID和客户ID的信息。

查找下了 最多订单 的客户的 customer_number 。
测试用例生成后， 恰好有一个客户 比任何其他客户下了更多的订单。
查询结果格式如下所示。

示例 1:

输入: 
Orders 表:
+--------------+-----------------+
| order_number | customer_number |
+--------------+-----------------+
| 1            | 1               |
| 2            | 2               |
| 3            | 3               |
| 4            | 3               |
+--------------+-----------------+
输出: 
+-----------------+
| customer_number |
+-----------------+
| 3               |
+-----------------+
解释: 
customer_number 为 '3' 的顾客有两个订单，比顾客 '1' 或者 '2' 都要多，因为他们只有一个订单。
所以结果是该顾客的 customer_number ，也就是 3 。

进阶： 如果有多位顾客订单数并列最多，你能找到他们所有的 customer_number 吗？
```

```sql [SQL Schema]
Create table If Not Exists orders (order_number int, customer_number int);
Truncate table orders;
insert into orders (order_number, customer_number) values ('1', '1');
insert into orders (order_number, customer_number) values ('2', '2');
insert into orders (order_number, customer_number) values ('3', '3');
insert into orders (order_number, customer_number) values ('4', '3');
```

```sql [解法一]
SELECT customer_number
FROM orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;
```

```sql [解法二（排名窗口函数）]
SELECT
	customer_number 
FROM
	( SELECT customer_number, DENSE_RANK() OVER ( ORDER BY COUNT(*) DESC ) AS `rn` FROM orders GROUP BY customer_number ) t 
WHERE
	rn = 1;
```

:::

## [595. 大的国家](https://leetcode.cn/problems/big-countries/) {#big-countries}

::: code-group

```markdown [题目]
World 表：

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |
+-------------+---------+
name 是该表的主键（具有唯一值的列）。
这张表的每一行提供：国家名称、所属大陆、面积、人口和 GDP 值。

如果一个国家满足下述两个条件之一，则认为该国是 大国 ：
面积至少为 300 万平方公里（即，3000000 km2），或者
人口至少为 2500 万（即 25000000）
编写解决方案找出 大国 的国家名称、人口和面积。
按 任意顺序 返回结果表。
返回结果格式如下例所示。

示例：

输入：
World 表：
+-------------+-----------+---------+------------+--------------+
| name        | continent | area    | population | gdp          |
+-------------+-----------+---------+------------+--------------+
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
+-------------+-----------+---------+------------+--------------+
输出：
+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
```

```sql [SQL Schema]
Create table If Not Exists World (name varchar(255), continent varchar(255), area int, population int, gdp bigint);
Truncate table World;
insert into World (name, continent, area, population, gdp) values ('Afghanistan', 'Asia', '652230', '25500100', '20343000000');
insert into World (name, continent, area, population, gdp) values ('Albania', 'Europe', '28748', '2831741', '12960000000');
insert into World (name, continent, area, population, gdp) values ('Algeria', 'Africa', '2381741', '37100000', '188681000000');
insert into World (name, continent, area, population, gdp) values ('Andorra', 'Europe', '468', '78115', '3712000000');
insert into World (name, continent, area, population, gdp) values ('Angola', 'Africa', '1246700', '20609294', '100990000000');
```

```sql [答案]
SELECT name, population, area
FROM world
WHERE area >= 3000000
   OR population >= 25000000;
```

:::

## [596. 超过5名学生的课](https://leetcode.cn/problems/classes-more-than-5-students/) {#classes-more-than-5-students}

::: code-group

```markdown [题目]
表: Courses

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| student     | varchar |
| class       | varchar |
+-------------+---------+
在 SQL 中，(student, class)是该表的主键列。
该表的每一行表示学生的名字和他们注册的班级。

查询 至少有5个学生 的所有班级。
以 任意顺序 返回结果表。
查询结果格式如下所示。

示例 1:

输入: 
Courses table:
+---------+----------+
| student | class    |
+---------+----------+
| A       | Math     |
| B       | English  |
| C       | Math     |
| D       | Biology  |
| E       | Math     |
| F       | Computer |
| G       | Math     |
| H       | Math     |
| I       | Math     |
+---------+----------+
输出: 
+---------+ 
| class   | 
+---------+ 
| Math    | 
+---------+
解释: 
-数学课有6个学生，所以我们包括它。
-英语课有1名学生，所以我们不包括它。
-生物课有1名学生，所以我们不包括它。
-计算机课有1个学生，所以我们不包括它。
```

```sql [SQL Schema]
Create table If Not Exists Courses (student varchar(255), class varchar(255));
Truncate table Courses;
insert into Courses (student, class) values ('A', 'Math');
insert into Courses (student, class) values ('B', 'English');
insert into Courses (student, class) values ('C', 'Math');
insert into Courses (student, class) values ('D', 'Biology');
insert into Courses (student, class) values ('E', 'Math');
insert into Courses (student, class) values ('F', 'Computer');
insert into Courses (student, class) values ('G', 'Math');
insert into Courses (student, class) values ('H', 'Math');
insert into Courses (student, class) values ('I', 'Math');
```

```sql [答案]
SELECT class FROM courses GROUP BY class HAVING COUNT(*) >= 5;
```

:::

## [601. 体育馆的人流量](https://leetcode.cn/problems/human-traffic-of-stadium/) {#human-traffic-of-stadium}

::: code-group

```markdown [题目]
表：Stadium
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| visit_date    | date    |
| people        | int     |
+---------------+---------+
visit_date 是该表中具有唯一值的列。
每日人流量信息被记录在这三列信息中：序号 (id)、日期 (visit_date)、 人流量 (people)
每天只有一行记录，日期随着 id 的增加而增加

编写解决方案找出每行的人数大于或等于 100 且 id 连续的三行或更多行记录。
返回按 visit_date 升序排列 的结果表。
查询结果格式如下所示。

示例 1:

输入：
Stadium 表:
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-09 | 188       |
+------+------------+-----------+
输出：
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-09 | 188       |
+------+------------+-----------+
解释：
id 为 5、6、7、8 的四行 id 连续，并且每行都有 >= 100 的人数记录。
请注意，即使第 7 行和第 8 行的 visit_date 不是连续的，输出也应当包含第 8 行，因为我们只需要考虑 id 连续的记录。
不输出 id 为 2 和 3 的行，因为至少需要三条 id 连续的记录。
```

```sql [SQL Schema]
Create table If Not Exists Stadium (id int, visit_date DATE NULL, people int);
Truncate table Stadium;
insert into Stadium (id, visit_date, people) values ('1', '2017-01-01', '10');
insert into Stadium (id, visit_date, people) values ('2', '2017-01-02', '109');
insert into Stadium (id, visit_date, people) values ('3', '2017-01-03', '150');
insert into Stadium (id, visit_date, people) values ('4', '2017-01-04', '99');
insert into Stadium (id, visit_date, people) values ('5', '2017-01-05', '145');
insert into Stadium (id, visit_date, people) values ('6', '2017-01-06', '1455');
insert into Stadium (id, visit_date, people) values ('7', '2017-01-07', '199');
insert into Stadium (id, visit_date, people) values ('8', '2017-01-09', '188');
```

```sql [解法一（自连接）]
SELECT DISTINCT s1.*
FROM stadium s1,
     stadium s2,
     stadium s3
WHERE s1.people >= 100
  AND s2.people >= 100
  AND s3.people >= 100
  AND (
    s2.id = s1.id + 1 AND s3.id = s1.id + 2 OR #其后两行都大于等于100
    s2.id = s2.id + 1 AND s3.id = s1.id - 1 OR #其前一行和后一行都大于等于100
    s2.id = s1.id - 1 AND s3.id = s1.id - 2 #其前两行都大于等于100
    )
ORDER BY s1.visit_date;
```

```sql [解法二（排名窗口函数）]
-- 先找出人数大于等于100的 创建一列序号参考列 用原表id与序号列相减，连续id会得到相同的值，在聚合计算个数大于3的
SELECT id, visit_date, people
FROM (SELECT id, visit_date, people, COUNT(*) OVER (PARTITION BY id - rn) AS `cnt`
      FROM (SELECT id, visit_date, people, ROW_NUMBER() OVER (ORDER BY id) `rn`
            FROM stadium
            WHERE people >= 100) a) b
WHERE cnt >= 3
ORDER BY visit_date;
```

```sql [解法二（取值窗口函数）]
SELECT id, visit_date, people
FROM (SELECT LAG(id, 2) OVER (ORDER BY visit_date)  `pre2`,
             LAG(id, 1) OVER (ORDER BY visit_date)  `pre1`,
             id,
             LEAD(id, 1) OVER (ORDER BY visit_date) `next1`,
             LEAD(id, 2) OVER (ORDER BY visit_date) `next2`,
             visit_date,
             people
      FROM stadium
      WHERE people >= 100) t
WHERE (pre2 = id - 2 AND pre1 = id - 1)
   OR (pre1 = id - 1 AND next1 = id + 1)
   OR (next1 = id + 1 AND next2 = id + 2)
ORDER BY visit_date;
```

:::

## 参考资料🎁

- 📃文档

- 📺视频
  - [LeetCode7日SQL刷题挑战](https://www.bilibili.com/video/BV1oR4y1P7ba?vd_source=84272a2d7f72158b38778819be5bc6ad)
