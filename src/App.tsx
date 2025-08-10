import { RiArrowDownLine } from "react-icons/ri";

function App() {
  return (
    <>
      <header className="page-header">
        <h1>The Journey Of Coding</h1>
        <p>
          Welcome to the Code With Me - where every line of code brings us
          closer to mastery. Join the journey through powerful about progress.
          Let\'s build the future together!
        </p>
      </header>
      <div className="scroll-hint">
        <RiArrowDownLine />
      </div>
      <div className="container">
        <h2>Hello World</h2>
      </div>
      <main className="timeline-wrapper">
        <div className="timeline-line">
          <div className="timeline-line-progress"></div>
        </div>

        {/* Timeline Section - 1 */}
        <div className="timeline-section">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-year">2023</div>
            <h3 className="timeline-title">The First Step</h3>
            <p className="timeline-description">
              2023 marked the beginning of my coding journey. From writing my
              first HTML tag to exploring CSS animations, this year was about
              learning, failing, and growing as a self-taught developer.
            </p>
          </div>
        </div>

        {/* Timeline Section - 2 */}
        <div className="timeline-section">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-year">2024</div>
            <h3 className="timeline-title">Diving into JavaScript</h3>
            <p className="timeline-description">
              In 2024, I focused on mastering JavaScript fundamentals, building
              interactive web applications, and understanding the logic that
              powers modern websites.
            </p>
          </div>
        </div>

        {/* Timeline Section - 3 */}
        <div className="timeline-section">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-year">2025</div>
            <h3 className="timeline-title">Exploring React</h3>
            <p className="timeline-description">
              2025 was all about learning React. I created dynamic components,
              managed state efficiently, and discovered the power of reusable UI
              design.
            </p>
          </div>
        </div>

        {/* Timeline Section - 4 */}
        <div className="timeline-section">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-year">2026</div>
            <h3 className="timeline-title">Building Full-Stack Projects</h3>
            <p className="timeline-description">
              I ventured into full-stack development, connecting frontend React
              apps to backend APIs and databases, and deploying my projects for
              the world to see.
            </p>
          </div>
        </div>

        {/* Timeline Section - 5 */}
        <div className="timeline-section">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-year">2027</div>
            <h3 className="timeline-title">Becoming a Mentor</h3>
            <p className="timeline-description">
              By 2027, I began mentoring new developers, sharing my knowledge,
              and contributing to open-source projects to give back to the
              community.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
