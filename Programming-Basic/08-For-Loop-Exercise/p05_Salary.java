import java.util.Scanner;

public class p05_Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int tabs = Integer.parseInt(scanner.nextLine());
        int salary = Integer.parseInt(scanner.nextLine());

//        boolean isLostSalary = false;
        for (int i = 0; i < tabs; i++) {
            String currenttab = scanner.nextLine();

            //"Facebook" -> 150 лв.
            //"Instagram" -> 100 лв.
            //"Reddit" -> 50 лв.
            if (currenttab.equals("Facebook")) {
                salary -= 150;
            } else if (currenttab.equals("Instagram")) {
                salary -= 100;
            } else if (currenttab.equals("Reddit")) {
                salary -= 50;
            }
            if (salary <= 0) {
//            isLostSalary = true;
                break;
            }

        }
//        if (isLostSalary){
        if (salary <= 0) {
            System.out.println("You have lost your salary.");
        } else {
            System.out.println(salary);
        }
    }
}
