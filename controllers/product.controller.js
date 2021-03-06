const Product = require('../models/product.model');

//Simple test
exports.test  =  function(req, res){
  res.send('Test Here.');
};


exports.product_create = function (req, res, next ) {
    // new Product(req.body).save((err, p) => {
    //   console.log(err);
    // });

    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    // product.save((err, p) => {
    //   console.log(err);
    //   res,json({
    //     error: false,
    //     product: p
    //   });
    // })

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
}; // product_create

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) return next(err);
    res.send(product);
  })
};

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate( req.params.id, {$set:req.body},
    function (err, product){
      if (err) return next(err);
      res.send('Product updated');
    })
}

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err){
      if (err) return next(err);
      res.send('Deleted successfully');
  })

}
