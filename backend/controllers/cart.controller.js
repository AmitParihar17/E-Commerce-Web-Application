import userModel from "../models/user.model.js"

// add product to user cart

const addToCart = async(req,res) => {
    try {
        const {userId,size,itemId} = req.body

        const userData = await userModel.findById(userId)
        let cartData = userData.cartData

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})

        res.status(200).json({success : true,message : "Added to Cart"})
    } catch (error) {
        console.log(error);
        res.json({success : false,message : error.message})
        
    }

}

//update product to usercart
const updateCart = async(req,res) => {
    try {
        const {userId,size,quantity,itemId} = req.body

        const userData = await userModel.findById(userId)
        let cartData =  userData.cartData

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.status(200).json({success: true,message : "Updated cart"})
    } catch (error) {
        console.log(error);
        res.json({success : false , message : error.message })
    }
}

// get user cart data
const getUserCart = async(req,res) => {
   try {
     const {userId} = req.body

     const userData = await userModel.findById(userId)
     let cartData = userData.cartData

     res.status(200).json({success : true ,message : "Fetch cart data",cartData})
   } catch (error) {
          console.log(error);
          res.json({ success: false, message: error.message });
   }
}

export {addToCart,updateCart,getUserCart}
