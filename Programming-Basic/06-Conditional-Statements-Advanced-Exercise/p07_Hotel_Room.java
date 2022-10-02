import java.util.Scanner;

public class p07_Hotel_Room {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String month = scanner.nextLine();
        int numOfOvernight = Integer.parseInt(scanner.nextLine());

        double pricePerNightsAp = 0.0;
        double pricePerNightsStudio = 0.0;
        double totalSumAp = 0.0;
        double totalSumStudio = 0.0;

        if (month.equals("May") || (month.equals("October"))) {
            pricePerNightsAp = 65;
            pricePerNightsStudio = 50;
            totalSumAp = numOfOvernight * pricePerNightsAp;
            if (numOfOvernight <= 7) {
                totalSumStudio = numOfOvernight * pricePerNightsStudio;
            } else if (numOfOvernight > 7 && numOfOvernight <= 14) {
                totalSumStudio = (numOfOvernight * pricePerNightsStudio) * 0.95;
            } else if (numOfOvernight > 14) {
                totalSumStudio = (numOfOvernight * pricePerNightsStudio) * 0.70;
            }
        }
        if (month.equals("June") || (month.equals("September"))) {
            pricePerNightsAp = 68.70;
            pricePerNightsStudio = 75.20;
            totalSumAp = numOfOvernight * pricePerNightsAp;
            if (numOfOvernight <= 14) {
                totalSumStudio = numOfOvernight * pricePerNightsStudio;
            } else {
                totalSumStudio = (numOfOvernight * pricePerNightsStudio) * 0.80;
            }

        }
        if (month.equals("July") || (month.equals("August"))) {
            pricePerNightsAp = 77;
            pricePerNightsStudio = 76;
            totalSumAp = numOfOvernight * pricePerNightsAp;
            totalSumStudio = numOfOvernight * pricePerNightsStudio;
        }

        if (numOfOvernight > 14) {
            totalSumAp = (numOfOvernight * pricePerNightsAp) * 0.90;

        }
        System.out.printf("Apartment: %.2f lv.%n", totalSumAp);
        System.out.printf("Studio: %.2f lv.", totalSumStudio);
    }
}
