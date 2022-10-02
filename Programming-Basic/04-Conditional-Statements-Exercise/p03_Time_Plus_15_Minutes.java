import java.util.Scanner;

public class p03_Time_Plus_15_Minutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//Да се напише програма, която чете час и минути от 24-часово денонощие,
// въведени от потребителя и изчислява колко ще е часът след 15 минути.
// Резултатът да се отпечата във формат часове:минути.
// Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59.
// Часовете се изписват с една или две цифри.
// Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.
        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());
        minutes = minutes + 15;
        if (minutes >= 60) {
            minutes -= 60;
            hours += 1;
            if (hours > 24) ;
            hours = hours % 24;
        } else if (hours >= 24) {
            hours -= 24;
        }

        System.out.printf("%d:%02d", hours, minutes);
    }
}
