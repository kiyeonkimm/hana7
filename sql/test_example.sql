select * from Emp where ename='김바순';
update Emp set ename='김바순' where id = 207;
select * from Emp where id = 207;

-- Dept 테이블에 이름이 가장 빠른 직원(가나다 순)을 captain으로 update 하시오
select dept, min(id), min(ename) from Emp
 group by dept;
 
select * from Emp where ename = SOME(select min(ename) from Emp group by dept)
 order by dept;
 
select e1.id, e1.dept
  from Emp e1 left outer join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
 where e2.id is null;

select *
  from Dept d
    inner join (select e1.id, e1.dept
                  from Emp e1 left outer join Emp e2
                    on e1.dept = e2.dept and e1.ename > e2.ename
                 where e2.id is null) sub
    on d.id = sub.dept
 order by d.id;
 
update Dept d
    inner join (select e1.id, e1.dept
                  from Emp e1 left outer join Emp e2
                    on e1.dept = e2.dept and e1.ename > e2.ename
                 where e2.id is null) sub
    on d.id = sub.dept
  set d.captain = sub.id
 where d.id > 0;
  
select * from Dept where captain is not null;

select *, (select ename from Emp where id = d.captain) ename from Dept d;

select d.*, e.ename from Dept d inner join Emp e on d.id = e.dept and d.captain = e.id;


-- ex) Emp table에 outdt(퇴사일) 컬럼 추가
alter table Emp add column outdt date comment '퇴사일';
alter table Emp add column outdt2 varchar(10) comment '퇴사일2';
update Emp set outdt= CAST('2025-04-25' as date), outdt2 = '2025-04-25'
 where id in (3,5);

start transaction; 
update Emp e left outer join Dept d on e.id= d.captain
   set e.outdt= curdate(), e.outdt2 = curdate(),
      d.captain = null
   where e.id in (14, 26);
   
commit;
rollback;
select * from Dept where captain in (3,5,14,26);
select * from Emp;