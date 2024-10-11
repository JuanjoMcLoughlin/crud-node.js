const querystring = require('querystring');

const index = (req,res)=>{
    //const limit = req.query.limit;
    const query = querystring.stringify(req.query);
    fetch('https://fakestoreapi.com/products?'+query)
    .then(res=>res.json())
    .then(productos=>{
        res.render('productos',{productos});
    });
};

const show = (req,res)=>{
    fetch('https://fakestoreapi.com/products/'+req.params.id)
    .then(res=>res.json())
    .then(producto=>res.send(producto));//da la respuesta en formato 
};


module.exports = {
    index,
    show
}