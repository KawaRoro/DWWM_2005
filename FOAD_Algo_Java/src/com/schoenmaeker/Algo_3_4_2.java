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

public class Algo_3_4_2 {
	
	/**
	 * @param args
	 */
	// Exercice
	public static void main(String[] args) {
		
		String[] animals = {"AGNEAU", "AIGLE", "BICHE", "BREBIS", "BUFFLE", "CAMELEON", "ZEBRE", "FAUCON", "GOELAND", "LAPIN", "MANCHOT", "DINDE", "ELEPHANT"};
		
		// Affichage désordre
		for (int i = 0; i < animals.length; i++) {
		    System.out.print(animals[i] + " ");
		}
		
		System.out.println(" ");
		
		// Effet tableau
		for (int i = 0; i < animals.length; i++) {
		    for (int j = 0; j < animals.length; j++) {
		    	
		    	int comparisonResult = animals[i].compareTo(animals[j]);
		    	
		    	if(comparisonResult < 0){ // précédent à remplacer avec suivant -> équivalent de animals[i] < animals[j]
		    		String temp = animals[i];
		            animals[i] = animals[j];
		            animals[j] = temp;
		    	}else if(comparisonResult > 0){ // l'ordre est ok on ne fait rien
		    		
		    		
		    	}else { // Egal -> pour tests
		    		//System.out.println("equals " + animals[i] + " and " + animals[j]);
		    	}
		       
		    }
		}
		
		// Affichage croissant
		for (int i = 0; i < animals.length; i++) {
		    System.out.print(animals[i] + " ");
		}
		
		System.out.println(" ");
		
		// Affichage décroissant
		for (int i = animals.length - 1; i >= 0; i--) {
		    System.out.print(animals[i] + " ");
		}
		
	}
	
}