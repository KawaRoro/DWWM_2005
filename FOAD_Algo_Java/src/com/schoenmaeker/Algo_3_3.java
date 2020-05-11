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

public class Algo_3_3 {
	
	/**
	 * @param args
	 */
	// Exercice
	public static void main(String[] args) {
		
		String str_120_caract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus consequat elementum. Pellentesque pulvinar tellus.";
		int length_str = str_120_caract.length();
		String[] tab_alphabet = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
		int length_tab_alphabet = tab_alphabet.length;
		int[] tab_cpt_occ = new int[26];
		
		if(length_str >= 120) {
			
			// Deux boucles une pour le texte à lire et une autre pour l'alhpabet à vérifier
			for(int i = 0; i < length_str ; i++ ) {
				char charAtNumber = str_120_caract.charAt(i);
				
				for(int f = 0; f < length_tab_alphabet ; f++ ) {
					
					if(tab_alphabet[f].equals(new String(new char[]{charAtNumber}))) {
						tab_cpt_occ[f] = tab_cpt_occ[f]+1;
						//System.out.println(tab_cpt_occ[f]);
					}
				}
				
				
			}
			
			// Affichage du compte rendu
			for(int e = 0; e < length_tab_alphabet ; e++ ) {
				
				System.out.println( "La lettre " +tab_alphabet[e] + " est présent " + tab_cpt_occ[e] + " fois");
				
			}
		}
		
	}
	
}