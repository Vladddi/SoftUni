package entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table
public class Wizard {
    @Id
    @Column
    private long id;

    @Column(length = 50)
    private String firstName;

    @Column(length = 60, nullable = true)
    private String lastName;

    @Column(length = 1000)
    private String note;

    @Column
    private long age;

    @OneToOne
    @JoinColumn
    private MagicWand magicWand;

    @OneToMany
    @JoinTable(
            name = "wizard_deposits",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "deposit_id")
    )
    private List<Deposit> deposits;
}
