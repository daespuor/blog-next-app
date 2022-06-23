import Navbar from "../Navbar";

function Header({ children }) {
  return (
    <header>
      <Navbar />
      {children}
    </header>
  );
}

export default Header;
