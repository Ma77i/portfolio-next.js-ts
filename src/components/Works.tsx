import { works } from "../utils/profile";

const Works = () => {
  return (
    <div className="container flex flex-col bg-dark rounded-2xl mt-5">
      <div className="col-md-12">
        <h1 className="font-bold text-center text-light  p-5 tracking-widest ">
          Works
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly w-full p-5">
        {works.map((work) => (
          <div
            key={work.name}
            className="grow-0 border border-deep rounded-xl overflow-hidden shadow-3xl m-2 bg-dark xl:w-3/12 md:w-4/12"
          >
            <div className="col-md-12 overflow-hidden">
              <img
                className="w-full hover:scale-150 "
                src={work.image}
                alt={work.name}
              />
            </div>
            <div className="px-6 py-4 text-cristal">
              <div className="font-bold text-xl  mb-2">{work.name}</div>
              <p className="text-light text-base">{work.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {work.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-block bg-light rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                >
                  #{tool}
                </span>
              ))}
            </div>
            <div className="flex justify-start content-end p-5">
              <a href={work.url} target="_blank" rel="noopener noreferrer" className=" bg-cristal rounded-2xl px-5 mb-5">VISIT</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
