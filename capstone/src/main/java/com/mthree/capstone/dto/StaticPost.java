/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.dto;

/**
 *
 * @author ArmandoGonzalez
 */
public class StaticPost {
    private int staticId;
    private String staticTitle;
    private String staticBody;
    private Permission allowedAdd, allowedEdit, allowedDelete;

    public String getStaticTitle() {
        return staticTitle;
    }

    public StaticPost(String staticTitle) {
        this.staticTitle = staticTitle;
    }

    public String getStaticBody() {
        return staticBody;
    }

    public void setStaticBody(String staticBody) {
        this.staticBody = staticBody;
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
