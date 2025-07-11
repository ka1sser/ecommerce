import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'

function App() {

  return <div>
    <Nav />
    <Recommended/>
    <Products />
  </div>
}

export default App
