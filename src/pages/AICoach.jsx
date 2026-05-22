import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../component/PageWrapper";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";

const AICoach = () => {

  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const messagesMobileEndRef = useRef(null);
  const [activeMobileTab, setActiveMobileTab] = useState("chat");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    "I enjoy creativity",
    "I love technology",
    "I like helping people",
    "I enjoy solving problems"
  ];

  const location = useLocation();

  const firstMessage = location.state?.firstMessage;
  const hasSentInitialMessage = useRef(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi 👋 I'm your AI Career Coach. Tell me about your interests, hobbies, or what excites you."
    }
  ]);

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

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
    messagesMobileEndRef.current?.scrollIntoView({
      behavior: "smooth"
    }); 

  }, [messages, isTyping]);



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

  const handleTabChange = (tab) => {

    setActiveMobileTab(tab);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (
  <PageWrapper>
    <div className="min-h-screen bg-[#050816] text-white px-6 py-10">
      <Navbar />
      {/* HEADER */}

      <div className="text-center mb-14 pt-24 md:pt-36 hidden lg:block">

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

      {/* MAIN LAYOUT */}

      <div
        className=" hidden
          lg:grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
          items-start
        "
      >

        {/* CHAT SECTION */}

        <div
          className="
            lg:col-span-2

            h-[82vh]
            md:h-[85vh]

            flex
            flex-col

            overflow-hidden

            rounded-[28px]
            md:rounded-[35px]

            border
            border-green-500/10

            bg-[#0B1120]/70
            backdrop-blur-xl

            shadow-[0_0_40px_rgba(34,197,94,0.05)]
          "
        >

          {/* TOP BAR */}

          <div
            className="
              border-b
              border-green-500/10

              px-4
              md:px-6

              py-4
              md:py-5

              flex
              items-center
              justify-between
            "
          >

            <div>

              <h2 className="
                text-xl
                md:text-2xl
                font-semibold
              ">

                AI Conversation

              </h2>

              <p className="
                text-gray-400
                text-xs
                md:text-sm
                mt-1
              ">

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

              <span className="
                text-green-400
                text-xs
                md:text-sm
              ">

                AI Active

              </span>

            </div>

          </div>

          {/* CHAT AREA */}

          <div
            className="
              flex-1
              overflow-y-auto

              p-3
              md:p-6

              space-y-5
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
                    max-w-[90%]
                    md:max-w-[80%]

                    px-4
                    md:px-6

                    py-3
                    md:py-4

                    leading-7

                    text-sm
                    md:text-base

                    ${
                      msg.sender === "user"
                        ? `
                          bg-green-400
                          text-black
                          rounded-[24px]
                          rounded-tr-md
                          font-medium
                        `
                        : `
                          bg-[#111827]
                          border
                          border-green-500/10
                          rounded-[24px]
                          rounded-tl-md
                          text-gray-200
                        `
                    }
                  `}
                >

                  {msg.text}

                </div>

              </div>

            ))}

            {/* AI LOADER */}

            {isTyping && (

              <div className="flex justify-start">

                <div
                  className="
                    bg-[#111827]
                    border
                    border-green-500/10

                    rounded-full

                    px-5
                    py-4

                    flex
                    items-center
                    gap-2
                  "
                >

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
            <div ref={messagesEndRef}></div>

          </div>

          {/* SUGGESTIONS */}

          <div
            className="
              px-3
              md:px-6

              pb-3
              md:pb-4

              flex
              flex-wrap
              gap-2
            "
          >

            {suggestions.map((item, index) => (

              <button
                key={index}
                onClick={() => handleSend(item)}
                className="
                  px-3
                  md:px-4

                  py-2

                  rounded-full

                  bg-green-400/10

                  border
                  border-green-500/20

                  text-green-400

                  text-xs
                  md:text-sm

                  hover:bg-green-400
                  hover:text-black

                  transition-all
                  duration-300
                "
              >

                {item}

              </button>

            ))}

          </div>

          {/* INPUT */}

          <div
            className="
              border-t
              border-green-500/10

              p-3
              md:p-5

              bg-[#071021]/80

              flex
              items-center
              gap-3
            "
          >

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
                md:h-16

                bg-[#111827]

                border
                border-green-500/10

                rounded-2xl

                px-4
                md:px-6

                text-sm
                md:text-base

                outline-none

                text-white

                placeholder:text-gray-500

                focus:border-green-400

                transition-all
                duration-300
              "
            />

            <button
              onClick={() => handleSend()}
              className="
                h-14
                md:h-16

                px-5
                md:px-8

                rounded-2xl

                bg-green-400

                text-black

                text-sm
                md:text-base

                font-semibold

                hover:scale-105

                transition-all
                duration-300
              "
            >

              Send

            </button>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="
          flex
          flex-col
          gap-6
        ">

          {/* MOBILE STACKED PANELS */}

          <div className="
            grid
            sm:grid-cols-2
            lg:grid-cols-1
            gap-6
          ">

            {/* INSIGHTS */}

            <div
              className="
                rounded-[28px]
                border
                border-green-500/10

                bg-[#0B1120]/70
                backdrop-blur-xl

                p-6
              "
            >

              <h3 className="
                text-green-400
                tracking-[3px]
                text-sm
                mb-6
              ">

                AI INSIGHTS

              </h3>

              <div className="space-y-5">

                {analysis.skills.map((item, index) => (

                  <div key={index}>

                    <div className="
                      flex
                      justify-between
                      mb-2
                    ">

                      <span className="text-gray-300">

                        {item.title}

                      </span>

                      <span className="text-green-400">

                        {item.value}

                      </span>

                    </div>

                    <div className="
                      h-2
                      bg-[#1e293b]
                      rounded-full
                      overflow-hidden
                    ">

                      <div
                        className="
                          h-full
                          bg-green-400
                          rounded-full
                        "
                        style={{
                          width: item.value
                        }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* CAREERS */}

            <div
              className="
                rounded-[28px]
                border
                border-green-500/10

                bg-[#0B1120]/70
                backdrop-blur-xl

                p-6
              "
            >

              <h3 className="
                text-green-400
                tracking-[3px]
                text-sm
                mb-6
              ">

                RECOMMENDED CAREERS

              </h3>

              <div className="
                flex
                flex-wrap
                gap-3
              ">

                {analysis.careers.map((career, index) => (

                  <button
                    key={index}
                    className="
                      px-4
                      py-3

                      rounded-2xl

                      bg-green-400
                      text-black

                      text-sm
                      font-semibold
                    "
                  >

                    {career.title}

                  </button>

                ))}

              </div>

            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="
                w-full

                mt-6

                bg-green-400

                text-black

                py-4

                rounded-[24px]

                font-semibold
                text-lg

                hover:scale-[1.02]

                hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]

                transition-all
                duration-300
              "
            >

              Open AI Dashboard →

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE LAYOUT */}

      <div className="lg:hidden h-screen flex flex-col overflow-hidden">

        {/* ACTIVE CONTENT */}

        {activeMobileTab === "chat" && (

          <div>

            {/* CHAT SECTION */}

            <div className="
              h-[calc(100vh-50px)]
              flex
              flex-col
            ">

              {/* TOP */}

              <div className="
                fixed
                top-20
                left-0
                right-0

                z-40

                h-20

                px-5

                bg-[#050816]/95
                backdrop-blur-xl

                border-b
                border-green-500/10

                flex
                items-center
                justify-between
              ">

                <div>

                  <h2 className="text-xl font-semibold">

                    AI Coach

                  </h2>

                  <p className="
                    text-green-400
                    text-sm
                    mt-1
                  ">

                    Online

                  </p>

                </div>

                <button className="
                  w-11
                  h-11
                  rounded-2xl
                  border
                  border-green-500/10
                  bg-[#111827]
                ">

                  +

                </button>

              </div>

              {/* MESSAGES */}

              <div className="
                flex-1

                overflow-y-auto

                min-h-0

                px-4
                py-5

                space-y-5

                mt-[125px]
                mb-20
              ">

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
                        max-w-[90%]
                        px-5
                        py-4
                        rounded-[24px]
                        text-sm
                        leading-7

                        ${
                          msg.sender === "user"
                            ? `
                              bg-green-400
                              text-black
                              rounded-tr-md
                            `
                            : `
                              bg-[#111827]
                              border
                              border-green-500/10
                              rounded-tl-md
                            `
                        }
                      `}
                    >

                      {msg.text}

                    </div>

                  </div>

                ))}

                <div ref={messagesMobileEndRef}></div>

              </div>

              {/* INPUT */}

              <div className="
                fixed

                bottom-20
                left-0
                right-0

                z-40

                p-4

                bg-[#050816]/95
                backdrop-blur-xl

                border-t
                border-green-500/10

                flex
                items-center
                gap-3
              ">

                <input
                  type="text"
                  placeholder="Ask anything..."
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  className="
                    flex-1
                    h-14
                    bg-[#111827]
                    border
                    border-green-500/10
                    rounded-2xl
                    px-5
                    outline-none
                  "
                />

                <button
                  onClick={() => handleSend()}
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-400
                    text-black
                    font-bold
                  "
                >

                  ↑

                </button>

              </div>

            </div>

          </div>

        )}

        {/* INSIGHTS TAB */}

        {activeMobileTab === "insights" && (

          <div className="
            pt-28 px-5 pb-32
            space-y-5
          ">

            <h2 className="
              text-2xl
              font-bold
            ">

              AI Insights

            </h2>

            {analysis.skills.map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#111827]
                  border
                  border-green-500/10
                  rounded-[24px]
                  p-5
                "
              >

                <div className="
                  flex
                  justify-between
                  mb-3
                ">

                  <span>

                    {item.title}

                  </span>

                  <span className="text-green-400">

                    {item.value}

                  </span>

                </div>

                <div className="
                  h-2
                  bg-[#1e293b]
                  rounded-full
                  overflow-hidden
                ">

                  <div
                    className="
                      h-full
                      bg-green-400
                    "
                    style={{
                      width: item.value
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* CAREERS TAB */}

        {activeMobileTab === "careers" && (

          <div className="
            pt-28 px-5 pb-32
            space-y-5
          ">

            <h2 className="
              text-2xl
              font-bold
            ">

              Recommended Careers

            </h2>

            {analysis.careers.map((career, index) => (

              <div
                key={index}
                onClick={() =>
                            navigate("/career-preview", {
                            state: {
                                career: career
                            }
                            })
                        }
                className="
                  bg-[#111827]
                  border
                  border-green-500/10
                  rounded-[24px]
                  p-5
                "
              >

                <div className="
                  flex
                  items-center
                  justify-between
                  mb-3
                ">

                  <h3 className="
                    text-lg
                    font-semibold
                  ">

                    {career.title}

                  </h3>

                  <span className="
                    text-green-400
                    font-semibold
                  ">

                    {career.match}

                  </span>

                </div>

                <p className="
                  text-gray-400
                  leading-7
                  text-sm
                ">

                  {career.desc}

                </p>

              </div>

            ))}

          </div>

        )}

        {/* MOBILE BOTTOM NAV */}

        <div className="
          fixed
          bottom-0
          left-0
          right-0

          h-20

          bg-[#071021]/95
          backdrop-blur-2xl

          border-t
          border-green-500/10

          flex
          items-center
          justify-around

          z-50
        ">

          <button
            onClick={() =>
              handleTabChange("chat")
            }
            className={`
              flex
              flex-col
              items-center
              text-s
              gap-1

              ${
                activeMobileTab === "chat"
                  ? "text-green-400"
                  : "text-gray-500"
              }
            `}
          >

            💬

            Chat

          </button>

          <button
            onClick={() =>
              handleTabChange("insights")
            }
            className={`
              flex
              flex-col
              items-center
              text-s
              gap-1

              ${
                activeMobileTab === "insights"
                  ? "text-green-400"
                  : "text-gray-500"
              }
            `}
          >

            ✨

            Insights

          </button>

          <button
            onClick={() =>
              handleTabChange("careers")
            }
            className={`
              flex
              flex-col
              items-center
              text-s
              gap-1

              ${
                activeMobileTab === "careers"
                  ? "text-green-400"
                  : "text-gray-500"
              }
            `}
          >

            🚀

            Careers

          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className={`
              flex
              flex-col
              items-center
              text-s
              gap-1

              ${
                activeMobileTab === "dashboard"
                  ? "text-green-400"
                  : "text-gray-500"
              }
            `}
          >

            📊

            Dashboard

          </button>

        </div>

      </div>

    </div>
  </PageWrapper>
  );
};

export default AICoach;