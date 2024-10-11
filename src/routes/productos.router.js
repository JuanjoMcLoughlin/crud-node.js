const express = require('express');
const router = express.Router();

const querystring = require('querystring');

router.get('/productos',(req,res)=>{
    //const limit = req.query.limit;
    const query = querystring.stringify(req.query);
    fetch('https://fakestoreapi.com/products?'+query)
    .then(res=>res.json())
    .then(productos=>res.send(productos));
});


router.get('/productos/:id',(req,res)=>{
    fetch('https://fakestoreapi.com/products/'+req.params.id)
    .then(res=>res.json())
    .then(producto=>res.send(producto));//da la respuesta en formato 
});





module.exports = router;