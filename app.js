const express = require ("express")
const path = require("path")
const app = express()
app.use(express.static('public'));



const publicFolderPath = path.resolve(__dirname, "./public")
app.use(express.static(publicFolderPath));

app.listen (process.env.PORT || 3000, ()=> {
    console.log("Servidor funcionando")
})

app.get ("/", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"))
})


app.get ("/home", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"))
})


app.get ("/login", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/login.html"))
})

app.get ("/register", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/register.html"))
})
