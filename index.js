const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const general_routes = require('./routes/general');

app.use(bodyParser.json());
app.use(cors());


app.use('/api_v1/public',general_routes);

// Define your API routes and handlers here

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

