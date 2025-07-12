import jwt from "jsonwebtoken"

const adminAuth = async (req,res,next) => {
    try {
        const {token} = req.headers
        if (!token) {
            return res.status(404).json({success : false , message : "Token not found"})
        } 
       const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
       if(decodedToken.role !== "admin" ){
            return res.status(403).json({success : false,message : "Not Authoized as admin"})
       }
       next()

    } catch (error) {
        console.log(error)
        res.status(500).json({success : false,message : error.message})
    }
}
export {adminAuth}