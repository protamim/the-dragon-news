import { FaEye, FaRegBookmark, FaShare, FaStar, FaStarHalf } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
  console.log(news)
  const {author, title, image_url, details, rating, total_view, _id} = news;
    return (
        <>
            {/* Card start */}
            <div className="border mb-8">
                    {/* card top */}
                    <div className="flex justify-between items-center
                     bg-fuchsia-100 p-3">
                      <div className="flex gap-3">
                        <div>
                          <img className="w-11 h-11 rounded-full object-cover" src={author.img} alt="" />
                        </div>
                        <div>
                          <h2>{author.name}</h2>
                          <p>{author.published_date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="cursor-pointer">
                          <FaRegBookmark />
                        </span>
                        <span className="cursor-pointer">
                          <FaShare />
                        </span>
                      </div>
                    </div>
                    {/* card content */}
                    <div className="p-5 flex flex-col items-center justify-center gap-6">
                      <div>
                        <h2 className="text-2xl">{title}</h2>
                      </div>
                      <div className="w-full">
                        <img className="w-full" src={image_url} alt="" />
                      </div>
                      <div>
                        {details.length > 160? 
                        <>
                          <p>{details.slice(0,160)}</p>
                          <Link to={`/news/${_id}`} className="text-blue-700">Read More...</Link>
                        </>
                        : details
                        }
                        
                      </div>
                    </div>
                    {/* Card bottom */}
                    <div className="flex justify-between items-center p-5 border-t">
                      <div className="flex gap-3 items-center">
                        <ReactStars count={5} size={24} isHalf={true} emptyIcon={<FaStar />} halfIcon={<FaStarHalf />} fullIcon={<FaStar />} value={rating.number} edit={false} activeColor='#16f95b' />
                        <span>{rating.number}</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <FaEye />
                        <span>{total_view}</span>
                      </div>
                    </div>
                  </div>
            {/* Card end */}
        </>
    );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
}

export default NewsCard;