import { Link, NavLink } from "react-router-dom"



function Header (){
    return     <div class="flex justify-between bg-green-400 px-20 py-6   flex-col sm:flex-row  ">
    <h1 class="text-3xl font-bold">code xalka</h1>
    <i class="fa-solid fa-bars  absolute right-6 text-4xl  sm:hidden" id="btnMenu"></i>
    <i class="fa-solid fa-x  absolute right-6 text-4xl hidden " id="btnclose"></i>
    <ul id="links" class="sm:flex text-2xl sm:gap-20 hidden  gap-3 flex-col sm:flex-row  sm:mt-0 mt-10  ">
      <NavLink to="/"><li class="hover:text-white cunsor-pointer"  >Home</li></NavLink>
      <NavLink to="/about"><li class="hover:text-white cunsor-pointer">About</li></NavLink>
      <NavLink to="/contact"><li class="hover:text-white cunsor-pointer">Contact</li></NavLink>
      <NavLink to="/Service"><li class="hover:text-white cunsor-pointer">Service</li></NavLink>
     
  
    </ul>
</div>
}

export default Header