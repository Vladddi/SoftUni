package entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "magic_wand")
public class MagicWand {

    @Id
    @Column
    private Long id;

    @Column(length =  100)
    private String creator;

    @Column
    private Long size;
}
