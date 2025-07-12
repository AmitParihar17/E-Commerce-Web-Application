import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/product.model.js"

// function for add product

const addProduct = async(req,res) => {
    try {
        const {name,price,description,bestSeller,subCategory,sizes,category} = req.body
        

        const image1 = req.files.image1 && req.files?.image1[0]
        const image2 = req.files.image2 && req.files?.image2[0]
        const image3 = req.files.image3 && req.files?.image3[0]
        const image4 = req.files.image4 && req.files?.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined )

        let imagesUrl = await Promise.all(
            images.map(async(item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type : "image"})
                return result.secure_url
            })
        )
        
        const productData = {
            name,
            description,
            price : Number(price),
            category,
            subCategory,
            bestSeller : bestSeller === "true" ? true : false,
            sizes : JSON.parse(sizes),
            image : imagesUrl,
            date : Date.now()
        }

        console.log(productData);
        
        const product = new productModel(productData)
        await product.save()

        res.status(200).json({success : true,message : "product added successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false , message : error.message})
        
    }
}

// function for listProducts

const listProducts = async(req,res) => {
    try {
        const products = await productModel.find({})
        res.status(200).json({success : true, message: "product fetch successfully",products })
         
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : error.message})
        
    }

}

// function for remove product

const removeProducts = async(req,res) => {
    try {
           await productModel.findByIdAndDelete(req.body.id)
           res.status(200).json({success : true,message : "Product remove successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success : false ,message : error.message})
    }
}

// function for single product info

const singleProduct = async(req,res) => {
    try {
        const {productid} = req.body
      const product =  await productModel.findById(productid)
      if(!product){
        return res.status(404).json({success : false ,message : "Product not found"})
      }
        res.status(200).json({success : true ,message : "Single Product fetch successfully",product})
    } catch (error) {
        console.log(error)
        res.status(500).json({success : false, message : error.message})
    }
}

export {
    addProduct,
    listProducts,
    removeProducts,
    singleProduct
}