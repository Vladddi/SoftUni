import java.util.Scanner;

public class p05_Character_Sequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//        String text = "SoftUni";
//        int length = text.length();
//
//        char symbol = text.charAt(1);
//        System.out.println(symbol);

        String text = scanner.nextLine();
        //01234
        //hello
        int length = text.length();

        for (int i = 0; i < text.length(); i++) {
            System.out.println(text.charAt(i));
        }
    }
}
