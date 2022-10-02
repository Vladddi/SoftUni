import java.util.Scanner;

public class p04VacationBooksList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//      Прочитане на входни данни
//        1.	Брой страници в текущата книга – цяло число в интервала [1…1000];
        int numPages = Integer.parseInt(scanner.nextLine());
//        2.	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
        int pagesPerHour = Integer.parseInt(scanner.nextLine());
//        3.	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];
        int numOfDays = Integer.parseInt(scanner.nextLine());


//      Пресмятания
        int readingTime = numPages / pagesPerHour;
        int hourPerDay = readingTime / numOfDays;

//      Печатане на резултата
        System.out.println(hourPerDay);
    }
}
