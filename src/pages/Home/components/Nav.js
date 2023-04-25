import {useEffect, useRef} from "react";

const Nav = ({showSidebar, setShowSidebar}) => {
  const effectRan = useRef(false);

  // add/remove class='nav-open' in the homepage-wrapper element if it did exist, otherwise remove it
  function toggleMenuMode(toggle) {
    if (toggle === false) {
      document.querySelector(".homepage-wrapper").classList.remove("nav-open");
    } else {
      document.querySelector(".homepage-wrapper").classList.add("nav-open");
    }
  }

  useEffect(() => {
    let ignoreFirstRender = false;
    if (!ignoreFirstRender) {
      effectRan.current = !effectRan.current;
      toggleMenuMode(effectRan.current);
    }
    return () => {
      ignoreFirstRender = true;
    };
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
