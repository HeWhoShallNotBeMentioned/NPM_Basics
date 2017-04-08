const unsecuredPlainTextPassword = "password";
const colors = require('colors');
const bcrypt = require('bcrypt');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecuredPlainTextPassword, salt, function(err, hash) {
      console.log(hash.green);
    });
});
