function AuthController(Auth) {
  Auth.currentUser()
    .then(function(user) {
      // User was loggin in, or Devise returned
      // previously authenticated session.
      console.log(user); // => {id: 1, etc: '...'}
    }, function(error) {
        // unauthenticated error
    });
};

angular
  .module('app')
  .controller('AuthController', AuthController);