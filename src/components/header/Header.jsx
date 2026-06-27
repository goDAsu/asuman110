import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import { ImHome2 } from "react-icons/im";
import { BiMoviePlay, BiCameraMovie } from "react-icons/bi";
import { FaBroadcastTower } from "react-icons/fa";

import logo from "../../assets/LOGO.jpg";

const headerNav = [
  {
    display: "Home",
    icon: <ImHome2 />,
    path: "/",
  },
  {
    display: "Movies",
    icon: <BiMoviePlay />,
    path: "/movie",
  },
  {
    display: "TV Series",
    icon: <BiCameraMovie />,
    path: "/tv",
  },
  {
    display: "Live",
    icon: <FaBroadcastTower />,
    path: "/live",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="T-watch logo" />
          <Link to="/">T-watch</Link>
        </div>

        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path} className="link" aria-label={e.display}>
                <span className="nav-label">{e.display}</span>
                <span className="nav-icon">{e.icon}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <span className="header__pill">Now streaming</span>
          <Link to="/movie" className="header__pill header__pill--accent">
            Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
