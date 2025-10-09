import { useLocation } from "react-router-dom"

export default function DetailProduct() {

    const location = useLocation() ; 
    const { state } = location ; 

    return (
        <div className="w-full h-screen flex flex-row p-5">
            
            {/* image  */}
            <div className="w-1/2">
                <img src={state.image} alt="image" className="w-full h-full object-cover bg-center rounded-lg shadow-xl" />
            </div>

            {/* description  */}
            <div className="w-1/2 p-5">   
                {/* <h1>{state.id}</h1>  */}
                <h1 className="text-3xl">Name : {state.name}</h1> 
                <h1 className="text-3xl">Price : {state.price}$</h1>
                <h1 className="text-3xl">Quantity : {state.quantity}</h1>
                <h1 className="text-3xl">Category : {state.category}</h1>
                <h1 className="text-3xl">Description :</h1>
                
                <p className="text-lg">{state.description}</p>
            </div>

        </div>  
    )
}
