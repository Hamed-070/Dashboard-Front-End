

// The Customer Page , Here stores the Informations of customers , Top customers and etc ...  (Incomplete) 

export default function Customers (){

    return(
        <div className="w-full h-full flex flex-col gap-2 p-3 items-center justify-center">
            
            {/* Upper Part  */}
            <div className="h-20 w-full p-3 gap-2 bg-gray-300 rounded-lg flex flex-row justify-between">

                {/* left part  */}
                <div className="w-1/6 rounded-lg">

                </div>

                {/* Search Part  */}
                <div className="w-4/6 flex items-center justify-center"> 
                    <input type="text" placeholder="Search Customer..." className="h-10 text-lg w-1/2 p-2 rounded-md outline-none" />
                </div>

                {/* Right Part  */}
                <div className="w-1/6 flex items-center justify-center">
                    {/* <button className="bg-blue-500 text-white rounded-lg w-28 h-10 transition-transform hover:scale-110">Add Product</button> */}
                </div>


            </div>

            {/* Below Part  */}
            <div  className="h-full w-full  gap-2 bg-gray-300 rounded-lg flex flex-col p-10">

                {/* Explore Part (Customers)  */}

                <div className="h-full bg-fuchsia-300 rounded-lg flex items-center justify-center">
                    <h1 className="text-4xl text-white">Customers</h1>
                </div>  

            </div>



        </div>
    )
}