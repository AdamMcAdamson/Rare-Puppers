const express = require('express');

const mountRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

mountRoutes(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// start server
app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
