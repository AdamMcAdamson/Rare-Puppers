const express = require('express');

// const users = require("./routes/users");
// const cards = require("./routes/cards");
const mountRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

mountRoutes(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/users', users); 
// app.use('/cards', cards);

app.post('/', (req, res)=>{
	console.log(req.body);
})

// start server
app.listen(port, () => {
	console.log(`App listening at port: ${port}`);
});
