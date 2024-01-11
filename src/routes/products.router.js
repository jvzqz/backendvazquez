import { Router } from "express";
import productManager from "./ProductManager";

const productsrouter = Router ();

productsrouter.get("/", async(req,res)=>{
    try{
        const { limit } = req.query;
        const products = await productManager.getProducts();
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

productsrouter.get("/:pid", async(req,res)=>{
        const productid = req.params.pid
        const productId = await productManager.getProductById();
    try{
        if (!productid) return res.send ({productId})   
    }catch{
        res.status(500).send(error.message);
    }
})

productsrouter.post("/", async(req, res)=> {
    const newproduct = productManager.addProduct();
    try {
        res.send = ({newproduct})
    } catch {
        res.status(500).send(error.message);
    }
})

productsrouter.put("/:pid", async(req, res)=> {
    const updateproduct = productManager.updateProduct()
    try {
        res.send = ({updateproduct})
    } catch {
        res.status(500).send(error.message);
    }
})

productsrouter.delete("/:pid", async (req, res)=> {
    const deleteproduct = productManager.deleteProduct()
    try {
        res.send = ({deleteproduct})
    } catch {
        res.status(500).send(error.message);
    }
})

export default productsrouter
