/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.service;
import com.mthree.capstone.exceptions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.Service;
import com.mthree.capstone.dto.*;
import com.mthree.capstone.dao.*;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.List;
import java.util.ArrayList;

/**
 *
 * @author ArmandoGonzalez
 */

@Service
@Profile({"service", "prod"})
public class CapstoneServiceImpl implements CapstoneService {
    private final Dao dao;
    
    @Autowired
    public CapstoneServiceImpl(Dao dao) {
        this.dao = dao;
    }
    
    @Override
    public Author authorLogin(String username, String password) throws InvalidLoginException
    {
        try {
            Author author = this.dao.getAuthor(username);
            if(password == author.getPassword() ) return author;
            return new Author("no name");
        } catch (Exception e) {
            throw new InvalidLoginException();
        }
    }

    @Override
    public Author getAuthorById(int author_id)  throws NoSuchAuthorException {
        try {
            return this.dao.getAuthor(author_id);
        } catch (Exception e) {
            throw new NoSuchAuthorException("Author id: "+author_id);
        }
    }

    @Override
    public Author addAuthor(Author author) throws DataAccessException {
        try {
            return this.dao.addAuthor(author);
        } catch (Exception e) {
            throw new DataAccessException();
        }

    }

    @Override
    public BlogPost getBlogPostById(int post_id) throws NoSuchBlogPostException {
        try {
            return this.dao.getBlogPost(post_id);
        } catch (Exception e) {
            throw new NoSuchBlogPostException("Blog post id: "+post_id);
        }
    }

    @Override
    public List<BlogPost> getAllBlogPosts() throws DataAccessException {

        try {
            return this.dao.getAllBlogPosts();
        } catch (Exception e) {
            throw new DataAccessException();
        }

    }

    @Override
    public List<BlogPost> getBlogPostsByHastag(String hashTag) throws DataAccessException {

        try {
            return this.dao.getAllBlogPostsByHashtag(hashTag);
        } catch (Exception e) {
            throw new DataAccessException();
        }
    }

    @Override
    public BlogPost addBlogPost(BlogPost blogPost) throws DataAccessException {
        try {
            return this.dao.addBlogPost(blogPost);
        } catch (Exception e) {
            throw new DataAccessException();
        }
    }

}