import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv";

dotenv.config({path: './.env'});
// Debug: Check if environment variables are loaded
/*
console.log("Environment variables check:");
console.log("CLOUD_NAME:", process.env.CLOUD_NAME ? "✓ Loaded" : "✗ Missing");
console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY ? "✓ Loaded" : "✗ Missing");
console.log("CLOUD_API_SECRET:", process.env.CLOUD_API_SECRET ? "✓ Loaded" : "✗ Missing");
*/
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

export default cloudinary;