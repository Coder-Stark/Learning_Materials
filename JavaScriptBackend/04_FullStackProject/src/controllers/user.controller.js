import {asyncHandler} from "../utils/asyncHandlerUtil.js"
import {ApiError} from "../utils/ApiErrorUtil.js";
import {User} from  "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUtil.js";
import { ApiResponse } from "../utils/ApiResponseUtil.js";

//register user
const registerUser = asyncHandler(async(req, res)=>{
    // res.status(200).json({message: "OK"})

    /*steps
    1. get user details from frontend or postman
    2. apply validation - not empty
    3. check if user already exist: username, email
    4. check for images, avatar
    5. upload them to cloudinary, avatar
    6. create user object - create entery in db
    7. remove password and refresh token field from response
    8. check user created or not
    9. return res
    */
   
   
    //1. get user details from frontend or postman
    const {username, email, fullName, password} = req.body;
    //console.log("username : ", username);
   
    /*
    if(fullName === ""){
        throw new ApiError(400, "Full name is required");
    }
    */
   
    
   //2. apply validation - not empty
    if(
       [username, fullName, email, password]
       .some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400, "All Fields are required");
    }

    
    //3. check if user already exist: username, email
    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })
    
    if(existedUser){
        throw new ApiError(409, "User already exist");
    }
    // console.log(req.files);

    
    //4. check for images, avatar
    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
    
    if(!avatarLocalPath){
        throw new ApiError(400, "AvatarLocalPath is not specified");
    }
    

    //5. upload them to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    
    if(!avatar){
        throw new ApiError(400, "Avatar File is required");
    }


    //6. create user object - create entery in db
    const user = await User.create({
        username: username.toLowerCase(),
        email,
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        // watchHistory,          //by default 0
        password,
        // refreshToken,          //by default
    })


    //7. remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )


    //8. check user created or not
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user")
    }


    //9. return res
    return res.status(201).json(
        new ApiResponse(
            201,
            createdUser,
            "User Registered Successfully",
            //200
        )
    )
})


//login user
const generateAccessAndRefreshTokens = async(userId) =>{
    try{
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};

    }catch(err){
        throw new ApiError(500, "Something Went wrong while generating access and refresh token")
    }
}
const loginUser = asyncHandler(async (req, res)=>{
    /*Steps
    1. get user details from frontend or postman
    2. check based on username or email (here both)
    3. find the user
    4. password check
    5. access and refresh token
    6. send in cookies
    */


    //1. get user details from frontend or postman
    const {username, email, password} = req.body;
    

    //2. Check based username or email
    // if(!(username || email)){           //any one required (a || b ==> !(a || b))   //take negation for error check
    if(!username && !email){                //both required (a && b ==> !a && !b)
        throw new ApiError(400, "Username or Email is required");
    }

    //3. Find the user
    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user){
        throw new ApiError(404, "User does not exist");
    }

    //4. password check
    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid User Credentials");
    }


    //5. access and refresh token
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);

    //6. send in cookies
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {              //to modified allowed by server only, not by frontend
        httpOnly: true,
        secure: true
    }

    return res.status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        user: loggedInUser, 
                        accessToken, 
                        refreshToken                     //for user custom cookie save
                    }, 
                    "User logged in Successfully"
                )
            )
})


//logout user
const logoutUser = asyncHandler(async (req, res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken: 1               //properly removes the field
            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, {}, "User logged Out Successfully"))
})


export {registerUser, loginUser, logoutUser};