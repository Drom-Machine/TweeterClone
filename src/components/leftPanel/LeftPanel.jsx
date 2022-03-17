import { NavLink } from 'react-router-dom'
import { home, explore, notifications, messages, bookmarks, lists, profile, more } from './icons'
import './leftPanel.scss'

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="container">

                <nav>
                    <NavLink to="/" activeClassName="selected">
                        <span>{home} Home</span>
                    </NavLink>
                    <NavLink to="/explore" activeClassName="selected">
                        <span>{explore} Explore</span>
                    </NavLink>
                    <NavLink to="/notifications" activeClassName="selected">
                        <span>{notifications} Notifications</span>
                    </NavLink>
                    <NavLink to="/messages" activeClassName="selected">
                        <span>{messages} Messages</span>
                    </NavLink>
                    <NavLink to="/bookmarks" activeClassName="selected">
                        <span>{bookmarks} Bookmarks</span>
                    </NavLink>
                    <NavLink to="/lists" activeClassName="selected">
                        <span>{lists} Lists</span>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="selected">
                        <span>{profile} Profile</span>
                    </NavLink>
                <button className="more">
                    <span>{more} More</span>
                </button>
                </nav>

                <button className="sqawk">Sqawk</button>

                
            </div>
        </div>
    )
}

export default LeftPanel