require('dotenv').config();
const express = require('express');

const webRouter = require('./routers/web');
const app = express();
const port = process.env.PORT

const configViewEngine = require('./config/configViewEngine');

configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/',webRouter);
app.listen(port,() =>{
    console.log('listening on port ${port}');
})


