import express from 'express';
import cartrouter from './routes/cartrouter.js';
import productrouter from './routes/productrouter.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'));

app.use('api/products', productrouter);
app.use ('api/carts', cartrouter);

app.listen(8080, ()=> (console.log('Aplicación funcionando en el puerto 8080')))