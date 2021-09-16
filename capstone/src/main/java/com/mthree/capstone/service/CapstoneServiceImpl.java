/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.Service;
import com.mthree.capstone.dto.*;
import com.mthree.capstone.dao.*;
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
    public User authorLogin(String username, String password) {
        /*
        Author author = this.dao.getAuthor(username);
        Author guest = this.dao.getGuest();
        if(password = author.getPassword() ) return author;
        else return guest;
        */
        return new User("no name");
    }

    @Override
    public User getAuthorById(int author_id) {
        /*
        return this.dao.getAuthor(author_id);
        */
        return new User("no name");
    }

    @Override
    public boolean addAuthor(User author) {
        /*
        try {
            this.dao.addAuthor(author);
            return true;
        } catch (Exception e) {
            return false;
        }
        */
        return false;
    }

    @Override
    public BlogPost getBlogPostById(int post_id) {
        /*
        try {
            return this.dao.getBlogPost(post_id);
        } catch (Exception e) {
            throw new Exception("no blog post");
        }
        */
        return new BlogPost("Title");
    }

    @Override
    public List<BlogPost> getAllBlogPosts() {
        /*
        try {
            return this.dao.getAllBlogPosts();
        } catch (Exception e) {
            throw new Exception("blog access error");
        }
        */
        return new ArrayList<BlogPost>();
    }

    @Override
    public List<BlogPost> getBlogPostsByHastag(String hashTag) {
        /*
        try {
            return this.dao.getAllBlogPostsByHashtag(hashTag);
        } catch (Exception e) {
            throw new Exception("blog access error");
        }
        */
        return new ArrayList<BlogPost>();
    }

    @Override
    public boolean addBlogPost(BlogPost blogPost) {
        /*
        try {
            this.dao.addBlogPost(blogPost);
            return true;
        } catch (Exception e) {
            return false;
        }
        */
        return false;
    }

}