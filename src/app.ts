import express from 'express';
const app = express();


// Define your API routes here
app.get('/api/users', (req, res) => {
    // Handle GET request for /api/users
    res.json({ message: 'Get all users' });
});

app.post('/api/users', (req, res) => {
    // Handle POST request for /api/users
    res.json({ message: 'Create a new user' });
});

export default app;
// Start the server
