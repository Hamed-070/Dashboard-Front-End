

// This is Home (Dashboard) page , Here stores analieses of customers and etc ... 

export default function Home () {

    return(
        <div className="w-full h-full flex flex-col gap-2 p-3 items-center justify-center">
            
            <div className="h-16 w-full bg-green-300 flex flex-row justify-between items-center rounded-lg pl-3 pr-3">
                <h1 className="text-3xl font-medium">Analytics</h1>
                <h1 className="text-3xl font-medium">Theme</h1>
                <h1 className="text-3xl font-medium">Profile</h1>
            </div>

            {/* Upper Part  */}
            <div className="h-3/6 w-full bg-slate-300 rounded-lg flex flex-row p-3 gap-3">

                {/* Left Part  */}
                <div className="bg-slate-500 w-2/6 rounded-lg p-2 gap-2 grid grid-rows-2 grid-cols-2 items-center justify-center">

                    <div className="w-full bg-red-200 h-full rounded-sm">

                    </div>

                    <div className="w-full bg-red-200 h-full rounded-sm">

                    </div>

                    <div className="w-full bg-red-200 h-full rounded-sm">

                    </div>

                    <div className="w-full bg-red-200 h-full rounded-sm">

                    </div>

                </div>

                {/* Right Part  */}
                <div className="bg-slate-500 w-4/6 rounded-lg flex flex-row p-2 gap-2">

                    <div className="w-1/2 bg-pink-300 rounded-lg"></div>

                    <div className="w-1/2 bg-pink-300 rounded-lg"></div>

                </div>

            </div>

            {/* Below Part  */}
            <div className="h-3/6 w-full bg-slate-300 rounded-lg flex flex-row gap-2 p-2">
                
                {/* Left Part  */}
                <div className="w-1/2 bg-blue-400 rounded-lg"></div>

                {/* Right Part  */}
                <div className="w-1/2 bg-yellow-100 rounded-lg flex flex-col gap-2 p-2">

                    <div className="w-full h-1/2 bg-amber-400 rounded-lg flex flex-row gap-2 p-2">

                        <div className="w-1/2 bg-lime-200 rounded-lg">

                        </div>

                        <div className="w-1/2 bg-indigo-300 rounded-lg">

                        </div>
                        
                    </div>

                    <div className="w-full h-1/2 bg-amber-400 rounded-lg">


                    </div>

                </div>


            </div>


        </div>
    )


}
