import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4334/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.result))
      .catch((err) => {
        console.log(err.message);
      });
  }, [productId]);

    if (!product) {
    return <h2>Yuklanmoqda...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
    Single product
  </h1>

  <div className="single-product max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8">
    <div className="w-full md:w-1/2">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 leading-tight">
        {product.title}
      </h1>
      
      <p className="text-gray-600 text-lg leading-relaxed">
        {product.description}
      </p>
      
      <h2 className="text-3xl font-semibold text-indigo-600">
        Narxi: {product.price} $
      </h2>
      
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg active:transform active:scale-95 uppercase tracking-wider">
        Yuborish
      </button>
    </div>
  </div>
</div>

  );
};

export default SingleProduct;
