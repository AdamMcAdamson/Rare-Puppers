const express = require('express');

const mountRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mountRoutes(app);

app.post('/', (req, res)=>{
	console.log(req.body);
})

// start server
app.listen(port, () => {
	console.log(`App listening at port: ${port}`);
});
