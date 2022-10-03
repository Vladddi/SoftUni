import java.util.Scanner;

public class p03_Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double excursionPrice = Double.parseDouble(scanner.nextLine());
        double currentMoney = Double.parseDouble(scanner.nextLine());
        //тук нямаме команда за спиране и за това не пишем някакъв стринг от който да сравняваме
        //String command = scanner.nextLine();
        int spendDays = 0;
        int allDays = 0;

        //Докато Джеси събере парите за почивката
        while (excursionPrice > currentMoney) {
            String command = scanner.nextLine();
            double money = Double.parseDouble(scanner.nextLine());
            allDays++;

            if (command.equals("spend")) {
                currentMoney -= money;

                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                spendDays++;
                // допълнително условие, ако 5 последов дни харчи
                if (spendDays == 5) {
                    break;
                }
            } else {
                currentMoney += money;
                spendDays = 0;
            }
        }
        String output = "";
        //тук правим проверка за да определим заради кое от 2те ще прекъсне задачата
        if (currentMoney >= excursionPrice) {
            output = String.format("You saved the money for %d days.", allDays);
        } else {
            output = String.format("You can't save the money.%n" + "%d", allDays);

        }
        System.out.println(output);
    }
}
