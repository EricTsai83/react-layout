import Nav from "./Nav";

const Header = ({showSidebar, setShowSidebar}) => {
  return (
    <header className="header">
      <h1 className="name">
        <a href="#1">Website Title / logo</a>
      </h1>

      <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </header>
  );
};

export default Header;
