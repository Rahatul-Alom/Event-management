import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSingOut = () =>{
      logOut()
      .then(result =>{
          console.log(result)
      })
      .cacth(error =>{
          console.log(error)
      })
  }
 
   const links = 
     <>
        <li className="mr-3"><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold " : ""}>Home</NavLink></li>
        <li className="mr-3"><NavLink to="/About" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>About Us</NavLink></li>
        {
           user&& <>
            <li className="mr-3"><NavLink to="/Contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Contact Us</NavLink></li>
            <li className="mr-3"><NavLink to="/Booking" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}> Booking Now </NavLink></li>
          </>
        }
        
    </>

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
                {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="w-10 rounded-full mr-4">
          <img src="https://i.ibb.co/XsDHQ4n/user-Defaulf.png" />
      </div>
      {
            user ? 
              <>
                 <button onClick={handleSingOut} className="btn bg-amber-900 text-white font-semibold">Sing Out</button>
                <span> {user.name} </span>
              </>
            :
            <Link to="/Login"><button className="btn bg-amber-900 text-white font-semibold">Login</button></Link>

        }
      </div>
    </div>
  );
};

export default Navbar;

