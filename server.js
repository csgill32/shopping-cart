const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.use("/api/v1/items", routes.items)

app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});