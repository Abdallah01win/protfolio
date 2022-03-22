const express = require('express');
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'app')))
app.listen(process.env.PORT || 3003, ()=>{
    console.log("server up on port 3003")
})

app.get('/', (req, res)=>{
    res.render('index')
})