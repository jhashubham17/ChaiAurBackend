const http = require("http"); // Import Node.js core module

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log(req);
  console.log(res);

  // send a hello world response

  if (req.url == "/") {
    res.write("home");
  } else if (req.url == "/login") {
    res.write("login");
  } else {
    res.write("Hello World");
    // write a reponse to the client
  }

  res.end(); // end the response
});

// Start your server

server.listen(PORT, () => {
  console.log("Server Listening on: http://localhost:", PORT);
});
