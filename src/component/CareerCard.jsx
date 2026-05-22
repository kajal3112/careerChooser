import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CareerCard = ({ career }) => {

  const navigate = useNavigate();

  return (

    <motion.div

      whileHover={{
        y: -8
      }}

      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-green-500/10
        bg-[#0B1120]/80
        backdrop-blur-xl
        p-8
        hover:border-green-400/30
        hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]
        transition-all
        duration-500
      "
    >

      {/* GLOW */}

      <div className="
        absolute
        top-0
        right-0
        w-40
        h-40
        bg-green-400/5
        blur-3xl
        rounded-full
      "></div>

      {/* CATEGORY */}

      <div className="
        inline-flex
        px-4
        py-2
        rounded-full
        bg-green-400/10
        border
        border-green-500/10
        text-green-400
        text-xs
        tracking-[2px]
        mb-8
      ">

        FUTURE CAREER

      </div>

      {/* TITLE */}

      <h2 className="
        text-3xl
        font-bold
        mb-5
        leading-tight
      ">

        {career.name}

      </h2>

      {/* DESCRIPTION */}

      <p className="
        text-gray-400
        leading-8
        mb-8
      ">

        {career.description}

      </p>

      {/* SUBJECTS */}

      <div className="mb-8">

        <p className="
          text-sm
          text-gray-500
          mb-4
          tracking-[2px]
        ">

          SUBJECTS USED

        </p>

        <div className="flex flex-wrap gap-3">

          {career.subjectsUsed?.map((item, index) => (

            <span
              key={index}
              className="
                px-4
                py-2
                rounded-full
                bg-[#111827]
                border
                border-green-500/10
                text-sm
                text-gray-300
              "
            >

              {item.subject}

            </span>

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div className="
        flex
        items-center
        justify-between
        pt-6
        border-t
        border-green-500/10
      ">

        <div>

          <p className="text-gray-500 text-sm">

            Future Demand

          </p>

          <h4 className="
            text-green-400
            font-semibold
            mt-1
          ">

            ↑ High Growth

          </h4>

        </div>

        <button

          onClick={() =>
            navigate("/career-preview", {
              state: {
                career: {
                  title: career.name,
                  desc: career.description
                }
              }
            })
          }

          className="
            px-5
            py-3
            rounded-2xl
            bg-green-400
            text-black
            font-semibold
            hover:scale-105
            transition-all
            duration-300
          "
        >

          Explore →

        </button>

      </div>

    </motion.div>

  );

};

export default CareerCard;