import careers from "../data/careers";
import CareerCard from "../component/CareerCard";
import Navbar from "../component/Navbar";

const Explore = () => {

  return (

    <div className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      {/* HERO SECTION */}

      <section className="relative px-6 lg:px-12 pt-32 pb-20 overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-green-400/10
          blur-3xl
          rounded-full
        "></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <p className="
            text-green-400
            tracking-[5px]
            text-sm
            mb-6
          ">

            AI-POWERED CAREER DISCOVERY

          </p>

          <h1 className="
            text-5xl
            lg:text-7xl
            font-bold
            leading-tight
            mb-8
          ">

            Explore Careers <br />

            <span className="text-green-400">

              Beyond The Ordinary

            </span>

          </h1>

          <p className="
            max-w-3xl
            mx-auto
            text-gray-400
            text-lg
            leading-9
          ">

            Discover future-ready careers, subject intelligence,
            AI-powered learning roadmaps, and hidden opportunities
            designed for the next generation.

          </p>

        </div>

      </section>

      {/* CAREER GRID */}

      <section className="px-6 lg:px-12 pb-24">

        <div className="
          max-w-7xl
          mx-auto
          grid
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

          {careers.map((career) => (

            <CareerCard
              key={career.id}
              career={career}
            />

          ))}

        </div>

      </section>

    </div>

  );

};

export default Explore;