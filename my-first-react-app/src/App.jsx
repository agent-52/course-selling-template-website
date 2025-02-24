import { useState } from 'react'
import Header from './components/header/Header'
import Section1 from './components/Section1/Section1'
import './App.css'
import "../src/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pdi2 f2'>
        <Header />
        <Section1 />
      </div>
    </>
  )
}

export default App
