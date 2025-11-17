import React from "react"

interface Product {
    name: string 
    description: string 
    image: string 
    price: number 
    category: string
    quantity: number 
}

const ProductMemo = React.memo(({ item }: { item: Product }) => 
(
    <div className="rounded-lg w-full shadow-lg items-center justify-center h-72 flex flex-col transition-transform hover:scale-105 cursor-pointer">

            <img src={item.image} alt={item.name} className="w-full h-3/4 object-cover rounded-lg transition-opacity hover:opacity-75" loading="lazy" />
            <h1 className="text-2xl h-1/4 pt-5 font-serif truncate w-full px-2 text-center">{item.name}</h1>

    </div>
))

export default ProductMemo ;


