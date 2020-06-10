import React, { useContext } from 'react';
import { AuthContext } from '../../store/AuthProvider';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
    const { authenticated, user, logOut } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="container">
                <ul className="header-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stats">Statistics</Link></li>
                    {authenticated && <li><Link to="/profile">Profile</Link></li>}
                    {/* {user && user.role === 'administrator' && <li><Link to="/admin">Admin Panel</Link></li>} */}
                    {authenticated && <li onClick={logOut}>Logout</li>}
                    {!authenticated && <li><Link to="/login">Login</Link> / <Link to="/registration">Signup</Link></li>}
                </ul>
            </div>
        </header>
    );
}

export default Header;