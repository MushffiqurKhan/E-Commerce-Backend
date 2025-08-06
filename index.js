const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./Connection/db')
const cors = require('cors');
const morgan = require('morgan');
const productRoutes = require('./Route/productsRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);

app.listen(PORT,()=>{
    console.log(`Server Started at PORT =${PORT}`)
});