const FooterList = ({ title, links }) => {
  return (
    <div className="footer-lists">
      <h5>{title}</h5>
      <ul>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
