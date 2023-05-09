const router = require('express').Router();

// home page route
router.get('/',function(req,res){
    res.render('home')
})

// About page 
router.get('/about',function(req,res){
    res.render('about')
})

// Contact page
router.get('/contact', function(req,res){
    res.render('contact')

})

module.exports =router