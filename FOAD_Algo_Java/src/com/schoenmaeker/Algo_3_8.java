package com.schoenmaeker;

import java.util.Scanner;

/**
 * @author Schoenmaeker
 * @version 0.0.1
 * @since 2020
 *
 * //----------------------------------------------------//
 * // Calcul du Plus Grand Commun Diviseur
 * // 
 */

public class Algo_3_8 {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Donnez un premier nombre : ");
		int n1 = sc.nextInt();
		
		System.out.println("Donnez un deuxième nombre : ");
		int n2 = sc.nextInt();
		
		sc.close();
		
		//int n1 = 60, n2 = 36;
        while (n1 != n2) {
          if(n1 > n2)
                n1 = n1 - n2;
            else
                n2 = n2 - n1;
        }
        System.out.printf("PGCD = %d", n2);
		
	}
}
