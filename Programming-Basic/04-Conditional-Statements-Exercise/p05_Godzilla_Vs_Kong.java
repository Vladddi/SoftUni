import java.util.Scanner;

public class p05_Godzilla_Vs_Kong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//Ред 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
//Ред 2.	Брой на статистите – цяло число в интервала [1 … 500]
//Ред 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
        double budget = Double.parseDouble(scanner.nextLine());
        int peopleCount = Integer.parseInt(scanner.nextLine());
        double clothePricePerPerson = Double.parseDouble(scanner.nextLine());

//        Сума за декор: 10% от 20000 = 2000 лв.
        double decorPrice = budget * 0.10;
//Сума за облекло: 120 * 55.5 = 6660 лв.
        double clothePrice = clothePricePerPerson * peopleCount;
        double discount = 0;
//Обща сума за филма: 2000 + 6660 = 8660 лв.
//20000 – 8660 = 11340 лева остават.

        if (peopleCount > 150) {
            discount = clothePrice * 0.1;
            clothePrice = clothePrice - discount;

        }

        double totalExpenses = clothePrice + decorPrice;

        String output = "";

        if (budget >= totalExpenses) {
            output = String.format("Action!%n" +
                    "Wingard starts filming with %.2f leva left.", budget - totalExpenses);
        } else {
            output = String.format("Not enough money!%n" +
                    "Wingard needs %.2f leva more.", totalExpenses - budget);
        }
        System.out.println(output);
    }
}
