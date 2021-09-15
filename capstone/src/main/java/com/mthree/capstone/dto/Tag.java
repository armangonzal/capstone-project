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
public class Tag {
    private int tagId;
    private String tag;

    public int getTagId() {
        return tagId;
    }

    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public String getTag() {
        return tag;
    }

    public Tag(String tag) {
        this.tag = tag;
    }
}
