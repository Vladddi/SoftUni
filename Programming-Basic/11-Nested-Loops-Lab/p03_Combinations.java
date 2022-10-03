import java.util.Scanner;

public class p03_Combinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int validCombinatoinCount = 0;
//Генерираме всички комбинации от 3 числа, като първата е:
//0+0+0=0, но понеже не е равна на 25, продължаваме:
//0+0+1=1 – също не е 25 и т.н.
//Стигаме до първата валидна комбинация:
//0 + 0 + 25 = 25, увеличаваме броя на валидни комбинации с 1,втората валидна комбинация е:
//0 + 1 + 24 = 25
//Третата:
//0 + 2 + 23 = 25  и т.н.
//След генериране на всички възможни комбинации, броят на валидните е 351.
        for (int x1 = 0; x1 <= n; x1++) {
            for (int x2 = 0; x2 <= n; x2++) {
                for (int x3 = 0; x3 <= n; x3++) {
                    int number = x1 + x2 + x3;
                    if (number == n) {
                        validCombinatoinCount++;
                    }
                }
            }
        }
        System.out.println(validCombinatoinCount);
    }
}
