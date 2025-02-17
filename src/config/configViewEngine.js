const express = require('express');

const configViewEngine =(app) =>  {
    app.set('views','./src/views/');
    app.set('view engine','ejs');

    app.use(express.static('./src/public/images/'));
}
module.exports = configViewEngine;