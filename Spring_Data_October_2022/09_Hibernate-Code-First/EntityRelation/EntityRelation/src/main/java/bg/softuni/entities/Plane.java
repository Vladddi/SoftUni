package bg.softuni.entities;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "planes")
public class Plane extends Vehicle {
    private static final String PLANE_TYPE = "PLANE";
    @Basic
    private int passengerCapacity;

    public Plane() {
        super(PLANE_TYPE);
    }

    public int getPassengerCapacity() {
        return passengerCapacity;
    }

    public void setPassengerCapacity(int passengerCapacity) {
        this.passengerCapacity = passengerCapacity;
    }

    public Plane(String model, String fuelType, int passengerCapacity) {
        this();

        this.model = model;
        this.fuelType = fuelType;

        this.passengerCapacity = passengerCapacity;
    }

}
