import java.util.Scanner;

public class p08_Number_Sequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int maxNumber = Integer.MIN_VALUE;
        int minNumber = Integer.MAX_VALUE;

        for (int i = 1; i <= n; i++){
            int number = Integer.parseInt(scanner.nextLine());
            // check for maxNumber
            if (number > maxNumber){
                maxNumber = number;
            }
            // check for minNumber
            if (number < minNumber){
                minNumber = number;
            }
        }
        System.out.printf("Max number: %d%n", maxNumber);
        System.out.printf("Min number: %d", minNumber);
    }
}
