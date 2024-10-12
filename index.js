require('dotenv').config();
const express = require('express');
const app =express();

const layouts = require('express-ejs-layouts');

const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
//para hacer la ruta absoluta.

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'));
//seteo el motor de vistas.

app.use(layouts);
app.set('layout', 'layouts/layout');

const PORT = process.env.PORT || 3005;

const mainRouter = require('./src/routes/main.router');
app.use(mainRouter);

const productosRouter = require('./src/routes/productos.router');
app.use(productosRouter);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
