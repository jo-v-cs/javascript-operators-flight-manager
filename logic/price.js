function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
        return basePrice + (passengerVariation / 100) * basePrice + (flightVariation / 100) * (basePrice + (passengerVariation / 100) * basePrice); 
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let passengerVariation = flightVariation = 0;
        if (passengerType.toLowerCase() === "regular") {
            passengerVariation = -5;
        }
        else if(passengerType.toLowerCase() === "vip"){
            passengerVariation = 5;
        }

        if (flightType.toLowerCase() === "economy") {
            flightVariation = -3;
        }
        else if (flightType.toLowerCase() === "business") {
            flightVariation = 10;
        }

        return calculateFinalPrice(basePrice, passengerVariation, flightVariation);
    }

    function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice) {
        return numberOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    };

    return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice };
}

module.exports = Prices();