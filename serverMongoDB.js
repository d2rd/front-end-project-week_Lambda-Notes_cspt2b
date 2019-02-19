// ☞ aa187bf9-7c80-4deb-a3ce-6d4ed5e3a37a
const express = require('express');
const cors = require('cors');
const corsOptions = {origin: 'http://localhost:3000'} // Tried replacing url with `*` no difference
const helmet = require('helmet');
const mongoose = require('mongoose');
const server = express();

const port = 5500;
const ElectricUpright = require('./models/ElectricUpright');
const SpeakerCabinets = require('./models/SpeakerCabinets');
const Misc = require('./models/Misc');
const NoteItem = require('./models/NoteItem');

// connect to database
const options = {
  user:"d2rd",
  pass:"d2rd-PW",
  useNewUrlParser: true // use the urlParser instead of the old one
}
// ☞ bd397750-457f-4308-b616-f0424ddc5d04

mongoose.connect('mongodb://ds141611.mlab.com:41611/d2rd-notes', options)
.then(() => console.log('Success connecting the MongoDB/d2rd-notes on mlab'))
.catch((err) => console.log(err.message)) // TEST: changing PW should throw 'authentication failed error

// create schema
// ☞ 8cf866c9-a061-48df-a275-ebdbf2196f60
// REFACTORED TO MOVE NOTES TO MONGODB

// SET NOTES DB
// setting 'notes' store to connect to mongoDB
  let notes = mongoose.connect('mongodb://ds141611.mlab.com:41611/d2rd-notes', options);
  // let notes = d2rdNotes;
// let id = notes.length;

// MIDDLEWARE
server.use( express.json(), cors(*)) // bodyParser function for json payloads
server.use(helmet())
 // Allow Cross-origin Resource Sharing i.e. between netlify, heroku and mlab
// server.use(cors());
server.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");  //`*` allows all sites to make requests.  change to specific domains to restrict access.
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH,DELETE, GET')
    return res.status(200).json({})
  }
  next();  // allows other routes to take over.
})

// const memCache ={}; 

//add CRUD routes
server.get('/', (req, res) => {
  res.send('Hello from the express server'); // sanity check
});

server.get('/ElectricUprights', (req, res) => {
  ElectricUpright.find()
    .then((data) => {
      res.json(data)
    })
    .catch(err => console.log(err.message))
})

server.post('/ElectricUprights/create', (req, res) => {
  const { title, priority, body, price, itemURL, reviewURL } = req.body;
  const myNote = { title, priority, body, price, itemURL, reviewURL };
  const newNote = new ElectricUpright(myNote)
  newNote.save()
    .then(note => {
      res.status(201).json(note)
    })
    .catch(err => console.log(err))
});
// METHOD 1 req.body
// app.put('/ElectricUprights/update/', (req, res) => {
//   console.log(req.body)
//   ElectricUpright.findByIdAndUpdate(req.body._id, {price: req.body.price, itemURL: req.body.itemURL})
//     .then(note => {
//       res.status(201).json(note)
//     })
//     .catch(err => console.log(err))
// })
// METHOD 2 req.params
server.put('/ElectricUprights/update/:id', (req, res) => {
  console.log(req.params.id)
  ElectricUpright
    .findByIdAndUpdate(req.params.id, {price: req.body.price, itemURL: req.body.itemURL})
    .then(note => {
      res.status(201).json(note)
    })
    .catch(err => console.log(err))
})

server.delete('/ElectricUprights/delete/:id', deleteFunc)

function deleteFunc (req, res) {
  console.log(req.params.id);
  ElectricUpright
    .findByIdAndRemove(req.params.id)
    .then(note => {
      res.send('The note was deleted')
    })
    .catch(err => console.log(err));
};

// ADDING MIDDLEWARE
// app.delete('/ElectricUprights/update/:id', authorizeUserMiddleware, deleteFunc)

// function deleteFunc (req, res) {
//   console.log(req.params.id);
//   ElectricUpright
//     .findByIdAndRemove(req.params.id)
//     .then(note => {
//       res.status(201).json(note)
//     })
//     .catch(err => console.log(err));
// };

// app.delete('/ElectricUprights/update/:id', (req, res) => {
//   console.log(req.params.id)
//   ElectricUpright.findByIdAndRemove(req.params.id);
//   const newNotes = d2rdNotes.filter(note => {
//     return id !== note.id;
//   });
//   d2rdNotes = newNotes;
//   res.send(d2rdNotes);
// });
// **** OTHER COLLECTIONS ***
// app.get('/SpeakerCabinets', (req, res) => {
//   SpeakerCabinets.find()
//     .then((data) => {
//       res.json(data)
//     })
//     .catch(err => console.log(err.message))
// })

// app.get('/misc', (req, res) => {
//   misc.find()
//     .then((data) => {
//       res.json(data)
//     })
//     .catch(err => console.log(err.message))
// })

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
