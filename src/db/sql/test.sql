create table if not exists test(
    id int auto_increment not null primary key comment '主键id',
    username varchar(16) not null DEFAULT 'test' comment '姓名',
    brother char(8) comment '兄弟',
    age int comment '年龄',
    sex char(1) comment '性别',
    birthday date comment '生日'
) DEFAULT CHARSET=utf8;

insert into test(username) values('xiaoming1');
insert into test(username) values('xiaoming2');