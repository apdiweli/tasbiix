
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import App from "./App"
import './style.css'
import Profile  from "./components/Profile"
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    
    < BrowserRouter>
      < Header />
      <div className='justify-center p-3  w-[85%] ml-[90px]' >
      <App />
      </div>
      {/* <div className='flex justify-center gap-10'>
      
      <Profile name='Earlier Morning' image="../src/sunrise.jpg" btn='save' />
      <Profile name='Nature  Desert' image="../src/desert.jpg" btn='save' />
      <Profile name='Nature  waterfall' image="https://img.freepik.com/free-photo/coast-rural-majestic-vacation-wet-boat_1417-1278.jpg?ga=GA1.1.1648696547.1725951059&semt=ais_incoming" btn='save' />
      </div> */}
     
    
    </BrowserRouter>
  
   

)
