//Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Path to the htmlRoutes.js
require("./app/routing/htmlRoutes.js")(app);

//Path to the apiRoutes.js
require("./app/routing/apiRoutes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });