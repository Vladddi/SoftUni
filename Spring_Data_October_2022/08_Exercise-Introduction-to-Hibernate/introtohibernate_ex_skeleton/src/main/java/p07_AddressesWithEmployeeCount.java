import entities.Address;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

public class p07_AddressesWithEmployeeCount {
    public static void main(String[] args) {
        final EntityManager entityManager = Persistence.createEntityManagerFactory("soft_uni")
                .createEntityManager();

        entityManager.createQuery("SELECT a FROM Address a ORDER BY a.employees.size desc", Address.class)
                .setMaxResults(10)
                .getResultList()
                .forEach(System.out::println);

        entityManager.close();
    }
}
