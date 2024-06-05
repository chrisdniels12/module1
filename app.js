// Import Express with the 'type': 'module' property set in 'package.json'
import express from "express";
// Create an Express app:
const app = express()
// Set the 'public' folder as a static folder
app.use(express.static("public"))
// Define a route for the '/' path to load 'index.html' from the 'public' folder
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))
// Have the app listen on port 5000
app.listen(5000, () => {
    console.log("server is running on port 5000")
})
//  an Express server to serve static files from the 'public' folder and listens for incoming requests on port 5000.
//  When a request is made to the root path '/', it responds by sending the 'index.html' file from the 'public' folder.