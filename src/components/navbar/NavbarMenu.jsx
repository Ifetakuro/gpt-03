const NavbarMenu = ({ handleClose }) => {
  const links = [
    { link: "#home", name: "Home" },
    { link: "#wgpt3", name: "What is GPT3?" },
    { link: "#possibility", name: "Open AI" },
    { link: "#features", name: "Features" },
    { link: "#blog", name: "Library" },
  ];

  return (
    <>
      {links.map(({ link, name }) => (
        <p key={name} onClick={handleClose}>
          <a href={link}>{name}</a>
        </p>
      ))}
    </>
  );
};

export default NavbarMenu;
