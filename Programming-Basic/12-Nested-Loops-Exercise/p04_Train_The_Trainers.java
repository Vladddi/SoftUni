import java.util.Scanner;

public class p04_Train_The_Trainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // броят на журито
        int n = Integer.parseInt(scanner.nextLine()); //брой на жури
        String line = scanner.nextLine(); // първо име на презентация

        double allGradeSum = 0.0; //всички средни оценки
        int countPresentation = 0; //брой презентации

        while (!line.equals("Finish")) {
            String presentation = line;
            countPresentation++;

            double gradesSum = 0; //средна оценка
            int numOfGrade = 0; //брой на оценки
            double avrGrade = 0.0;
            for (int i = 1; i <= n; i++) {
                double grade = Double.parseDouble(scanner.nextLine());
                //System.out.print(grade);
                gradesSum += grade;
                numOfGrade++;
            }
            avrGrade = gradesSum / numOfGrade;
            allGradeSum += avrGrade;
            System.out.printf("%s - %.2f.%n", presentation, avrGrade);

            line = scanner.nextLine();
        }
        double averageGrade = allGradeSum / countPresentation;

        System.out.printf("Student's final assessment is %.2f.", averageGrade);
    }
}
