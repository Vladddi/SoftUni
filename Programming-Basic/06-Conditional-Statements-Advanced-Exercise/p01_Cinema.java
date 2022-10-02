import java.util.Scanner;

public class p01_Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони.
// Има три вида прожекции с билети на различни цени:
//•	Premiere – премиерна прожекция, на цена 12.00 лева.
//•	Normal – стандартна прожекция, на цена 7.50 лева.
//•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
//Напишете програма, която чете тип прожекция (стринг),
// брой редове и брой колони в залата (цели числа),
// въведени от потребителя, и изчислява общите приходи от билети при пълна зала.
// Резултатът да се отпечата във формат като в примерите по-долу,
// с 2 знака след десетичната точка.
        String tipe = scanner.nextLine();
        int rows = Integer.parseInt(scanner.nextLine());
        int columns = Integer.parseInt(scanner.nextLine());

//        •	Premiere – премиерна прожекция, на цена 12.00 лева.
//•	Normal – стандартна прожекция, на цена 7.50 лева.
//•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
        double pricePerTicket = 0.0;

        if (tipe.equals("Premiere")) {
            pricePerTicket = 12;
        } else if (tipe.equals("Normal")) {
            pricePerTicket = 7.5;
        } else {
            pricePerTicket = 5;
        }

        double totalIncome = rows * columns * pricePerTicket;

        System.out.printf("%.2f leva", totalIncome);
    }
}
