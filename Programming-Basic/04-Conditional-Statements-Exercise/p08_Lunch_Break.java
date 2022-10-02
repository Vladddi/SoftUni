import java.util.Scanner;

public class p08_Lunch_Break {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String nameSerial = scanner.nextLine();
        int timeLine = Integer.parseInt(scanner.nextLine());
        int timeBreak = Integer.parseInt(scanner.nextLine());

        double lunchTime = timeBreak * 0.125;
        double breathTime = timeBreak * 0.25;
        double restTime = timeBreak - lunchTime - breathTime;

        if (restTime >= timeLine) {
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", nameSerial, Math.ceil(restTime - timeLine));
        } else {
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", nameSerial, Math.ceil(timeLine - restTime));
        }

    }
}
