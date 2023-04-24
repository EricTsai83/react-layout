import {useState, useEffect} from "react";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  function actionAfterClickNavToggle(trigger) {
    if (trigger) {
      document.querySelector(".nav-list").style.transition =
        "transform 300ms cubic-bezier(.5, 0, .5, 1)";
      const hamburger = document.querySelector(".hamburger");
      hamburger.style.position = "fixed";
      hamburger.style.right = 0;
    } else {
      document.querySelector(".nav-list").style.transition = "none";
      const hamburger = document.querySelector(".hamburger");
      hamburger.style.position = "relative";
      hamburger.style.right = "auto";
    }
  }

  function toggleMenuMode() {
    // add class='nav-open' in the body element if it did exist, otherwise remove it
    document.body.classList.toggle("nav-open");
    return document.body.classList.contains("nav-open");
  }
  let ignoreFirstRender;
  useEffect(() => {
    if (!ignoreFirstRender) {
      let navStatus = toggleMenuMode();
      actionAfterClickNavToggle(navStatus);
    }
    return () => {
      ignoreFirstRender = false;
    };
  }, [navToggle]);

  return (
    <nav className="nav">
      <button
        className="nav-toggle"
        onClick={() => {
          setNavToggle(!navToggle);
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
