import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-app">
      <p className="header-title">
        <a href="/">R E S U M E</a>
        <div className="hamburger-menu">
          {open ? (
            <IoClose onClick={() => setOpen(!open)} />
          ) : (
            <GiHamburgerMenu onClick={() => setOpen(!open)} />
          )}
        </div>
      </p>

      <ul className={open ? "header-list" : "header-list hide"}>
        <li>
          <a>
            <Link className="link" to="/" onClick={() => setOpen(!open)}>
              HOME
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link className="link" to="/about" onClick={() => setOpen(!open)}>
              ABOUT
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
