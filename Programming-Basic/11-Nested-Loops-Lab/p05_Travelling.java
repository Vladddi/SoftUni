import java.util.Scanner;

public class p05_Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String destination = scanner.nextLine();

        while (!destination.equals("End")){
            double budget =Double.parseDouble(scanner.nextLine());
            double totalSum = 0;
            while (totalSum < budget){
                double sum = Double.parseDouble(scanner.nextLine());
                totalSum = totalSum + sum;
            }
            System.out.printf("Going to %s!%n", destination);
            destination = scanner.nextLine();
        }
    }
}
