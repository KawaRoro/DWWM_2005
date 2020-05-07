package com.schoenmaeker;

import java.util.Scanner;

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
	// Exercice le périmétre d'un rectangle
	public static void main(String[] args) {
		
		//int x, y;
		int réel;
		
		//boolean binaire = false;
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Entrer votre premier nombre:");
		int x = sc.nextInt();
		System.out.println("Vous avez saisi : "+ x);
		
		System.out.println("Entrer votre deuxième nombre:");
		int y = sc.nextInt();
		System.out.println("Vous avez saisi : "+ y);
		sc.close();
		
		réel = (x + y)/2;
		
		System.out.println("La moyenne des deux nombres est : "+ réel);
		
	}
	
}