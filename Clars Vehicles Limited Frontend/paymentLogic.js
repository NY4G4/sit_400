const calculateRentalPrice = (vehicleCategory, insuranceLevel, rentalHours, lateHours = 0) => {
    const baseRates = {
        '5-seater': 100,
        'pick-up': 150,
        '4WD': 200,
        'over-5-seats': 200
    };
    
    const insuranceRate = 50; // Additional cost per insurance level
    const lateFeePerHour = 100; // Fee for late return
    
    if (!baseRates[vehicleCategory]) {
        throw new Error('Invalid vehicle category');
    }

    const baseCost = baseRates[vehicleCategory] * rentalHours;
    const insuranceCost = insuranceRate * insuranceLevel;
    const lateFee = lateFeePerHour * lateHours;
    
    return baseCost + insuranceCost + lateFee;
};

const calculateDriverEarnings = (rentalIncome) => {
    return rentalIncome * 0.75; // 75% of rental income goes to the driver
};

const driverSubscriptionFee = 2000; // Monthly subscription per vehicle

module.exports = {
    calculateRentalPrice,
    calculateDriverEarnings,
    driverSubscriptionFee
};
