import { Link } from "react-router-dom";
import { useState } from "react";

const CareerCard = ({ career }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/career/${career.id}`}
      style={{
        textDecoration: "none",
        color: "inherit"
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "24px",
          width: "320px",
          minHeight: "280px",
          boxShadow: hover
            ? "0 12px 30px rgba(0,0,0,0.12)"
            : "0 4px 12px rgba(0,0,0,0.06)",
          transform: hover
            ? "translateY(-8px)"
            : "translateY(0)",
          transition: "all 0.3s ease",
          border: "1px solid #eee",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* TOP SECTION */}

        <div>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "10px",
              fontWeight: "500"
            }}
          >
            {career.category}
          </p>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "14px"
            }}
          >
            {career.name}
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
              fontSize: "15px"
            }}
          >
            {career.description}
          </p>
        </div>

        {/* SKILLS */}

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap"
          }}
        >
          {career.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              style={{
                background: "#f3f3f3",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: "500"
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CareerCard;