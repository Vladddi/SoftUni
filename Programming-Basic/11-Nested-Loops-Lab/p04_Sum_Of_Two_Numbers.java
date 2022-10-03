import java.util.Scanner;

public class p04_Sum_Of_Two_Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int start = Integer.parseInt(scanner.nextLine());
        int end = Integer.parseInt(scanner.nextLine());
        int magicNumber = Integer.parseInt(scanner.nextLine());

        int counter = 0;

        boolean flag = false;
        for (int x = start; x <= end; x++) {
            for (int y = start; y <= end; y++) {
                counter++;
                if (x + y == magicNumber) {
                    System.out.printf("Combination N:%d (%d + %d = %d)%n", counter, x, y, magicNumber);
                    flag = true;
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        if (!flag) {
            System.out.printf("%d combinations - neither equals %d", counter, magicNumber);
        }
    }
}
