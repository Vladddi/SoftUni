import java.util.Scanner;

public class p07_Min_Number {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        int minNimber = Integer.MAX_VALUE; // възможно най- малко число
        int sum = 0;

        while (!input.equals("Stop")) {
            int number = Integer.parseInt(input);
            sum -= number;

            if (number < minNimber) {
                minNimber = number;
            }
            input = scanner.nextLine();
        }
        System.out.print(minNimber);
    }
}
