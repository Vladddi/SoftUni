import java.util.Scanner;

public class p06_Oscars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String actorName = scanner.nextLine();
        double academyPoints = Double.parseDouble(scanner.nextLine());
        int juryCount = Integer.parseInt(scanner.nextLine());

        String juryName = "";
        double juryPoint = 0;
        boolean isNominated = false;

        for (int i = 0; i < juryCount; i++) {
            juryName = scanner.nextLine();
            juryPoint = Double.parseDouble(scanner.nextLine());

            academyPoints += (juryName.length() * juryPoint) / 2.0;
            if (academyPoints > 1250.5) {
                isNominated = true;
                break;
            }
        }

        if (isNominated) {
            System.out.printf("Congratulations, %s got a nominee for leading role with %.1f!", actorName, academyPoints);
        } else {
            System.out.printf("Sorry, %s you need %.1f more!", actorName, 1250.5 - academyPoints);
        }
    }
}
