import java.util.Scanner;

public class p02_Equal_Sums_Even_Odd_Position {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());

        //123456 =>
        for (int i = num1; i <= num2; i++) { //1
            int number = i; //2
            int evenSum = 0; //chetna poziciq  3
            int oddSum = 0; //4

            for (int j = 6; j >= 1; j--) {  //5

                int digit = number % 10; //взимаме последната цифра
                number = number / 10; //премахваме последната цифра
                // - целочислено деление int, ако е double делението ще стане ",число"-12345,6.
                if (j % 2 == 0) {
                    evenSum += digit;
                } else {
                    oddSum += digit;
                }
            }
            if (evenSum == oddSum) {
                System.out.print(i + " ");
            }
        }
    }
}
