import java.util.Scanner;

public class p07_Food_Delivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countChickenManu = Integer.parseInt(scanner.nextLine());
        int countFishManu = Integer.parseInt(scanner.nextLine());
        int countVeganManu = Integer.parseInt(scanner.nextLine());

        double priceChickenMenu = countChickenManu * 10.35;
        double priceFishManu = countFishManu * 12.40;
        double priceVeganManu = countVeganManu * 8.15;

        double totalPriceMenu = priceChickenMenu + priceFishManu + priceVeganManu;
        double priceDesert = totalPriceMenu * 0.2;

        double totalPricePlusDelivery = totalPriceMenu + priceDesert + 2.5;

        System.out.println(totalPricePlusDelivery);
    }
}
