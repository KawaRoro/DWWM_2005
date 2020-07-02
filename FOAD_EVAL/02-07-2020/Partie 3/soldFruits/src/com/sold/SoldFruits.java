/**
 * 
 */
package com.sold;

import java.util.Scanner;

import com.sold.Customer;
import com.sold.Fruit;
import com.sold.Basket;
import com.sold.Apple;
import com.sold.Pear;

/**
 * @author Ben
 *
 */
public class SoldFruits {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		
		// Initialisation d'un nouvelle acheteur de fruits avec l'identifiant 1
		Customer customer = new Customer(1);
		
		// Initialisation d'un nouveau fruit soit "Apple" soit "Pear" (en commentaire)
		//Fruit fruit = new Fruit();
		Apple apple = new Apple();
		//Pear pear = new Pear();
		
		// Initialisation d'un nouveau "panier" pour le "client" qui reçoit un premier élément "fruit" soit "Apple" soit "Pear" (en commentaire)
		Basket basket_customer = new Basket(1, apple);
		//Basket basket_customer = new Basket(1, pear);
		
		System.out.println("Panier initialisé");
		
	}

}
