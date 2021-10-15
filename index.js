import express from "express"
import mongoose from "mongoose"
import router from "./routes/drinks.route"

const port = 8080

const app =express()
app.use(express.json())

app.use(router)

const DB_URL = "mongodb+srv://Den:Gizmor@cluster0.rgsm1.mongodb.net/myFirstMagazin?retryWrites=true&w=majority"

async function startApp(params) {
  try{
    await mongoose.connect(DB_URL)
    app.listen(port, ()=>{
        console.log("server startanul")
    })
  } catch(e){
      console.log(e)
  } 
}

startApp()
