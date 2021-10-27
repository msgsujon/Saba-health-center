import React from 'react';

const Footer = () => {
    return (
      // footer here 
        <div className ="bg-light mt-5">
            <div  className=" rounded d-flex justify-content-center align-items-center py-5">
              <div >
                <h1 className="mb-3">Please Subscribe</h1>
                <div className="form-floating mb-2">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className='text-start mt-2'>
                    <button className="btn btn-warning rounded text-start">SUBMIT</button>
                </div>
              </div>
            </div>
            <div>
                <i className="fab m-3 fa-instagram"></i>
                <i className="fab m-3 fa-twitter"></i>
                <i className="fab m-3 fa-facebook"></i>
                <i className="fab m-3 fa-youtube-square"></i>
            </div>
            <footer className="pb-2">Copyright © 2021 Saba course house</footer>
        </div>
    );
};

export default Footer;