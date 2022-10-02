import java.util.Scanner;

public class p08_Tennis_Ranklist {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countTournaments = Integer.parseInt(scanner.nextLine());
        double startingPoints = Double.parseDouble(scanner.nextLine());
        double countWinner = 0;
        double winnerPoint = 0;

        for (int i = 0; i < countTournaments; i++) {
            String type = scanner.nextLine();

            switch (type) {
                case "F":
                    winnerPoint += 1200;
                    break;
                case "SF":
                    winnerPoint += 720;
                    break;
                case "W":
                    countWinner++;
                    winnerPoint += 2000;
                    break;
            }
        }

        double totalPoints = startingPoints + winnerPoint;
        double averagePoints = Math.floor(winnerPoint / countTournaments);
        double percentWinnersMach = (countWinner / countTournaments) * 100;

        System.out.printf("Final points: %.0f%n", totalPoints);
        System.out.printf("Average points: %.0f%n", averagePoints);
        System.out.printf("%.2f%%", percentWinnersMach);

    }
}
