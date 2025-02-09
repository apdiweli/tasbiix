import { Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Contact from "./pages/Contact"
import Service from "./pages/Service"


function App(){
    return <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/Service" element={ <Service/> } />
    </Routes>

}

export default App