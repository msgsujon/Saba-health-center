import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const {user,logOut} =useAuth();
    return (
        // header here 
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3 text-primary fw-bold">Saba Health Center</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav fs-5 m-auto p-1 mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/service" className="nav-link active" aria-current="page">Service</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link active" aria-current="page">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/help" className="nav-link active" aria-current="page">Helpline</Link>
                        </li>
                        <li className="nav-item">
                            {user?.email ?
                                <button onClick={logOut} type="button" className="btn btn-warning " >Logout</button> :
                                <Link to="/login" className="nav-link active" aria-current="page">Login</Link>}
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link active" aria-current="page">Signed in as: {user?.displayName}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;