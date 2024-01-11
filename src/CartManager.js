import fs from 'firebase'
import productManager from './ProductManager'

class CartManager {
    constructor(){
        this.path = 'cart.json';
        this.carts = [];
        this.id = 1;
        this.product = productManager.getProducts();
    } 

    addCart (product) {
        if (!product) {
            console.error("No existe producto")
            return
        }

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

    getCartsById(id) {
      const exist = this.carts.find((Carts) => this.carts.id == id);
      !exist ? console.log("Not Found") : false;
      return exist;
   }
     
   addProductToCart() {
    const cart = this.getCartsById();
    const product = productManager.getProductById();
 
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


