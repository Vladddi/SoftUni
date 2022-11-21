import entities.Address;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import java.util.Scanner;

public class p06_AddingANewAddressAndUpdatingEmployee {
    public static final String NEW_ADDRESS = "Vitoshka 15";

    public static void main(String[] args) {
        final EntityManager entityManager = Persistence.createEntityManagerFactory("soft_uni")
                .createEntityManager();

        final String lastName = new Scanner(System.in).nextLine();


        entityManager.getTransaction().begin();

        Address newAddress = new Address();
        newAddress.setText(NEW_ADDRESS);

        entityManager.persist(newAddress);


        int count = entityManager.createQuery("UPDATE Employee e SET e.address = :newAddress WHERE e.lastName = :ln")
                .setParameter("newAddress", newAddress)
                .setParameter("ln", lastName)
                .executeUpdate();

        if (count > 0) {

            entityManager.getTransaction().commit();
        } else {
            entityManager.getTransaction().rollback();
        }

        entityManager.close();

        System.out.println(count);
    }
}
