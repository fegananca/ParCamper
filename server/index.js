const express = require('express');
const router = require('./router/router.js');
const PORT = 3001;
const cors = require('cors');

//start the app
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

//listen
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
