import java.util.Scanner;

public class p04_Clever_Lily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int ageOfLily = Integer.parseInt(scanner.nextLine());
        double priceOfWashingMachine = Double.parseDouble(scanner.nextLine());
        int toyPrice = Integer.parseInt(scanner.nextLine());

        double budgetLily = 0;
        int counterEven = 1;
        int toysCount = 0;
        int brotherMoney = 0;
        for (int i = 1; i <= ageOfLily; i++) {
            if (i % 2 == 0) {
                brotherMoney++;
                if (i == 2) {
                    budgetLily += counterEven * 10;
                } else {
                    counterEven++;
                    budgetLily += counterEven * 10;
                }
            } else {
                toysCount++;
            }
        }

        double toysPrice = toyPrice * toysCount;
        double safeMoney = (budgetLily - brotherMoney) + toysPrice;

        if (safeMoney >= priceOfWashingMachine) {
            System.out.printf("Yes! %.2f", safeMoney - priceOfWashingMachine);
        } else {
            System.out.printf("No! %.2f", priceOfWashingMachine - safeMoney);
        }
    }
}
