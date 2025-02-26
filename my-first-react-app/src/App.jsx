import { useState } from 'react'
import Header from './components/header/Header'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import './App.css'
import "../src/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pdi2 f2'>
        <Header />
        <Section1 />
        <Section2 />
      </div>
    </>
  )
}

export default App
