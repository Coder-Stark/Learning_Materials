--1.  Find the second Highest salary of an employee
-- 1 table (emp) = empid, sal
select max(sal) from emp
where sal not in(select max(sal) from emp);

select max(sal) from emp
where sal < (select max(sal) from emp);


-- 2. Display the highest payed employees in each department
-- 1 table (emp) = deptno, sal, ename
select max(sal), deptno from emp
group by deptno;

-- 3. Display the number of employees in each department
select count(*), deptno from emp
group by deptno;


-- 4. Display alternate records in sql
-- 1 table (emp) = empno, ename, job, mgr, hiredate, sal, comm, deptno
select * from 
    (
     select empno, ename, sal, rownum rn
     from emp
     order by rn
    )
    where mod (rn, 2) != 0;


-- 5. Find frequency of each name of a column
-- 1 table (emp) = ename 
select ename, count(*)
from emp
group by ename;

-- 6. Find Duplicate values and its frequency of a column
select ename, count(*)
from emp
group by ename
having count(*) > 1;


-- 7. Pattern matching in SQL (Like operator)
-- 7.1 Display the employee names whose name start with 'M'
-- 1 table (emp) = ename
select ename from emp
where ename like 'M%';

-- 7.2 Display the employee names whose name ends with 'N'
select ename from emp
where ename like '%N';

-- 7.3 Display the employee names whose any position having 'M'
select ename from emp
where ename like '%M%';

-- 7.4 Display the employee names whose does not have any position with 'M'
select ename from emp
where ename not like '%M%';

-- 7.5 Display the employee names whose name contains exactly 4 letters
select ename from emp
where ename like '____';              -- 4 underscores

-- 7.6 Display the employee names whose name contains the 
-- (i) second letter as 'L' 
select ename from emp
where ename like '_L%';
-- (ii) fourth Letter as 'M'
select ename from emp
where ename like '___M%';

-- 7.7 Display the employee names whose names and hire dates for the employees joined in the month of december
select hiredate, ename from emp
where hiredate like '%DEC%';

-- 7.8 Display the employee names whose name contains exactly 2 'L's
select ename from emp
where ename like '%LL%';

-- 7.9 Display the employee names whose name starts with 'J' and ends with 'S'
select ename from emp
where ename like 'J%S';


-- 8. Display 4th row of emp table 
select * from emp
where rownum <= 4
minus
select * from emp
where rownum <= 3;

-- another way
select * from (
    select rownum as r, emp.* from emp
)
where r = 4;


-- 9. Display 2nd, 3rd and 7th row of emp table 
select * from (
    select rownum as r, emp.* from emp
)
where r in (2, 3, 7);

-- 10. Union vs Unionall (allows all duplicates value)
-- 2 table (sample1, sample2) = city, country
-- for union columns should be same number, same data types, same logic order 
select city from sample1
union 
select city from sample2;

select city from sample2
union all
select city from sample2;


-- 11. INNER JOIN 
-- 2 table (emp, dept) = ename, sal, deptno, dname, logic 
select ename, sal, deptno, dname, loc
from emp, dept
where emp.deptno = dept.deptno;

-- 11.1 Display employees who are working in location Chicago from emp and dept table 
-- // wrong query 
-- select ename, sal, deptno, dname, loc = 'Chicago'
-- from emp, dept
-- where emp.deptno = dept.deptno;

select ename, sal, deptno, dname, loc
from emp e, dept d
where e.deptno = d.deptno 
and loc = 'Chicago'

-- 11.2 Display the dept name and total salaries from each dept
select dname, sum(sal) 
from emp e, dept d
where e.deptno = d.deptno
group by dname;


-- 12. SELF JOIN 
-- 1 table (emp) = empno, ename, job, mgr, hiredate, sal, comm, deptno
-- 12.1 Display employee details who are getting more salary than their manager salary
select e1.ename 'employees', e2.ename 'manager', e2.sal
from emp e1, emp2
where e1.mgr = e2.empno and e1.sal > e2.sal;

-- 12.2 Display the employee details who joined before their manager 
select e1.ename 'employees', e2.ename 'manager', e2.sal
from emp e1, emp2
where e1.mgr = e2.empno and e1.hiredate < e2.hiredate;


-- 13. LEFT JOIN (if 2nd table havent match null value is there)
-- 2 table(emp, dept) = empno, ename, job, mgr, hiredate, sal, comm, deptno and deptno dname loc
-- 13.1 Display employee details having dname 'sales'
select empno , ename, emp.deptno, dname, loc, job
from emp left join dept
on emp.deptno = dept.deptno and dname = 'sales';


-- 14. RIGHT JOIN (if 1st table havent match null value is there)
-- Same above table 
-- 14.1 Display employee details having dname 'sales'
select empno, ename, dept.deptno, dname, loc, job 
from emp right join dept
on dept.deptno = emp.empno and dname = 'sales';


15. FULL JOIN ()


            





