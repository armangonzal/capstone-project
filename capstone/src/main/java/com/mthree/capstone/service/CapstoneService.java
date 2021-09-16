/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.service;

import com.mthree.capstone.dao.*;
import com.mthree.capstone.dto.*;

import java.util.List;

/**
 *
 * @author ArmandoGonzalez
 */
public interface CapstoneService {
    
    User authorLogin(String username, String password); 
        //throws NoSuchAuthorException, InvalidLoginException

    User getAuthorById(int author_id); //throws NoSuchAuthorException

    User addAuthor(User author); //throws DataAccessException

    BlogPost getBlogPostById(int post_id); //throws NoSuchBlogPostException

    List<BlogPost> getAllBlogPosts(); 

    List<BlogPost> getBlogPostsByHastag(String hashTag);

    BlogPost addBlogPost(BlogPost blogPost); //throws DataAccessException
}
