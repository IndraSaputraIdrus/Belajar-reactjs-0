const NavLink = () => {
  const listLink = [
    { children: "Home", destination: "#root" },
    { children: "About", destination: "#about" },
    { children: "Contact", destination: "#contact" },
  ];

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {listLink.map((link, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link text-danger" href={link.destination}>
                {link.children}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLink;
