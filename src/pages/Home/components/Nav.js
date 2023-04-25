import {useEffect} from "react";

const Nav = ({showSidebar, setShowSidebar}) => {
  useEffect(() => {
    if (showSidebar === true) {
      document.querySelector(".side-bar-wrapper ").style.transform =
        "translateX(5%)";
    }
  }, [showSidebar]);

  return (
    <nav className="nav">
      <button
        className="nav-toggle"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}>
        <span id="hamburger-center-line" className="hamburger"></span>
      </button>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#1" className="nav-link">
            item 1
          </a>
        </li>
        <li className="nav-item">
          <a href="#2" className="nav-link">
            item 2
          </a>
        </li>
        <li className="nav-item">
          <a href="#3" className="nav-link">
            item 3
          </a>
        </li>
        <li className="nav-item">
          <a href="#4" className="nav-link">
            item 4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
