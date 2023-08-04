// load .env data into process.env
require('dotenv').config();


// Web server config
// const path = require("path");
const sassMiddleware = require('./lib/sass-middleware');
const express = require("express");
const morgan = require('morgan');
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, "./public")));
// app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const apiRoutes = require("./routes/apis");
const userRoutes = require("./routes/users");
const messageRoutes = require("./routes/messages");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

// /api/endpoints
app.use("/api", apiRoutes);

// /user/endpoints
app.use("/users", userRoutes);

// /message/endpoints
app.use("/messages", userRoutes);

app.listen(PORT, (err) => {
  console.log(err || `JX is listening on port ${PORT}`);
});
