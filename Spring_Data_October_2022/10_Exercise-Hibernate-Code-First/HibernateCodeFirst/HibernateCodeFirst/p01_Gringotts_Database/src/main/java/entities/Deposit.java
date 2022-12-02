package entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Deposit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20)
    private long group;

    @Column
    private LocalDate startData;

    @Column
    private Double amount;

    @Column
    private Double interest;

    @Column
    private Double charge;

    @Column
    private LocalDate expiration_date;

    @Column
    private boolean isExpired;
}
