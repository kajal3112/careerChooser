import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../component/PageWrapper";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";

const AICoach = () => {

  const navigate = useNavigate();
  const chatContainerRef = useRef(null);

  const location = useLocation();

  const firstMessage = location.state?.firstMessage;
  const hasSentInitialMessage = useRef(false);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {

    chatContainerRef.current.scrollTop =
      chatContainerRef.current.scrollHeight;

    }
  };

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi 👋 I'm your AI Career Coach. Tell me about your interests, hobbies, or what excites you."
    }
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    "I enjoy creativity",
    "I love technology",
    "I like helping people",
    "I enjoy solving problems"
  ];

  const [analysis, setAnalysis] = useState({
    interests: ["Creativity", "Psychology"],
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
        value: "85%"
      },
      {
        title: "Leadership",
        value: "78%"
      }
    ]
  });

  const handleSend = useCallback((customText) => {

    const finalInput = customText || input;

    if (!finalInput.trim()) return;

    const userMessage = {
      sender: "user",
      text: finalInput
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setIsTyping(true);

    setTimeout(() => {

      let detectedInterests = [];
      let careers = [];
      let hiddenCareer = "";
      let aiMessage = "";

      if (
        finalInput.toLowerCase().includes("design") ||
        finalInput.toLowerCase().includes("creative")
      ) {

        detectedInterests = [
          "Creativity",
          "Design Thinking",
          "Visual Intelligence"
        ];

        careers = [

          {
            title: "Creative Technologist",

            desc:
              "Combines creativity, AI, and technology to build futuristic digital experiences.",

            match: "96%"
          },

          {
            title: "UX Researcher",

            desc:
              "Studies user behavior and designs human-centered digital products.",

            match: "92%"
          },

          {
            title: "Brand Strategist",

            desc:
              "Builds modern brand identities using psychology and storytelling.",

            match: "90%"
          },

          {
            title: "Digital Experience Designer",

            desc:
              "Designs immersive experiences for next-generation digital platforms.",

            match: "94%"
          }

        ];

        hiddenCareer = "Behavior Designer";

        aiMessage =
          "You show strong creative and visual thinking patterns. AI detected potential in design psychology, branding, and digital experiences.";

      }

      else if (
        finalInput.toLowerCase().includes("technology") ||
        finalInput.toLowerCase().includes("coding")
      ) {

        detectedInterests = [
          "Technology",
          "Problem Solving",
          "Innovation"
        ];

        careers = [

          {
            title: "AI Engineer",

            desc:
              "Builds intelligent AI systems and machine learning applications.",

            match: "95%"
          },

          {
            title: "Prompt Engineer",

            desc:
              "Designs advanced prompts and AI interaction systems.",

            match: "93%"
          },

          {
            title: "Cyber Intelligence Analyst",

            desc:
              "Protects digital systems and analyzes cyber threats.",

            match: "91%"
          },

          {
            title: "AR/VR Developer",

            desc:
              "Creates immersive augmented and virtual reality experiences.",

            match: "89%"
          }

        ];

        hiddenCareer = "AI UX Engineer";

        aiMessage =
          "You appear highly analytical with strong technical curiosity. AI predicts future success in innovation-driven technology careers.";

      }

      else if (
        finalInput.toLowerCase().includes("help") ||
        finalInput.toLowerCase().includes("people")
      ) {

        detectedInterests = [
          "Empathy",
          "Communication",
          "Human Behavior"
        ];

        careers = [

          {
            title: "Career Psychologist",

            desc:
              "Guides students and professionals toward fulfilling careers.",

            match: "94%"
          },

          {
            title: "Community Strategist",

            desc:
              "Builds and manages communities around products and organizations.",

            match: "90%"
          },

          {
            title: "Behavioral Scientist",

            desc:
              "Studies human behavior and decision-making patterns.",

            match: "93%"
          },

          {
            title: "Human-Centered AI Specialist",

            desc:
              "Designs ethical and emotionally intelligent AI experiences.",

            match: "92%"
          }

        ];

        hiddenCareer = "Emotional Intelligence Consultant";

        aiMessage =
          "You demonstrate people-oriented thinking and emotional intelligence. AI identified strong alignment with human-centered careers.";

      }

      else {

        detectedInterests = [
          "Leadership",
          "Communication",
          "Creativity"
        ];

        careers = [

          {
            title: "Innovation Manager",

            desc:
              "Leads teams to create future-focused innovative solutions.",

            match: "92%"
          },

          {
            title: "Startup Consultant",

            desc:
              "Helps startups grow using strategy, branding, and AI insights.",

            match: "90%"
          },

          {
            title: "Product Strategist",

            desc:
              "Shapes digital product vision and long-term business growth.",

            match: "91%"
          },

          {
            title: "Business Intelligence Consultant",

            desc:
              "Uses analytics and AI to improve organizational decisions.",

            match: "89%"
          }

        ];

        hiddenCareer = "Future Trends Analyst";

        aiMessage =
          "AI identified balanced leadership, communication, and strategic thinking traits.";

      }

      const aiReply = {
        sender: "ai",
        text: aiMessage
      };

      setMessages((prev) => [...prev, aiReply]);

      setAnalysis({
        interests: detectedInterests,
        careers: careers,
        hiddenCareer: hiddenCareer,
        skills: [
          {
            title: "Creativity",
            value: "91%"
          },
          {
            title: "Communication",
            value: "84%"
          },
          {
            title: "Problem Solving",
            value: "88%"
          }
        ]
      });

      setIsTyping(false);

    }, 1800);

  }, [input]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {

    if (
      firstMessage &&
      !hasSentInitialMessage.current
    ) {

      hasSentInitialMessage.current = true;

      handleSend(firstMessage);

    }

  }, [firstMessage, handleSend]);

  return (
  <PageWrapper>
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10">
      <Navbar />
      {/* HEADER */}

      <div className="text-center mb-14 pt-24 md:pt-36">

        <p className="text-green-400 tracking-[4px] mb-4">

          AI CAREER COACH

        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Your Intelligent
          <br />

          Career Partner

        </h1>

        <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-8">

          Talk naturally with AI. Our system understands your interests,
          behavior, and learning patterns to suggest the best career paths.

        </p>

      </div>

      {/* MAIN LAYOUT */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* CHAT SECTION */}

        <div className="
          lg:col-span-2
          bg-[#0B1120]/70
          border
          border-green-500/10
          rounded-[35px]
          backdrop-blur-xl
          h-[75vh]
          flex
          flex-col
          overflow-hidden
          shadow-[0_0_40px_rgba(34,197,94,0.05)]
        ">

          {/* TOP BAR */}

          <div className="
            border-b
            border-green-500/10
            px-6
            py-5
            flex
            items-center
            justify-between
            shrink-0
          ">

            <div>

              <h2 className="text-2xl font-semibold">
                AI Conversation
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Behavior-based career intelligence
              </p>

            </div>

            <div className="flex items-center gap-2">

              <span className="
                w-3
                h-3
                rounded-full
                bg-green-400
                animate-pulse
              "></span>

              <span className="text-green-400 text-sm">

                AI Active

              </span>

            </div>

          </div>

          {/* SCROLLABLE CHAT AREA */}

          <div
            ref={chatContainerRef}
            className="
              flex-1
              overflow-y-auto
              px-6
              py-6
              space-y-6
              scrollbar-thin
              scrollbar-thumb-green-400/20
              scrollbar-track-transparent
            "
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-[85%]
                    px-6
                    py-4
                    leading-8
                    transition-all
                    duration-300
                    ${
                      msg.sender === "user"
                        ? "bg-green-400 text-black rounded-[28px] rounded-tr-md font-medium"
                        : "bg-[#111827] border border-green-500/10 rounded-[28px] rounded-tl-md text-gray-200 shadow-[0_0_20px_rgba(34,197,94,0.05)]"
                    }
                  `}
                >

                  {msg.text}

                </div>

              </div>

            ))}

            {/* AI TYPING */}

            {isTyping && (

              <div className="flex justify-start">

                <div className="
                  bg-[#111827]
                  border
                  border-green-500/10
                  rounded-full
                  px-5
                  py-4
                  flex
                  items-center
                  gap-2
                ">

                  <span className="
                    w-2
                    h-2
                    bg-green-400
                    rounded-full
                    animate-bounce
                  "></span>

                  <span className="
                    w-2
                    h-2
                    bg-green-400
                    rounded-full
                    animate-bounce
                    [animation-delay:0.2s]
                  "></span>

                  <span className="
                    w-2
                    h-2
                    bg-green-400
                    rounded-full
                    animate-bounce
                    [animation-delay:0.4s]
                  "></span>

                </div>

              </div>

            )}


          </div>

          {/* BOTTOM SECTION */}

          <div className="
            shrink-0
            border-t
            border-green-500/10
            bg-[#071021]/95
            backdrop-blur-xl
          ">

            {/* SUGGESTIONS */}

            <div className="
              px-6
              pt-4
              flex
              flex-wrap
              gap-3
            ">

              {suggestions.map((item, index) => (

                <button
                  key={index}
                  onClick={() => handleSend(item)}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-green-400/10
                    border
                    border-green-500/20
                    text-green-400
                    text-sm
                    hover:bg-green-400
                    hover:text-black
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  {item}

                </button>

              ))}

            </div>

            {/* INPUT */}

            <div className="p-5 flex gap-4">

              <input
                type="text"
                placeholder="Tell AI about your interests..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                className="
                  flex-1
                  h-14
                  bg-[#111827]
                  border
                  border-green-500/10
                  rounded-2xl
                  px-6
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-green-400
                  focus:shadow-[0_0_20px_rgba(34,197,94,0.15)]
                  transition-all
                  duration-300
                "
              />

              <button
                onClick={() => handleSend()}
                className="
                  h-14
                  px-8
                  rounded-2xl
                  bg-green-400
                  text-black
                  font-semibold
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]
                  transition-all
                  duration-300
                "
              >

                Send

              </button>

            </div>

          </div>

        </div>

        {/* INSIGHTS PANEL */}

        <div className="bg-[#0B1120]/70 border border-green-500/10 rounded-[35px] p-8 backdrop-blur-xl h-fit sticky top-6 shadow-[0_0_40px_rgba(34,197,94,0.05)]">

          <p className="text-green-400 tracking-[3px] mb-4">

            LIVE AI INSIGHTS

          </p>

          <h2 className="text-4xl font-bold mb-10">

            Career Analysis

          </h2>

          {/* DETECTED INTERESTS */}

          <div className="mb-10">

            <p className="text-white font-semibold mb-5">
              Detected Interests
            </p>

            <div className="flex flex-wrap gap-3">

              {analysis.interests.map((item, index) => (

                <span
                  key={index}
                  className="bg-green-400/10 border border-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm"
                >

                  {item}

                </span>

              ))}

            </div>

          </div>

          {/* RECOMMENDED CAREERS */}

          <div className="mb-10">

            <p className="text-white font-semibold mb-5">
              Recommended Careers
            </p>

            <div className="flex flex-wrap gap-3">

              {analysis.careers.map((career, index) => (

                <button key={index}
                  onClick={() => navigate("/career-preview" , {
                    state : 
                    {career: career.title}
                    })
                  } className="
                      bg-green-400
                      text-black
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-semibold
                      // hover:bg-green-400/80
                      transition-all
                      duration-300
                    ">
                    {career?.title}
                </button>

              ))}

            </div>

          </div>

          {/* HIDDEN CAREER */}
          <button
            onClick={() =>
              navigate("/dashboard", {
                state: {
                  analysis: analysis
                }
              })
            }
            className="
              mt-8
              w-full
              bg-green-400
              text-black
              py-4
              rounded-2xl
              font-semibold
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]
              transition-all
              duration-300
            "
          >

            Open AI Dashboard

          </button>

          {/* <div>

            <h3 className="
              text-green-400
              uppercase
              text-xl
              font-light
              whitespace-nowrap
              mt-6
              mb-6
              text-center
              tracking-[2px]
              pb-2
            ">

              Hidden Career Match

            </h3>

            <div className="
              bg-green-400
              text-black
              rounded-[28px]
              p-6
              shadow-[0_0_30px_rgba(34,197,94,0.25)]
            ">

              <h3 className="text-2xl font-bold mb-3">

                {analysis.hiddenCareer}

              </h3>

              <p className="leading-8">

                AI discovered this unique career based on your
                interests, communication style, and behavior patterns.

              </p>

            </div>

          </div> */}

        </div>

      </div>

    </div>
  </PageWrapper>
  );
};

export default AICoach;