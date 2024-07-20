import { useState } from 'react'
import './App.css'
import { Title } from "./components/Title"
// import Notification from './components/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title title="Notification Lists" />
      {/* <div className='container'>
        <Notification></Notification>
      </div> */}
    </>
  )
}

export default App
