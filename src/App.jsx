import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

function App() {

  return <div>
    <Sidebar/>
    <Nav />
    <Recommended/>
    <Products />
  </div>
}

export default App
