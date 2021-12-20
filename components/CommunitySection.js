import TweetCard from "./TweetCard";

const tweets = [
  {
    id: 0,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet:
      "Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is. Some tweet which talks about how good Questbook is.",
  },
  {
    id: 1,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet: "Some tweet which talks about how good Questbook is.",
  },
  {
    id: 2,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet: "Some tweet which talks about how good Questbook is.",
  },
  {
    id: 3,
    name: "Patryk IInicki",
    position: "Managing Director",
    imgSrc:
      "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
    tweet: "Some tweet which talks about how good Questbook is.",
  },
  // {
  //   id: 4,
  //   name: "Patryk IInicki",
  //   position: "Managing Director",
  //   imgSrc:
  //     "https://tailwindcss.com/_next/static/media/kentcdodds.f2473a4e9577b345f55d0467a0a37ef5.jpg",
  //   tweet:
  //     "Some tweet which talks about how good Airmeet is. Some tweet which talks about how good Airmeet is.  Some tweet which talks about how good Airmeet is.  Some tweet which talks about how good Airmeet is. Some tweet which talks about how good Airmeet is.",
  // },
];
function CommunitySection() {
  return (
    <section
      className={` relative  pt-20  w-full h-full flex flex-col lg:min-h-[704px] bg-community-gradient text-center`}
    >
      <div className="container mx-auto mt-auto  text-center ">
        <h2 className="font-Inter font-bold text-3xl lg:text-6xl text-white mb-3 mt-auto ">
          Join <span className="text-[#05B1FF]"> 15,000+ builders</span>, just
          like you!
        </h2>
        <p className="font-Inter font-normal text-xl  text-white ">
          Don't believe us? Seee what they are saying about Questbook.
        </p>
        <div className=" lg:w-full  flex flex-row lg:justify-center gap-4 overflow-x-scroll lg:overflow-x-hidden pt-12 ">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.id} {...tweet} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
