import {useEffect, useRef} from "react";

const Nav = ({showSidebar, setShowSidebar}) => {
  const effectRan = useRef(true);

  function toggleMenuMode(toggle) {
    if (toggle) {
      document.querySelector(".homepage-wrapper").classList.add("nav-open");
      effectRan.current = !effectRan.current;
    } else {
      document.querySelector(".homepage-wrapper").classList.remove("nav-open");
      effectRan.current = !effectRan.current;
    }
  }

  useEffect(() => {
    toggleMenuMode(effectRan.current);
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
