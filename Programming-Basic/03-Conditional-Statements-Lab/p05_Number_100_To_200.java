import java.util.Scanner;

public class p05_Number_100_To_200 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Да се напише програма, която чете цяло число, въведено от потребителя,
        // и проверява дали е под 100, между 100 и 200 или над 200.
        // Да се отпечатат съответно съобщения като в примерите по-долу:
        //      Прочитане на входни данни
        int number = Integer.parseInt(scanner.nextLine());

        // дали е под 100
        if (number < 100){

            System.out.println("Less than 100");

        } else if (number <= 200) {

            System.out.println("Between 100 and 200");
        } else {
            System.out.println("Greater than 200");
        }
//      Пресмятания

//      Печатане на резултата
    }
}
