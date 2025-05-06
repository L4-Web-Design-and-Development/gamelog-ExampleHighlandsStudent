import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center p-8">
      <div>
        <Link to="/">
          <img src={siteLogo} alt="GameLog Logo" />
        </Link>
      </div>

      <div className="flex gap-8">
        <Link to="/add-game">Add Game</Link>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}
