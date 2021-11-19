function Flights() {
    function calculateNumberOfFlights(passengersNumber, flightCapacity) {
        if (passengersNumber < 0 || !Number.isInteger(passengersNumber)) {
            throw new Error("The number of passengers must be a positive integer value");                
        }
        if (flightCapacity < 0 || !Number.isInteger(flightCapacity)) {
            throw new Error("The capacity of the flight must be a positive integer value");                
        }
        return Math.ceil(passengersNumber / flightCapacity);
        
    }
    function checkAircraftRevision(distanceLimit, distancesArray) {
        let calculatedTotalDistance = 0;
        distancesArray.forEach((distance) => {
            calculatedTotalDistance += distance;
        });
        if (calculatedTotalDistance <= distanceLimit / 2) {
            return "The revision needs to be done within the next 3 months";
        } else if (calculatedTotalDistance > distanceLimit /2 && calculatedTotalDistance <= distanceLimit * .75) {
            return "The revision needs to be done within the next 2 months";
        } else if (calculatedTotalDistance > distanceLimit * .75 && calculatedTotalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month";
        } else {
            throw new Error();
        }
    }
    return {calculateNumberOfFlights, checkAircraftRevision};
}


module.exports = Flights();