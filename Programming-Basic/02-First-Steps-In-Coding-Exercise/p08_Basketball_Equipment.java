import java.util.Scanner;

public class p08_Basketball_Equipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int yearTax = Integer.parseInt(scanner.nextLine());
        double snickersPrice = yearTax - (yearTax * 0.4);
        double clothesPrice = snickersPrice - (snickersPrice * 0.2);
        double basketBallPrice = clothesPrice * 0.25;
        double accessoriesPrice = basketBallPrice * 0.2;
        double totalPrice = yearTax + snickersPrice + clothesPrice + basketBallPrice + accessoriesPrice;

        System.out.println(totalPrice);
    }
}
