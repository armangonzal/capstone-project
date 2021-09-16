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
public interface ServiceI {
    
    User authorLogin(String username, String password);

    User getAuthorById(int author_id);

    boolean addAuthor(User author);

    BlogPost getBlogPostById(int post_id);

    List<BlogPost> getAllBlogPosts();

    List<BlogPost> getBlogPostsByHastag(String hashTag);

    boolean addBlogPost(BlogPost blogPost);
}
