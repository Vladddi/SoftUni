import java.util.Scanner;

public class p06_Operations_Between_Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//•	N1 – цяло число в интервала [0...40 000]
//•	N2 – цяло число в интервала [0...40 000]
//•	Оператор – един символ измеду: „+“, „-“, „*“, „/“, „%“
        int N1 = Integer.parseInt(scanner.nextLine());
        int N2 = Integer.parseInt(scanner.nextLine());
        String operator = scanner.nextLine();
        int result = 0;
        String evenOrOdd = "";


        switch (operator) {
            case "+":
                result = N1 + N2;
                if (result % 2 == 0) {
                    evenOrOdd = "even";
                } else {
                    evenOrOdd = "odd";
                }
                System.out.printf("%d %s %d = %d - %s", N1, operator, N2, result, evenOrOdd);
                break;

            case "-":
                result = N1 - N2;
                if (result % 2 == 0) {
                    evenOrOdd = "even";
                } else {
                    evenOrOdd = "odd";
                }
                System.out.printf("%d %s %d = %d - %s", N1, operator, N2, result, evenOrOdd);
                break;

            case "*":
                result = N1 * N2;
                if (result % 2 == 0) {
                    evenOrOdd = "even";
                } else {
                    evenOrOdd = "odd";
                }
                System.out.printf("%d %s %d = %d - %s", N1, operator, N2, result, evenOrOdd);
                break;

            case "/":

                if (N2 == 0) {
                    System.out.printf("Cannot divide %d by zero", N1);

                } else {

                    double divideResult = 1.0 * N1 / N2;
                    System.out.printf("%d / %d = %.2f", N1, N2, divideResult);
                }
                break;

            case "%":
                if (N2 == 0) {
                    System.out.printf("Cannot divide %d by zero", N1);

                } else {

                    result = N1 % N2;
                    System.out.printf("%d %% %d = %d", N1, N2, result);
                }
                break;
        }
    }
}
