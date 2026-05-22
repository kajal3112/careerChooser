// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const navigate = useNavigate();
  return (
    
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-green-500/10 bg-[#050816]/80">

  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* LOGO */}

          <div
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-3
              cursor-pointer
            "
          >

            <div
              className="
                w-11
                h-11
                rounded-2xl
                bg-green-400
                text-black
                flex
                items-center
                justify-center
                font-bold
                text-xl
                shadow-[0_0_25px_rgba(34,197,94,0.35)]
              "
            >

              a

            </div>

            <div>

              <h2 className="text-xl font-bold tracking-wide">

                AI Career OS

              </h2>

              <p className="text-xs text-gray-500">

                Future Career Intelligence

              </p>

            </div>
        </div>

  <div className="hidden md:flex items-center gap-10">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `
          text-sm
          tracking-wide
          transition-all
          duration-300 
          ${
            isActive
              ? "text-green-400"
              : "text-gray-400 hover:text-green-400"
          }
          `
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/ai-coach"
        className={({ isActive }) =>
          `
          text-sm
          tracking-wide
          transition-all
          duration-300
          ${
            isActive
              ? "text-green-400"
              : "text-gray-400 hover:text-green-400"
          }
          `
        }
      >
        AI Coach
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `
          text-sm
          tracking-wide
          transition-all
          duration-300
          ${
            isActive
              ? "text-green-400"
              : "text-gray-400 hover:text-green-400"
          }
          `
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `
          text-sm
          tracking-wide
          transition-all
          duration-300
          ${
            isActive
              ? "text-green-400"
              : "text-gray-400 hover:text-green-400"
          }
          `
        }
      >
        Career Preview
      </NavLink>

  </div>

        {/* RIGHT BUTTON */}

          <div className="hidden md:flex">

            <button
              onClick={() => navigate("/ai-coach")}
              className="
                px-6
                py-3
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

              Get Started

            </button>

          </div>

   {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-12
              h-12
              rounded-2xl
              border
              border-green-500/10
              bg-[#0B1120]
              flex
              items-center
              justify-center
              text-green-400
              text-3xl
            "
          >

            {menuOpen ? "✕" : "☰"}

          </button>

        </div>

      {/* </div> */}

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          ${
            menuOpen
              ? "max-h-full opacity-100 h-screen"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            px-6
            pb-6
            pt-2
            space-y-4
            bg-[#071021]/95
            border-t
            border-green-500/10
          "
        >

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="
              block
              py-3
              px-4
              rounded-2xl
              bg-[#0B1120]
              text-gray-300
              hover:text-green-400
              transition-all
              duration-300
            "
          >

            Home

          </NavLink>

          <NavLink
            to="/ai-coach"
            onClick={() => setMenuOpen(false)}
            className="
              block
              py-3
              px-4
              rounded-2xl
              bg-[#0B1120]
              text-gray-300
              hover:text-green-400
              transition-all
              duration-300
            "
          >

            AI Coach

          </NavLink>

          <NavLink
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="
              block
              py-3
              px-4
              rounded-2xl
              bg-[#0B1120]
              text-gray-300
              hover:text-green-400
              transition-all
              duration-300
            "
          >

            Dashboard

          </NavLink>

          <button
            onClick={() => {
              navigate("/ai-coach");
              setMenuOpen(false);
            }}
            className="
              w-full
              mt-3
              bg-green-400
              text-black
              py-4
              rounded-2xl
              font-semibold
              hover:scale-[1.01]
              transition-all
              duration-300
            "
          >

            Get Started

          </button>

        </div>

  </div>

</nav>
  );
};

export default Navbar;