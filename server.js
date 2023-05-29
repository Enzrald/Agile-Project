const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./src/features/routers/api');




app.use(morgan('tiny'));
app.use ('/api',routes );

app.listen(PORT,console.log(`Server listening on ${PORT}`));