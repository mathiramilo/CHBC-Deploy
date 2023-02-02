const express = require('express')
const ProductsController = require('../../../controllers/products.controller')

const router = express.Router()

// Routes
router.get('/', ProductsController.getProducts)
router.get('/test', ProductsController.mockProducts)
router.get('/:id', ProductsController.getProductById)
router.post('/', ProductsController.saveProduct)
router.put('/:id', ProductsController.updateProduct)
router.delete('/:id', ProductsController.deleteProduct)

module.exports = router
