import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    let { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetail, setSingleDetail] = useState({});
  
    // here data load 
    useEffect(() => {
      fetch("/service.json")
        .then((res) => res.json())
        .then((data) => setDetails(data));
    }, []);
  
    // here data load 
    useEffect(() => {
      const foundDetails = details.find(
        (detail) => detail.id == serviceId 
      );
      console.log(foundDetails);
      setSingleDetail(foundDetails);
    }, [details]);
        
    

    return (
        <div className="container">
          <img style={{height:'500px'}} src={singleDetail?.img}/><br/>
          <h1 className="text-primary  fw-bold border-bottom w-25 mx-auto mt-4 pb-2"> {singleDetail?.name}</h1><br/>
          <p className="fs-4"> {singleDetail?.description}</p>
          <Link to="/home" class="text-info mt-5">Back home</Link>
        </div>
    
    );
};

export default Booking;
