import java.util.Scanner;

public class p04_Toy_Shop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double excursionPrice = Double.parseDouble(scanner.nextLine());
        int puzzlesCount = Integer.parseInt(scanner.nextLine());
        int talkingDollsCount = Integer.parseInt(scanner.nextLine());
        int teddyBearsCount = Integer.parseInt(scanner.nextLine());
        int minionsCount = Integer.parseInt(scanner.nextLine());
        int trucksCount = Integer.parseInt(scanner.nextLine());

        double sum = (puzzlesCount * 2.60)
                + (talkingDollsCount * 3)
                + (teddyBearsCount * 4.10)
                + (minionsCount * 8.20)
                + (trucksCount * 2);

        int toysCount = puzzlesCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount;

        double discount = 0;

        if (toysCount >= 50) {
            discount = sum * 0.25;
        }

        double totalPrice = sum - discount;
        double rent = totalPrice * 0.1;
        double profit = totalPrice - rent;

        if (profit >= excursionPrice) {
            System.out.printf("Yes! %.2f lv left.", profit - excursionPrice);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.", excursionPrice - profit);
        }
    }
}
