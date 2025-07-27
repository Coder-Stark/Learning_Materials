import fs from "fs";
import cloudinary from "../config/cloudinary.js";


const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null;
        
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // console.log("File is uploaded on cloudinary", res.url)
        fs.unlinkSync(localFilePath);
        return res;
    }catch(err){
        fs.unlinkSync(localFilePath);    //remove temporary saved local file
        return null;
    }
}

export {uploadOnCloudinary};