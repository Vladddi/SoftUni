import java.util.Scanner;

public class p02RadiansToDegrees {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//       Прочитане на входни данни
        double radians = Double.parseDouble(scanner.nextLine());

//      Пресмятания

//        градус = радиан * 180 / пи

        double degrees = radians * 180 / Math.PI ;


//      Печатане на резултата
        System.out.println(degrees);

    }
}
