import { Trans } from "react-i18next";
function Education() {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-1xl font-bold">
          <Trans i18nKey="education.course" /> -
          <span className="text-sky-700"> Universidade Santa Cecília</span>
        </h3>
        <span className="text-xs">2007 - 2010</span>
      </div>
      {/* <h4 className="text-xs ml-4">
        Pesquisa acadêmica: O Modelo ESG-H: Análise da viabilidade do parâmetro
        felicidade (happiness) nos critérios do <strong>ESG</strong>.
      </h4> */}
    </div>
  );
}

export default Education;
