import java.util.Scanner;

public class p09_Ski_Trip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        String typeRoom = scanner.nextLine();
        String typeGrade = scanner.nextLine();

        int nights = days - 1;
        double pricePerNight = 0;
        double discount = 0;
        double price = 0;

        switch (typeRoom) {
            case "room for one person":
                pricePerNight = 18.00;
                price = nights * pricePerNight;
                break;
            case "apartment":
                pricePerNight = 25.00;
                double priceBeforeDiscount1 = nights * pricePerNight;
                if (nights < 10) {
                    discount = priceBeforeDiscount1 * 0.3;
                    price = priceBeforeDiscount1 - discount;
                } else if (nights >= 10 && nights <= 15) {
                    discount = priceBeforeDiscount1 * 0.35;
                    price = priceBeforeDiscount1 - discount;
                } else {
                    discount = priceBeforeDiscount1 * 0.5;
                    price = priceBeforeDiscount1 - discount;
                }
                break;
            case "president apartment":
                pricePerNight = 35.00;
                double priceBeforeDiscount2 = nights * pricePerNight;
                if (nights < 10) {
                    priceBeforeDiscount2 = nights * pricePerNight;
                    discount = priceBeforeDiscount2 * 0.1;
                    price = priceBeforeDiscount2 - discount;
                } else if (nights >= 10 && nights <= 15) {
                    priceBeforeDiscount2 = nights * pricePerNight;
                    discount = priceBeforeDiscount2 * 0.15;
                    price = priceBeforeDiscount2 - discount;
                } else {
                    priceBeforeDiscount2 = nights * pricePerNight;
                    discount = priceBeforeDiscount2 * 0.2;
                    price = priceBeforeDiscount2 - discount;
                }
                break;
        }

        double totalSum = 0;
        if (typeGrade.equals("positive")) {
            totalSum = price * 1.25;
        } else {
            totalSum = price * 0.9;
        }

        System.out.printf("%.2f", totalSum);
    }
}
