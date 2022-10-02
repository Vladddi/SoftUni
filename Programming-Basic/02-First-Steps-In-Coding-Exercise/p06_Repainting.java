import java.util.Scanner;

public class p06_Repainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int quantityNylon = Integer.parseInt(scanner.nextLine());
        int paintColor = Integer.parseInt(scanner.nextLine());
        int paintThinnerLiters = Integer.parseInt(scanner.nextLine());
        int neededHours = Integer.parseInt(scanner.nextLine());

        double sumNylon = (quantityNylon + 2) * 1.50;
        double sumColorPaint = (paintColor * 1.1) * 14.5;
        double paintThinner = paintThinnerLiters * 5;
        double nylonBag = 0.4;

        double totalSumMaterials = sumNylon + sumColorPaint + paintThinner + nylonBag;
        double workersSum = (totalSumMaterials * 0.3) * neededHours;

        double totalSum = totalSumMaterials + workersSum;

        System.out.println(totalSum);
    }
}
