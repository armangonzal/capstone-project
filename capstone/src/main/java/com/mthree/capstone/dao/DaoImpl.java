/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dao;

import com.mthree.capstone.dto.BlogPost;
import com.mthree.capstone.dto.*;
import com.mthree.capstone.exceptions.*;

import java.sql.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

/**
 *
 * @author 88bry
 */

@Repository
@Profile({"database", "prod"})
public class DaoImpl implements Dao{
    
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Author getAuthor(String username) {

        final String sql = "SELECT author_id, username, password_text, isAdmin "
                + "FROM author WHERE username = ?;";

        return jdbcTemplate.queryForObject(sql, new AuthorMapper(), username);
    }

    @Override
    public Author getAuthor(int author_id)  {

        final String sql = "SELECT author_id, username, password_text, isAdmin "
                + "FROM author WHERE author_id = ?;";

        return jdbcTemplate.queryForObject(sql, new AuthorMapper(), author_id);

    }

    @Override
    public Author addAuthor(Author author) {
        final String sql = "INSERT INTO author(username, password, isAdmin) VALUES(?,?,?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update((Connection conn) -> {

            PreparedStatement statement = conn.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS);

            statement.setString(1, author.getUsername());
            statement.setString(2, author.getPassword());
            statement.setBoolean(3, author.isAdmin());
            return statement;

        }, keyHolder);

        author.setAuthorId(keyHolder.getKey().intValue());

        return author;
    }

    @Override
    public BlogPost getBlogPost(int post_id) {
        final String sql = "SELECT post_id, author_id, title, testBody, date_created, expiration"
                + "FROM blog_post WHERE post_id = ?;";

        BlogPost blogPost = jdbcTemplate.queryForObject(sql, new BlogPostMapper(), post_id);
        //populate hashtags before returning
        return this.getBlogPostHashtags(blogPost);
    }

    @Override
    public List<BlogPost> getAllBlogPosts() {
        final String sql = "SELECT post_id, author_id, title, testBody, date_created, expiration"
                + "FROM blog_post;";

        List<BlogPost> blogPosts = jdbcTemplate.query(sql, new BlogPostMapper());
        //populate hashtags before returning
        for(BlogPost blogPost: blogPosts)
            blogPost = this.getBlogPostHashtags(blogPost);
        return blogPosts;
    }

    @Override
    public List<BlogPost> getAllBlogPostsByHashtag(String hashTag) {
        final String sql = "SELECT post_id"
                + "FROM hashtag WHERE label = ?;";
        List<Integer> postIds = jdbcTemplate.queryForList(sql, Integer.class, hashTag);
        List<BlogPost> blogPosts = new ArrayList<>();
        for(Integer postId : postIds)
            blogPosts.add(this.getBlogPost(postId));
        return blogPosts;
    }

    @Override
    public BlogPost addBlogPost(BlogPost blogPost) {
        final String sql = "INSERT INTO author(author_id, title, testBody, date_created, expiration) VALUES(?,?,?,?,?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update((Connection conn) -> {

            PreparedStatement statement = conn.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS);

            statement.setInt(1, blogPost.getAuthorId());
            statement.setString(2, blogPost.getTitle());
            statement.setString(3, blogPost.getTextBody());
            statement.setObject(4, blogPost.getDateCreated());
            statement.setObject(5, blogPost.getExpiration());
            return statement;

        }, keyHolder);

        blogPost.setPostId(keyHolder.getKey().intValue());

        //add hashtags
        List<String> hashtags = blogPost.getHashtags();
        int post_id = blogPost.getPostId();
        for(String hashtag: hashtags)
            this.addHashtag(post_id, hashtag);

        return blogPost;
    }

    private void addHashtag(int post_id, String hashtag) {

        final String sql = "INSERT INTO hashtag(post_id, label) VALUES(?,?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update((Connection conn) -> {

            PreparedStatement statement = conn.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS);

            statement.setInt(1, post_id);
            statement.setString(2, hashtag);
            return statement;

        }, keyHolder);

    }

    //get all hashtags for blogpost
    private BlogPost getBlogPostHashtags(BlogPost blogPost) {
        int post_id = blogPost.getPostId();
        final String sql = "SELECT label"
                + "FROM hashtag WHERE post_id = ?;";
        List<String> hashTags = jdbcTemplate.queryForList(sql, String.class, post_id);
        blogPost.setHashtags(hashTags);
        return blogPost;
    }

    //Mappers
    private static final class AuthorMapper implements RowMapper<Author> {

        @Override
        public Author mapRow(ResultSet rs, int index) throws SQLException
        {
            Author author = new Author(rs.getString("username"));
            author.setPassword(rs.getString("password"));
            author.setIsAdmin(rs.getBoolean("isAdmin"));
            author.setAuthorId(rs.getInt("author_id"));

            return author;
        }
    }

    private static final class BlogPostMapper implements RowMapper<BlogPost> {

        @Override
        public BlogPost mapRow(ResultSet rs, int index) throws SQLException
        {
            BlogPost blogPost = new BlogPost();
            blogPost.setAuthorId(rs.getInt("author_id"));
            blogPost.setDateCreated( rs.getObject("date_created", LocalDate.class) );
            blogPost.setExpiration( rs.getObject("expiration", LocalDate.class) );
            blogPost.setTitle(rs.getString("title"));
            blogPost.setTextBody(rs.getString("testBody"));

            return blogPost;
        }
    }

}
