
const express = require('express');
const app = express();
const manager = require("./ProductManager")

app.use(express.urlencoded({extended:true}))

app.get("/products", async(req,res)=>{
    try{
        const { limit } = req.query;
        const products = await manager.getProducts();
        const productslimit = products.slice(0,limit);

        if (!limit) {
            res.send ({productslimit})
        } else {
            res.send ({products})
        }       
    } catch {
        res.status(500).send(error.message);
    }
})

app.get("/products/:pid", async(req,res)=>{
    try{
        const productid = req.params.pid
        const productId = await manager.getProductById();
        if (!productid) return res.send ({productId})   
    }catch{
        res.status(500).send(error.message);
    }
})


app.listen(8080, ()=> (console.log('Aplicación funcionando en el puerto 8080')))