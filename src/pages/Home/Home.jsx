import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSidebar from "../shared/LeftSidebar/LeftSidebar";
import Navbar from "../shared/Navbar/Navbar";
import RightSidebar from "../shared/RightSidebar/RightSidebar";
import NewsCard from "./NewsCard";


const Home = () => {
  const news = useLoaderData();


    return (
        <>
          <Header />
          <Navbar />
          <div className="mt-10">
            <div className="container mx-auto px-5">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
                <LeftSidebar />
                <div className="col-span-2">
                  <h2 className="text-2xl text-center mb-7">Dragon News Home</h2>
                  {/* Card start */}
                  {
                    news.map(aNews => <NewsCard key={aNews._id} news={aNews} />)
                  }
                  {/* Card end */}
                </div>
                <RightSidebar />
              </div>
            </div>
          </div>
        </>
    );
};

export default Home;