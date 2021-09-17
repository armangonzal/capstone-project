/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dao;

import com.mthree.capstone.dto.Author;
import com.mthree.capstone.dto.BlogPost;
import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author 88bry
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class DaoImplTest {
    
    @Autowired
    Dao dao;
    
    public DaoImplTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    @Test
    public void testAddAuthor() {
        Author testAuthor = new Author("Alice");
        testAuthor.setPassword("supersecurepassword");
        testAuthor.setIsAdmin(false);
        
        Author daoUsername = dao.getAuthor("Alice");
        Author daoId = dao.getAuthor(1);
        
        assertEquals(testAuthor, daoUsername);
        assertEquals(testAuthor, daoId);
    }
    
    @Test
    public void testAddBlogPost() {
        Author testAuthor = new Author("Alice");
        testAuthor.setPassword("supersecurepassword");
        testAuthor.setIsAdmin(false);
        
        BlogPost testPost = new BlogPost();
        testPost.setAuthorId(1);
        testPost.setDateCreated(LocalDate.now());
        testPost.setExpiration(LocalDate.of(10, Month.MARCH, 2222));
        testPost.setTitle("Hi");
        testPost.setTextBody("This is a boring post.");
        
        BlogPost daoPost = dao.getBlogPost(1);
        
        assertEquals(testPost, daoPost);
    }
    
    @Test
    public void testGetAllPosts() {
        Author testAuthor = new Author("Alice");
        testAuthor.setPassword("supersecurepassword");
        testAuthor.setIsAdmin(false);
        
        BlogPost testPost = new BlogPost();
        testPost.setAuthorId(1);
        testPost.setDateCreated(LocalDate.now());
        testPost.setExpiration(LocalDate.of(10, Month.MARCH, 2222));
        testPost.setTitle("Hi");
        testPost.setTextBody("This is a boring post.");
        
        BlogPost testPost2 = new BlogPost();
        testPost2.setAuthorId(1);
        testPost2.setDateCreated(LocalDate.now());
        testPost2.setExpiration(LocalDate.of(10, Month.MARCH, 2222));
        testPost2.setTitle("Hi2");
        testPost2.setTextBody("This is another boring post.");
        
        List<BlogPost> testPosts = new ArrayList<>(); 
        testPosts.set(0, testPost);
        testPosts.set(1, testPost2);
        List<BlogPost> daoPosts = dao.getAllBlogPosts();
        
        assertEquals(testPosts, daoPosts);
    }
}
