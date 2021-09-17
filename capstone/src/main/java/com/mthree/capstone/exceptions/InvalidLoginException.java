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

public class InvalidLoginException extends Exception {
    public InvalidLoginException() {
        super("Invalid credentials. Cannot be logged in.");
    }
}