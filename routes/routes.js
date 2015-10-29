var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
})

router.route('/trucks')

	.post(function(req, res){

    var truckName = req.body.truckName;
    var city = req.body.city;
    var description = req.body.description;
    var cuisine = req.body.cuisine;
    var currentLocation = req.body.currentLocation;
    var hours = req.body.hours;
    var timeCategory = req.body.timeCategory;
    var payment = req.body.payment;
    var foodOptions = req.body.foodOptions;
    var facebook = req.body.facebook;
    var twitter = req.body.twitter;

  	mongoose.model('Truck').create({
        truckName: truckName,
        city: city,
        description: description,
        cuisine: cuisine,
        currentLocation: currentLocation,
        hours: hours,
        timeCategory: timeCategory,
        payment: payment,
        foodOptions: foodOptions,
        facebook: facebook,
        twitter: twitter
    	}, function(err, truck){
      		if(err){
        	res.send("Problems, Houston.");
      		}else{
            res.send(truck);
          }
    	});
  	})

// GET All BLOGS
  .get(function(req, res) {
    mongoose.model('Truck').find({}, function(err, truck){
      if(err){
        res.send("Problems, Houston.");
      } else {
        console.log("Get is working")
        res.json(truck);
      }
    });
  })

router.route('/trucks/:truck_id')

    .get(function(req, res){
    	mongoose.model("Truck").findById(req.params.truck_id, function(err, truck){
    		if(err){
    			res.send("Do you require assistance?");
    		} else{
    			console.log("Get by id is working");
    			res.json(truck);
    		}
    	})
    });

//     .put(function(req, res) {
//         mongoose.model("Blog").findById(req.params.blog_id, function(err, blog) {
//             if (err)
//                 res.send(err);
//             blog.title = req.body.title;
//         	blog.date = req.body.date;
//         	blog.content = req.body.content;
//             blog.save(function(err) {
//                 if (err)
//                     res.send(err);
//                 res.json({ message: 'Blog updated!' });
//             });
//     	});
//     })

//     .delete(function(req, res) {
//         mongoose.model("Blog").remove({
//             _id: req.params.blog_id
//         }, function(err, blog) {
//             if (err)
//                 res.send(err);
//             res.json({ message: 'Successfully deleted' });
//         });
//     });

module.exports = router;