/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package capstone.src.main.java.com.mthree.capstone.ui;

import java.time.LocalDate;
import java.util.Scanner;

/**
 *
 * @author ArmandoGonzalez
 */
public interface View {
    
	public static Scanner in = new Scanner(System.in);
	
	public int getInt(int min, int max);
	
	public String getString();
	
	public LocalDate getLD();
}
