import java.util.Scanner;

public class p07_Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int videoCardCount = Integer.parseInt(scanner.nextLine());
        int processorsCount = Integer.parseInt(scanner.nextLine());
        int ramCount = Integer.parseInt(scanner.nextLine());

        double videoCardsSum = videoCardCount * 250;
        double processorPrice = videoCardsSum * 0.35;
        double processorSum = processorsCount * processorPrice;

        double ramPrice = videoCardsSum * 0.1;
        double ramSum = ramCount * ramPrice;

        double totalSum = videoCardsSum + processorSum + ramSum;

        double discount = 0;
        if (videoCardCount > processorsCount) {
            discount = totalSum * 0.15;
        }

        totalSum = totalSum - discount;

        if (budget >= totalSum) {
            System.out.printf("You have %.2f leva left!", budget - totalSum);
        } else {
            System.out.printf("Not enough money! You need %.2f leva more!", totalSum - budget);
        }
    }
}
