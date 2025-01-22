import { useState } from "react"

function SomaliaQoutes(){
     
    const [index ,setindex] =useState(0)
    const [end ,setEnd] =useState("")

    const mahmah = [
        "labo qawan isma qaado",
        "biyo sabdaada loga dhergaa",
        "labo kala barisay kala war leh",
        "canjeero sidey ukala koreysaa loo cunaa",
        "Benntada oo badan runtaada dambe  ubaasbaxda",
        "cad iyo cashir waa la yareestaa"
    ]


    // function oo use next mahamah
    //function go back in mahamah
    
    const handleNextButton = () =>{
        if(index < mahmah.length-1 ){
        setindex(index+1)
        if(index == 4){
            setEnd("dhamad")

        }
   
        }
       
    }

    const handleBack= () =>{
        if(index > 0){
        setindex(index-1)

        }
        if(index == 4){
            setEnd("dhamad")

        }
        else{
            setEnd("")
        }
    }


    
    return <div className="text-center mt-20">
        <h2 className="text-4xl mb-2 mx-[20%] ">{end}</h2>
        <h1 className="text-4xl mb-10 mx-[20%]" > {mahmah[index]} </h1>
        
        <button onClick={handleNextButton} className="bg-green-500 px-10 py-3 text-3xl m-2">Next</button>
        <button onClick={handleBack} className="bg-green-500 px-10 py-3 text-3xl ">Prev</button>
    </div>
}
export default SomaliaQoutes