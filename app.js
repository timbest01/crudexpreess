const express = require('express');
const path=require('path')
const layout=require('express-ejs-layouts')

const app= express();

app.set("view engine","ejs")
app.use(layout)
app.set('views',path.join(__dirname,'views'))

// Route setup

const indexroute=require('./routes/index')

app.use('/',indexroute)

app.listen(5000,function(){
    console.log('server running on port 5000')

})
