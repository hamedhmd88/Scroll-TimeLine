import { RiArrowDownLine } from "react-icons/ri";
import ParallaxScroll from "./ParallaxScroll";
import ArticleSection from "./components/ArticleSection";
interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
function App() {
  const timelineData: TimelineItem[] = [
    {
      year: "2023",
      title: "The First Step",
      description:
        "2023 marked the beginning of my coding journey. From writing my first HTML tag to exploring CSS animations, this year was about learning, failing, and growing as a self-taught developer.",
    },
    {
      year: "2024",
      title: "Diving into JavaScript",
      description:
        "In 2024, I focused on mastering JavaScript fundamentals, building interactive web applications, and understanding the logic that powers modern websites.",
    },
    {
      year: "2025",
      title: "Exploring React",
      description:
        "2025 was all about learning React. I created dynamic components, managed state efficiently, and discovered the power of reusable UI design.",
    },
    {
      year: "2026",
      title: "Building Full-Stack Projects",
      description:
        "I ventured into full-stack development, connecting frontend React apps to backend APIs and databases, and deploying my projects for the world to see.",
    },
    {
      year: "2027",
      title: "Becoming a Mentor",
      description:
        "By 2027, I began mentoring new developers, sharing my knowledge, and contributing to open-source projects to give back to the community.",
    },
    {
      year: "2027",
      title: "Becoming a Mentor",
      description:
        "By 2027, I began mentoring new developers, sharing my knowledge, and contributing to open-source projects to give back to the community.",
    },
    {
      year: "2027",
      title: "Becoming a Mentor",
      description:
        "By 2027, I began mentoring new developers, sharing my knowledge, and contributing to open-source projects to give back to the community.",
    },
  ];
  return (
    <>
    <div className="scroll-watcher"></div>
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
      <main className="timeline-wrapper">
        <div className="timeline-line">
          <div className="timeline-line-progress"></div>
        </div>
        {timelineData.map((item, index) => (
          <div className="timeline-section" key={index}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </main>
      <ParallaxScroll/>
      <ArticleSection/>
    </>
  );
}

export default App;
