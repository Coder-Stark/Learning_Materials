import mongoose from 'mongoose';

const connectDB = async ()=>{
    try{
        // await mongoose.connect(process.env.MONGO_URI);
        // console.log("MongoDB Connected Successfully !!!")

        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully !!! : ${connectionInstance.connection.host}`)
    }catch(err){
        console.log("MongoDB Connection Error : ", err);
        process.exit(1);
    }
}

export default connectDB;