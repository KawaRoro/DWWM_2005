package com.schoenmaeker;

import java.util.Scanner;
import java.util.Random;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 * //----------------------------------------------------//
 * // Jeu du pendu 
 * // 
 */

public class Algo_3_6 {
	
	public static String[] WORDS = { "CAROTTE" };
	//public static String WORDS;
	
	public static final Random RANDOM = new Random();
	// Nombre de possibilités
	public static final int MAX_ERRORS = 6;
	// Mot à trouver
	private String word_to_find;
	// Lettres trouvées contenu dans un tableau
	private char[] word_found;
	// Le nombre d'erreurs
	private int nb_errors;
	// letters already entered by user
	private ArrayList < String > letters = new ArrayList < > ();
	
	private String nextWordToFind() {
		return WORDS[RANDOM.nextInt(WORDS.length)];
	}
	
	// Nouveau mot
	/*public void newWord(String[] word_write) {
		WORDS = word_write;
	}*/
	
	// Nouvelle partie
	public void newGame() {
		nb_errors = 0;
		letters.clear();
		//word_to_find = WORDS[0];
		word_to_find = nextWordToFind();
		
		word_found = new char[word_to_find.length()];
		
		for (int i = 0; i < word_found.length; i++) {
			word_found[i] = '_';
		}
	}
	
	public boolean wordFound() {
		return word_to_find.contentEquals(new String(word_found));
	}
	
	private void enter(String c) {
		// Si la lettre donnée est contenu dans les possibilités
		if (!letters.contains(c)) {
			
			if (word_to_find.contains(c)) {
				// if so, we replace _ by the character c
				int index = word_to_find.indexOf(c);
		
				while (index >= 0) {
					word_found[index] = c.charAt(0);
					index = word_to_find.indexOf(c, index + 1);
				}
		   } else {
			   nb_errors++;
		   }

			// c est une lettre de plus trouvée
			letters.add(c);
		}
	}
	
	private String wordFoundContent() {
		StringBuilder builder = new StringBuilder();

		for (int i = 0; i < word_found.length; i++) {
			builder.append(word_found[i]);
			
			if (i < word_found.length - 1) {
				builder.append(" ");
			}
		}

		return builder.toString();
	}
	
	/*public void init() {
		try (Scanner input = new Scanner(System.in))
		{
		   
			System.out.println("\nProposer un mot : ");
			WORDS[0] = input.next();
				
		 } // try
	}*/
	
	public void play() {
		try (Scanner input = new Scanner(System.in))
		{
		   
			while (nb_errors < MAX_ERRORS) {
				System.out.println("\nJoueur 2 :\nProposer une lettre : ");
				String str = input.next();
				if (str.length() > 1) {
					str = str.substring(0, 1);
				}
				
				enter(str);
				
				System.out.println("\n" + wordFoundContent());

				if (wordFound()) {
					System.out.println("Joueur 2 :\nGagné !");
					break;
				} else {
					System.out.println("Joueur 2 :\n=> Nombre de coup : " + (MAX_ERRORS - nb_errors));
				}
			}
			
			if (nb_errors == MAX_ERRORS) {
				
				System.out.println("\nJoueur 2 :\nPerdu !");
				System.out.println("Joueur 2 :=> Le mot à trouver est : " + word_to_find);
			}
		 } // try
	}
	
	public static void main(String[] args) {
		Algo_3_6 algo_3_6 = new Algo_3_6();
		
		Scanner scan1 = new Scanner(System.in);
		System.out.println("\nJoueur 1 :\n Entrer un mot à faire deviner :");
		WORDS[0] = scan1.nextLine();
		//scan1.close();
		//newWord(scan1.nextLine());
		
		algo_3_6.newGame();
		algo_3_6.play();
	}
	
}
