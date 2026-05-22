import { useState } from "react";

const AIChatBox = () => {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");

    const handleAsk = () => {
        if (!question) return;

        setResponse("Start with beginner concepts, practice daily, and build small projects consistently.");
    };

    return (
        <div
            style={{
                marginTop: "40px",
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "600px"
            }}
        >
            <h2>AI Career Assistant</h2>
            <input 
                type="text"
                placeholder="Ask AI anything about this career..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "10px"
                }}
            />
            <button
                onClick={handleAsk}
                style={{
                    marginTop: "15px",
                    padding: "10px 16px",
                    cursor: "pointer"
                }}
            >
                Ask AI
            </button>

            {response && (
                <div 
                style={{
                    marginTop: "20px",
                    background: "#f5f5f5",
                    padding: "15px",
                    borderRadius: "8px"
                }}
            >
                    <p>{response}</p>
                </div>
            )}
        </div>

    );
}

export default AIChatBox;