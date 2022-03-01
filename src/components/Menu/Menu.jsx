import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const closeMenue = () => setMenuOpen(!menuOpen);
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={closeMenue}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={closeMenue}>
          <a href='#skills'>Skills</a>
        </li>
        <li onClick={closeMenue}>
          <a href='#projects'>Projects</a>
        </li>
        <li onClick={closeMenue}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}
