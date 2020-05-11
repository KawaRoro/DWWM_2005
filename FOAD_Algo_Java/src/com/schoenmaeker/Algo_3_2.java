package com.schoenmaeker;

//import java.util.Scanner;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 * //----------------------------------------------------//
 * // Rechercher une lettre dans une chaine de caract�res
 * // Voir FOAD_Algo
 */

public class Algo_3_2 {
	
	/**
	 * @param args
	 */
	// Exercice
	public static void main(String[] args) {
		
		String str = "abc.";
		int cpt_occ = 0; // compteur occurences
		int longeur_str = str.length();
		char letter;
		
		for(int i = 0; i < longeur_str ; i++ ) {
			letter = str.charAt(i);
			if(letter == 'a') {
				cpt_occ++;
			}
		}
		
		if(str == ".") {
			System.out.println("LA CHAINE EST VIDE");
		}else {
			System.out.println("Le nombre de a contenu dans la chaine est de "+cpt_occ);
		}
		
	}
	
}