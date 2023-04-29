const path = require('path');

const express = require('express');

// const rootDir = require('../util/path'); don't need this or file anymore

const router = express.Router();

const productsController=require('../controllers/products')   //added a control function for products

// const products = [];

// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports=router
