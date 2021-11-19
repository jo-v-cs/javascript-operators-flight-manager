const { distributeAllSeatsToAllPassengers } = require("./passengers");

function Util() {
    function calculateTotalDistributedPassengers({vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats, regularPassengersWithEconomySeats}) {
        return vipPassengersWithBusinessSeats + vipPassengersWithEconomySeats + regularPassengersWithBusinessSeats + regularPassengersWithEconomySeats;
    }

    function calculateTotalNumberOfPassengers(passengerArray) {
        let arraySum = 0;
        passengerArray.forEach((p) => {
            arraySum += p;
        })

        return arraySum;
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();