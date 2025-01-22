function Profile ({name,image,btn}){
    return <div>
        <div className="w-[300px] h-[400px] border border-3 border-black m-5 shadow-inner shadow-2xl">
           <div  className="w-full h-[150px]  ">
            <img  class="h-[200px] w-full" src={image} alt="" />
            

           </div>
           <h1 className="font-bold mt-[70px] ml-[40px]">{name}</h1>
           <p className="ml-2 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores natus, molestias iste at quam tenetur!</p>
           <button className="rounded shadow-inner bg-black my-[10px] text-white px-10 py-3 ml-[40px]  text-center">{btn}</button>
        </div>
    </div>
}
export default Profile