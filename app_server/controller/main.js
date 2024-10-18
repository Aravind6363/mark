module.exports.index=function(req,res){
    res.render('index', { title: 'FITZEE' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'FITZEE' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'FITZEE' });
   };