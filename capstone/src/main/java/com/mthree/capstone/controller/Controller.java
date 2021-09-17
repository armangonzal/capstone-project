/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.controller;

import com.mthree.capstone.service.*;
import com.mthree.capstone.dto.*;
import com.mthree.capstone.exceptions.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author ArmandoGonzalez
 */
public class Controller {
    
    CapstoneService service;
    Author currentAuthor;

    //
    public Controller(CapstoneService service){
        this.service = service;
    }

    @PostMapping("login") //only html page in repo is "index" but home seems like a fitting placeholder
    public String loginToAuthor(HttpServletRequest request) throws InvalidLoginException{
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        try{
        currentAuthor = service.authorLogin(username, password);
        }catch(InvalidLoginException e){
            System.out.println("Bad login info. Please try again.");
        }
        return "login";
        
    }

    @GetMapping("blog")
    public String displayblogPosts(Model model) throws DataAccessException{
        
        try{
            List<BlogPost> blogPosts = service.getAllBlogPosts();    
        }catch(DataAccessException e){
            System.out.println("problem getting posts, please try again.")
        }
        model.addAttribute("blogPosts", blogPosts);
        return "blogPosts";
    }


    @GetMapping("blog")
    public String displayblogPostsByHashtag(HttpServletRequest request, Model model) throws NoSuchBlogPostException{
        String hashtag = request.getParameter("hashtag");
        
        try{
            List<BlogPost> blogPosts = service.getBlogPostsByHashtag(hashtag);
        }catch(NoSuchBlogPostException e){
            System.out.println("Couldn;t find any posts with that hashtag, please try again.");
        }
        model.addAttribute("blogPosts", blogPosts);
        return "blogPosts";
    }

    @GetMapping("author")
    public String getAuthorById(HttpServletRequest request, Model model) throws NoSuchAuthorException{
        int authorId = Integer.parseInt(request.getParameter("author_id"));
        try{
            Author author = service.getAuthorById(authorId);
        }catch(NoSuchAuthorException e){
            System.out.println("No author with that id, please try again.")
        }
        model.addAttribute("author", author);
        return "blogPosts";
    }

    @PostMapping("author")
    public String addBlogPost(HttpServletRequest request) throws DataAccessException{
        int postId = Integer.parseInt(request.getParameter("postId"));

        int authorId = Integer.parseInt(request.getParameter("authorId"));

        String title = request.getParameter("title");

        String body = request.getParameter("textBody");

        LocalDate expiration = LocalDate.parse(request.getParameter("firstName"));

        BlogPost blogPost = new BlogPost();
        blogPost.setPostId(postId);
        blogPost.setAuthorId(authorId);
        blogPost.setTitle(title);
        blogPost.setTextBody(body);
        blogPost.setDateCreated(LocalDate.now());
        blogPost.setExpiration(expiration);
        try{
            service.addBlogPost(blogPost);
        }catch(DataAccessException e){
            System.out.println("Trouble adding the blog, please try again.")
        }
        return "author";
    }

    @PostMapping("register")
    public String addAuthor(HttpServletRequest request) throws DataAccessException{

        int authorId = Integer.parseInt(request.getParameter("authorId"));

        String username = request.getParameter("username");

        String password = request.getParameter("password");

        
        Author author = new Author(username);
        author.setAuthorId(authorId);
        author.setPassword(password);
        author.setIsAdmin(false);
        try{
            service.addAuthor(author);
        }catch(DataAccessException e){
            System.out.println("Trouble adding that author, please try again.")
        }
        return "author";
    }


}
