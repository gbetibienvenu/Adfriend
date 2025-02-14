document.addEventListener("DOMContentLoaded", function () {
    // Log successful initialization
    console.log("Popup loaded successfully");
    
    // Get button elements
    const quoteButton = document.getElementById("quoteButton");
    const reminderButton = document.getElementById("reminderButton");
    
    // Quote button handler
    if (quoteButton) {
        quoteButton.addEventListener("click", function () {
            try {
                alert("🌟 Stay motivated! 'Success is not final, failure is not fatal.'");
            } catch (error) {
                console.error("Error showing quote:", error);
            }
        });
    } else {
        console.error("Quote button not found! Make sure element with ID 'quoteButton' exists in HTML");
    }
    
    // Reminder button handler
    if (reminderButton) {
        reminderButton.addEventListener("click", function () {
            try {
                alert("🔔 Time to stretch and refresh your mind!");
            } catch (error) {
                console.error("Error showing reminder:", error);
            }
        });
    } else {
        console.error("Reminder button not found! Make sure element with ID 'reminderButton' exists in HTML");
    }
});