import java.util.Scanner;

public class p07_Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());

        double value = width * length * height;
        //double valuePerBox = 1 * 1 * 1;

        String line = scanner.nextLine();
        boolean isFinished = false;
        while (!line.equals("Done")) {
            int countBoxes = Integer.parseInt(line);
            value -= countBoxes;

            if (value <= 0) {
                isFinished = true;
                break;
            }
            line = scanner.nextLine();
        }

        String output = "";

        if (isFinished){
            output = String.format("No more free space! You need %.0f Cubic meters more.", Math.abs(value));
        } else {
            output = String.format("%.0f Cubic meters left.", value);
        }

        System.out.println(output);
    }
}
