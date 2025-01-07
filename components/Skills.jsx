
const skillList = [
    { name: "Next.js", image: "/skills/nextjs.svg" },
    { name: "React", image: "/skills/react.svg" },
    { name: "Bootstrap", image: "/skills/bootstrap.svg" },
    { name: "CSS", image: "/skills/css.svg" },
    { name: "Figma", image: "/skills/figma.svg" },
    { name: "Git", image: "/skills/git.svg" },
    { name: "Javascript", image: "/skills/javascript.svg" },
    { name: "MongoDB", image: "/skills/mongoDB.svg" },
    { name: "Typescript", image: "/skills/typescript.svg" },
    { name: "MongoDB", image: "/skills/mongoDB.svg" },
    { name: "Firebase", image: "/skills/firebase.svg" },
    { name: "Vite", image: "/skills/vitejs.svg" },
    { name: "Firebase", image: "/skills/firebase.svg" },
    { name: "Material UI", image: "/skills/materialui.svg" },
  ];

const Skills = () => {
  return (
    <div className="py-16 lg:py-24 ">
      <h2 className="section-title mb-6">My Skills</h2>
      <div className="mt-8 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 px-6">
        {skillList.map((skill, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-10 h-10 md:w-14 md:h-14 object-contain hover:scale-110 transition-transform  duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
