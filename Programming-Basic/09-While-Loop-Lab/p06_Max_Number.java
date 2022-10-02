import java.util.Scanner;

public class p06_Max_Number {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();


        int maxNumber = Integer.MIN_VALUE; // възможно най- малко число
        int sum = 0;

        while (!input.equals("Stop")) {
            int number = Integer.parseInt(input);
            sum += number;

            if (number > maxNumber) {
                maxNumber = number;
            }
            input = scanner.nextLine();
        }
        System.out.print(maxNumber);
    }
}
