import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { ArrowDownward } from "@material-ui/icons";
export default function Intro() {
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      loop: false,
      cursorChar: "|",
      strings: ["Web developer"],
    });
  }, []);
  const textRef = useRef();
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man1.png' style={{ objectFit: "cover" }} alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Anton Amir</h1>
          <h3>
            Front End <span ref={textRef}></span>
          </h3>
          <p>
            A fourth year student in the Faculty of Computers and Information at
            "EELU" and very passionate about web development since I entered the
            world of technology
          </p>
          <a className='download-cv' href='assets/cv.pdf' download>
            <button>
              <ArrowDownward />
              My C.V
            </button>
          </a>
        </div>
        <a href='#skills'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
