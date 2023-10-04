import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <>
            <div className="flex flex-col gap-2 sticky left-0 items-start">
                <h2 className="text-2xl">All Categories</h2>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="max-w-max" key={category.id}>{category.name}</Link>)
                }
            </div>
        </>
    );
};

export default LeftSidebar;