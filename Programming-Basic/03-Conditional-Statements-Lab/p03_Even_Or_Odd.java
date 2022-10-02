import java.util.Scanner;

public class p03_Even_Or_Odd {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //      Прочитане на входни данни
        int number = Integer.parseInt(scanner.nextLine());

//      Пресмятания
        if (number % 2 == 0){
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
//      Печатане на резултата

    }
}
