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
public class BlogPost {
    private int blogId;
    private String blogTitle;
    private String blogBody;
    private Tag tag1, tag2, tag3;
    private Permission allowedAdd, allowedEdit, allowedDelete;

    public String getBlogTitle() {
        return blogTitle;
    }

    public BlogPost(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    public String getBlogBody() {
        return blogBody;
    }

    public void setBlogBody(String blogBody) {
        this.blogBody = blogBody;
    }

    public Tag getTag1() {
        return tag1;
    }

    public void setTag1(Tag tag1) {
        this.tag1 = tag1;
    }

    public Tag getTag2() {
        return tag2;
    }

    public void setTag2(Tag tag2) {
        this.tag2 = tag2;
    }

    public Tag getTag3() {
        return tag3;
    }

    public void setTag3(Tag tag3) {
        this.tag3 = tag3;
    }

    public Permission getAllowedAdd() {
        return allowedAdd;
    }

    public void setAllowedAdd(Permission allowedAdd) {
        this.allowedAdd = allowedAdd;
    }

    public Permission getAllowedEdit() {
        return allowedEdit;
    }

    public void setAllowedEdit(Permission allowedEdit) {
        this.allowedEdit = allowedEdit;
    }

    public Permission getAllowedDelete() {
        return allowedDelete;
    }

    public void setAllowedDelete(Permission allowedDelete) {
        this.allowedDelete = allowedDelete;
    }
}
