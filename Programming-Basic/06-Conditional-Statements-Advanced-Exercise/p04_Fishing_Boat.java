import java.util.Scanner;

public class p04_Fishing_Boat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

//•	Бюджет на групата – цяло число в интервала [1…8000]
//•	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
//•	Брой рибари – цяло число в интервала [4…18]
        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int fishers = Integer.parseInt(scanner.nextLine());

//Цената зависи от сезона: проверка СЕЗОН
//•	Цената за наем на кораба през пролетта е  3000 лв.
//•	Цената за наем на кораба през лятото и есента е  4200 лв.
//•	Цената за наем на кораба през зимата е  2600 лв.
        double rentBoat = 0.0;

        switch (season) {
            case "Spring":
                rentBoat = 3000;
                break;
            case "Summer":
                rentBoat = 4200;
                break;
            case "Autumn":
                rentBoat = 4200;

                break;
            case "Winter":
                rentBoat = 2600;
                break;
        }
        if (fishers <= 6){ //zadava se dolna granica
            rentBoat *= 0.90;
        } else if (fishers <= 11 ) {
            rentBoat *= 0.85;
        } else {
            rentBoat *= 0.75;

        }

        if (fishers % 2 == 0 && !season.equals("Autumn")){
            rentBoat *= 0.95;
        }
        if (budget >= rentBoat){
            System.out.printf("Yes! You have %.2f leva left.", budget - rentBoat);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", rentBoat - budget);
        }

//        В зависимост от броя си групата ползва отстъпка: проверка НОМЕР РИБАРИ
//•	Ако групата е до 6 човека включително  –  отстъпка от 10%.
//•	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
//•	Ако групата е от 12 нагоре  –  отстъпка от 25%.

//        ЧЕТНИ НЕЧЕТНИ - СЕЗОН ЕСЕН
//        Рибарите ползват допълнително 5% отстъпка ако са четен брой освен
//        ако не е есен - тогава нямат допълнителна отстъпка.
//Напишете програма, която да пресмята дали рибарите ще съберат достатъчно пари.
    }
}
