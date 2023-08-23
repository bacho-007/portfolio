import React, { useEffect } from "react";
import "./header.css";

function Header() {
  useEffect(() => {
    const miniList = document.querySelectorAll(".mini__list");

    function activeLink() {
      miniList.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");
    }

    miniList.forEach((item) => {
      item.addEventListener("click", activeLink);
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      miniList.forEach((item) => {
        item.removeEventListener("click", activeLink);
      });
    };
  }, []);

  return (
    <div className="containert">
      <div className="man__header__nav">
        <div className="mini__navigation">
          <ul>
            <li className="mini__list active">
              <a href="#Home">
                <span className="icon">
                  <i className="uil uil-estate"></i>
                </span>
                <span className="text">Home</span>
              </a>
            </li>
            <li className="mini__list">
              <a href="#About">
                <span className="icon">
                  <i className="uil uil-user"></i>
                </span>
                <span className="text">About</span>
              </a>
            </li>
            <li className="mini__list">
              <a href="#Skills">
                <span className="icon">
                  <i className="uil uil-file-alt"></i>
                </span>
                <span className="text">Skills</span>
              </a>
            </li>
            <li className="mini__list">
              <a href="#Portfolio">
                <span className="icon">
                  <i className="uil uil-scenery"></i>
                </span>
                <span className="text">Portfolio</span>
              </a>
            </li>
            <li className="mini__list">
              <a href="#Contact">
                <span className="icon">
                  <i className="uil uil-comment"></i>
                </span>
                <span className="text">Contact</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>

    </div >
  );
}

export default Header;
