import "./topbar.scss";
import { LocalPhone, Mail } from "@material-ui/icons";
function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"overflow-hidden topbar " + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Anton..
          </a>
          <a href='tel:01090677513' className='itemContainer'>
            <LocalPhone className='icon' />
            <span>01090677513</span>
          </a>
          <a href='mailto:amiranton257@gmail.com' className='itemContainer'>
            <Mail className='icon' />
            <span>amiranton257@gmail.com</span>
          </a>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
