const passport = require('passport');

module.exports = (app) => {

	app.get('/auth/google',
	    passport.authenticate('google', { //use the client id and and google stategy
	        scope: ['profile', 'email'] // what data we accept from google about a user
	    })
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/current_user' ,(req, res) => {
		res.send(req.user); //after user loged in again we get the user from deserilizemethod and send as a response 
	});

	app.get('/api/logout',(req,res) => {
		req.logout();
		res.send(req.id);
	})

};