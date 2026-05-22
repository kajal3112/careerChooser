import { motion } from "framer-motion";

const RoadmapCard = ({
  step,
  title,
  description,
  skills,
  icon,
  active
}) => {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        relative
        group
        flex
        gap-6
      "
    >

      {/* TIMELINE */}

      <div className="flex flex-col items-center">

        {/* STEP CIRCLE */}

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            border
            backdrop-blur-xl
            transition-all
            duration-500

            ${
              active
                ? "bg-green-400 text-black border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                : "bg-[#0B1120]/70 text-green-400 border-green-500/20"
            }
          `}
        >

          {icon}

        </div>

        {/* LINE */}

        <div className="w-[2px] flex-1 bg-gradient-to-b from-green-400/40 to-transparent mt-4"></div>

      </div>

      {/* CARD */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01
        }}
        transition={{ duration: 0.3 }}
        className="
          relative
          flex-1
          bg-[#0B1120]/70
          border
          border-green-500/10
          rounded-[32px]
          backdrop-blur-xl
          p-8
          overflow-hidden
          hover:border-green-400/30
          hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]
          transition-all
          duration-500
        "
      >

        {/* HOVER GLOW */}

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

        {/* STEP BADGE */}

        <div className="
          relative
          z-10
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-green-400/10
          border
          border-green-500/10
          text-green-400
          text-sm
          mb-6
        ">

          Step {step}

        </div>

        {/* TITLE */}

        <h3 className="
          relative
          z-10
          text-3xl
          font-bold
          mb-5
          leading-tight
        ">

          {title}

        </h3>

        {/* DESCRIPTION */}

        <p className="
          relative
          z-10
          text-gray-400
          leading-8
          mb-8
        ">

          {description}

        </p>

        {/* SKILLS */}

        <div className="
          relative
          z-10
          flex
          flex-wrap
          gap-3
        ">

          {skills.map((skill, index) => (

            <span
              key={index}
              className="
                px-4
                py-2
                rounded-xl
                bg-[#111827]
                border
                border-green-500/10
                text-green-400
                text-sm
                hover:bg-green-400
                hover:text-black
                transition-all
                duration-300
                cursor-default
              "
            >

              {skill}

            </span>

          ))}

        </div>

      </motion.div>

    </motion.div>

  );

};

export default RoadmapCard;