import mongoose from "mongoose"


const userReview = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength: 50, 
    },
    comment:{
        type:String,
        required:true,
        maxlength: 500, 
    },
    occupation:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    isPublished:{
        type:Boolean,
        default: false,
    },
},
{ timestamps: true },
)
const Review =  mongoose.models.Review || mongoose.model("Review",userReview)
export default Review