"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

const projectData = [
  {
    image: "/work/1.png",
    category: "Frontend",
    name: "Lingo Fox",
    description: "Lingo Fox is a user-friendly web app designed to make language learning simple and engaging.",
    link: "https://lingo-fox.netlify.app/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Fullstack",
    name: "Lodgio",
    description: "Lodgio is a comprehensive online platform for seamless hotel booking experiences.",
    link: "https://lodgio.netlify.app/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Frontend",
    name: "Gadget Heaven",
    description: "Gadget Heaven is a modern e-commerce platform offering a wide range of electronics and gadgets.",
    link: "https://gadget-h.netlify.app/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack",
    name: "Visa Glide",
    description: "Visa Glide simplifies the visa application process with a streamlined, online platform.",
    link: "https://visa-glide.netlify.app/",
    github: "/",
  },
];

const uniqueCategories = [
  "All Projects",
  ...new Set(projectData.map((each) => each.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All Projects");
  const filteredProjects = projectData.filter(project => {
    return category === 'All Projects'? project: project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-6 lg:mb-12 text-center">My Projects</h2>
        <Tabs defaultValue={category} className="mb-20 lg:mb-3">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[600px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg lg:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
                return <TabsContent key={index} value={category}>
                    <ProjectCard project={project}/>
                </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
