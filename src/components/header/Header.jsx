import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import { ImHome2 } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";

import logo from "../../assets/LOGO.jpg";
// import log from "../../assets/tmovie.png";
// import lom from "../../assets/vid.mp4";
import axios from "axios";
// import Routes from "../../config/Routes";

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
  //
  const options = {
    method: "GET",
    url: "https://spotify81.p.rapidapi.com/top_200_tracks",
    headers: {
      "X-RapidAPI-Key": "554505413amshdc14f1dd7a935eap1c7ad8jsn0e46f84b4d9d",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  const [CryptoNews, setCryptoNews] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setCryptoNews(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">T-watch</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path} className="link">
                {e.display} {e.icon}
              </Link>
              {/* <Link to={e.path} className="links">
                {e.icon}
              </Link> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="con">
        <Draggable>
          <img src={logo} alt="" className="asu" />
        </Draggable>
        <p className="red-dot">
          {/* <img src={log} alt="" /> */}

          {CryptoNews &&
            CryptoNews.map((item) => {
              return (
                <div>
                  {/* <Link to="/Sports">welcome</Link> */}

                  <Draggable>
                    <img
                      src={item.trackMetadata.displayImageUri}
                      alt=""
                      className="ou"
                    />
                  </Draggable>
                  <p>{item.trackMetadata.trackName}</p>
                </div>
              );
            })}
        </p>
      </div>
    </div>
  );
};

export default Header;
