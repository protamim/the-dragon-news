import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSidebar = () => {
    return (
        <>
            <aside>
                {/* Login with start */}
                <div>
                    <h2 className="text-2xl mb-6">Login With</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex gap-3 justify-center items-center border border-lime-300 py-1 cursor-pointer hover:text-lime-600 transition-all">
                                <span>
                                    <FaGoogle />
                                </span>
                                <h4>Login with Google</h4>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 justify-center items-center border border-lime-300 py-1 cursor-pointer hover:text-lime-600 transition-all">
                                <span>
                                    <FaGithub />
                                </span>
                                <h4>Login with Github</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Login with end */}

                {/* Find us start */}
                <div className="mt-8">
                    <h2 className="text-2xl mb-4">Find us on</h2>
                    <div className="rounded-t-md border">
                        <div className="flex gap-2 items-center p-2 cursor-pointer hover:bg-lime-100 hover:text-fuchsia-500 transition-all">
                            <span>
                                <FaFacebook />
                            </span>
                            <h4>Facebook</h4>
                        </div>
                        <div className="flex gap-2 items-center p-2 cursor-pointer border-t hover:bg-lime-100 hover:text-fuchsia-500 transition-all">
                            <span>
                                <FaTwitter />
                            </span>
                            <h4>Twitter</h4>
                        </div>
                        <div className="flex gap-2 items-center p-2 cursor-pointer border-t hover:bg-lime-100 hover:text-fuchsia-500 transition-all">
                            <span>
                                <FaInstagram />
                            </span>
                            <h4>Instagram</h4>
                        </div>
                    </div>
                </div>
                {/* Find us end */}
                {/* Q-zone start */}
                <div className="bg-lime-50 mt-8 py-3 px-2">
                    <h2 className="text-2xl mb-5">Q-Zone</h2>
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <div className="cursor-pointer transform hover:rotate-2">
                            <img src={qZone1} alt="" />
                        </div>
                        <div className="cursor-pointer transform hover:rotate-2">
                            <img src={qZone2} alt="" />
                        </div>
                        <div className="cursor-pointer transform hover:rotate-2">
                            <img src={qZone3} alt="" />
                        </div>
                    </div>
                </div>
                {/* Q-zone end */}
            </aside>
        </>
    );
};

export default RightSidebar;