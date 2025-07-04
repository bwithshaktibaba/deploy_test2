import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AllRoutes from './routing/AllRoutes'

import './App.css'

function App() {


  return (
   <>
     <Navbar />
     <AllRoutes />
     <Footer />
   </>
  )
}

export default App
