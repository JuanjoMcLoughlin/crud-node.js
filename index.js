require('dotenv').config();
const express = require('express');
const app =express();

const PORT = process.env.PORT || 3005;

const mainRouter = require('./src/routes/main.router');
app.use(mainRouter);

const productosRouter = require('./src/routes/productos.router');
app.use(productosRouter);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
