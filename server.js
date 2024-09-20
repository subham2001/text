const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Adjust the path if needed
});

// Handle form submission
app.post('/send-message', (req, res) => {
    const { name, message } = req.body;

    // Do something with the name and message (e.g., log it)
    console.log(`Name: ${name}, Message: ${message}`);

    // Send a response back to the user
    res.send(`Message from ${name}: "${message}" has been received!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
