import express from 'express';

const viewsrouter = express.Router();

viewsrouter.get('/', (req,res)=>{
    res.render('home', { products })
})

viewsrouter.post('/realtimeproducts',(req,res)=>{
    res.render('realTimeProducts',{ products })

    const socket = io();
    const productsList = document.getElementById('input-tittle')

    productsList.addListener('keyup', evento =>{
        if (evento.key === 'Enter') {
            if (productsList.value.trim().lenght > 0) {
                socket.emit('Lista de Productos', {productsList: productsList.value})
                productsList.value = '';
            }
        }
    })

    socket.on('productLogs', data => {
        const log = document.getElementById('title-product');
        const ListProducts = '';
        data.forEach(ListProduct => {
            ListProducts = ListProducts.ListProduct + 'Producto agregados: <br>'
        })
        log.innerHTML = ListProducts;
    })
})

export default viewsrouter;