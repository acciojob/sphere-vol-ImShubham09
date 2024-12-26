function volume_sphere() {
    //Write your code here
	// Get the input value for radius
    const radiusInput = document.getElementById("radius").value;

    // Parse the input value to a number
    const radius = parseFloat(radiusInput);

    // Get the output element
    const volumeOutput = document.getElementById("volume");

    // Validate the input: radius must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN"; // Set output to 'NaN' for invalid input
        return false; // Prevent form submission
    }

    // Calculate the volume of the sphere: (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places and display the result
    volumeOutput.value = volume.toFixed(4);

    return false; // Prevent form submission
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
