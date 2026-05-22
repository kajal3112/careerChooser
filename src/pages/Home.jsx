import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../component/PageWrapper";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [interest, setInterest] = useState("");
  const navigate = useNavigate();

  const handleGenerate = () => {

    if (!interest.trim()) return;

    navigate("/ai-coach", {
      state: {
        firstMessage: interest
      }
    });

  };

  return (

  <PageWrapper>
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}

      <section className="relative pt-36 pb-24 px-6 lg:px-12">

        {/* GLOW */}

        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-green-400/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center">

          {/* LEFT */}

          <div className="flex flex-col items-center justify-center text-center">

            {/* LABEL */}

            <div className="text-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-400/5 text-green-400 text-sm tracking-[3px] mb-8">

              AI-POWERED CAREER PLATFORM

            </div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05]"
            >

              Discover Your
              <br />

              Future With
              <br />

              <span className="text-green-400">
                AI Career OS
              </span>

            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-400 text-lg leading-9 mt-10 max-w-2xl"
            >

              AI-powered career guidance platform helping students
              discover careers through intelligent behavior analysis.

            </motion.p>

            {/* AI COACH LINE */}

            <div className="mt-8 bg-[#0B1120]/70 border border-green-500/10 rounded-2xl px-6 py-5 backdrop-blur-xl">

              <p className="text-green-400 text-lg">

                ✨ Our AI Coach dynamically understands student interests,
                learning patterns, and career behavior.

              </p>

            </div>

            {/* SEARCH */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">

              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="Tell AI about your interests..."
                className="flex-1 bg-[#0B1120]/70 border border-green-500/10 rounded-2xl px-6 py-5 outline-none backdrop-blur-xl focus:border-green-400 transition"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleGenerate();
                  }
                }}
              />

              <button className="bg-green-400 text-black font-semibold px-8 py-5 rounded-2xl hover:scale-105 transition duration-300" onClick={handleGenerate}>

                Generate

              </button>

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="
              bg-green-400
              text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]
              transition-all
              duration-300
              ">

                Explore Careers

              </button>

              <Link to="/ai-coach">

                <button className="border border-green-500/20 bg-[#0B1120]/70 px-8 py-4 rounded-2xl backdrop-blur-xl hover:bg-green-400 hover:text-black transition duration-300">

                  Start AI Journey

                </button>

              </Link>

            </div>

          </div>


        </div>

      </section>

        {/* {features card section and CTA section here} */}
            {/* FEATURE SHOWCASE SECTION */}

        <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#050816]">

        {/* GRID BACKGROUND */}

        <div className="absolute inset-0 opacity-[0.04]">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        </div>

        {/* GLOW */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-400/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

            {/* HEADING */}

            <div className="text-center mb-24">

            <p className="text-green-400 tracking-[4px] mb-5">

                AI CAREER ECOSYSTEM

            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">

                Explore The Full
                <br />

                Potential Of
                <br />

                <span className="text-green-400">
                AI Career OS
                </span>

            </h2>

            <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-10">

                Discover intelligent tools designed to help students
                explore careers, understand strengths, and grow faster.

            </p>

            </div>

            {/* CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">

            {/* CARD 1 */}

            <div
                className="
                  group
                  relative
                  min-h-[520px]
                  bg-[#0B1120]/70
                  border
                  border-green-500/10
                  rounded-[40px]
                  backdrop-blur-xl
                  p-8
                  hover:-translate-y-4
                  hover:scale-[1.02]
                  hover:border-green-400/30
                  hover:shadow-[0_0_50px_rgba(34,197,94,0.15)]
                  transition-all
                  duration-500
                  "
            >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-green-400/5
                  to-transparent
                  "></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-400/10 border border-green-500/20 flex items-center justify-center text-3xl mb-8">

                💼

                </div>

                <h3 className="relative z-10 text-3xl font-bold leading-tight mb-6">

                Explore
                <br />

                Careers

                </h3>

                <p className="relative z-10 text-gray-400 leading-8 flex-1">

                Discover modern, hidden, and future-ready
                career opportunities personalized for students.

                </p>

                {/* FOOTER */}

                <div className="relative z-10 mt-8 bg-[#111827]/70 border border-green-500/10 rounded-2xl p-5">

                <div className="flex items-center justify-between">

                    <span className="text-gray-400">
                    AI Match
                    </span>

                    <span className="text-green-400 font-semibold">
                    94%
                    </span>

                </div>

                <div className="w-full h-2 rounded-full bg-[#1e293b] mt-4 overflow-hidden">

                    <div className="w-[94%] h-full bg-green-400 rounded-full"></div>

                </div>

                </div>

            </div>

            {/* CARD 2 */}

            <div
                className="
                group
                relative
                min-h-[520px]
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[40px]
                backdrop-blur-xl
                p-8
                overflow-hidden
                hover:-translate-y-4
                hover:scale-[1.02]
                hover:border-green-400/30
                hover:shadow-[0_0_50px_rgba(34,197,94,0.15)]
                transition-all
                duration-500
                "
            >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-green-400/5
                  to-transparent
                  "></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-400/10 border border-green-500/20 flex items-center justify-center text-3xl mb-8">

                💬

                </div>

                <h3 className="relative z-10 text-3xl font-bold leading-tight mb-6">

                AI Coach
                <br />

                Intelligence

                </h3>

                <p className="relative z-10 text-gray-400 leading-8 flex-1">

                Our AI Coach analyzes student interests,
                strengths, and learning behavior to generate
                intelligent personalized career guidance.

                </p>

                {/* ANALYTICS */}

                <div className="relative z-10 mt-8 space-y-4">

                {[
                    {
                    title: "Career Match",
                    value: "96%"
                    },
                    {
                    title: "Learning Pattern",
                    value: "Tracked"
                    }
                ].map((item, index) => (

                    <div
                    key={index}
                    className="bg-[#111827]/70 border border-green-500/10 rounded-2xl p-4 flex items-center justify-between"
                    >

                    <span className="text-gray-300">
                        {item.title}
                    </span>

                    <span className="text-green-400 font-semibold">
                        {item.value}
                    </span>

                    </div>

                ))}

                </div>

            </div>

            {/* CARD 3 */}

            <div
                className="
                  group
                  relative
                  min-h-[520px]
                  bg-[#0B1120]/70
                  border
                  border-green-500/10
                  rounded-[40px]
                  backdrop-blur-xl
                  p-8
                  overflow-hidden
                  hover:-translate-y-4
                  hover:scale-[1.02]
                  hover:border-green-400/30
                  hover:shadow-[0_0_50px_rgba(34,197,94,0.15)]
                  transition-all
                  duration-500
                  "
            >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-green-400/5
                  to-transparent
                  "></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-400/10 border border-green-500/20 flex items-center justify-center text-3xl mb-8">

                📖

                </div>

                <h3 className="relative z-10 text-3xl font-bold leading-tight mb-6">

                Subject
                <br />

                Mapping

                </h3>

                <p className="relative z-10 text-gray-400 leading-8 flex-1">

                Understand where subjects like Math,
                Science, Psychology, and Design are used
                in real-world professions.

                </p>

                {/* SUBJECT TAGS */}

                <div className="relative z-10 mt-8 flex flex-wrap gap-3">

                {["Math", "Biology", "AI", "Design"].map((tag, index) => (

                    <div
                    key={index}
                    className="px-4 py-2 rounded-xl bg-green-400/10 border border-green-500/10 text-green-400 text-sm"
                    >

                    {tag}

                    </div>

                ))}

                </div>

            </div>

            {/* CARD 4 */}

            <div
                className="
                  group
                  relative
                  min-h-[520px]
                  bg-[#0B1120]/70
                  border
                  border-green-500/10
                  rounded-[40px]
                  backdrop-blur-xl
                  p-8
                  overflow-hidden
                  hover:-translate-y-4
                  hover:scale-[1.02]
                  hover:border-green-400/30
                  hover:shadow-[0_0_50px_rgba(34,197,94,0.15)]
                  transition-all
                  duration-500
                  "
            >

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-green-400/5
                  to-transparent
                  "></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-400/10 border border-green-500/20 flex items-center justify-center text-3xl mb-8">

                🗺️

                </div>

                <h3 className="relative z-10 text-3xl font-bold leading-tight mb-6">

                Smart
                <br />

                Roadmaps

                </h3>

                <p className="relative z-10 text-gray-400 leading-8 flex-1">

                AI-generated roadmaps help students
                achieve goals faster with personalized
                learning pathways.

                </p>

                {/* GRAPH */}

                <div className="relative z-10 mt-8 bg-[#111827]/70 border border-green-500/10 rounded-2xl p-5">

                <div className="flex items-end gap-3 h-24">

                    <div className="flex-1 bg-green-400/30 rounded-t-xl h-[30%]"></div>

                    <div className="flex-1 bg-green-400/40 rounded-t-xl h-[50%]"></div>

                    <div className="flex-1 bg-green-400/60 rounded-t-xl h-[70%]"></div>

                    <div className="flex-1 bg-green-400 rounded-t-xl h-full"></div>

                </div>

                </div>

            </div>

            </div>

        </div>

        </section>

      {/* CTA */}

      <section className="pb-28 px-6 lg:px-12">

        <div className="max-w-5xl mx-auto text-center bg-[#0B1120]/70 border border-green-500/10 rounded-[40px] p-16 backdrop-blur-xl">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Start Your AI
            <br />

            Career Journey Today

          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mt-8">

            Discover opportunities, understand your strengths,
            and unlock future careers with intelligent AI guidance.

          </p>

          <button className="mt-10 bg-green-400 text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 transition duration-300">

            Get Started

          </button>

        </div>

      </section>

    </div>
  </PageWrapper>
  );
};

export default Home;