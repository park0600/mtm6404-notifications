import { useState } from 'react'
import './App.css'
import { Title } from "./components/Title"
import Notification from './components/Notification/Notification'
import notifications from './notifications';

function App() {

  const [displayNotifications, setDisplayNotifications] = useState(notifications)

  const handle

  return (
    <>
      <Title title="Notification Lists" />
      <button>Clear All</button>
      <div className='container'>
          {displayNotifications.map((notifi, index) => (
            <Notification key={index}>
                <div className="content">
                    <h4 className="name">{notifi.name}</h4>
                    <p className="message">{notifi.message}</p>
                </div>
                <div className="container-btn">
                    <button className="delete-btn">Delete</button>
                </div>
            </Notification>
          ))}
      </div>
    </>
  )
}

export default App
