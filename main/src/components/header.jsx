import "../style/index.css";

function Header() {
  return (
    <header className="header">
      <h1> Tiffany Clark</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
