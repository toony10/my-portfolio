import "./skills.scss";

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <div className='container'>
        <div className='left'>
          <div className='skill'>
            <h2>Html</h2>
            <div className='skill-level'>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola half-full'>....</span>
            </div>
          </div>
          <div className='skill'>
            <h2>CSS</h2>
            <div className='skill-level'>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola half-full'>....</span>
              <span className='levle-bola'>....</span>
            </div>
          </div>
          <div className='skill'>
            <h2>SASS</h2>
            <div className='skill-level'>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola'>....</span>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='skill'>
            <h2>Bootstrab</h2>
            <div className='skill-level'>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola half-full'>....</span>
              <span className='levle-bola'>....</span>
            </div>
          </div>
          <div className='skill'>
            <h2>JS</h2>
            <div className='skill-level'>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola'>....</span>
            </div>
          </div>
          <div className='skill'>
            <h2>React</h2>
            <div className='skill-level'>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola full'>....</span>
              <span className='levle-bola'>....</span>
              <span className='levle-bola'>....</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
