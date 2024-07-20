import './notification.css'

const Notification = ({children}) => {
    return (
        <div className="container-notification">
            {children}
            <h3 className="id">id</h3>
            <div className="content">
                <h4 className="name">name</h4>
                <p className="message">message</p>
            </div>
            <div className="container-btn">
                <button className="delete-btn">Delete</button>
            </div>
        </div>
    )
} 

export default Notification;