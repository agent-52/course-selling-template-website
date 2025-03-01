import { useState } from 'react'
import Header from './components/header/Header'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import './App.css'
import "../src/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Popup />
      <div className=' f2'>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </>
  )
}

export default App
