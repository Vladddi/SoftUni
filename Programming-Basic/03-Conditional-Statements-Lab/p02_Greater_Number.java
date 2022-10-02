import java.util.Scanner;

public class p02_Greater_Number {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //      Прочитане на входни данни
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
//      Пресмятания
        // a > b

        if (a > b) {
            System.out.println(a);
            // b > a
        } else {
            System.out.println(b);

        }
//      Печатане на резултата

    }
}
