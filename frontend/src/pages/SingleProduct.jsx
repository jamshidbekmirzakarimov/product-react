import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";


const SingleProduct = () => {
  const [productsData, setProductsData] = useState(null);
  const {id} = useParams()
  
  useEffect(()=>{
    fetch(`http://localhost:4334/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setProductsData(data.result)
    })
  },[])
  
  
  if (!productsData) return <h1>Yuklanmoqda...</h1>;
  console.log(productsData,'productlar');


  return (
<div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
  <div className="single-product-card max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm p-5">
    
    <img 
      src={productsData.image} 
      alt={productsData.title} 
      className="w-full h-64 object-contain rounded-lg mb-4" 
    />

    <h2 className="text-xl font-bold text-gray-800 mb-2">
      {productsData.title}
    </h2>

    <span className="text-lg font-medium text-blue-600 block mb-3">
      ${productsData.price}
    </span>

    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
      {productsData.description}
    </p>

    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg transition-colors">
      Sotib olish
    </button>

  </div>
</div>

  )
}

export default SingleProduct
