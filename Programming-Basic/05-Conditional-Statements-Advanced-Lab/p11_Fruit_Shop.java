import java.util.Scanner;

public class p11_Fruit_Shop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//Напишете програма, която чете от конзолата плод
// (banana / apple / orange / grapefruit / kiwi / pineapple / grapes),
// ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)
// и количество (десетично число) , въведени от потребителя,
// и пресмята цената според цените от таблиците по-горе.
//При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".
        String fruit = scanner.nextLine();
        String WeekDay = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());
        double totalPrice = 0.0;


        switch (WeekDay) {
            case "Monday":
            case "Tuesday":
            case "Thursday":
            case "Wednesday":
            case "Friday":

                if (fruit.equals("banana")) {
                    totalPrice = quantity * 2.50;
                } else if (fruit.equals("apple")) {
                    totalPrice = quantity * 1.20;
                } else if (fruit.equals("orange")) {
                    totalPrice = quantity * 0.85;
                } else if (fruit.equals("grapefruit")) {
                    totalPrice = quantity * 1.45;
                } else if (fruit.equals("kiwi")) {
                    totalPrice = quantity * 2.70;
                } else if (fruit.equals("pineapple")) {
                    totalPrice = quantity * 5.50;
                } else if (fruit.equals("grapes")) {
                    totalPrice = quantity * 3.85;
                }
                break;

            case "Saturday":
            case "Sunday":
                if (fruit.equals("banana")) {
                    totalPrice = quantity * 2.70;
                } else if (fruit.equals("apple")) {
                    totalPrice = quantity * 1.25;
                } else if (fruit.equals("orange")) {
                    totalPrice = quantity * 0.90;
                } else if (fruit.equals("grapefruit")) {
                    totalPrice = quantity * 1.60;
                } else if (fruit.equals("kiwi")) {
                    totalPrice = quantity * 3.00;
                } else if (fruit.equals("pineapple")) {
                    totalPrice = quantity * 5.60;
                } else if (fruit.equals("grapes")) {
                    totalPrice = quantity * 4.20;
                }
                break;
        }
        if (totalPrice <= 0.0) {
            System.out.println("error");
        } else if (totalPrice > 0.0) {
            System.out.printf("%.2f", totalPrice);
        }
    }
}
