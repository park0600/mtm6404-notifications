import { useState } from 'react'
import './App.css'
import { Title } from "./components/Title"
import Notification from './components/Notification/Notification'
import notifications from './notifications';

function App() {

  const [displayNotifications, setDisplayNotifications] = useState(notifications)

  function clearAll() {
    setDisplayNotifications([])
  }

  function deleteOne(id){
    setDisplayNotifications(displayNotifications.filter(notification => notification.id !== id))
  }

  return (
    <>
      <div className='container'>
      <Title title="Notification Lists" />
      <button onClick={clearAll}>Clear All</button>
      {displayNotifications.map((notifi, index) => (
        <Notification key={index}>
            <div className="content">
                <h4 className="name">{notifi.name}</h4>
                <p className="message">{notifi.message}</p>
            </div>
            <div className="container-btn">
                <button onClick={() => {deleteOne(notifi.id)}} className="delete-btn">Delete</button>
            </div>
        </Notification>
      ))}
      </div>
    </>
  )
}

export default App
