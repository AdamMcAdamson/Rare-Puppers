const express = require('express');
const path = require('path');

const mountRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

mountRoutes(app);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/express_backend', (req, res)=>{
	res.send({ out: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


// start server
app.listen(port, () => {
	console.log(`App listening at port: ${port}`);
});
