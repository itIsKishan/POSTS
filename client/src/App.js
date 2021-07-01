import React from 'react'
import NavBarComponent from './Components/NavBarComponent'
import { BrowserRouter } from 'react-router-dom'
const App = () =>{
  return(
    <div>
      <BrowserRouter>
      <NavBarComponent/>
      </BrowserRouter>
    </div>
  )
}
export default App