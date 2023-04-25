import {useEffect} from "react";

const Sidebar = ({showSidebar, setShowSidebar}) => {
  useEffect(() => {
    if (showSidebar === false) {
      console.log("123");
      document.querySelector(".side-bar-wrapper ").style.transform =
        "translateX(100%)";
    }
  }, [showSidebar]);

  return (
    <nav className="side-bar-wrapper">
      <button
        className="side-bar-x"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}>
        X
      </button>

      <ul className="side-bar-list">
        <li className="side-bar-item">
          <a href="#1" className="nav-link">
            item 1
          </a>
        </li>
        <li className="side-bar-item">
          <a href="#2" className="nav-link">
            item 2
          </a>
        </li>
        <li className="side-bar-item">
          <a href="#3" className="nav-link">
            item 3
          </a>
        </li>
        <li className="side-bar-item">
          <a href="#4" className="nav-link">
            item 4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
