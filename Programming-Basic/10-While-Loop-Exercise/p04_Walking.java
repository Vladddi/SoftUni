import java.util.Scanner;

public class p04_Walking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int goalInStep = 10000;
        int dailySteps = 0;
        // int totalSteps = 0;

        String input = scanner.nextLine();

        while (!"Going home".equals(input)) {
            int nextSteps = Integer.parseInt(input);
            dailySteps += nextSteps;
            if (dailySteps >= goalInStep) {
                System.out.printf("Goal reached! Good job!%n"
                        + "%d steps over the goal!", dailySteps - goalInStep);
                break;
            }
            input = scanner.nextLine();
        }
        if ("Going home".equals(input)) {
            int lastSteps = Integer.parseInt(scanner.nextLine());
            dailySteps += lastSteps;
            if (dailySteps >= goalInStep) {
                System.out.printf("Goal reached! Good job!%n"
                        + "%d steps over the goal!", dailySteps - goalInStep);
            } else {
                System.out.printf("%d more steps to reach goal.", goalInStep - dailySteps);
            }
        }

    }
}
