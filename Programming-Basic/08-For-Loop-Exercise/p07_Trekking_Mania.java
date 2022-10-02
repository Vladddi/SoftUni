import java.util.Scanner;

public class p07_Trekking_Mania {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countClimber = Integer.parseInt(scanner.nextLine());

        int totalCountClimber = 0;
        double musalla = 0;
        double montBlanc = 0;
        double kilimanjaro = 0;
        double k2 = 0;
        double everest = 0;

        for (int i = 0; i < countClimber; i++) {
            int countOfTheGroup = Integer.parseInt(scanner.nextLine());
            totalCountClimber += countOfTheGroup;

            if (countOfTheGroup <= 5) {
                musalla += countOfTheGroup;
            } else if (countOfTheGroup >= 6 && countOfTheGroup <= 12) {
                montBlanc += countOfTheGroup;
            } else if (countOfTheGroup >= 13 && countOfTheGroup <= 25) {
                kilimanjaro += countOfTheGroup;
            } else if (countOfTheGroup >= 26 && countOfTheGroup <= 40) {
                k2 += countOfTheGroup;
            } else if (countOfTheGroup >= 41) {
                everest += countOfTheGroup;
            }
        }

        System.out.printf("%.2f%%%n", (musalla / totalCountClimber) * 100);
        System.out.printf("%.2f%%%n", (montBlanc / totalCountClimber) * 100);
        System.out.printf("%.2f%%%n", (kilimanjaro / totalCountClimber) * 100);
        System.out.printf("%.2f%%%n", (k2 / totalCountClimber) * 100);
        System.out.printf("%.2f%%", (everest / totalCountClimber) * 100);

    }
}
