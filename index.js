const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/key');

require('./models/User') // this order of this import and passport is imp bcoz user is used in passport
require('./services/passport'); // no need to store in variable
const authRoutes = require('./routes/authRoutes');



mongoose.connect(keys.mongoURI);
const app = express(); // from this we create a single app express may contain many

// app.get('/',(req,res) => {
// 	res.send({bye : "from sangram"}); //sample to send response from request with a url
// });

// below 3 are middle ware doing some preprossessing before request sent to route handler.
app.use(cookieSession({
	maxAge : 30 * 24*60*60*1000,
	keys : [keys.sessionKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);