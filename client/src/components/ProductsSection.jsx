import React from 'react'

const ProductsSection = () => {
    const productsData = [
        {
            id: 1,
            product_name: "Converse All Star Hi Plimsolls",
            product_price: "$75.00",
            product_image: "https://themewagon.github.io/cozastore/images/product-09.jpg"
        },
        {
            id: 2,
            product_name: "Herschel supply",
            product_price: "$63.15",
            product_image: "https://themewagon.github.io/cozastore/images/product-12.jpg"
        },
        {
            id: 3,
            product_name: "Mini Silver Mesh Watch",
            product_price: "$86.85",
            product_image: "https://themewagon.github.io/cozastore/images/product-15.jpg"
        }
    ]
  return (
    <div className='py-16 px-6 md:px-20'>
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Latest Collection</h2>
        <div className="products-container md:grid-cols-3 sm:grid-cols-2 gap-20 grid-cols-1 grid">
            {productsData.map((product) => (
            <div className="product border border-gray-300 shadow-md">
                <div className="product-img">
                    <img src={product.product_image} alt="" />
                </div>
                <div className="product-text p-3">
                    <p>{product.product_name}</p>
                    <p>{product.product_price}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ProductsSection
