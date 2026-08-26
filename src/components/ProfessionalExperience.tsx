import ExperienceItem from "../shared/ExperienceItem";

function ProfessionalExperience() {
  const experiences = [
    {
      company: "experience.ciT.company",
      position: "experience.ciT.position",
      period: "experience.ciT.period",
      description: "experience.ciT.description",
      items: [
        "experience.ciT.items.0",
        "experience.ciT.items.1",
        "experience.ciT.items.2",
      ],
    },
    {
      company: "experience.gft.company",
      position: "experience.gft.position",
      period: "experience.gft.period",
      description: "experience.gft.description",
      items: ["experience.gft.items.0", "experience.gft.items.1"],
    },
    {
      company: "experience.deloitte.company",
      position: "experience.deloitte.position",
      period: "experience.deloitte.period",
      description: "experience.deloitte.description",
      items: [
        "experience.deloitte.items.0",
        "experience.deloitte.items.1",
        "experience.deloitte.items.2",
      ],
    },
    {
      company: "experience.accenture.company",
      position: "experience.accenture.position",
      period: "experience.accenture.period",
      description: "experience.accenture.description",
      items: [
        "experience.accenture.items.0",
        "experience.accenture.items.1",
        "experience.accenture.items.2",
        "experience.accenture.items.3",
      ],
    },
    {
      company: "experience.tagInterativa.company",
      position: "experience.tagInterativa.position",
      period: "experience.tagInterativa.period",
      items: [
        "experience.tagInterativa.items.0",
        "experience.tagInterativa.items.1",
      ],
    },
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={experience.company}>
          <ExperienceItem {...experience} />

          {index < experiences.length - 1 && (
            <hr className="my-1 border-t border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProfessionalExperience;
