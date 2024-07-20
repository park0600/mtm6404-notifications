const Notification = ({children}) => {
    return (
        <div className="container-notification">
            {children}
            <h4 className="id">id</h4>
            <div className="content">
                <h5 className="name">name</h5>
                <p className="message">message</p>
            </div>
            <div className="container-btn">
                <button className="delete-btn">Delete</button>
            </div>
        </div>
    )
} 

export default Notification;