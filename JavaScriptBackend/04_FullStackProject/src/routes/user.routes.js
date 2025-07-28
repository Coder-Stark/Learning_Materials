import {Router} from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//register route
router.route("/register").post(
    upload.fields([                  //middleware
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]), 
    registerUser
);


//login route
router.route("/login").post(loginUser)


//secured routes
//logout route
router.route("/logout").post(
    verifyJWT,                        //middleware
    logoutUser
);


//refreshToken route
router.route("/refresh-access-token").post(refreshAccessToken);


export default router;