import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import PageWrapper from "../component/PageWrapper";
import Navbar from "../component/Navbar";

const CareerPreview = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const career =
    location.state?.career || "AI UX Engineer";

  return (

    <PageWrapper>

      <div className="min-h-screen bg-[#050816] text-white overflow-hidden px-6 py-12">
        <Navbar />
        {/* BACKGROUND GLOW */}

        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-400/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 pt-24 md:pt-36">

          {/* HEADER */}

          <div className="mb-20">

            <p className="text-green-400 tracking-[4px] mb-5">

              FUTURE CAREER SIMULATION

            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              Your Future As
              <br />

              <span className="text-green-400">
                {career.name || career.title || career}
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-3xl mt-10">

              AI-generated career intelligence helping students
              visualize future opportunities, growth, salary,
              and work environments.

            </p>

          </div>

          {/* MAIN GRID */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* LEFT SECTION */}

            <div className="xl:col-span-2 space-y-8">

              {/* FUTURE STORY */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  relative
                  bg-[#0B1120]/70
                  border
                  border-green-500/10
                  rounded-[35px]
                  p-10
                  backdrop-blur-xl
                  overflow-hidden
                "
              >

                {/* GLOW */}

                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>

                <div className="relative z-10">

                  <p className="text-green-400 tracking-[3px] mb-5">

                    A DAY IN YOUR FUTURE

                  </p>

                  <h2 className="text-4xl font-bold mb-8">

                    Imagine Your Career Journey

                  </h2>

                  <p className="text-gray-300 leading-9 text-lg">

                    You start your day collaborating with innovative teams,
                    solving real-world challenges, and building impactful
                    digital experiences. AI predicts strong growth potential
                    in this career due to your creativity, behavior patterns,
                    and problem-solving abilities.

                  </p>

                </div>

              </motion.div>

              {/* SKILLS */}

              <div className="
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-10
                backdrop-blur-xl
              ">

                <p className="text-green-400 tracking-[3px] mb-5">

                  TOP SKILLS REQUIRED

                </p>

                <div className="flex flex-wrap gap-4">

                  {[
                    "AI Design",
                    "Psychology",
                    "Prompt Engineering",
                    "UX Research",
                    "Problem Solving",
                    "Communication",
                    "Innovation",
                    "Leadership"
                  ].map((skill, index) => (

                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.05
                      }}
                      className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-green-400/10
                        border
                        border-green-500/10
                        text-green-400
                        hover:bg-green-400
                        hover:text-black
                        transition-all
                        duration-300
                      "
                    >

                      {skill}

                    </motion.div>

                  ))}

                </div>

              </div>

              {/* COMPANIES */}

              <div className="
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-10
                backdrop-blur-xl
              ">

                <p className="text-green-400 tracking-[3px] mb-5">

                  TOP COMPANIES

                </p>

                <div className="grid sm:grid-cols-2 gap-5">

                  {[
                    "OpenAI",
                    "Google DeepMind",
                    "Adobe",
                    "Notion",
                    "Microsoft AI",
                    "Figma"
                  ].map((company, index) => (

                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5
                      }}
                      className="
                        bg-[#111827]/70
                        border
                        border-green-500/10
                        rounded-[24px]
                        p-6
                        hover:border-green-400/30
                        transition-all
                        duration-300
                      "
                    >

                      <h3 className="text-2xl font-semibold">

                        {company}

                      </h3>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT SECTION */}

            <div className="space-y-8">

              {/* SALARY */}

              <motion.div
                whileHover={{
                  y: -5
                }}
                className="
                  bg-green-400
                  text-black
                  rounded-[35px]
                  p-10
                  shadow-[0_0_40px_rgba(34,197,94,0.25)]
                "
              >

                <p className="tracking-[3px] mb-5 font-medium">

                  ESTIMATED SALARY

                </p>

                <h2 className="text-5xl font-bold mb-5">

                  ₹18L - ₹40L

                </h2>

                <p className="leading-8 text-black/80">

                  AI predicts high growth potential and strong
                  future demand for this career path.

                </p>

              </motion.div>

              {/* Roadmap */}
              <div className="mt-10">

                <button
                  onClick={() =>
                    navigate("/roadmap", {
                      state: {
                        career:
                          typeof career === "string"
                            ? career
                            : career?.title
                      }
                    })
                  }
                  className="
                    w-full
                    bg-green-400
                    text-black
                    py-5
                    rounded-[24px]
                    text-lg
                    font-semibold
                    hover:scale-[1.02]
                    hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]
                    transition-all
                    duration-300
                  "
                >

                  Generate AI Roadmap

                </button>

                <p className="
                  text-center
                  text-gray-500
                  text-sm
                  mt-4
                ">

                  Personalized learning path powered by AI

                </p>

              </div>
              {/* FUTURE SCOPE */}

              <div className="
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-8
                backdrop-blur-xl
              ">

                <p className="text-green-400 tracking-[3px] mb-5">

                  FUTURE SCOPE

                </p>

                <div className="space-y-6">

                  {[
                    {
                      title: "Industry Growth",
                      value: "Very High"
                    },
                    {
                      title: "Global Demand",
                      value: "Rising"
                    },
                    {
                      title: "AI Relevance",
                      value: "95%"
                    }
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="
                        bg-[#111827]/70
                        border
                        border-green-500/10
                        rounded-2xl
                        p-5
                        flex
                        items-center
                        justify-between
                      "
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

              {/* AI INSIGHT */}

              <div className="
                relative
                overflow-hidden
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-8
                backdrop-blur-xl
              ">

                <div className="absolute top-0 right-0 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">

                  <p className="text-green-400 tracking-[3px] mb-5">

                    AI INSIGHT

                  </p>

                  <h2 className="text-3xl font-bold leading-tight mb-6">

                    Why AI Suggested
                    <br />

                    This Career

                  </h2>

                  <p className="text-gray-400 leading-8">

                    Based on your conversation patterns,
                    creativity level, communication style,
                    and problem-solving ability, AI predicts
                    strong compatibility with this future-ready profession.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </PageWrapper>

  );

};

export default CareerPreview;