import java.util.Scanner;

public class p10_Odd_Even_Sum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int oddNum = 0;
        int evenNum = 0;

        for (int i = 1; i <= n; i++) {
            int num1 = Integer.parseInt(scanner.nextLine());
            if (i % 2 == 0){
                evenNum += num1;
            } else {
                oddNum += num1;
            }
        }
        if (oddNum == evenNum){
            System.out.printf("Yes%n" + "Sum = %d", oddNum);
        } else {
            System.out.printf("No%n" + "Diff = %d", Math.abs(oddNum - evenNum));
        }
    }
}
