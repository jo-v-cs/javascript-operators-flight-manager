function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        let totalPassengers = 0;
        for (let i = 0; i < passengersArray.length; i++) {
            totalPassengers += passengersArray[i];
        }
        if (totalPassengers <= flightCapacity) {
            return totalPassengers;
        } else {
            throw new Error();
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
        let vipPassengersWithBusinessSeats = vipPassengersWithEconomySeats = regularPassengersWithBusinessSeats = regularPassengersWithEconomySeats = 0;
        let totalBusinessSeats = businessSeatsPerFlight * nrOfFlights;
        let totalEconomySeats = economySeatsPerFlight * nrOfFlights;
        console.log("Total business: " + totalBusinessSeats);
        console.log("Total economy: " + totalEconomySeats);
        while (vipPassengers > 0 && totalBusinessSeats > 0) {
            vipPassengers--;
            totalBusinessSeats--;
            vipPassengersWithBusinessSeats++;
        }
        if (vipPassengers > 0) {
            while (vipPassengers > 0 && totalEconomySeats > 0) {
                vipPassengers--;
                totalEconomySeats--;
                vipPassengersWithEconomySeats++;
            }}
        if (totalBusinessSeats > 0) {
            console.log("Business seats left for reg passengers");
            while (totalBusinessSeats > 0 && regularPassengers > 0) {
                regularPassengers--;
                totalBusinessSeats--;
                regularPassengersWithBusinessSeats++;
            }}
        if (totalEconomySeats > 0) {
            while (regularPassengers > 0 && totalEconomySeats > 0) {
                regularPassengers--;
                totalEconomySeats--;
                regularPassengersWithEconomySeats++;
            }
        }
            
        console.log("Reg with business seats: " + regularPassengersWithBusinessSeats);
        return { vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats, regularPassengersWithEconomySeats};
    }

    return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}


module.exports = Passengers();