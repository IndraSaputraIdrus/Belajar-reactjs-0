import NavButton from "./NavButton";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <>
      <div className="container-lg">
        <a className="navbar-brand fw-bold fs-4 text-danger" href="#">
          INDRA
        </a>

        <NavButton />
        <NavLink />
      </div>
    </>
  );
};

export default Nav;
