import CourseCards from "./CourseCards";

function Hero() {
  return (
    <section className=" w-full h-full lg:min-h-[800px]">
      <div className={` h-auto lg:min-h-[570px]  hero-gradient relative`}>
        <div className="text-center pt-20 sm:pt-24 w-4/6 mx-auto">
          <h2 className="font-Inter font-bold text-3xl lg:text-6xl text-white mb-3">
            Learn to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hot-pink-g via-paris-daisy-g to-cyan-g">
              &nbsp;code in Web3.&nbsp;
            </span>
            Build in less than 60s.
          </h2>
          <p className="font-Inter text-xl text-white text-opacity-75">
            Learning is always free. Join 15,000+ developers in learning web3,
            earn crypto and NFTs on the way.
          </p>
        </div>
        <CourseCards />
      </div>
    </section>
  );
}

export default Hero;
