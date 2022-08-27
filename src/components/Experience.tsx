import { experience } from "../utils/profile"

const Experience = () => {
  return (
    <div className="container flex flex-col items-start rounded-2xl bg-cristal p-5 mb-5">
      <h2 className="font-bold text-cristal bg-deep rounded-3xl tracking-widest p-5 w-full">
        Experience
      </h2>
        <ul className="flex flex-wrap py-5">
          {experience.map((exp) => (
            <li key={exp.title} className="flex flex-col items-start mb-5 hover:text-dark">
              <h3 className="flex font-bold tracking-widest">
                <span className="">💎</span>
                {exp.title}
              </h3>
              <div className="pl-9">
                <h5 className="font-bold tracking-wider">{exp.company}</h5>
                <p className="">{exp.date}</p>
                <p className="">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Experience