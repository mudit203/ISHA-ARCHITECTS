import mongoose from "mongoose";
const connectdb=async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/Hackathon project");
        console.log("mongodb connected successfully");
        
    }
    catch(error){
        console.log(error);
    }
}
export default connectdb;