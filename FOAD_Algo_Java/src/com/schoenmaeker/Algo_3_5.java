package com.schoenmaeker;

import java.util.Scanner;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 * //----------------------------------------------------//
 * // Palindrome
 * // 
 */

public class Algo_3_5 {
		
	public static void main(String[] args) {
		char reponse = ' ';
		Scanner sc = new Scanner(System.in);
		//------------------//
		do{
			System.out.println("Donnez un mot pour vérifier si c'est un palindrome : ");
			String word = sc.nextLine();
			
			if (palindrom(word)) {
		          System.out.println("'"+word + "' est un palindrome");
			} else {
		          System.out.println("'"+word + "' n'est pas un palindrome");
			}
			

			do{
			    System.out.println("Voulez-vous réessayer ? (O/N)");
			    reponse = sc.nextLine().charAt(0);
			} while(reponse != 'O' && reponse != 'N' && reponse != '0' && reponse != 'o' );
			
		} while (reponse == 'O' || reponse == '0' || reponse == 'o');
		
		sc.close();
	}
	
	public static boolean palindrom(String word){
		
       int i=0, longueur= word.length()-1;
       
       boolean check=true;
       String wordLower = word.toLowerCase();
       
       
        while(i<longueur/2 && check){
        	
			if(wordLower.charAt(i) == wordLower.charAt(longueur-i)) {
				check = true;
			} else {
				check = false;
			}
			i++;
        }
        return check;
	}
	
}
