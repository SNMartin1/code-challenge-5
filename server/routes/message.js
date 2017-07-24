var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema.js');

router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Message.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      console.log('rentals from db: ', data);
      res.send(data);

    } //end of if/else statement
  }); //end of Message.find
}); //end of router.get

router.post('/', function(req, res) {
  console.log('data: ', req.body);

  // create an object instance from our User model
  var addMessage = new Message(req.body);

  // insert into the collection
  addMessage.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});

//export the router
module.exports = router;
