import careers from "../data/careers";
import { useParams } from "react-router-dom";
import AIChatBox from "../component/AIChatBox";

const CareerDetails = () => {
  const { id } = useParams();

  const career = careers.find(
    (c) => c.id === Number(id)
  );

  if (!career) {
    return <h1>Career not found</h1>;
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial"
      }}
    >
      {/* TITLE */}

      <h1
        style={{
          fontSize: "52px",
          marginBottom: "20px"
        }}
      >
        {career.name}
      </h1>

      {/* DESCRIPTION */}

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          lineHeight: "1.7",
          maxWidth: "800px"
        }}
      >
        {career.description}
      </p>

      {/* SKILLS + EDUCATION */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
        {/* SKILLS CARD */}

        <div
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "25px",
            border: "1px solid #eee",
            borderRadius: "16px",
            background: "#fafafa"
          }}
        >
          <h2>Skills Required</h2>

          <ul>
            {career.skills.map((skill, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px"
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div
            style={{
                marginTop: "40px",
                padding: "30px",
                borderRadius: "16px",
                background: "#f8f8f8"
            }}
            >
            <h2>Subjects Used In This Career</h2>

            <div
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
                }}
            >
                {career?.subjectsUsed?.map((item, index) => (
                <div
                    key={index}
                    style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px"
                    }}
                >
                    <h3>{item.subject}</h3>

                    <p>
                    <strong>Topic:</strong> {item.topic}
                    </p>

                    <p>
                    <strong>Real-world usage:</strong> {item.usage}
                    </p>
                </div>
                ))}
            </div>
        </div>

        {/* EDUCATION CARD */}

        <div
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "25px",
            border: "1px solid #eee",
            borderRadius: "16px",
            background: "#fafafa"
          }}
        >
          <h2>Education Path</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.7",
              color: "#555"
            }}
          >
            {career.education}
          </p>
        </div>
      </div>

      {/* ROADMAP SECTION */}

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "#f8f8f8"
        }}
      >
        <h2>AI Career Roadmap</h2>

        <ul
          style={{
            marginTop: "20px"
          }}
        >
          {career?.roadmap?.map((step, index) => (
            <li
              key={index}
              style={{
                marginBottom: "14px",
                lineHeight: "1.6"
              }}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* PRODUCTIVITY TASKS */}

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "#f8f8f8"
        }}
      >
        <h2>Today's Productivity Tasks</h2>

        <ul
          style={{
            marginTop: "20px"
          }}
        >
          {career?.dailyTasks?.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: "14px",
                lineHeight: "1.6"
              }}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>

      {/* PROGRESS TRACKER */}

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "#f8f8f8"
        }}
      >
        <h2>Progress Tracker</h2>

        <progress
          value="30"
          max="100"
          style={{
            width: "100%",
            height: "20px",
            marginTop: "20px"
          }}
        ></progress>

        <p
          style={{
            marginTop: "12px",
            color: "#555"
          }}
        >
          30% roadmap completed
        </p>
      </div>

      {/* STUDY CIRCLE */}

      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "#f8f8f8"
        }}
      >
        <h2>Career Study Circle</h2>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <h3>210+</h3>
            <p>Members</p>
          </div>

          <div>
            <h3>38</h3>
            <p>Active Today</p>
          </div>

          <div>
            <h3>Weekly Goal</h3>
            <p>Complete one portfolio project</p>
          </div>
        </div>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            background: "black",
            color: "white",
            cursor: "pointer"
          }}
        >
          Join Study Circle
        </button>
      </div>

      {/* AI ASSISTANT */}

      <AIChatBox />
    </div>
  );
};

export default CareerDetails;