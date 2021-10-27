import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState } from "react";
import useAuth from './../../../Hook/useAuth';

const googleProvider = new GoogleAuthProvider();

const Login= () =>{
  const { signInUsingGoogle } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

 
  return (
    <div className=" mx-auto">
      <div className=" rounded d-flex justify-content-center align-items-center py-5">
        <form onSubmit={handleRegistration}>
          <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
          {!isLogin && <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
            </div>
          </div>}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your email" required />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Your password" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 text-danger">{error}</div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary">
              {isLogin ? 'Login' : 'Register'}
            </button>
            <button onClick={signInUsingGoogle} className="text-primary btn-info m-3"><i className="fab fa-google-plus-g fs-3 text-white"></i></button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default Login;