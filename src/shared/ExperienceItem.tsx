import { Trans } from "react-i18next";
import type { IExperienceItemProps } from "../interfaces/IExperienceItemProps.types";

function ExperienceItem({
  company,
  position,
  period,
  description,
  items,
}: IExperienceItemProps) {
  return (
    <>
      <div>
        <div className="md:flex items-baseline justify-between">
          <h3 className="text-1xl font-bold">
            <Trans i18nKey={position} /> -{" "}
            <span className="text-sky-700">
              <Trans i18nKey={company} />
            </span>
          </h3>

          <span className="text-xs">
            <Trans i18nKey={period} />
          </span>
        </div>

        {description && (
          <em className="text-xs">
            <Trans i18nKey={description} components={{ 1: <strong /> }} />
          </em>
        )}

        <ul className="list-disc list-inside pl-4 text-xs">
          {items.map((item) => (
            <li key={item}>
              <Trans i18nKey={item} components={{ 1: <strong /> }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExperienceItem;
