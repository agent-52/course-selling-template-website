import { useState } from 'react'
import Header from './components/header/Header'
import './App.css'
import "../src/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pdi2 f2'>
        <Header />
      </div>
    </>
  )
}

export default App
