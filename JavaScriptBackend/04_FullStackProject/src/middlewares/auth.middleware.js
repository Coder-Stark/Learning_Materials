import { ApiError } from "../utils/ApiErrorUtil.js";
import { asyncHandler } from "../utils/asyncHandlerUtil.js";
import jwt from "jsonwebtoken";
import {User} from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config({path: './.env'});

export const verifyJWT = asyncHandler( async(req, _, next)=>{          //_ ==> not used res
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if(!token){
            throw new ApiError(401, "Unauthorized Request");
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        
        if(!user){
            throw new ApiError(401, "Invalid Access Token");
        }
    
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
})