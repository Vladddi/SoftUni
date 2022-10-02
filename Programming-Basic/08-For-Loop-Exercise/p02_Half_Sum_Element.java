import java.util.Scanner;

public class p02_Half_Sum_Element {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int maxNumber = Integer.MIN_VALUE; // възможно най- малко число
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            int number = Integer.parseInt(scanner.nextLine());

            sum += number;

            if (number > maxNumber) {
                maxNumber = number;
            }
        }
        sum -= maxNumber;

        if ( sum == maxNumber){
            System.out.printf("Yes%nSum = %d", sum);

        } else {

            System.out.printf("No%nDiff = %d", Math.abs(sum - maxNumber));
        }
    }
}
