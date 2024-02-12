import { Router } from "express";
import productManager from "../dao/ProductManager.js";
import {productModel} from "../dao/models/products.schema.js";

const productsrouter = Router ();

productsrouter.get("/", async(req,res)=>{
    try{
        const { limit } = req.query;
        const products = productManager.getProducts();
        const productslimit = products.slice(0,limit);

        if (!limit) {
            res.send ({productslimit})
        } else {
            res.send ({products})
        }       
    } catch (error){
        console.log(error)
    }

    res.render('home', {products})
})

productsrouter.get("/:pid", async(req,res)=>{
        const productid = req.params.pid
        const productId = await productManager.getProductById(productid);
    try{
        if (!productid) return res.send ({productId})   
    } catch (error){
        console.log(error)
    }
})

productsrouter.post("/", async(req, res)=> {
    const newProduct = req.body
    const newproduct = productManager.addProduct(newProduct);
    try {
        if (!newProduct) return res.send({newproduct})
    } catch (error){
        console.log(error)
    }
})

productsrouter.put("/:pid", async(req, res)=> {
    const pid = req.params.pid
    const UpdateProduct = req.body
    const updateproduct = productManager.updateProducts(pid, UpdateProduct)
    try {
        res.send({updateproduct})
    } catch (error){
        console.log(error)
    }
})

productsrouter.delete("/:pid", async (req, res)=> {
    const pid = req.params.pid
    const deleteproduct = productManager.deleteProducts(pid)
    try {
        res.send({deleteproduct})
    } catch (error){
        console.log(error)
    }
})

export default productsrouter
