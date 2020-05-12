package com.schoenmaeker;

import java.util.Scanner;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 * //----------------------------------------------------//
 * // Recherche dichotomique
 * // 
 */

public class Algo_3_7 {
	
	// Fonction récursive de recherche dans un tableau d'éléments
	static int recherche_rec (String[] t, String val, int g, int d)
	{
		if (g >= d)
		{
			if (val.compareTo (t[g]) == 0) return g ;
			if (g > 0 && val.compareTo (t[g-1]) == 0) return g - 1 ;
			return -1 ;
		}

		// Ici, d > g
		int m = (d + g) / 2 ;
		if (val.compareTo (t[m]) <= 0) return recherche_rec (t, val, g, m) ;
			return recherche_rec (t, val, m+1, d) ;
	}

	// Init fonction récursive de recherche
	static int recherche (String[] t, String val)
	{
		return recherche_rec (t, val, 0, t.length - 1) ;
	}
	
	public static void main(String[] args) {

		String[] tab_name = {"agathe","berthe","chloé","cunégonde","olga","raymonde","sidonie"};
		
		int i = recherche (tab_name, "olga") ;
		System.out.println ("ID -> " + i ) ;
		
	}
}
