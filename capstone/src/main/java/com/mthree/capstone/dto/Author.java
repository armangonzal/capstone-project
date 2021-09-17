/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dto;

import org.springframework.stereotype.Component;

/**
 *
 * @author 88bry
 */
@Component
public class Author {
    
    private int authorId;
    private boolean isAdmin;
    private String username, password;

    public Author(String username) {
        this.username = username;
    }

    public int getAuthor_id() {
        return authorId;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public int getAuthorId() {
        return this.authorId;
    }
}
