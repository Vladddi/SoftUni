import java.util.Scanner;

public class p05_Special_Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//        Да се напише програма, която чете n-на брой цели числа,
//        подадени от потребителя, и проверява дали сумата от числата
//        на четни позиции е равна на сумата на числата на нечетни позиции.
//        При равенство да се отпечатат два реда: "Yes"
//        и на нов ред "Sum = " + сумата; иначе да се отпечата "No"
//        и на нов ред "Diff = " + разликата.
//        Разликата се изчислява по абсолютна стойност.
        int n = Integer.parseInt(scanner.nextLine());

        //цифра на хиляди
        for (int i = 1; i <= 9; i++) {
            // цифра на хиляди
            for (int j = 1; j <= 9; j++) {
                // цифра на десетиците
                for (int k = 1; k <= 9; k++) {
                    // цифра на единиците
                    for (int l = 1; l <= 9; l++) {

                        if (n % i == 0 && n % j == 0 && n % k == 0 && n % l == 0) {

                            System.out.printf("%d%d%d%d ", i, j, k, l);
                        }
                    }
                }
            }
        }
    }
}
