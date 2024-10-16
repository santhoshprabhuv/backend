const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('./src/db');
const taskRoute = require('./src/routes/tasks');

app.use(cors()); // cors middleware
app.use(bodyParser.json()); // used to access req and res object

const removeResponseHeader = require('./src/middlewares/removeResponseHeader');

app.use(removeResponseHeader);
app.use('/api/tasks', taskRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});