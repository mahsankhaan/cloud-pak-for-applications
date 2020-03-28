const express = require("express")
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/home", function(req,res){
    console.log("I am home");
    res.send("Hello everyone");
});
app.get("/", function(req,res){
    res.render("user_login");
    console.log("User login");
});
app.get("/admin_login", function(req,res){
    res.render("admin_login");
    console.log("User login");
});
app.get("/admin_in", function(req,res){ 
    var Name = req.query.name;
    var Password = req.query.pass;
if (Password =="123")
{
    const customer = [
        {id:"1", name:"Ahmed" , pass:"123"},
        {id:"2", name:"Saad" , pass:"321"},
        {id:"2", name:"Kamran" , pass:"213"}
  ]
  console.log("Successfully logged in as Customer");
  res.render("admin" , {
      customer: customer
  });
}
else{
    res.render("notfound.ejs");
}
});
app.get("/user_login", function(req,res){
    res.render("user_login");
    console.log("User login");
});
app.get("/user_in", function(req,res){ 
    var Name = req.query.name;
    var Password = req.query.pass;
if (Password =="123")
{ 
  console.log("Successfully logged in as Customer");
  res.render("users");
}
else{
    res.render("notfound.ejs");
}
});
app.listen(3000 , function(){
    console.log("App is running");
});
