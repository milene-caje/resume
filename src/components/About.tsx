import { Trans } from "react-i18next";

function About() {
  return (
    <div className="flex flex-wrap mb-2 text-xs">
      <p>
        <Trans
          i18nKey="about.firstParagraph"
          components={{
            1: <strong />,
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey="about.secondParagraph"
          components={{
            1: <strong />,
          }}
        />
      </p>
    </div>
  );
}

export default About;
