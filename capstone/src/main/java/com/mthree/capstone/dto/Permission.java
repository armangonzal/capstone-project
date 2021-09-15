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
public class Permission {
    private int permissionId;
    private String permission;

    public int getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(int permissionId) {
        this.permissionId = permissionId;
    }

    public String getPermission() {
        return permission;
    }

    public Permission(String permission) {
        this.permission = permission;
    }
}
