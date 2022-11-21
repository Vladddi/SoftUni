import entities.Town;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;

public class p02_ChangeCasting {
    private static final String DATABASE_NAME = "soft_uni";
//    private static final String UPDATE_ALL_TOWNS_NAME_MORE_THAN_5 =
//            "UPDATE towns t SET t.name = UPPER(t.name) WHERE LENGTH(t.name) <= 5";

    public static void main(String[] args) {
        final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory(DATABASE_NAME);

        final EntityManager entityManager = entityManagerFactory.createEntityManager();

        entityManager.getTransaction().begin();


        List<Town> resultList = entityManager.createQuery("Select t from Town t", Town.class).getResultList();

        for (Town town : resultList) {
            final String townName = town.getName();

            if (townName.length() <= 5) {
                town.setName(townName.toUpperCase());

                entityManager.persist(town);
            }
        }

        entityManager.getTransaction().commit();
        entityManager.close();
    }
}
