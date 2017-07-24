app.controller('MessageController', function($http) {
  var mc = this;
  console.log('in MessageController');
  mc.newUser = {};
  mc.newMessage = {};

  getUser();

//add user to the DOM
  mc.addUser = function() {
    console.log('add user', mc.newUser);
    $http.post('/user', mc.newUser)
    .then(function(response) {
      getUser();
    });
  };

//add message to the DOM
  mc.addMessage = function() {
    console.log('add message', mc.newMessage);
    $http.post('/message', mc.newMessage)
    .then(function(response) {
      getUser();
    });
  };

//get users from the db
  function getUser() {
    $http.get('/user').then(function(response) {
      console.log('users from db: ', response.data);
      mc.users = response.data;
    });
  }

});
