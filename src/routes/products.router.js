import { Router } from "express";
import productManager from "../ProductManager.js";

const productsrouter = Router ();

productsrouter.get("/", async(req,res)=>{
    try{
        const { limit } = req.query;
        const products = await productManager.getProducts();
        const productslimit = products.slice(0,limit);np

        if (!limit) {
            res.send ({productslimit})
        } else {
            res.send ({products})
        }       
    } catch {
        res.status(500).send(error.message);
    }
})

productsrouter.get("/:pid", async(req,res)=>{
        const productid = req.params.pid
        const productId = await productManager.getProductById(productid);
    try{
        if (!productid) return res.send ({productId})   
    }catch{
        res.status(500).send(error.message);
    }
})

productsrouter.post("/", async(req, res)=> {
    const newProduct = req.body
    const newproduct = productManager.addProduct(newProduct);
    try {
        if (!newProduct) return res.send({newproduct})
    } catch {
        res.status(500).send(error.message);
    }
})

productsrouter.put("/:pid", async(req, res)=> {
    const pid = req.params.pid
    const UpdateProduct = req.body
    const updateproduct = productManager.updateProducts(pid, UpdateProduct)
    try {
        res.send({updateproduct})
    } catch {
        res.status(500).send(error.message);
    }
})

productsrouter.delete("/:pid", async (req, res)=> {
    const pid = req.params.pid
    const deleteproduct = productManager.deleteProducts(pid)
    try {
        res.send({deleteproduct})
    } catch {
        res.status(500).send(error.message);
    }
})

export default productsrouter
