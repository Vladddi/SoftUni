import java.util.Scanner;

public class p01USDToBGN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //      Прочитане на входни данни
        double USD = Double.parseDouble(scanner.nextLine());

//      Пресмятания
        double bgn = USD * 1.79549;

//      Печатане на резултата
        System.out.println(bgn);
    }
}
