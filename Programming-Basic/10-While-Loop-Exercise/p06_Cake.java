import java.util.Scanner;

public class p06_Cake {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //1 razmeri na tortata
        int length = Integer.parseInt(scanner.nextLine());
        int width = Integer.parseInt(scanner.nextLine());

        // брой парчета торта
        int cakePieces = length * width;

        //прочитаме 1вия ред
        String line = scanner.nextLine();
        boolean isFinishd = false;
        //докато line е различно от "STOP"
        while (!line.equals("STOP")){
            //1рво да се ъпдейтва line
            int currentPieces = Integer.parseInt(line); //четеме от line
            cakePieces -= currentPieces;
            if (cakePieces <= 0){
                isFinishd = true;
                break;
            }

            line = scanner.nextLine();
        }
        String output = "";

        if (isFinishd){
            output = String.format("No more cake left! You need %d pieces more.", Math.abs(cakePieces));
        } else {
            output = String.format("%d pieces are left.", cakePieces);
        }
        System.out.println(output);
    }
}
