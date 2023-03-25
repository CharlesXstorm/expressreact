
const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const path = require("path")

//Setting template engine
app.set("views",__dirname+"views")
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())

//parsing form info and reading static files
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))