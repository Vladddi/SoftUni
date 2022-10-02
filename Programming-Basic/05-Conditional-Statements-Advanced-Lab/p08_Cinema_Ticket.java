import java.util.Scanner;

public class p08_Cinema_Ticket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//
////Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
////    12	    12	        14	        14	    12	    16	        16
        String dayOfWeek = scanner.nextLine();

        if (dayOfWeek.equals("Monday")
                || dayOfWeek.equals("Tuesday")
                || dayOfWeek.equals("Friday")) {
            System.out.println(12);
        } else if (dayOfWeek.equals("Wednesday")
                || dayOfWeek.equals("Thursday")) {
            System.out.println(14);
        } else {
            System.out.println(16);
        }
    }
}
