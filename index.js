var express = require('express');
const port = process.env.port || 3000;
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/',function(req,res){
    res.render('index');
    
});

app.get('/random',function(req,res){
    res.render('random');
    
});

app.listen(port,function(){
    console.log('listening on'+port)
});

