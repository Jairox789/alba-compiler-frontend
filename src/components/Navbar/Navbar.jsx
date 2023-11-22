import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://github.com">
        <img
          src="/public/logo.png"
          alt="Logo de Alba Compiler"
          className="navbar-logo"
        />
      </a>

      <a className="navbar-text" href="https://github.com">
        Alba Compiler
      </a>
    </nav>
  );
};

export default Navbar;
