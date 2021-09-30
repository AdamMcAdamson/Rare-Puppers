const express = require('express');

const mountRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mountRoutes(app);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/public/index.html'));
});

app.get('/express_backend', (req, res)=>{
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


// start server
app.listen(port, () => {
	console.log(`App listening at port: ${port}`);
});
