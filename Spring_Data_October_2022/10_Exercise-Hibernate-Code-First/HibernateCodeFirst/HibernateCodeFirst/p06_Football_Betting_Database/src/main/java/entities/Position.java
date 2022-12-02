package entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table
public class Position {

    @Id
    @Column(length = 2)
    private String id;

    @Column
    private String description;
}

