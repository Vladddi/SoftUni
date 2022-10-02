import java.util.Scanner;

public class p03_New_House {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//        От конзолата се четат 3 реда:
//•	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"//•	Брой цветя - цяло число в интервала [10…1000]
//•	Бюджет - цяло число в интервала [50…2500]
        String flowers = scanner.nextLine();
        int numFlowers = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());

        double expenses = 0.0;

        // proverka po vid cvetq
        switch (flowers) {
            case "Roses":
                expenses = numFlowers * 5.0;

                if (numFlowers > 80) {
                    expenses *= 0.90;
                }

                break;
            case "Dahlias":
                expenses = numFlowers * 3.80;

                if (numFlowers > 90) {
                    expenses *= 0.85;
                }

                break;
            case "Tulips":
                expenses = numFlowers * 2.80;

                if (numFlowers > 80) {
                    expenses *= 0.85;
                }

                break;
            case "Narcissus":
                expenses = numFlowers * 3.0;

                if (numFlowers < 120) {
                    expenses *= 1.15;
                }

                break;
            case "Gladiolus":
                expenses = numFlowers * 2.5;

                if (numFlowers < 80) {
                    expenses *= 1.20;
                }
                break;
        }
        if (budget >= expenses) {
            System.out.printf("Hey, you have a great garden with %d " +
                    "%s and %.2f leva left.", numFlowers, flowers, budget - expenses);
        } else {
            System.out.printf("Not enough money, you need %.2f leva more.", expenses - budget);
        }
    }
}
