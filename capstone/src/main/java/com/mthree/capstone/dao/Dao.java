/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dao;

import com.mthree.capstone.dto.*;
import com.mthree.capstone.exceptions.*;
import java.util.List;

/**
 *
 * @author ArmandoGonzalez
 */
public interface Dao {
    Author getAuthor(String username);
    
    Author getAuthor(int author_id);
    
    Author addAuthor(Author author) ;
    
    BlogPost getBlogPost(int post_id);
    
    List<BlogPost> getAllBlogPosts();
    
    List<BlogPost> getAllBlogPostsByHashtag(String hashTag);
    
    BlogPost addBlogPost(BlogPost blogPost);
}
