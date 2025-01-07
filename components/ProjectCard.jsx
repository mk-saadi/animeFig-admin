import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Link2Icon,Github } from "lucide-react";
const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 lg:bg-work_project_bg_light lg:dark:bg-work_project_bg_dark lg:bg-[110%] bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            width={250}
            priority
            height={250}
            alt={`${project.name}`}
            src={project.image}
          />
          <div className="flex justify-center gap-x-4">
            <Link 
            className="bg-secondary w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-90 transition-all duration-300"
            href={project.link}>
            <Link2Icon className="text-white"/>
            </Link>
            <Link 
            className="bg-secondary w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-90 transition-all duration-300"
            href={project.github}>
            <Github className="text-white"/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="w-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="mb-1 text-2xl font-medium">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
