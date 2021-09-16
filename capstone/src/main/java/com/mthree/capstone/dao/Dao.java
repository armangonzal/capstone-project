/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dao;

import com.mthree.capstone.dto.*;
import java.util.List;

/**
 *
 * @author ArmandoGonzalez
 */
public interface Dao {
    User getAuthor(String username); //throws NoSuchAuthorException
    
    User getAuthor(int author_id); //throws NoSuchAuthorException
    
    User addAuthor(User author); //throws DataAccessException
    
    BlogPost getBlogPost(int post_id); //throws NoSuchBlogPostException
    
    List<BlogPost> getAllBlogPosts();
    
    List<BlogPost> getAllBlogPostsByHashtag(String hashTag);
    
    BlogPost addBlogPost(BlogPost blogPost); //throws DataAccessException
}
