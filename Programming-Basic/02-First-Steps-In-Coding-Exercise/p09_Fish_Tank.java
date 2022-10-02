import java.util.Scanner;

public class p09_Fish_Tank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lengthInCm = Integer.parseInt(scanner.nextLine());
        int widthInCm = Integer.parseInt(scanner.nextLine());
        int heightInCm = Integer.parseInt(scanner.nextLine());
        double percentage = Double.parseDouble(scanner.nextLine());

        int aquariumValue = lengthInCm * widthInCm * heightInCm;
        double valueInLiters = aquariumValue * 0.001;
        double busySpaces = percentage / 100;

        double neededLiters = valueInLiters * (1 - busySpaces);

        System.out.println(neededLiters);
    }
}
