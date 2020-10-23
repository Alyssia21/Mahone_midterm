const fetch = require('node-fetch');
var express = require('express');
const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/',function(req,res){
    fetch('http://xkcd.com/info.0.json')
    .then(response =>  response.json())
    .then(data => {
    //console.log('SUCCESS!' + data)
    res.render('index',{data:data});
    });
    
})

app.get('/random',function(req,res){
    fetch('http://xkcd.com/614/info.0.json' )
    .then(response =>  response.json())
    .then(data => {
   //console.log(data)
    res.render('random',{data:data})
    });  
})

    
app.listen(port,function(){
    console.log('listening on '+port)
});