const express = require('express');
const app = express();
const db = require('./src/config/db');
const env = require('./src/config/env');
const customerRoutes = require('./src/routers/customer');
const discountRoutes = require('./src/routers/discount');
const couponRoutes = require('./src/routers/coupon');
const productRoutes = require('./src/routers/product');
const productCategoryRoutes = require('./src/routers/productCategory');
const productDetailRoutes = require('./src/routers/productDetail');
const orderRoutes = require('./src/routers/order');
const orderDetailRoutes = require('./src/routers/orderDetail');
const whishListRoutes = require('./src/routers/wishList');
const productImageRoutes = require('./src/routers/productImage');

db.connect((err) => {
  if (err) {
    console.log('DB connection error' + err);
    return;
  }
  console.log('db connected!');
});

app.use(express.json());

app.use('/api/customer', customerRoutes);
app.use('/api/discount', discountRoutes);
app.use('/api/productCategory', productCategoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/orderDetail', orderDetailRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/productDetail', productDetailRoutes);
app.use('/api/whishList', whishListRoutes);
app.use('/api/productImage', productImageRoutes);

app.listen(env.port, () => {
  console.log(`Server up and running on port ${env.port}`);
});
