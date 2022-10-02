import java.util.Scanner;

public class p05_Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//•	Първи ред – Бюджет, реално число в интервала [10.00...5000.00].
//•	Втори ред –  Един от двата възможни сезона: „summer” или “winter”
        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();

        Double expenses = 0.0;
        String destination = "";
        String place = "";

        if (budget <= 100) {
            destination = "Bulgaria";

            if (season.equals("summer")) {
                expenses = budget * 0.30;
                place = "Camp";
            } else if (season.equals("winter")) {
                expenses = budget * 0.70;
                place = "Hotel";
            }

        } else if (budget <= 1000) {
            destination = "Balkans";

            if (season.equals("summer")) {
                expenses = budget * 0.40;
                place = "Camp";
            } else if (season.equals("winter")) {
                expenses = budget * 0.80;
                place = "Hotel";
            }

        } else {
            destination = "Europe";

            expenses = budget * 0.9;
            place = "Hotel";
        }
        System.out.printf("Somewhere in %s%n", destination);
        System.out.printf("%s - %.2f", place, expenses);
    }
}
