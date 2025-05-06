desc Emp;
desc Dept;

alter table Dept add column captain int unsigned null comment '부사장';
alter table Dept add constraint foreign key (captain) references Emp(id) on Delete set null on Update cascade;

show create table Dept;

select * from Dept;

alter table Dept drop constraint dept_ibfk_1;

alter table Dept drop index fk_Dept_captain_Emp_id;