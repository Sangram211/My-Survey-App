const express = require('express');

const app = express(); // from this we create a single app express may contain many

app.get('/',(req,res) => {
	res.send({hi : "i am sangram"});
});
const PORT= process.env.PORT || 5000;
app.listen(PORT);