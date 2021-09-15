drop database if exists BlogDB;
create database BlogDB;
use BlogDB;
create table tags(
	tagId int auto_increment,
		primary key(tagId),
	tag varchar(50) not null
);
create table permissions(
	permissionId int auto_increment,
		primary key(permissionId),
	permission varchar(50) not null
);
create table StaticPost(
	staticId int auto_increment,
		primary key(staticId),
	staticTitle varchar(50) not null,
    staticBody longtext not null,
    allowedAdd int not null,
    allowedEdit int not null,
    allowedDelete int not null,
		foreign key(allowedAdd) references permissions(permissionId),
        foreign key(allowedEdit) references permissions(permissionId),
        foreign key(allowedDelete) references permissions(permissionId)
);
create table BlogPost(
	blogId int auto_increment,
		primary key(blogId),
	blogTitle varchar(50) not null,
    blogBody longtext not null,
    tag1 int,
    tag2 int,
    tag3 int,
		foreign key(tag1) references tags(tagId),
        foreign key(tag2) references tags(tagId),
        foreign key(tag3) references tags(tagId),
	allowedAdd int not null,
    allowedEdit int not null,
    allowedDelete int not null,
		foreign key(allowedAdd) references permissions(permissionId),
        foreign key(allowedEdit) references permissions(permissionId),
        foreign key(allowedDelete) references permissions(permissionId)
);
create table users(
	userId int auto_increment,
		primary key(userId),
	firstName varchar(50) not null,
    lastName varchar(50) not null,
    permission1 int,
    permission2 int,
    permission3 int,
		foreign key(permission1) references permissions(permissionId),
        foreign key(permission2) references permissions(permissionId),
        foreign key(permission3) references permissions(permissionId)
);
