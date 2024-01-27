import express from 'express';
import cartsrouter from './routes/carts.router.js';
import productsrouter from './routes/products.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

app.use('api/products', productsrouter);
app.use ('api/carts', cartsrouter);

app.listen(8080, ()=> (console.log('Aplicación funcionando en el puerto 8080')))