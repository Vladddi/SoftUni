import java.util.Scanner;

public class p01_Read_Text {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            String input = scanner.nextLine();
            if (input.equals("Stop")) {
                break;
            }
            System.out.println(input);
        }
    }
}
