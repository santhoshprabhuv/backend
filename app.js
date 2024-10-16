import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Set the response headers
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        
        // Send the response body
        res.end('Hello from server!!');
        
        // Alternatively, you can send JSON response like this:
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify({ dept: 'IT', course: 'FST' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});