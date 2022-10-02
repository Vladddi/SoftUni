import java.util.Scanner;

public class p03DepositCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //       Прочитане на входни данни

//        1.	Депозирана сума – реално число в интервала [100.00 … 10000.00];
        double depositSum = Double.parseDouble(scanner.nextLine());
//        2.	Срок на депозита(в месеци) – цяло число в интервала [1…12];
        int months = Integer.parseInt(scanner.nextLine());
//        3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00];
        double interestRate = Double.parseDouble(scanner.nextLine());

        //      Пресмятания
//  сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
        double interestPerMonth = (depositSum * interestRate / 100) / 12;
//        5.7% = 5.7 / 100 = 0.57
//        System.out.println(interest);
        double result = depositSum + months * interestPerMonth;

//      Печатане на резултата
        System.out.println(result);

    }
}
