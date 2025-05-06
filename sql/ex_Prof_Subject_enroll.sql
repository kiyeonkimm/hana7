
create table Prof(
	id smallint Unsigned not null primary key comment '교수번호',
    name varchar(31) not null comment '교수명',
    likecnt int not null default 0
);
alter table Prof modify column id smallint unsigned not null comment '교수번호';

desc Student;

create table Subject(
	id smallint Unsigned not null primary key,
    name varchar(31) not null comment '과목명',
    prof smallint unsigned null comment '교수번호',
    foreign key fk_Subject_prof_Prof (prof) references Prof(id) on Update cascade on Delete set null
    
);

create table Enroll(
	id int unsigned not null primary key,
    subject smallint unsigned not null comment '과목번호', 
    student int not null comment '학번',
    foreign key fk_Enroll_Subject (subject) references Subject (id) on Update cascade on Delete cascade,
    foreign key fk_Enroll_student (student) references Student (id) on Update cascade on Delete cascade
);
Desc Subject;