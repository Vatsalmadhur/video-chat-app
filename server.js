const express = require("express")
var app = express();
const server = require("http").Server(app);

const { v4: uuidv } = require('uuid');


const io= require ("socket.io")(server);


app.set("view engine","ejs");
app.use(express.static(__dirname + "public"));
app.get("/", (req,res)=>{
    res.redirect(`/${uuidv()}`)
})

app.get ("/room/:room", (req,res)=>{
    res.render("room", {roomId:req.params.room})
});


server.listen(process.env.PORT || 4000 , ()=>{
    console.log(`listening`);
});

