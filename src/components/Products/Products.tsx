import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import api from "../../api/api"
import { useNavigate } from "react-router-dom"


interface Product {
    name: string 
    description: string 
    image: string 
    price: number 
    category: string
    quantity: number 
}




// Products page , Here stores the Informations of Products , and featurs like Searching and etc ... (Incomplete) 
export default function (){

    const [products , setProducts] = useState<Product[]>([]) ;   
    const [originalProduct , setOriginalProduct] = useState<Product[]>([]) ; 
    const navigate = useNavigate() ; 

    useEffect(() => {
        fetchDataFromApi(setProducts); 
    } , [])



    return(
        <div className="w-full h-full flex flex-col gap-2 p-3 items-center justify-center">
            
            {/* Upper Part  */}
            <div className="h-20 w-full p-3 gap-2 bg-gray-300 rounded-lg flex flex-row justify-between">

                {/* left part  */}
                <div className="w-1/6 rounded-lg">

                </div>

                {/* Search Part  */}
                <div className="w-4/6 fixed flex items-center justify-center"> 
                    <input type="text" placeholder="Search Product..." className="h-10 text-lg w-1/2 p-2 rounded-md outline-none" />
                </div>

                {/* Right Part  */}
                <div className="w-1/6 flex items-center justify-center">
                    <button className="bg-blue-500 text-white rounded-lg w-28 h-10 transition-transform hover:scale-110">Add Product</button>
                </div>


            </div>

            {/* Below Part  */}
            <div  className="h-full w-full  gap-2 bg-gray-300 rounded-lg flex flex-col p-10 overflow-y-auto">

                {/* Tags  */}
                <h1 className="text-5xl">Filter</h1>
                <div className="h-24 p-5  flex flex-row gap-5 justify-start items-center">
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => fetchDataFromApi(setProducts)}>All</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'home%20%26%20furniture') }>Home & Furniture</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'fashion%20%26%20apparel') }>Fashion & Apparel</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'electronics%20%26%20gadgets')}>Electronics</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'sports') }>Sports</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'books') }>Books</button>
                </div>

                {/* Explore Part (Products)  */}

                <div className="h-full w-full  bg-white rounded-lg p-10 grid grid-cols-3 gap-5 overflow-y-auto ">
                    {/* <h1 className="text-4xl">Products</h1> */} 
                    {products.map((item , index) => (
                        <div key={index} onClick={() => navigate('/products/detailproduct/' , { state:item } )} className="rounded-lg  shadow-lg items-center justify-center h-72 flex flex-col transition-transform hover:scale-110 ">
                            <img src={item.image} alt="photo"  className="w-full h-3/4 object-cover rounded-lg cursor-pointer transition-transform  hover:opacity-75 hover:scale-95 hover:object-center hover:bg-cover " />
                            <h1 className="text-2xl h-1/4 pt-5 font-serif">{item.name}</h1> 

                        </div>
                    )) }
                </div>  

            </div>
        </div>
    )
}



async function filterProduct <t>(setData: Dispatch<SetStateAction<t>> , filter:string){ 
    // const data:any = Data.filter((item) => item.category === filter || item.category.includes(filter));  
    try {
        const response = await api(`api/products/?category=${filter}`) ; 
        console.log(response) ;  
        setData(response.data) ; 
    }catch(err){
        console.error() ;
    }

}




async function fetchDataFromApi <t>(setData: Dispatch<SetStateAction<t>>){
    try{
        const response = await api('api/products/') ; 
        console.log(response) ;  
        setData(response.data) ; 
    }catch(err){
        console.error() ; 
    }
}
