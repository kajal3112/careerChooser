import careers from "../data/careers";
import CareerCard from "../component/CareerCard";

const Explore = () => {
    return (
        <div style={{ marginBottom: "30px", background: "#fafafa", minHeight: "100vh"}}>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "60px",
                    marginTop: "40px"
                }}
                >
                <p
                    style={{
                    color: "#666",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    marginBottom: "12px"
                    }}
                >
                    AI-POWERED CAREER DISCOVERY
                </p>

                <h1
                    style={{
                    fontSize: "56px",
                    marginBottom: "20px",
                    lineHeight: "1.2"
                    }}
                >
                    Explore Careers Beyond The Ordinary
                </h1>

                <p
                    style={{
                    maxWidth: "750px",
                    margin: "0 auto",
                    color: "#555",
                    fontSize: "18px",
                    lineHeight: "1.7"
                    }}
                >
                    Discover future-ready careers, personalized AI roadmaps,
                    productivity systems, and collaborative learning opportunities —
                    all designed to help students grow with clarity.
                </p>
            </div>

            <div style={{ display:"flex", flexWrap:"wrap", gap:"30px", justifyContent:"center"}}>
                {careers.map((career) => (
                    <CareerCard key={career.id} career={career} />
                ))}
            </div>

        </div>
        
    );
};

export default Explore;