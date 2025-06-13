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
select rownum, empno, sal, ename from emp
order by sal desc
