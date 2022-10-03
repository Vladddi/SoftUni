import java.util.Scanner;

public class p01_Old_Books {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String searchedBook = scanner.nextLine();

        //1vata kniga trqbva da chetem izwyn cikula
        String currnetBook = scanner.nextLine();
        boolean isFound = false;
        int bookCount = 0;

        while (!currnetBook.equals("No More Books")) {

            if (currnetBook.equals(searchedBook)){
                isFound = true;
                break;
            }
            bookCount++; //1рво проверява и после добавя
            currnetBook = scanner.nextLine();

        }

        //Print
        String output = "";

        if (isFound) {
            output = String.format("You checked %d books and found it.", bookCount);
        } else {
            output = String.format("The book you search is not here!%n" +
                    "You checked %d books.",bookCount);
        }
        System.out.println(output);
    }
}
