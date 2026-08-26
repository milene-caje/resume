import { Trans } from "react-i18next";

function ProfessionalExperience() {
  return (
    <div>
      {/* CI&T */}
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-1xl font-bold">
            <Trans i18nKey="experience.ciT.position" /> -{" "}
            <span className="text-sky-700">
              <Trans i18nKey="experience.ciT.company" />
            </span>
          </h3>

          <span className="text-xs">
            <Trans i18nKey="experience.ciT.period" />
          </span>
        </div>

        <em>
          <Trans
            i18nKey="experience.ciT.description"
            components={{ 1: <strong /> }}
          />
        </em>

        <ul className="list-disc list-inside pl-4 text-xs">
          <li>
            <Trans
              i18nKey="experience.ciT.items.0"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans i18nKey="experience.ciT.items.1" />
          </li>

          <li>
            <Trans
              i18nKey="experience.ciT.items.2"
              components={{ 1: <strong /> }}
            />
          </li>
        </ul>
      </div>

      <hr className="my-1 border-t border-gray-200" />
      {/* GFT */}
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-1xl font-bold">
            <Trans i18nKey="experience.gft.position" /> -{" "}
            <span className="text-sky-700">
              <Trans i18nKey="experience.gft.company" />
            </span>
          </h3>

          <span className="text-xs">
            <Trans i18nKey="experience.gft.period" />
          </span>
        </div>

        <em>
          <Trans
            i18nKey="experience.gft.description"
            components={{ 1: <strong /> }}
          />
        </em>

        <ul className="list-disc list-inside pl-4 text-xs">
          <li>
            <Trans i18nKey="experience.gft.items.0" />
          </li>

          <li>
            <Trans
              i18nKey="experience.gft.items.1"
              components={{ 1: <strong /> }}
            />
          </li>
        </ul>
      </div>
      <hr className="my-1 border-t border-gray-200" />
      {/* Deloitte */}
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-1xl font-bold">
            <Trans i18nKey="experience.deloitte.position" /> -{" "}
            <span className="text-sky-700">
              <Trans i18nKey="experience.deloitte.company" />
            </span>
          </h3>

          <span className="text-xs">
            <Trans i18nKey="experience.deloitte.period" />
          </span>
        </div>

        <em>
          <Trans
            i18nKey="experience.deloitte.description"
            components={{ 1: <strong /> }}
          />
        </em>

        <ul className="list-disc list-inside pl-4 text-xs">
          <li>
            <Trans
              i18nKey="experience.deloitte.items.0"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans
              i18nKey="experience.deloitte.items.1"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans
              i18nKey="experience.deloitte.items.2"
              components={{ 1: <strong /> }}
            />
          </li>
        </ul>
      </div>
      <hr className="my-1 border-t border-gray-200" />
      {/* Accenture */}
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-1xl font-bold">
            <Trans i18nKey="experience.accenture.position" /> -{" "}
            <span className="text-sky-700">
              <Trans i18nKey="experience.accenture.company" />
            </span>
          </h3>

          <span className="text-xs">
            <Trans i18nKey="experience.accenture.period" />
          </span>
        </div>

        <em>
          <Trans
            i18nKey="experience.accenture.description"
            components={{ 1: <strong /> }}
          />
        </em>

        <ul className="list-disc list-inside pl-4 text-xs">
          <li>
            <Trans
              i18nKey="experience.accenture.items.0"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans
              i18nKey="experience.accenture.items.1"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans
              i18nKey="experience.accenture.items.2"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans
              i18nKey="experience.accenture.items.3"
              components={{ 1: <strong /> }}
            />
          </li>
        </ul>
      </div>
      <hr className="my-1 border-t border-gray-200" />
      {/* TAG Interativa */}
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-1xl font-bold">
            <Trans i18nKey="experience.tagInterativa.position" /> -{" "}
            <span className="text-sky-700">
              <Trans i18nKey="experience.tagInterativa.company" />
            </span>
          </h3>

          <span className="text-xs">
            <Trans i18nKey="experience.tagInterativa.period" />
          </span>
        </div>

        <ul className="list-disc list-inside pl-4 text-xs">
          <li>
            <Trans
              i18nKey="experience.tagInterativa.items.0"
              components={{ 1: <strong /> }}
            />
          </li>

          <li>
            <Trans
              i18nKey="experience.tagInterativa.items.1"
              components={{ 1: <strong /> }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
