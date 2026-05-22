import RoadmapCard from "../component/RoadmapCard";
import { useLocation } from "react-router-dom";
import PageWrapper from "../component/PageWrapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const Roadmap = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const career = location.state?.career || "AI Engineer";

  const [ loading, setLoading ] = useState(false);
  const roadmapSteps = [
    {
      step: 1,
      title: "Learn Fundamentals",
      description:
        "Build strong programming and logical thinking foundations for AI development.",
      skills: [
        "Python",
        "JavaScript",
        "Problem Solving",
        "DSA"
      ],
      icon: "📘",
      active: true
    },

    {
      step: 2,
      title: "Master AI & ML",
      description:
        "Understand machine learning, neural networks, and AI model training.",
      skills: [
        "Machine Learning",
        "TensorFlow",
        "Deep Learning",
        "NLP"
      ],
      icon: "🤖",
      active: false
    },

    {
      step: 3,
      title: "Build Real Projects",
      description:
        "Create impactful AI applications and strengthen your portfolio.",
      skills: [
        "AI Projects",
        "APIs",
        "Deployment",
        "GitHub"
      ],
      icon: "🚀",
      active: false
    },

    {
      step: 4,
      title: "Industry Ready",
      description:
        "Prepare for internships, networking, and professional AI careers.",
      skills: [
        "Resume",
        "LinkedIn",
        "Interview Prep",
        "Networking"
      ],
      icon: "💼",
      active: false
    }
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  },[]);

  if(loading) {
    return (

        <PageWrapper>

        <div className="min-h-screen bg-[#050816] text-white px-6 py-20">
          <Navbar />

        {/* HEADING */}

        <div className="text-center mb-20 pt-24 md:pt-36">

            <p className="text-green-400 tracking-[4px] mb-5">

            AI ROADMAP GENERATOR

            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Become An
            <br />

            {career}

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-8">

            Personalized AI-generated roadmap to help students
            become industry-ready professionals.

            </p>

        </div>

        {/* ROADMAP */}

        <div className="max-w-5xl mx-auto space-y-12">

            {roadmapSteps.map((item, index) => (

            <RoadmapCard
                key={index}
                step={item.step}
                title={item.title}
                description={item.description}
                skills={item.skills}
                icon={item.icon}
                active={item.active}
            />

            ))}

        </div>

        </div>
        </PageWrapper>
    );
}
};

export default Roadmap;