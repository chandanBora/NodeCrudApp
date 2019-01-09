const express = require ('express');
const router  = express.Router();

//Require the controller
const product_controller  = require('../controllers/product.controller');

//A sample test url
router.post('/test', product_controller.test);
router.post('/create', product_controller.product_create);

//Get Requests: Fetch
router.get('/:id', product_controller.product_details);

//Put: update
router.put('/:id/update', product_controller.product_update);

//Delete
router.delete('/:id/delete', product_controller.product_delete);

module.exports   =  router;
