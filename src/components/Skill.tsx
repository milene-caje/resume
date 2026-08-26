import { Trans } from "react-i18next";
import Tag from "../shared/Tag";

function Skill() {
  return (
    <div className="flex flex-wrap justify-around text-xs gap-y-1">
      <Tag>Angular</Tag>
      <Tag>React</Tag>
      <Tag>Vue</Tag>
      <Tag>TypeScript</Tag>
      <Tag>JS</Tag>
      <Tag>HTML5</Tag>
      <Tag>SASS/SCSS</Tag>
      <Tag>Tailwind CSS</Tag>
      <Tag>Design Systems</Tag>
      <Tag>
        <Trans i18nKey="skill.unitTesting" />
      </Tag>
      <Tag>
        <Trans i18nKey="skill.webAccessibility" />
      </Tag>
      <Tag>SEO</Tag>
      <Tag>Code Review</Tag>
      <Tag>Clean Code</Tag>
      <Tag>Git</Tag>
      <Tag>REST APIs</Tag>
      <Tag>CI/CD</Tag>
      <Tag>AWS</Tag>
      <Tag>Agile</Tag>
      <Tag>UX/UI</Tag>
    </div>
  );
}

export default Skill;
