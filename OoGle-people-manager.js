/************************************************************************
 * This program builds a system to manage employees. At OoGlE, there is
 * a lot of ~~slaves~~ team members and they need a way to keep track
 * of them for purposes not allowed to know! This is very exciting
 * and will help up fulfill the mission of being hopefully not evil!
 *
 * @author Jarred Parr
 * @co-authors Maaz Ashgar, Isfar Baset
 * @version September 19, 2018
 ************************************************************************/

// The API toolkit for making REST systems easily
const express = require('express');

// A good solution for handling JSON data in routes
const bodyParser = require('body-parser');

// Node JS modules for filesystem access
const fs = require('fs');

// Our database connection
// This will be a JSON object of our programmers
// and can be accessed as if it was any other javascript
// object
const database = require('./programmers.json');

// Make an instance of our express application
const app = express();

// Specify our > 1024 port to run on
const port = 3000;

// Apply our middleware so our code can natively handle JSON easily
app.use(bodyParser.json());

// We must have our list of programmers to use
if (!fs.existsSync('./programmers.json')) {
  throw new Error('Could not find database of programmers!');
}

// get the number of programmers
var numPrgrms = Object.keys(database).length;

// Build our routes

app.get('/', (req, res) => {
        res.send(${database});
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  
  res.send(`ID numbers: ${id}`);
});

app.put('/:id', (req, res) => {
  
const id = req.params.id;
  const body = req.body;
        
  if(id < numPrgrms){
  database[id] = req.body;
  console.log(database);
  let text = '\n\nDatabase[' + id + '] was updated\n\n';
        res.send(${text});
  }
  else{
    let text = '\n\nid number [' + id + '] does not exists in database\n\n';
        res.send(${text});
    }
});

app.post('/', (req, res) => {
  const body = req.body; // Hold your JSON in here!

  res.send(`You sent: ${body}`);
});


// IMPLEMENT A ROUTE TO HANDLE ALL OTHER ROUTES AND RETURN AN ERROR MESSAGE

app.get('*',(req, res){
    res.send('not found', 404);
});

app.listen(port, () => {
  console.log(`She's alive on port ${port}`);
});
