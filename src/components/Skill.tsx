import { Trans } from "react-i18next";

function Skill() {
  return (
    <div className="flex flex-wrap justify-around text-xs gap-y-1">
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        Angular
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">React</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">Vue</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        TypeScript
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">JS</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">HTML5</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        SASS/SCSS
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        Tailwind CSS
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        Design Systems
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        <Trans i18nKey="skill.unitTesting" />
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        <Trans i18nKey="skill.webAccessibility" />
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">SEO</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        Code Review
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        Clean Code
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">Git</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">
        REST APIs
      </div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">CI/CD</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">AWS</div>

      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">Agile</div>
      <div className="  bg-slate-200 text-slate-900 rounded-md p-2">UX/UI</div>
    </div>
  );
}

export default Skill;
