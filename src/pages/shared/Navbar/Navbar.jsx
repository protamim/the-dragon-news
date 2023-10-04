import { Link, NavLink } from "react-router-dom";
import defaultUserPic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
        console.log('Sign Out successfully!')
    }).catch(err => {
        console.log(err.code);
        console.log(err.message);
    })
  }

  return (
    <>
      <nav className="mt-8">
        <div className="container mx-auto px-5">
          <div className="flex justify-center items-center h-10">
            <div className="space-x-7 ml-auto">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"career"}>Career</NavLink>
            </div>
            <div className="flex gap-3 ml-auto">
              <img className="w-9" src={defaultUserPic} alt="" />
              {/* render conditionaly */}
              {user ? (
                <button onClick={handleLogOut} className="px-2 py-1 inline-block bg-black text-white">
                  {" "}
                  Sign Out
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="px-2 py-1 inline-block bg-black text-white">
                    {" "}
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
