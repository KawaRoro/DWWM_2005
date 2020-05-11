package com.schoenmaeker;

// Java program to read some values using Scanner 
// class and print their mean. 
import java.util.Scanner; 
  
public class Test 
{ 
    public static void main(String[] args) 
    { 
        // Declare an object and initialize with 
        // predefined standard input object 
        Scanner sc = new Scanner(System.in); 
  
        // Initialize sum and count of input elements 
        int sum = 0, count = 0; 
  
        // Check if an int value is available 
        while (sc.hasNextLine()) 
        { 
            // Read an int value 
            String num = sc.nextLine(); 
            //sum += num; 
            count++; 
        } 
        //int mean = sum / count; 
        //System.out.println("Mean: " + mean); 
    } 
} 
