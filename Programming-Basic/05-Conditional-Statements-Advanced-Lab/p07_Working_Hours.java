import java.util.Scanner;

public class p07_Working_Hours {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int timeInHour = Integer.parseInt(scanner.nextLine());
        String day = scanner.nextLine();
//Да се напише програма, която чете час от денонощието(цяло число) и ден от седмицата(текст) -
// въведени от потребителя и проверява дали офисът на фирма е отворен,
// като работното време на офисът е от 10-18 часа, от понеделник до събота включително

        if (timeInHour <= 18 && timeInHour >= 10) {
            switch (day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                case "Saturday":
                    System.out.println("open");
                    break;
                case "Sunday":
                    System.out.println("closed");
                    break;

            }
        } else {
            System.out.println("closed");
        }
    }
}
