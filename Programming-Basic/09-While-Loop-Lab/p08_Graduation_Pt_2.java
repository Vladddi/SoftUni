import java.util.Scanner;

public class p08_Graduation_Pt_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();

        int badGradeCounter = 0;
        double grades = 0.0;
        int calzz = 0;
        while (calzz < 12) {
            double currentGrade = Double.parseDouble(scanner.nextLine());
            if (currentGrade < 4) {
                badGradeCounter++;
                if (badGradeCounter == 2) {
                    break;
                }
                continue;
            }
            grades += currentGrade;
            calzz++;
        }
        if (calzz == 12) {
            System.out.printf("%s graduated. Average grade: %.2f", name, grades / 12);
        } else {
            System.out.printf("%s has been excluded at %d grade", name, ++calzz);
        }
    }
}
