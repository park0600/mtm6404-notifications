import './notification.css'

const Notification = ({children}) => {
    return (
        <div className="container-notification">
            {children}
        </div>
    )
} 

export default Notification;