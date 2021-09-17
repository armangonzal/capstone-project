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
public class CapstoneException  {
	
	//This one was a test exception
	public class DataAccessException extends Exception {
		public DataAccessException(String search, String catagorey) {
			super(search + " is not an available " + catagorey + ". Data cannot be retrieved.");
		}
	}
	
	public class NoSuchBlogPostException extends Exception { 
	    public NoSuchBlogPostException(String search) {
	        super(search + " is not a Blog Post. Data cannot be retrieved.");
	    }
	}
	
	public class NoSuchAuthorException extends Exception {
	    public NoSuchAuthorException(String search) {
	        super(search + " is not an Author. Data cannot be retrieved.");
	    }
	}
	
	public class InvalidLoginException extends Exception {
		public InvalidLoginException() {
			super("Invalid credentials. Cannot be logged in.");
		}
	}
}
