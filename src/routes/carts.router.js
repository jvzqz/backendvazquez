import { Router } from "express";
import cartManager from "../CartManager";

const cartsrouter = Router ();

cartsrouter.post("/", async(req, res)=> {
    const newcarts = await cartManager.addCart();
    try {
        res.send = ({newcarts})
    } catch {
        res.status(500).send(error.message);
    }
})

cartsrouter.get("/:cid", async(req, res)=> {
    const cartid = await cartManager.getCartsById();
    try {
        res.send = ({cartid})
    } catch {
        res.status(500).send(error.message);
    }
})

cartsrouter.post("/:cid/product/:pid", async(req, res)=> {
    const newproducttocart = await cartManager.addProductToCart();
    try {
        res.send = ({newproducttocart})
    } catch {
        res.status(500).send(error.message);
    }
})

export default cartsrouter
