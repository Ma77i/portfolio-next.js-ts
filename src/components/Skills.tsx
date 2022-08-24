import { skills } from "../utils/profile"

const Skills = () => {
  return (
    <>
      <div className="container flex flex-col bg-cristal rounded-2xl p-5 mr-5 mb-5 xl:w-4/12">
        <h2 className="font-bold text-cristal bg-deep rounded-3xl tracking-wider p-5 w-full">Skills</h2>
        <div className="flex flex-wrap py-5">
          {skills.map(skill=>(
            <p key={skill.name} className="bg-dark text-light hover:text-cristal hover:cursor-progress rounded-xl p-2 mr-2 mb-2 font-meduim tracking-widest ">#{skill.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
