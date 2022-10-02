import java.util.Scanner;

public class p04_Password_Guess {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //      Прочитане на входни данни
//        Да се напише програма, която чете парола
//        (един ред с произволен текст), въведена от потребителя,
//        и проверява дали въведеното съвпада с фразата "s3cr3t!P@ssw0rd".
//        При съвпадение да се изведе "Welcome".
//        При несъвпадение да се изведе "Wrong password!".

        String password = scanner.nextLine();

        if (password.equals("s3cr3t!P@ssw0rd")){
            System.out.println("Welcome");
        } else {
            System.out.println("Wrong password!");
        }
//      Пресмятания

//      Печатане на резултата
    }
}
