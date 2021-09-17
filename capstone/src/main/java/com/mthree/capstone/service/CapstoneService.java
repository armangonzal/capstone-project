/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.service;

import com.mthree.capstone.dao.*;
import com.mthree.capstone.dto.*;
import com.mthree.capstone.exceptions.*;

import java.util.List;

/**
 *
 * @author ArmandoGonzalez
 */
public interface CapstoneService {
    
    Author authorLogin(String username, String password) throws InvalidLoginException;

    Author getAuthorById(int author_id) throws NoSuchAuthorException;

    Author addAuthor(Author author) throws DataAccessException;

    BlogPost getBlogPostById(int post_id) throws NoSuchBlogPostException;

    List<BlogPost> getAllBlogPosts() throws DataAccessException;

    List<BlogPost> getBlogPostsByHastag(String hashTag) throws DataAccessException;

    BlogPost addBlogPost(BlogPost blogPost) throws DataAccessException;
}
