const Notification = ({children}) => {
    return (
        <div className="notification-card">
            {children}
            <h4 className="id">id</h4>
            <div className="content">
                <h5 className="name">name</h5>
                <p className="message">message</p>
            </div>
            <button className="delete-btn">Delete</button>
        </div>
    )
} 

export default Notification;