import PageWrapper from "../component/PageWrapper";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CareerCategories from "../component/CareerCategories";
import Navbar from "../component/Navbar";

const Dashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const analysis = location.state?.analysis;
  const fallbackAnalysis = {
    interests: ["Creativity", "Leadership"],
    careers: [

        {
          title: "Creative Technologist",

          desc:
            "Combines creativity, AI, and technology to design futuristic digital experiences.",

          match: "96%"
        },

        {
          title: "AI UX Engineer",

          desc:
            "Builds intelligent AI-driven user experiences and conversational systems.",

          match: "93%"
        },

        {
          title: "Innovation Strategist",

          desc:
            "Helps organizations identify future opportunities using AI insights.",

          match: "91%"
        }

      ],
    hiddenCareer: "Behavior Designer",
    skills: [
        {
        title: "Creativity",
        value: "92%"
        },
        {
        title: "Communication",
        value: "84%"
        }
    ]
    };

  const finalAnalysis = analysis || fallbackAnalysis;
  const stats = [
    {
      title: "Career Match",
      value: "94%",
      icon: "🎯"
    },
    {
      title: "AI Confidence",
      value: "High",
      icon: "🤖"
    },
    {
      title: "Growth Score",
      value: "88%",
      icon: "📈"
    },
    {
      title: "Hidden Strength",
      value: "Creativity",
      icon: "✨"
    }
  ];

  console.log(finalAnalysis);
  const activities = [
    "AI Coach analyzed your interests",
    "Hidden career match generated",
    "Learning roadmap created",
    "Skill analysis completed"
  ];

  return (

    <PageWrapper>

      <div className="min-h-screen bg-[#050816] text-white px-6 py-12 overflow-hidden">
        <Navbar />

        {/* BACKGROUND GLOW */}

        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-400/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 pt-24 md:pt-36">

          {/* HEADER */}

          <div className="mb-16">

            <p className="text-green-400 tracking-[4px] mb-4">

              AI ANALYTICS DASHBOARD

            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              Student
              <br />

              Intelligence Hub

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-3xl mt-8">

              AI-powered analytics dashboard showing behavior insights,
              strengths, career matches, and personalized growth tracking.

            </p>

          </div>

          {/* TOP STATS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="
                  group
                  relative
                  bg-[#0B1120]/70
                  border
                  border-green-500/10
                  rounded-[30px]
                  p-7
                  backdrop-blur-xl
                  overflow-hidden
                  hover:-translate-y-2
                  hover:border-green-400/30
                  hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]
                  transition-all
                  duration-500
                "
              >

                {/* GLOW */}

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

                <div className="relative z-10 flex items-center justify-between">

                  <div>

                    <p className="text-gray-400 mb-3">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold">
                      {item.value}
                    </h2>

                  </div>

                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-green-400/10
                    border
                    border-green-500/10
                    flex
                    items-center
                    justify-center
                    text-3xl
                  ">

                    {item.icon}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* MAIN GRID */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* LEFT SIDE */}

            <div className="xl:col-span-2 space-y-8">

              {/* SKILL ANALYSIS */}

              <div className="
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-8
                backdrop-blur-xl
              ">

                <div className="flex items-center justify-between mb-10">

                  <div>

                    <p className="text-green-400 tracking-[3px] mb-3">

                      AI SKILL ANALYSIS

                    </p>

                    <h2 className="text-4xl font-bold">

                      Behavioral Insights

                    </h2>

                  </div>

                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-green-400/10
                    border
                    border-green-500/10
                    flex
                    items-center
                    justify-center
                    text-3xl
                  ">

                    🧠

                  </div>

                </div>

                <div className="space-y-7">

                  {finalAnalysis.skills.map((item, index) => (

                    <div key={index}>

                      <div className="flex justify-between mb-3">

                        <span className="text-gray-300">
                          {item.title}
                        </span>

                        <span className="text-green-400">
                          {item.value}
                        </span>

                      </div>

                      <div className="h-3 bg-[#1e293b] rounded-full overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: item.value }}
                          transition={{ duration: 1 }}
                          className="h-full bg-green-400 rounded-full"
                        ></motion.div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              <CareerCategories />
              {/* ACTIVITY TIMELINE */}

              <div className="
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-8
                backdrop-blur-xl
              ">

                <p className="text-green-400 tracking-[3px] mb-4">

                  AI ACTIVITY

                </p>

                <h2 className="text-4xl font-bold mb-10">

                  Learning Timeline

                </h2>

                <div className="space-y-8">

                  {activities.map((item, index) => (

                    <div
                      key={index}
                      className="flex gap-5"
                    >

                      {/* DOT */}

                      <div className="flex flex-col items-center">

                        <div className="
                          w-5
                          h-5
                          rounded-full
                          bg-green-400
                          shadow-[0_0_20px_rgba(34,197,94,0.5)]
                        "></div>

                        {index !== activities.length - 1 && (

                          <div className="w-[2px] flex-1 bg-green-400/20 mt-3"></div>

                        )}

                      </div>

                      {/* CONTENT */}

                      <div className="pb-10">

                        <h3 className="text-xl font-semibold mb-2">

                          {item}

                        </h3>

                        <p className="text-gray-400 leading-8">

                          AI processed and analyzed user interactions
                          to generate personalized intelligence insights.

                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-8">

              {/* CAREER MATCHES */}

              <div className="
                bg-[#0B1120]/70
                border
                border-green-500/10
                rounded-[35px]
                p-8
                backdrop-blur-xl
              ">

                <p className="text-green-400 tracking-[3px] mb-4">

                  AI CAREER MATCHES

                </p>

                <h2 className="text-4xl font-bold mb-10">

                  Recommended Careers

                </h2>

                <div className="space-y-6">

                  {finalAnalysis.careers.map((item, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            y: -6
                        }}
                        onClick={() =>
                            navigate("/career-preview", {
                            state: {
                                career: item.title
                            }
                            })
                        }
                        className="
                            cursor-pointer
                            bg-[#111827]/70
                            border
                            border-green-500/10
                            rounded-[28px]
                            p-6
                            hover:border-green-400/30
                            hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
                            transition-all
                            duration-300
                        "
                        >

                      <div className="flex items-center justify-between mb-4">

                        <h3 className="text-2xl font-bold">

                          {item.title}

                        </h3>

                        <span className="
                          bg-green-400
                          text-black
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        ">

                          {item.match}

                        </span>

                      </div>

                      <p className="text-gray-400 leading-8">

                        {item.desc}

                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

              {/* AI INSIGHT */}

              <div className="
                relative
                overflow-hidden
                bg-green-400
                text-black
                rounded-[35px]
                p-8
                shadow-[0_0_40px_rgba(34,197,94,0.25)]
              ">

                <div className="absolute top-0 right-0 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>

                <p className="tracking-[3px] mb-4 font-medium">

                  HIDDEN CAREER MATCH

                </p>

                <h2 className="text-4xl font-bold leading-tight mb-6">

                  {finalAnalysis.hiddenCareer}

                </h2>

                <p className="leading-8 text-black/80">

                  Combines psychology, design,
                  and artificial intelligence to build
                  next-generation AI experiences.

                </p>

                <button className="
                  mt-8
                  bg-black
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  hover:scale-105
                  transition-all
                  duration-300
                ">

                  Explore Career

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </PageWrapper>

  );

};

export default Dashboard;