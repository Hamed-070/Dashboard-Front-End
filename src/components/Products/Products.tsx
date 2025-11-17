import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import api from "../../api/api"
import { useNavigate } from "react-router-dom" 
import ProductMemo from "./ProductMemo"
import { FaSearch } from "react-icons/fa";

interface Product {
    name: string 
    description: string 
    image: string 
    price: number 
    category: string
    quantity: number  
    id?: number 
}


// Products page , Here stores the Informations of Products , and featurs like Searching and etc ... (Incomplete) 
export default function (){

    const [products , setProducts] = useState<Product[]>([]) ;   
    const [search , setSearch] = useState('') ;  
    const [notFound , setNotFound] = useState<React.SetStateAction<Boolean>> (false) ;
    const navigate = useNavigate() ; 

    useEffect(() => {
        fetchDataFromApi(setProducts , setNotFound); 
    } , [])


    const handelSearch = () => {
        searchProduct(setProducts , search , setNotFound) ; 
        if(!products){
            setNotFound(true) ; 
        }
    }


    return(
        <div className="w-full h-full flex flex-col gap-2 p-3 items-center justify-center">
            
            {/* Upper Part  */}
            <div className="h-20 w-full p-3 gap-2 bg-gray-300 rounded-lg flex flex-row justify-between">

                {/* left part  */}
                <div className="w-1/6 rounded-lg">

                </div>

                {/* Search Part  */}
                <div className="w-4/6 fixed flex items-center justify-center"> 
                    <label className="flex flex-row items-center justify-between h-10 w-1/3 bg-white rounded-lg p-2">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Product..." className="h-10 text-lg w-1/2 p-2 rounded-md outline-none"/>
                        <FaSearch className="text-2xl hover:cursor-pointer" onClick={handelSearch} />
                    </label>

                </div>

                {/* Right Part  */}
                <div className="w-1/6 flex items-center justify-center">
                    <button className="bg-blue-500 text-white rounded-lg w-28 h-10 transition-transform hover:scale-110">Add Product</button>
                </div>

            </div>

            {/* Below Part  */}
            <div  className="h-full w-full  gap-2 bg-gray-300 rounded-lg flex flex-col p-3 overflow-y-auto">   
                {/* Tags  */}
                <div className="h-24 flex flex-row gap-5 justify-start items-center">
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => fetchDataFromApi(setProducts , setNotFound)}>All</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'home%20%26%20furniture') }>Home & Furniture</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'fashion%20%26%20apparel') }>Fashion & Apparel</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'electronics%20%26%20gadgets')}>Electronics</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'sports') }>Sports</button>
                    <button className="bg-white rounded-md w-32 h-9 transition-opacity hover:opacity-50" onClick={() => filterProduct(setProducts , 'books') }>Books</button>
                </div>

                {/* Explore Part (Products)  */}

                <div className="h-full w-full  bg-white rounded-lg p-10 grid grid-cols-4 gap-5 overflow-y-auto" >
                    {notFound ? (
                        <h1 className="text-4xl font-mono">Not Found !</h1>
                    ) : (
                        products.map((item: Product , index) => (
                        <div key={index} onClick={() => navigate('/products/detailproduct/' , { state:item } )} className="h-72 flex flex-col transition-transform hover:scale-75">
                            <ProductMemo item={item} key={item.id} />
                        </div>
                    )))
                    }
                </div>  


                
            </div>
        </div>
    )
}


async function searchProduct <t>(setData:Dispatch<SetStateAction<t>> , filter:string , setStatus:Dispatch<SetStateAction<Boolean>> ){
    try {
        const response = await api(`api/products/?search=${filter}`) ; 
        console.log(response) ;  
        setData(response.data) ;  

        if(response.data.length < 1) 
        {
            setStatus(true) ; 
        }

    }catch(err){
        console.error() ;
    }
}





// To fetch Data from server based on filtering Products
async function filterProduct <t>(setData: Dispatch<SetStateAction<t>> , filter:string){ 
    try {
        const response = await api(`api/products/?category=${filter}`) ; 
        console.log(response) ;  
        setData(response.data) ; 
    }catch(err){
        console.error() ;
    }

}



// To fetch Data from server
async function fetchDataFromApi <t>(setData: Dispatch<SetStateAction<t>> , setStatus:Dispatch<SetStateAction<Boolean>>){
    try{
         setStatus(false) ; 
        const response = await api('api/products/') ; 
        console.log(response) ;  
        setData(response.data) ; 
    }catch(err){
        console.error() ; 
    }
}
