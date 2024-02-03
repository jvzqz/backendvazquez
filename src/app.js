import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import cartsrouter from './routes/carts.router.js';
import productsrouter from './routes/products.router.js';
import viewsrouter from './routes/views.router.js';
import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(8080, ()=> 
console.log('Server running in port 8080')
);
const io = new Server(httpServer);

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.use('/api/products', productsrouter);
app.use ('/api/carts', cartsrouter);
app.use ('/', viewsrouter);


const ListProducts = [];
io.on('addProduct', socket => {
    socket.on('products', data => {
        ListProducts.push(data)
        io.emit('productLogs', ListProducts)
    })
})