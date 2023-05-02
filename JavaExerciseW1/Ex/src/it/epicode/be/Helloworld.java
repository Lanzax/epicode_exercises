package it.epicode.be;

public class Helloworld {

	
		
		public static void main(String[] args) {
			System.out.println("This is my first Epicode Java Project!");
			   int num1 = 3;
			   int num2 = 7;
			   int prodotto = moltiplicaNumeri(num1, num2);
			   System.out.println("Il prodotto di " + num1 + " e " + num2 + " è " + prodotto);
			}
		
public static int moltiplicaNumeri(int num1, int num2) {
	   int prodotto = num1 * num2;
	   return prodotto;
	}
}


