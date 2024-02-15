import fetch from 'node-fetch';
async function fetchPincodeData(offset) {
    try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pincode data:", error);
        throw error;
    }
}
const offsets = [110001, 400001, 600001]; 
const promises = offsets.map(offset => fetchPincodeData(offset));
Promise.all(promises)
    .then(results => {
        const combinedData = results.flatMap(result => result);
        console.log("Combined data:");
        combinedData.forEach(data => {
            console.log("Message:", data.Message);
            console.log("Status:", data.Status);
            data.PostOffice.forEach(postOffice => {
                console.log("Post Office Name:", postOffice.Name);
                console.log("District:", postOffice.District);
                console.log("State:", postOffice.State);
                console.log("------------------------");
            });
        });
    })
    .catch(error => console.error("Error fetching data:", error));