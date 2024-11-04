const form = document.getElementById('userForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Create a data object to send
    const data = {
        name: name,
        message: message
    };

    // Send the data to the Google Apps Script web app
    fetch('https://script.google.com/macros/s/AKfycbzXpOwh7epob9WeUg5FKLTSbSw5pK5KnFOTA2g-a_GXmoaCt1PTUQHJBB8QNw2FlFVzyg/exec', { // Replace with your web app URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Use response.json() if the response is JSON
    })
    .then(data => {
        console.log('Success:', data);
        alert('Data submitted successfully!'); // Notify the user of success
        form.reset(); // Clear the form after successful submission
        // Redirect to another page if needed
        window.location.href = 'https://www.example.com'; // Change this to your desired URL
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting data: ' + error.message); // Notify the user of an error
    });
});