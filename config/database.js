import mongoose from "mongoose"
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection 

//this is the shortcut to mongoose.connection object
db.on("connected", function(){
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)

})