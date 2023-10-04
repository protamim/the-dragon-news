import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <>
      <div className="bg-gray-200 py-1 px-2 flex gap-5 items-center mt-5 rounded-sm">
        <button className="bg-rose-500 px-2 py-1 text-white">Latest</button>
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </>
  );
};

export default BreakingNews;
