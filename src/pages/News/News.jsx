import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSidebar from "../shared/RightSidebar/RightSidebar";
import { useEffect, useState } from "react";

const News = () => {
    const {id} = useParams();
    const news = useLoaderData();
    const [currentNews, setCurrentNews] = useState({});
    const {image_url, title, details} = currentNews;
    
    useEffect(()=> {
        const currentNews = news.find(current => id == current._id)
        setCurrentNews(currentNews);
    },[id, news])

    return (
        <>
        <Header />
        <Navbar />
        <main className="my-10">
            <div className="container mx-auto px-5">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
                    <div className="col-span-3 space-y-8">
                        <div>
                            <img className="w-full" src={image_url} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl">{title}</h2>
                        </div>
                        <div>
                            <p>{details}</p>
                        </div>
                    </div>
                    <div>
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </main>

        </>
    );
};

export default News;