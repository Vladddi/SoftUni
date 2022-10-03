import java.util.Scanner;

public class p03_Sum_Prime_Non_Prime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //първи ред от конзолата - на базата на него преценяваме другите.
        String line = scanner.nextLine();

        int primeSum = 0;
        int nonPrimeSum = 0;

        while (!line.equals("stop")) {  //ще получаваме само числа
            boolean isNonPrime = false; //трябва да е в цикъла, иначе 1нъж щом стане true не се връща на false

            int number = Integer.parseInt(line);  //прочитаме string и го парсваме към int
            //System.out.println(number);
            if (number < 0) {
                //ако числото е отрицателно, подмини и продължи.
                System.out.println("Number is negative.");
                line = scanner.nextLine();
                continue;
            }
            for (int i = 2; i < number; i++) {  //с този цикъл проверяваме дали е четно или не
                if (number % i == 0) {
                    isNonPrime = true;
                    break;
                }
            } // веднага правим проверка
            if (isNonPrime) {
                nonPrimeSum += number;
            } else {
                primeSum += number;
            }
            // седващ ред
            line = scanner.nextLine();
        }
        System.out.printf("Sum of all prime numbers is: %d%n", primeSum);
        System.out.printf("Sum of all non prime numbers is: %d", nonPrimeSum);
    }
}
