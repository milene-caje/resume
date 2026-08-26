import { Trans } from "react-i18next";
function Language() {
  return (
    <ul className="list-disc list-inside pl-4 text-xs flex gap-8">
      <li>
        <Trans
          i18nKey="language.english"
          components={{
            1: <strong />,
          }}
        />
      </li>
      <li>
        <Trans
          i18nKey="language.spanish"
          components={{
            1: <strong />,
          }}
        />
      </li>
    </ul>
  );
}

export default Language;
