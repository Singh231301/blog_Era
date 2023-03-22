//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Manish developer hub is one of the leading companies for web designing services in Surat. We provide the finest and the most exclusive website designing and development to our clients. Our company believes in applying cutting edge technologies to acquire the utmost standards of creativity and quality. We fully assure our customers to serve them with consistency and reliability with our website design and web development services in Surat. ";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
let posts = [];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", { stratingContent: homeStartingContent, posts: posts });
});

app.get("/about", function (req, res) {
  res.render("about", { Abotcon: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { Concontact: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});






app.post("/compose", function (req, res) {
  const post = {
    title: req.body.posttitle,
    contant: req.body.postbody,
  };
  posts.push(post);

  res.redirect("/");
});



app.get("/post/:postName",function(req,res){
  var requestedTitle =  _.lowerCase(req.params.postName);
  
  posts.forEach(function(post){
    if(_.lowerCase(post.title) === requestedTitle){
      res.render("post",{title: post.title, content: post.contant});
      
    }
    
    
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
