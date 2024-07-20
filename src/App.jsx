import { useState } from 'react'
import './App.css'
import { Title } from "./components/Title"
import Notification from './components/Notification/Notification'
import './components/Notification/notification.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title title="Notification Lists" />
      <div className='container'>
        <Notification></Notification>
      </div>
    </>
  )
}

export default App
