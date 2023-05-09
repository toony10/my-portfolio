import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { BsDownload } from "react-icons/bs";
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
          <img
            src='assets/Imgs/man.png'
            style={{ objectFit: "cover" }}
            alt=''
          />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper flex justify-center'>
          <h2>Hi There, I'm</h2>
          <h1>Anton Amir</h1>
          <h3>
            Front End <span ref={textRef}></span>
          </h3>
          <p>
            A web developer specializing in HTML, CSS, JavaScript, and
            frameworks like React,next js. I'm passionate about designing and
            developing attractive and user-friendly websites.
          </p>
          <a className='download-cv mt-7' href='assets/cv.pdf' download>
            <button>
              <BsDownload className='m-auto mr-2' />
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
