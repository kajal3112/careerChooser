import { useNavigate } from "react-router-dom";
import CareerPreview from "../pages/CareerPreview";

const CareerCategories = () => {

    const navigate = useNavigate();

    const careerCategories = {

        private: [
            "AI UX Engineer",
            "Product Strategist"
        ],

        government: [
            "UPSC",
            "RBI Grade B"
        ],

        abroad: [
            "Behavioral Researcher",
            "AI Policy Analyst"
        ],

        future: [
            "AI Ethicist",
            "Future Trends Analyst"
        ]

    };     

  return (
    <div className="
        bg-[#0B1120]/70
        border
        border-green-500/10
        rounded-[32px]
        p-6
        ">

        <h3 className="
            text-green-400
            text-xl
            tracking-[4px]
            mb-6
        ">

            Career Categories

        </h3>

        <div className="space-y-5">

            <div>

                <p className="text-white mb-3">
                    Private Careers
                </p>

                <div className="flex flex-wrap gap-3">

                    {careerCategories.private.map((item, index) => (

                        <button onClick={() => navigate("/career-preview" , {
                            state : 
                            {career: item}
                            })
                            } className="
                            px-4
                                py-2
                                rounded-full
                                bg-green-400
                                text-black
                                text-sm
                                font-medium
                            ">
                                {item}
                        </button>

                    ))}

                </div>

            </div>
            <div>

                <p className="text-white mb-3">
                    Government Careers
                </p>

                <div className="flex flex-wrap gap-3">

                    {careerCategories.government.map((item, index) => (

                        <button onClick={() => navigate("/career-preview" , {
                            state : 
                            {career: item}
                            })
                            } className="
                            px-4
                                py-2
                                rounded-full
                                bg-green-400
                                text-black
                                text-sm
                                font-medium
                            ">
                                {item}
                        </button>

                    ))}

                </div>

            </div>

            <div>

                <p className="text-white mb-3">
                    Abroad Careers
                </p>

                <div className="flex flex-wrap gap-3">

                    {careerCategories.abroad.map((item, index) => (

                    <button onClick={() => navigate("/career-preview" , {
                        state : 
                        {career: item}
                        })
                        } className="
                        px-4
                        py-2
                        rounded-full
                        bg-green-400
                        text-black
                        text-sm
                        font-medium
                        "
                    >

                        {item}

                    </button>

                    ))}

                </div>

            </div>

            <div>

                <p className="text-white mb-3">
                    Future Careers
                </p>

                <div className="flex flex-wrap gap-3">

                    {careerCategories.future.map((item, index) => (

                    <button onClick={() => navigate("/career-preview" , {
                        state : 
                        {career: item}
                        })
                        } className="
                        px-4
                        py-2
                        rounded-full
                        bg-green-400
                        text-black
                        text-sm
                        font-medium
                        "
                    >

                        {item}

                    </button>

                    ))}

                </div>

            </div>

        </div>

    </div>

    )};

export default CareerCategories;