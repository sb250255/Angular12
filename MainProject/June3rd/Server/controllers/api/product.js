
var Products = require('../../models/products'); // Model object

// Wrap all the methods in an object

var product = {

    getAll : function(req, res){
        console.log("Get All Initiated");

        Products.find(function(err, data){
                if(err){
                    res.status(500).send('There is server internal error');
                }else{
                    res.json(data); // Return all the data from DB
                }
        })
    },
    getPropertyByCity : function(req, res){
        var _city = req.params.city;
        Products.find({City : _city}, function(err, data){
            if(err){
                res.status(500).send('There is server internal error');
            }else{
                res.json(data); // Return the data which matches the city from DB
            }
        })
    }



}

module.exports = product;


