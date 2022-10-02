import java.util.Scanner;

public class p05_Supplies_for_School {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        /*
•	Пакет химикали - 5.80 лв.
•	Пакет маркери - 7.20 лв.
•	Препарат - 1.20 лв (за литър)
         */

        int pensPackets = Integer.parseInt(scanner.nextLine());
        int markersPackets = Integer.parseInt(scanner.nextLine());
        int litersPrep = Integer.parseInt(scanner.nextLine());
        double discountPercent = Double.parseDouble(scanner.nextLine());

        double pricePens = pensPackets * 5.80;
        double priceMarkers = markersPackets * 7.20;
        double pricePerPrep = litersPrep * 1.20;

        double sum = pricePens + priceMarkers + pricePerPrep;

        double discount = discountPercent / 100;
        double totalSum = sum - (sum * discount);
        System.out.println(totalSum);
    }
}
