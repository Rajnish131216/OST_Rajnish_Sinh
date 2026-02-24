console.log("NPM Practice 4 Working 🚀");

const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Server is running successfully");
    res.end();
});

server.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});