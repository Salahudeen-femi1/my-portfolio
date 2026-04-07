import ProjectCard from "./ProjectCard";
import { data } from "./ProjectData";

export default function Project() {
  return (
    <div className="grid grid-cols-3 gap-7 p-6">
      {
        data.map((projects) => (
          <ProjectCard
            key={projects.id}
            projects={projects}

          />
        ))
      }

    </div>
  )
}
