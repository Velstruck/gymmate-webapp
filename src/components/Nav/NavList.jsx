import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function NavList() {
  const { user, logOut } = UserAuth(); // Get user and logout function from context

  const handleLogOut = async () => {
    try {
      await logOut();
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };

  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/about"}>
            About
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Gallery
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/schedule/monday"}>
            Schedule
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/blog"}>
            Blog
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/pricing"}>
            Pricing
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/classes"}>
            Classes
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/contact"}>
            Contact
          </Link>
        </li>

        {/* Conditional rendering for Sign Up / Log In / Log Out */}
        {!user ? (
          <>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-[#ff0336]"
            >
              <Link onClick={goTop} to={"/signup"}>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700">
              Sign Up
            </button>
              </Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className="cursor-pointer hover:text-[#ff0336] "
            >
              <Link onClick={goTop} to={"/login"}>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700">
              Log In
            </button>
              </Link>
            </li>
          </>
        ) : (
          <li
            style={{ transition: "all 0.3s" }}
            className="cursor-pointer"
            onClick={handleLogOut}
          >
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700">
              Log Out
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default NavList;
