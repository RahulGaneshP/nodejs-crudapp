const express = require('./node_modules/express');
const bodyParser = require('./node_modules/body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 8080;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("app is live");
});

// Require employee routes
const employeeRoutes = require('./src/routes/emp.route')

// using as middleware
app.use('/employees', employeeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});