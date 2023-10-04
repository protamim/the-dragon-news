import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

 const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget)
    const name = form.get('name');
    const photoURL = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name)
    createUser(email, password)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    })
    
    // reset field value
    event.currentTarget.reset();
  };

  return (
    <>
      <Navbar />
      <section className="my-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col justify-center items-center">
            <div className="border py-10 px-12">
              <div className="border-b pb-4 text-center">
                <h2 className="text-2xl">Register your account</h2>
              </div>
              <div className="my-8">
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Your Name</span>
                    </label>
                    <input
                      className="outline-emerald-200 outline-1 border py-1 px-2"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Photo URL</span>
                    </label>
                    <input
                      className="outline-emerald-200 outline-1 border py-1 px-2"
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Email Address</span>
                    </label>
                    <input
                      className="outline-emerald-200 outline-1 border py-1 px-2"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Password</span>
                    </label>
                    <input
                      className="outline-emerald-200 outline-1 border py-1 px-2"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-500 w-full py-2 text-white hover:bg-purple-700 transition-all">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-purple-500">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
