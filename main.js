const express = require('./node_modules/express');
const bodyParser = require('./node_modules/body-parser');

//const apicache = require('apicache');
//let cache = apicache.middleware;
//app.use(cache('2 minutes'));

//const cors = require('cors');

/*app.use(cors({
 origin: '*'
}));

app.use(cors({
  origin: 'https://localhost:4200'
}));*/


// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 8080;

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("App is live");
});

// Require employee routes
const employeeRoutes = require('./src/routes/emp.route')

// using as middleware
app.use('/v1/employees', employeeRoutes)
//app.use('/v2/employees', employeeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});