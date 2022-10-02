import java.util.Scanner;

public class p05_Small_Shop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String product = scanner.nextLine();
        String city = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        //град / продукт	coffee	water	beer	sweets	peanuts
        //Sofia         	0.50	0.80	1.20	1.45	1.60

        double price = 0.0;

        switch (city) {
            case "Sofia":
                if (product.equals("coffee")) {
                    price = 0.50;
                } else if (product.equals("water")) {
                    price = 0.80;
                } else if (product.equals("beer")) {
                    price = 1.20;
                } else if (product.equals("sweets")) {
                    price = 1.45;
                } else if (product.equals("peanuts")) {
                    price = 1.60;
                }
                break;

            //Plovdiv	        0.40	0.70	1.15	1.30	1.50
            case "Plovdiv":
                if (product.equals("coffee")) {
                    price = 0.40;
                } else if (product.equals("water")) {
                    price = 0.70;
                } else if (product.equals("beer")) {
                    price = 1.15;
                } else if (product.equals("sweets")) {
                    price = 1.30;
                } else if (product.equals("peanuts")) {
                    price = 1.50;
                }
                break;

            //Varna	            0.45	0.70	1.10	1.35	1.55
            case "Varna":
                if (product.equals("coffee")) {
                    price = 0.45;
                } else if (product.equals("water")) {
                    price = 0.70;
                } else if (product.equals("beer")) {
                    price = 1.10;
                } else if (product.equals("sweets")) {
                    price = 1.35;
                } else if (product.equals("peanuts")) {
                    price = 1.55;
                }
                break;
        }
        double finalPrice = quantity * price;
        System.out.println(finalPrice);

    }
}
