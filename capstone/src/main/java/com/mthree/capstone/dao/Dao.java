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
    Author getAuthor(String username); //throws NoSuchAuthorException
    
    Author getAuthor(int author_id); //throws NoSuchAuthorException
    
    Author addAuthor(Author author); //throws DataAccessException
    
    BlogPost getBlogPost(int post_id); //throws NoSuchBlogPostException
    
    List<BlogPost> getAllBlogPosts();
    
    List<BlogPost> getAllBlogPostsByHashtag(String hashTag);
    
    BlogPost addBlogPost(BlogPost blogPost); //throws DataAccessException
}
