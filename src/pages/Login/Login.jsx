import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location);
    console.log(location.state)

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result => {
            console.log(result)
            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(err => {
            console.error(err);
        })

        // reset form data after submit
        event.currentTarget.reset();
    }

  return (
    <>
      <Navbar />
      <section className="my-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col justify-center items-center">
            <div className="border p-10">
              <div className="border-b pb-4 text-center">
                <h2 className="text-2xl">Login to your account</h2>
              </div>
              <div className="my-8">
                <form onSubmit={handleSignIn} className="space-y-5">
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Email Address</span>
                    </label>
                    <input className="outline-emerald-200 outline-1 border py-1 px-2"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Password</span>
                    </label>
                    <input className="outline-emerald-200 outline-1 border py-1 px-2"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-500 w-full py-2 text-white hover:bg-purple-700 transition-all">Login</button>
                  </div>
                </form>
              </div>
              <div>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link to={"/register"} className="text-purple-500">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
