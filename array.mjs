// Import JSON data from response.json file with import assertion
import response from './response.json' assert { type: "json" };

// Extract necessary properties using destructuring
const mappedData = response.map(({ name, vehicle }) => ({
    name,
    // Check if vehicle and vehicle.year exist before accessing
    year: vehicle && vehicle.year ? vehicle.year : "Year Not Available"
}));

// Filter data based on vehicle year greater than 2020
const filteredData = response.filter(({ vehicle }) => vehicle && vehicle.year && vehicle.year > 2020);

// Print the resulting arrays for verification
console.log("Mapped Data:");
console.log(mappedData);

console.log("\nFiltered Data:");
console.log(filteredData);