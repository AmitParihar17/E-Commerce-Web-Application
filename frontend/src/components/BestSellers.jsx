import React, { useContext,useState,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSellers = () => {
    const {products} = useContext(ShopContext)
    const[bestSeller,setBestSeller] = useState([])
    

    useEffect(() => {
        const bestProducts = products.filter((item) => (item.bestSeller))
        
        setBestSeller(bestProducts.slice(0,5))
       
        
    },[products])

  return (
    <div className="my-5">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
           Our most popular and highly rated products loved by
          customers!
        </p>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map((item,index) => (
                        <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
                    ))
                }
        </div>
    </div>
  );
}

export default BestSellers
