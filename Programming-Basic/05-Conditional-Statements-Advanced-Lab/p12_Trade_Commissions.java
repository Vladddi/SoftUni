import java.util.Scanner;

public class p12_Trade_Commissions {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String city = scanner.nextLine();
        double sales = Double.parseDouble(scanner.nextLine());
        double commission = 0.0;

// Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
//Sofia	5%	7%	8%	12%

        switch (city) {
            case "Sofia":
                if (sales >= 0 && sales <= 500) {
                    commission = sales * 0.05;
                } else if (sales > 500 && sales <= 1000) {
                    commission = sales * 0.07;
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales * 0.08;
                } else if (sales > 10000) {
                    commission = sales * 0.12;
                }
                break;
//Varna	4.5%	7.5%	10%	13%

            case "Varna":
                if (sales >= 0 && sales <= 500) {
                    commission = sales * 0.045;
                } else if (sales > 500 && sales <= 1000) {
                    commission = sales * 0.075;
                } else if (sales > 1000 && sales <= 10000) {
                    commission = sales * 0.10;
                } else if (sales > 10000) {
                    commission = sales * 0.13;
                }
                break;
//Plovdiv	5.5%	8%	12%	14.5%
            case "Plovdiv":
                if (sales >= 0 && sales <= 500) {
                    commission = sales * 0.055;

                } else if (sales > 500 && sales <= 1000) {

                    commission = sales * 0.08;
                } else if (sales > 1000 && sales <= 10000) {

                    commission = sales * 0.12;
                } else if (sales > 10000) {

                    commission = sales * 0.145;
                }
                break;
        }
        if (commission == 0.0) {
            System.out.println("error");
        } else {
            System.out.printf("%.2f", commission);
        }
    }
}
