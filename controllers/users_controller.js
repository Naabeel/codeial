const User = require('../models/user')
module.exports.profile = function(req,res){
     return res.render('user1', {
        title:"HOMEPAGE",
        name: "social screen"
     }) 
    };

module.exports.signup = function(req,res){
   return res.render('user_sign_up', {
      title: 'sign up page',
      
   });
}

module.exports.signin = function(req,res){
   return res.render('user_sign_in',{
      title: 'sign In page'
   });
}


module.exports.create = function(req,res){
   if(req.body.password != req.body.confirm_password){
      return res.redirect('back');
   }
   User.findOne({email: req.body.email}, function(err,user){
      if(err){console.log('error in finding the user while signing up'); return }

      if(!user){
         User.create(req.body, function(err, user){
            if(err) {console.log('error in finding the user while signing in'); return }


            return res.redirect('/user/signin');

         })
      }else{
         res.redirect('back');
      }
   })

}


module.exports.createSession = function(req,res){
   
}