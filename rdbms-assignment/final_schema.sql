create database if not exists FinalAssessment;

use FinalAssessment;

status;

create table users_tab(id int not null auto_increment, username char(25) not null, utype boolean, primary key(id));
create table questions_tab(id int not null auto_increment, question varchar(50) not null, primary key(id));
create table options_tab(id int not null auto_increment, answer varchar(40) not null, is_correct boolean not null, question_id int not null, primary key(id), foreign key(question_id) references questions_tab(id) on delete cascade);
create table tests_tab(id int not null auto_increment, test_no int not null, question_id int not null, primary key(id), foreign key(question_id) references questions_tab(id) on delete cascade);
create table answers_tab(id int not null auto_increment, user_id int not null, test_id int not null, question_id int not null, answer int not null, duration int(3) not null, primary key(id), foreign key(user_id) references users_tab(id), foreign key(test_id) references tests_tab(id));

insert into users_tab values(null, 'kasper', true);
insert into users_tab values(null, 'sky', false);
insert into users_tab values(null, 'jack', false);
insert into users_tab values(null, 'kristy', false);

insert into questions_tab values(null, 'Java source code is compiled into_____________.');
insert into questions_tab values(null, 'Which of the tools is used to compile java code?');
insert into questions_tab values(null, 'Which of the tools is used to execute java code?');
insert into questions_tab values(null, 'Which of the tools is used to execute Applet?');
insert into questions_tab values(null, 'HTML java help can be accessed using_____________?');
insert into questions_tab values(null, 'Jar stands for_____________?');
insert into questions_tab values(null, 'which is used for details of compilation?');
insert into questions_tab values(null, 'which of the following is not a keyword in java?');
insert into questions_tab values(null, 'Java is object oriented. Right?');
insert into questions_tab values(null, 'Java code is stored as ?');
insert into questions_tab values(null, 'Which of the following is a invalid comment option ?');

insert into options_tab values(null, '.obj', 0, 1), (null, 'Bytecode', 1, 1);
insert into options_tab values(null, 'java', 0, 2), (null, 'javac', 1, 2);
insert into options_tab values(null, 'java', 1, 3), (null, 'javaw', 0, 3);
insert into options_tab values(null, 'japplet', 0, 4), (null, 'appletviewer', 1, 4);
insert into options_tab values(null, 'java help', 0, 5), (null, 'javadoc', 1, 5);
insert into options_tab values(null, 'java archive', 1, 6), (null, 'java app runner', 0, 6);
insert into options_tab values(null, 'debug', 0, 7), (null, 'verbose', 1, 7);
insert into options_tab values(null, 'abstract', 0, 8), (null, 'finalize', 1, 8);
insert into options_tab values(null, 'true', 1, 9), (null, 'false', 0, 9);
insert into options_tab values(null, '.jv', 0, 10), (null, '.java', 1, 10);
insert into options_tab values(null, '//', 0, 11), (null, '\\', 1, 11);

insert into tests_tab values(null, 1, 1), (null, 1, 3), (null, 1, 5), (null, 1, 7), (null, 1, 9);
insert into tests_tab values(null, 2, 2), (null, 2, 4), (null, 2, 6), (null, 2, 8), (null, 2, 10);

insert into answers_tab values(null, 2, 1, 1, 1, 10), (null, 2, 1, 3, 5, 10), (null, 2, 1, 5, 10, 10), (null, 2, 1, 7, 13, 10), (null, 2, 1, 9, 18, 10);
insert into answers_tab values(null, 3, 1, 1, 2, 10), (null, 3, 1, 3, 5, 10), (null, 3, 1, 5, 10, 10), (null, 3, 1, 7, 14, 10), (null, 3, 1, 9, 17, 10);
insert into answers_tab values(null, 3, 2, 2, 4, 10), (null, 3, 2, 4, 8, 10), (null, 3, 2, 6, 11, 10), (null, 3, 2, 8, 16, 10), (null, 3, 2, 10, 20, 10);

create view result_view as select a.user_id, a.test_id,count(*) answer from answers_tab a, options_tab o where a.answer=o.id and o.is_correct=1 group by a.user_id, a.test_id;

select * from users_tab;
select * from questions_tab;
select * from options_tab;
select * from tests_tab;
select * from answers_tab;
select * from result_view;

DELIMITER //
CREATE PROCEDURE showReport()
BEGIN
SET @sql = NULL;
select group_concat(distinct concat('max(if(td.question_id = ''',question_id,''',IF(td.answer mod 2 = 0, 2, 1),NULL)) as', quote(question_id))) into @sql from answers_tab td;
set @sql = concat('select td.user_id,u.username,td.test_id,',@sql,' from answers_tab td, users_tab u where td.user_id=u.id GROUP BY td.user_id, td.test_id');
prepare statement from @sql;
execute statement;
End//
DELIMITER ;

call showReport();
