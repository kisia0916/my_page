const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const indexRout = require("./route/index");
app.set('views',path.join(__dirname,'views'));
app.use("/styles", express.static("styles"));
app.use("/imgs", express.static("imgs"));
app.set('view engine',"ejs");
app.use("/",indexRout);
app.listen(process.env.PORT||3000,()=>{
    console.log("server run");
})