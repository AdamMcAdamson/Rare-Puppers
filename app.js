const express = require('express');

// const users = require("./routes/users");
// const cards = require("./routes/cards");
const mountRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mountRoutes(app);


const port = process.env.PORT || 3000;

// app.use('/users', users); 
// app.use('/cards', cards);


// start server
app.listen(port, () => {
	console.log(`App listening at port: ${port}`);
});
