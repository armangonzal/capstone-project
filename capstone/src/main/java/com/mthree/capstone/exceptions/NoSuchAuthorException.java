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

public class NoSuchAuthorException extends Exception {
    public NoSuchAuthorException(String search) {
        super(search + " is not an Author. Data cannot be retrieved.");
    }
}