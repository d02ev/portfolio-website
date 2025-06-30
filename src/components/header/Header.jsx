import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
    </header>
  );
};

export default Header;