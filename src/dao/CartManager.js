import fs from 'fs'
import productManager from './ProductManager.js'

class CartManager {
    constructor(){
        this.path = 'cart.json';
        this.carts = [];
        this.id = 1;
        this.product = productManager.getProducts();
    } 

    addCart () {
        const cart ={
            id: this.id++,
            product:[],
        }

        this.carts.push(cart)
        const Carts = JSON.stringify(this.carts, null, 2);
        fs.writeFileSync(this.path, Carts, "utf-8");
        console.log ("Carrito agregado correctamente");
    }

    getCarts() {
        try {
          const Carts = fs.readFileSync(this.path, "utf8");
          return Carts;
        } catch (error) {
          return this.carts;
        }
    }

    getCartsById() {
      const exist = this.carts.find((cart) => cart.id == id);
      !exist ? console.log("Not Found") : false;
      return exist;
   }
     
   addProductToCart(cid, pid) {
    const cart = this.getCartsById(cid);
    const product = productManager.getProductById(pid);
 
    if (!cart || !product) {
      return false; 
    }
 
    const existingProduct = cart.products.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      return true
    } else {
      cart.products.push({ id: product.id, quantity: 1 });
      return true
    }
 }
}

const cartManager = new CartManager();

export default cartManager;


