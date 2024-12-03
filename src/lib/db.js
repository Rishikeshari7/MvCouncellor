import mongoose from "mongoose";
let isConnected = false;
const url=process.env.DB_URL //we dont need to install any thing to use this
export const dbConnect = async ()=>{
    if(isConnected){
        console.log("DB is Already Connected");
    }
    try{
        await mongoose.connect(url)
        isConnected=true;
        console.log("DB connection stablished");
    }
    catch(err){
        isConnected=false;
        console.log ("Error in BD Connection");
    }
}