import ProfessionalExperience from "./components/ProfessionalExperience";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Language from "./components/Language";
import Skill from "./components/Skill";
import "./App.css";
import { Trans } from "react-i18next";

function App() {
  return (
    <div className="p-6 leading-5 text-sm">
      <Contact />
      <div className="mb-4">
        <h1 className="text-[28px] font-bold my-4 text-center">
          Milene Braz Cajé
        </h1>
        <About />
        <Skill />
      </div>
      <div className="mb-4">
        <h2 className="text-[18px] font-bold mb-2">
          <Trans i18nKey="experience.title" />
        </h2>
        <ProfessionalExperience />
      </div>
      <div className="mb-4">
        <h2 className="text-[18px] font-bold mb-2">
          <Trans i18nKey="education.title" />
        </h2>
        <Education />
      </div>
      <div>
        <h2 className="text-[18px] font-bold mb-2">
          <Trans i18nKey="language.title" />
        </h2>
        <Language />
      </div>
    </div>
  );
}

export default App;
