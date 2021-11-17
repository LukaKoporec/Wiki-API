const express = "express";
const bodyParser = "body-parser";
const mongoose = "mongoose";
const ejs = "ejs";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
