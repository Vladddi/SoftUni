import java.util.Scanner;

public class p06_Cinema_Tickets {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        String filmName = "";

        double student = 0;
        double standart = 0;
        double kid = 0;
        double totalTickets = 0;

        while (!"Finish".equals(filmName = read.nextLine())) {

            int freeSpaces = Integer.parseInt(read.nextLine());

            double human = 0;
            for (int i = 0; i < freeSpaces; i++) {

                String type = read.nextLine();

                switch (type) {
                    case "student":
                        student++;
                        break;
                    case "standard":
                        standart++;
                        break;
                    case "kid":
                        kid++;
                        break;
                }
                if (type.equals("End") || human >= freeSpaces) {
                    break;
                }
                human++;
                totalTickets++;
            }
            System.out.printf("%s - %.2f%% full.\n", filmName, (human / freeSpaces) * 100.00);
        }
        System.out.printf("Total tickets: %.0f\n", totalTickets);
        System.out.printf("%.2f%% student tickets.\n", (student / totalTickets) * 100);
        System.out.printf("%.2f%% standard tickets.\n", (standart / totalTickets) * 100);
        System.out.printf("%.2f%% kids tickets.\n", (kid / totalTickets) * 100);
    }
}
