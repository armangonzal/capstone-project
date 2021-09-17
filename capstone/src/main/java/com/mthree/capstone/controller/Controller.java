/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.controller;

import com.mthree.capstone.service.*;
import com.mthree.capstone.dto.*;
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
public class Controller throws InvalidLoginException{
    
    CapstoneService service;
    Author currentAuthor;

    //
    public Controller(CapstoneService service){
        this.service = service;
    }

    @PostMapping("home") //only html page in repo is "index" but home seems like a fitting placeholder
    public String loginToAuthor(HttpServletRequest request) throws InvalidLoginException{
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        currentAuthor = service.authorLogin(username, password);
        return "home";
        
    }

    @GetMapping("home")
    public String homePage(Model model) {
        
        // Teachers
        List<Teacher> teacherList = service.getRecentTeachers();
        model.addAttribute("teachers", teacherList);
        
        // BlogPosts
        List<BlogPost> blogPostList = service.getAllBlogPost();
        model.addAttribute("blogPosts", blogPostList);
        
        // BlogPost by name
        Map<Integer, String> blogPostsByName = blogPostList.stream().collect(
                Collectors.toMap(BlogPost::getBlogPostId, BlogPost::getBlogPostName));
        
        model.addAttribute("blogPostsById", blogPostsByName);
        
        // Locations
        List<Location> locationList = service.getAllLocations();
        model.addAttribute("locations", locationList);
        
        // Location by name
        Map<Integer, String> locationsByName = locationList.stream().collect(
                Collectors.toMap(Location::getLocationId, Location::getLocationName));
        
        model.addAttribute("locationsById", locationsByName);
        
        return "home";
    }

    


    @GetMapping("blogPosts")
    public String displayblogPosts(Model model) {
        List<blogPosts> = service.getAllBlogPosts();
        model.addAttribute("blogPosts", blogPosts);
        return "blogPosts";
    }

    @PostMapping("addBlogPost")
    public String addBlogPost(int postId, int authorId, String title, String body, LocalDate expiration) {
        BlogPost blogPost = new BlogPost();
        blogPost.setPostId(postId);
        blogPost.setAuthorId(authorId);
        blogPost.setTitle(title);
        blogPost.setTextBody(body);
        blogPost.setDateCreated(LocalDate.now());
        blogPost.setExpiration(expiration);
        CapstoneService.addBlogPost(blogPost);
        
        return "redirect:/blogPosts";
    }

    @GetMapping("editBlogPost")
    public String editBlogPost(Integer id, Model model) {
        BlogPost blogPost = blogPostService.getBlogPostById(id);
        model.addAttribute("blogPost", blogPost);
        return "editBlogPost";
    }

    @PostMapping("editBlogPost")
    public String performEditBlogPost(HttpServletRequest request) {
        int id = Integer.parseInt(request.getParameter("id"));
        BlogPost blogPost = service.getBlogPostById(id);
        
        blogPost.setPostId(request.getParameter("postId"));
        blogPost.setAuthorIde(request.getParameter("authorId"));
        blogPost.setTextBody(request.getParameter("textBody"));
        blogPost.setTitle(request.getParameter("title"));
        blogPost.setDateCreated(request.getParameter("dateCreated"));
        blogPost.setExpiration(request.getParameter("expiration"));
        
        service.addBlogPost(blogPost);
        
        return "redirect:/blogPosts";
    }


}
