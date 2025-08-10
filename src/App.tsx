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
      </main>
    </>
  );
}

export default App;
