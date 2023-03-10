import Link from "next/link";
import { Fragment, useEffect, useState, useRef } from "react";
import { activeSection } from "../utilits";
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const sideBarRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
    const closeSideBar = e => {
      if (e.target !== sideBarRef.current && e.target !== buttonRef.current) {
        setSideBarToggle(false);
      }
    }
    document.body.addEventListener('mousedown', closeSideBar)
    return () => document.body.removeEventListener('mousedown', closeSideBar)
  }, []);
  return (
    <Fragment>
      <div ref={sideBarRef} className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Matteo Polo '23</a>
            </Link>
          </div>
          <button ref={buttonRef}
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""
          }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/matteo-polo.png" title="" alt="" />
              </div>
              <h5>Matteo Polo</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://www.facebook.com/matte.polo/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/plomatteo/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#biografia">
          <i className="ti-id-badge" />
          <span>Biografia</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#le-nostre-idee">
          <i className="ti-panel" />
          <span>Le nostre idee</span>
        </a>
      </li>
      {/* <li data-menuanchor="work">
        <a className="nav-link" href="#partecipa">
          <i className="ti-bookmark-alt" />
          <span>Partecipa</span>
        </a>
      </li> */}
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Open Blog</span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contatti">
          <i className="ti-map-alt" />
          <span>Contatti</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#biografia">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#le-nostre-idee">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Le nostre idee</span>
            </a>
          </Link>
        </li>
        {/* <li data-menuanchor="work">
          <Link href="/#partecipa">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Partecipa</span>
            </a>
          </Link>
        </li> */}
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Open Blog</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contatti">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contatti</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
