/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.capstone.exceptions;

/**
 *
 * @author ArmandoGonzalez
 */

public class NoSuchBlogPostException extends Exception {
    public NoSuchBlogPostException(String search) {
        super(search + " is not a Blog Post. Data cannot be retrieved.");
    }
}