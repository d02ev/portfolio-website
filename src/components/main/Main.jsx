import About from "./About";
import Experience from "./Experience";
import Links from "./Links";
import Projects from "./projects/Projects";
import ResumeDownloadSection from "./ResumeDownloadSection";
import { useAboutActions } from '../../hooks/useAboutActions.js';
import { useExperiencesActions } from '../../hooks/useExperiencesActions.js';
import { useProjectsActions } from '../../hooks/useProjectsActions.js';

const Main = () => {
  const { loading: aboutLoading } = useAboutActions();
  const { loading: expLoading } = useExperiencesActions();
  const { loading: projLoading } = useProjectsActions();
  const isLoading = aboutLoading || expLoading || projLoading;

  return (
    <main>
      {isLoading ? (
        <Links />
      ) : (
        <>
          <About />
          <Experience />
          <ResumeDownloadSection />
          <Links />
          <Projects />
        </>
      )}
    </main>
  );
};

export default Main;