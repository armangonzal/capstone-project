drop database if exists BlogDB;
create database BlogDB;
use BlogDB;
create table author(
	author_id int auto_increment,
		primary key(author_id),
	username char not null,
    password_text char not null,
    isAdmin boolean not null
);
create table blog_post(
	post_id int auto_increment,
		primary key(post_id),
	author_id int not null,
		foreign key(author_id) references author(author_id),
	title varchar(50) not null,
    testBody varchar(4000) not null,
    date_created date,
    expiration date
);
create table hashtag(
	post_id int,
    label char,
		primary key(post_id, label),
        foreign key(post_id) references blog_post(post_id)
);
