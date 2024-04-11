const button = document.getElementById('myButton');
let colors = ['btn-danger', 'btn-warning', 'btn-success'];
let currentColorIndex = 0;

// Function to change button color
function changeColor() {
    button.classList.remove(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through the colors array
    button.classList.add(colors[currentColorIndex]);
}

// Call the changeColor function every 10 seconds
let intervalId = setInterval(changeColor, 10000);

button.addEventListener('click', function () {
    clearInterval(intervalId); // Stop the automatic color change
    changeColor(); // Change color on click

    // Restart the automatic color change after 10 seconds
    setTimeout(() => {
        intervalId = setInterval(changeColor, 10000);
    }, 10000);
});
