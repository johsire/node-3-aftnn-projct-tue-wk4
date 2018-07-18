const swag = require('../models/swag');

module.exports = {
  add: ( req, res, next ) => {
    const { id } = req.query;
    let { cart } = req.session.user;

    // This will return -1 if it isn't in the cart:
    const index = cart.findIndex(swag => swag.id === id);

    if(index === -1) {
      const selectedSwag = swag.find(swag => swag.id === id);

      cart.push(selectedSwag);
      req.session.user.total += selectedSwag.price;
    }

    res.status(200).send(req.session.user);
  },

  delete: ( req, res, next ) => {

  },

  checkout: ( req, res, next ) => {

  }
} 