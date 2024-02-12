class FlightBookingSystem {

    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        const sameFlightNumber = this.flights.find(f => f.flightNumber == flightNumber);

        if (sameFlightNumber) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }

        this.flights.push({
            flightNumber,
            destination,
            departureTime,
            price
        });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    };

    bookFlight(passengerName, flightNumber) {
        let foundFlightNumber = this.flights.find(n => n.flightNumber === flightNumber);
        if (foundFlightNumber === undefined) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push({
                passengerName,
                flightNumber
            })
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    };

    cancelBooking(passengerName, flightNumber) {
        let foundName = this.bookings.find(n => n.passengerName === passengerName);
        let foundNumber = this.bookings.find(n => n.flightNumber === flightNumber);

        if (foundName === undefined || foundNumber === undefined) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }
            const index = this.bookings.indexOf(foundName);
            this.bookings.splice(index, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
       

    };

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error("No bookings have been made yet.");
        }

        if (criteria === 'all') {
            const bookingList = this.bookings.map(booking => {
                return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
            });

            return [`All bookings(${this.bookingsCount}):`, ...bookingList].join('\n');
        }

        const priceThreshold = criteria === 'cheap' ? 100 : criteria === 'expensive' ? 100 : null;

        if (priceThreshold === null) {
            throw new Error("Invalid criteria.");
        }

        const filteredBooking = this.bookings.filter(booking => {
            const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
            return criteria === 'cheap' ? flight.price <= priceThreshold : flight.price > priceThreshold;
        });

        if (filteredBooking.length === 0) {
            return `No ${criteria} bookings found.`;
        }

        const bookingList = filteredBooking.map(booking => {
            return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
        });

        return [`${criteria.charAt(0).toUpperCase() + criteria.slice(1)} bookings:`, ...bookingList].join('\n').trim();
    };
}

// try { test1(); } catch (err) { console.error(err.message); };
// try { test2(); } catch (err) { console.error(err.message); };
// try { test3(); } catch (err) { console.error(err.message); };
// try { test4(); } catch (err) { console.error(err.message); };
// try { test5(); } catch (err) { console.error(err.message); };


function test1() {
    console.log('----test1:');
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    /* 
    Flight AA101 to Los Angeles has been added to the system.
    Flight BB202 to New York has been added to the system.
    Flight CC303 to Chicago has been added to the system.
    Flight AA101 to Los Angeles is already available.
*/

}


function test2() {
    console.log('----test2:');
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.bookFlight("Charlie", "CC303"));
    /*
       Flight AA101 to Los Angeles has been added to the system.
      Flight BB202 to New York has been added to the system.
      Booking for passenger Alice on flight AA101 is confirmed.
      Booking for passenger Bob on flight BB202 is confirmed.
      Flight CC303 is not available for booking.
    */
}


function test3() {
    console.log('----test3:');
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.cancelBooking("Alice", "AA101"));
    /*
      Flight AA101 to Los Angeles has been added to the system.
      Flight BB202 to New York has been added to the system.
      Booking for passenger Alice on flight AA101 is confirmed.
      Booking for passenger Bob on flight BB202 is confirmed.
      Booking for passenger Alice on flight AA101 is cancelled.
    */
}

function test4() {
    console.log('----test4:');
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.showBookings("all"));
    /*
    Flight AA101 to Los Angeles has been added to the system.
    Flight BB202 to New York has been added to the system.
    Booking for passenger Alice on flight AA101 is confirmed.
    Booking for passenger Bob on flight BB202 is confirmed.
    All bookings(2):
    Alice booked for flight AA101.
    Bob booked for flight BB202.
    */
}

function test5() {
    console.log('----test5:');
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.showBookings("expensive"));
    console.log(system.showBookings("cheap"));
    /*
  Flight AA101 to Los Angeles has been added to the system.
  Flight BB202 to New York has been added to the system.
  Booking for passenger Alice on flight AA101 is confirmed.
  Booking for passenger Bob on flight BB202 is confirmed.
  Expensive bookings:
  Alice booked for flight AA101.
  Bob booked for flight BB202.
  No cheap bookings found.

    */
}

