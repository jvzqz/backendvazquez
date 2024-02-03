import express from 'express';

const viewsrouter = express.Router();

viewsrouter.get('/', (req,res)=>{
    res.render('home', { products })
})

viewsrouter.post('/realtimeproducts',(req,res)=>{
    res.render('realTimeProducts',{ ListProduct })
})

export default viewsrouter;