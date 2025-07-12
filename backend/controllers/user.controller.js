import userModel from "../models/user.model.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for login
const loginUser = async(req,res) => {
    try {
        const {email,password} = req.body;
            // check user
          const user =   await userModel.findOne({email})
          if (!user) {
            return res.status(404).json({success : false , message : "User doesn't exist"})
          }
          // check password
        const isMatch = await bcrypt.compare(password,user.password)
        if (isMatch) {
            const token = createToken(user._id)
            return res.status(200).json({success : true ,message :"login successfull",token })
        } else {
            res.status(401).json({success : false ,message : "Invalid Password" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false , message : error.message})
        
    }
}

// Route for user register

const registerUser = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        //checking user already exixt or not
     const exist  = await userModel.findOne({email})
        if (exist) {
         return  res.json({success : false, message : "User alrady exist"})
        }
        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success : false , message : "Please enter a valid email"})
        }
        if(password.length < 7 ) {
            return res.json({success : false,message : "Please enter a strong password"})
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        // create user
        const newUser =  new userModel({
            name,
            email,
            password: hashedPassword,
        })
        // save 
         const user = await newUser.save()
         // create token
         const token =  createToken(user._id)
         res.json({success : true,token})
         console.log("tokencreated : ",token);
         

    } catch (error) {
        console.log(error);
        res.json({success : false,message : error.message})
        
    }
}

// Route for admin login

const adminLogin = async(req,res) => {
    
}

export {loginUser,registerUser,adminLogin}