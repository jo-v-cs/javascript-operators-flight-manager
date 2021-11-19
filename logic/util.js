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

    function checkInput(input) {
        if (input == false || isNaN(input)) {
            throw new Exception();
        }
        else {
            return;
        }
    }

    function calculateTotalDistance(distances) {
        let totalDistance = 0;
        distances.forEach((d) => {
            if (d > 0) {
                totalDistance += d;
            }
        })
        return totalDistance;
    }

    function calculateBonusPoints(businessDistances, economyDistances, businessBonus, economyBonus) {
        let totalBusinessDistance = calculateTotalDistance(businessDistances);
        let totalEconomyDistance = calculateTotalDistance(economyDistances);
        let businessPoints = totalBusinessDistance * businessBonus / 100;
        let economyPoints = totalEconomyDistance * economyBonus / 100;

        return businessPoints + economyPoints;
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };
}

module.exports = Util();