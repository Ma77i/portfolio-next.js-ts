const Header = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col xl:flex-row items-center bg-dark rounded-2xl p-5 shadow-xl">
      <div className="flex p-5 w-4/12">
        <img src="/ms.jpg" alt="photo" className="rounded-full" />
      </div>
      <div className="flex flex-col items-center xl:items-start pl-1">
        <h1 className="font-bold text-light tracking-widest pl-5 brightness-200">MATIAS SILVA</h1>
        <h3 className="text-light tracking-widest font-semibold mb-5 pl-5">FULLSTACK DEVELOPER</h3>
        <p className="text-light tracking-wider pl-5">
          Fullstack developer specialized in MERN
          stack with two years of experience with
          HTML, CSS and JavaScript and one with React, Node, MongoDB and MySQL.
          Currently working as a tutor for React
          courses at Coderhouse.
        </p>
      </div>
    </div>
  );
};

export default Header;
