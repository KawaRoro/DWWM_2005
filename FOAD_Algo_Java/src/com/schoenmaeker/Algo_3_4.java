package com.schoenmaeker;

//import java.util.Scanner;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 * //----------------------------------------------------//
 * // Dénombrer les lettres de l'alphabet dans un tableau
 * // 
 */

public class Algo_3_4 {
	
	/**
	 * @param args
	 */
	// Exercice
	public static void main(String[] args) {
		
		int[] array = {2, 3, 4, 5, 3, 4, 2, 34, 2, 56, 98, 32, 54};
		
		// Affichage désordre
		for (int i = 0; i < array.length; i++) {
		    System.out.print(array[i] + " ");
		}
		
		System.out.println(" ");
		
		// Effet tableau
		for (int i = 0; i < array.length; i++) {
		    for (int j = 0; j < array.length; j++) {
		        if (array[i] < array[j]) {
		            int temp = array[i];
		            array[i] = array[j];
		            array[j] = temp;
		        }
		    }
		}
		
		// Affichage croissant
		for (int i = 0; i < array.length; i++) {
		    System.out.print(array[i] + " ");
		}
		
		System.out.println(" ");
		
		// Affichage décroissant
		for (int i = array.length - 1; i >= 0; i--) {
		    System.out.print(array[i] + " ");
		}
		
	}
	
}