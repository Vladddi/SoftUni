package entities;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class p10_IncreaseSalaries {
    public static void main(String[] args) {
        final EntityManager entityManager = Persistence.createEntityManagerFactory("soft_uni")
                .createEntityManager();

        entityManager.getTransaction().begin();


        entityManager.createQuery("UPDATE Employee AS e SET e.salary = e.salary * 1.12 " +
                        "WHERE e.department.name in (1, 2, 14, 4)")
                .executeUpdate();

        entityManager.getTransaction().commit();

        entityManager.createQuery("SELECT e FROM Employee AS e " +
                "WHERE e.department.name in ('Information Services','Marketing','Tool Design','Engineering')", Employee.class)
                .getResultList()
                .forEach(e -> System.out.printf("%s %s ($%.2f)",e.getFirstName(), e.getLastName(), e.getSalary()));

        entityManager.close();
    }
}
