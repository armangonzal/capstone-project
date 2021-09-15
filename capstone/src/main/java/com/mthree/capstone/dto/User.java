/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dto;

/**
 *
 * @author 88bry
 */
public class User {
    private int userId;
    private String firstName, lastName;
    private Permission permission1, permission2, permission3;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public User(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Permission getPermission1() {
        return permission1;
    }

    public void setPermission1(Permission permission1) {
        this.permission1 = permission1;
    }

    public Permission getPermission2() {
        return permission2;
    }

    public void setPermission2(Permission permission2) {
        this.permission2 = permission2;
    }

    public Permission getPermission3() {
        return permission3;
    }

    public void setPermission3(Permission permission3) {
        this.permission3 = permission3;
    }
}
