import { Router } from "express";
import cartManager from "../dao/CartManager.js"

const cartsrouter = Router ();

cartsrouter.post("/", async(req, res)=> {
    const newcarts = cartManager.addCart();
    try {
        res.send({newcarts})
    } catch (error){
        console.log(error)
    }
})

cartsrouter.get("/:cid", async(req, res)=> {
    const cid = req.params.cid
    const cartid = await cartManager.getCartsById(cid);
    try {
        res.send({cartid})
    } catch (error){
        console.log(error)
    }
})

cartsrouter.post("/:cid/product/:pid", async(req, res)=> {
    const cid = req.params.cid
    const pid = req.params.pid
    const newproducttocart = cartManager.addProductToCart(cid, pid);
    try {
        res.send({newproducttocart})
    } catch (error){
        console.log(error)
    }
})

export default cartsrouter
