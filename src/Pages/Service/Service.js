import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id, name, description, img}=props.service;
    return (
            <div className="card col-lg-4 col-sm-12 mt-3" style={{"width": "18rem;"}}>
                <img style={{"width": "18rem;","height": "210px"}} src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/booking/${id}`}>
                        <button type="button" className="btn btn-warning">Warning</button>
                    </Link>
                </div>
            </div>
    );
};

export default Service;