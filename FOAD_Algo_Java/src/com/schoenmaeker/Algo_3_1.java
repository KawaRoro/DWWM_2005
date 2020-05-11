package com.schoenmaeker;

//import java.util.Scanner;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 */

public class Algo_3_1 {
	
	/**
	 * @param args
	 */
	// Exercice
	public static void main(String[] args) {
		
		int[] tabElement = {1, 2, 3, 4, 5};
		int n = 2; // information donnée
		int return_value = 0;
		
		for(int i = 0; i < tabElement.length ; i++ ) {
			if(tabElement[i]==n) {
				return_value = n;
			}
		}
		
		if(return_value == n) {
			System.out.println("L'élément trouvé: "+ n);
		}else {
			System.out.println("Non trouvé");
		}
		
	}
	
}