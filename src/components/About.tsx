const About: React.FC = () => {
  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
          color: '#fff',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div className="flex lg:flex-row flex-col w-full items-center justify-center h-full">
          <div className="lg:w-2/5 flex flex-col justify-start items-start gap-4 ">
            <h1 className="text-[#1DAEFF] text-3xl font-semibold">About us</h1>
            <p className="text-[#FFFBFB] text-base font-normal">
              Homeverse.io is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </p>
            <button
              className="py-2 px-4 bg-[#1DAEFF] text-white font-medium hover:text-white rounded-lg transition duration-300 w-32"
              style={{ boxShadow: '0px 4px 40px 0px #2D5981' }}
            >
              Read more
            </button>
          </div>
          <div className="flex flex-col justify-end items-end lg:w-2/5 lg:gap-6 gap-4 text-center">
            {/* projects */}
            <div className="w-[300px] p-4 flex flex-col gap-1">
              <span
                style={{ color: 'rgba(29, 174, 255, 0.80)' }}
                className="text-3xl font-semibold"
              >
                500+
              </span>

              <h3
                style={{ color: 'rgba(255, 251, 251, 0.65)' }}
                className="font-semibold text-center"
              >
                Projects
              </h3>
              <p style={{ color: 'rgba(255, 251, 251, 0.50)' }}>
                Over 500 lexury villas for“Home Away From Home” experience
              </p>
            </div>
            <div className="w-[300px] p-4 flex flex-col gap-1">
              <span
                style={{ color: 'rgba(29, 174, 255, 0.80)' }}
                className="text-3xl font-semibold"
              >
                500+
              </span>

              <h3
                style={{ color: 'rgba(255, 251, 251, 0.65)' }}
                className="font-semibold text-center"
              >
                Projects
              </h3>
              <p style={{ color: 'rgba(255, 251, 251, 0.50)' }}>
                Over 500 lexury villas for“Home Away From Home” experience
              </p>
            </div>
            <div className="w-[300px] p-4 flex flex-col gap-1">
              <span
                style={{ color: 'rgba(29, 174, 255, 0.80)' }}
                className="text-3xl font-semibold"
              >
                500+
              </span>

              <h3
                style={{ color: 'rgba(255, 251, 251, 0.65)' }}
                className="font-semibold text-center"
              >
                Projects
              </h3>
              <p style={{ color: 'rgba(255, 251, 251, 0.50)' }}>
                Over 500 lexury villas for“Home Away From Home” experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
