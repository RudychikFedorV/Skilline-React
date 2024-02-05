import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="header-container">
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="is-active" to="/careers">
              Careers
            </NavLink>
            <NavLink activeClassName="is-active" to="/blog">
              Blog
            </NavLink>
            <NavLink activeClassName="is-active" to="/about">
              About
            </NavLink>
          </div>
        </header>
        <main className="container">
          <Outlet />
        </main>
        <footer>
          <div className="footer-container">Footer</div>
        </footer>
      </div>
    </>
  );
};
