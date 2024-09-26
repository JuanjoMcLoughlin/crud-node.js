require('dotenv').config();
const express = require('express');
const app =express();

const PORT = process.env.PORT || 3005;

app.get('/',(req,res)=>{
    res.send('Hola Mundo!');
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
