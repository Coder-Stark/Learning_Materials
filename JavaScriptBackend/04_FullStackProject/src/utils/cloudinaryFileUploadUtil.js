import fs from "fs";
import cloudinary from "../config/cloudinary";


const uploadCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null;
        
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("File is uploaded on cloudinary", res.url)
        return res;
    }catch(err){
        fs.unlinkSync(localFilePath);    //remove temporary saved local file
        return null;
    }
}

export {uploadCloudinary};