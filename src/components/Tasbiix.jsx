
import { useState } from "react"
function Tasbiix(){
    const [Count,setcounter] = useState(0)

    const handleIncrement = () => {
        setcounter(Count+1)
    }

    const handlereset = () => {
        
        setcounter(0)
    }

    return <div className="container justify-center text-center bg-gray-100 shadow  w-[30%]  ml-[500px]">
        <div className="text-center mt-28">
        <h1 className="text-9xl mb-10">{Count}</h1>
        <button onClick={handleIncrement} className="bg-orange-500 px-10 py-3 text-3xl m-3">Count</button>
        <button onClick={handlereset} className="bg-red-500 px-10 py-3 text-3xl m-3">Reset</button>
        </div>

    </div>

}
export default Tasbiix