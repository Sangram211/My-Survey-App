const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } =mongoose; //above line means the same.




const userSchema = new Schema({ // by declaring schema  we are defining the columnns extra cant be added.

	googleId : String,// its like proporties of a class or cols of tabel 
	name  : String
});


mongoose.model('users', userSchema); // takes model (table) name and schema as parameter