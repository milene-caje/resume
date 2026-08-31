import ProfessionalExperience from "./components/ProfessionalExperience";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Language from "./components/Language";
import Skill from "./components/Skill";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";
import Title from "./shared/Title";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const language = location.pathname.endsWith("/en") ? "en" : "pt-BR";

    i18n.changeLanguage(language);
  }, [location.pathname, i18n]);

  return (
    <div className="p-6 leading-5 text-sm mx-auto max-w-4xl">
      <Contact />
      <div className="mb-4">
        <h1 className="text-[28px] font-bold my-4 text-center">
          Milene Braz Cajé
        </h1>
        <About />
        <Skill />
      </div>
      <div className="mb-4">
        <Title>
          <Trans i18nKey="experience.title" />
        </Title>
        <ProfessionalExperience />
      </div>
      <div className="mb-4">
        <Title>
          <Trans i18nKey="education.title" />
        </Title>
        <Education />
      </div>
      <div>
        <Title>
          <Trans i18nKey="language.title" />
        </Title>
        <Language />
      </div>
    </div>
  );
}

export default App;
