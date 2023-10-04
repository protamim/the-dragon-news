import BreakingNews from "./BreakingNews";
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <>
            <header className="pt-10">
                <div className="container mx-auto px-5">
                    <div className="text-center space-y-5">
                        <img className="mx-auto" src={logo} alt="" />
                        <p>Journalism Without Fear or Favour</p>
                        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
                    </div>
                    <BreakingNews />
                </div>
            </header>
        </>
    );
};

export default Header;