const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (accumulator, element) => element +accumulator
let totalBatteries = batteryBatches.reduce(reducer)















/*
const reducer = (accumulator, item) => accumulator+item;
let totalBatteries = batteryBatches.reduce(reducer);
*/