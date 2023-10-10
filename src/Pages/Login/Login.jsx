import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {singIn} =useContext(AuthContext)
    const {googleLogIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        singIn(email,password)
        .then(result => {
            console.log(result)
            
            // navigate after login
            navigate(location?.state ? location.state : "/" )

        })
        .catch( error =>{
            console.log(error)
            toast(error.message)
        })
    }

  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-black mb-5 ">Login your account</h1>
      <div className="hero min-h-screen">
        <div className="hero-content ">
          <div className="text-center">
          </div>
          <div className="card p-12 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-amber-900 text-white font-semibold">Login</button>
              </div>
            </form>
            <div className="text-center -mt-5">
              <button onClick={googleLogIn} className="px-12 py-3 rounded-lg hover:bg-slate-300 bg-amber-900 text-white font-semibold">Login wih google</button>
            </div>
            <p className="text-center mt-3">Do not have an account please <Link className="text-amber-950 font-bold" to="/Register">Register</Link></p>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
