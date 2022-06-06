
import mongoose from "mongoose";

const connection= async ()=>{
    const URL='mongodb+srv://abhijeet:<Abhijeet@ak47aj>@fantsyteam.qw4jeqf.mongodb.net/?retryWrites=true&w=majority'
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("DATABASE CONNECTED");
    }
    catch(error)
    {
        console.log(" ERROR IN DATABASE",error);
    }
}

export default connection;