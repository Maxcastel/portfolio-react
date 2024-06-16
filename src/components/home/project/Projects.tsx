import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { Button } from "../../ui/button";
import { Project } from "@/models/Project";
import { ProjectCard } from "./ProjectCard";

export function Projects(){
    const { t } = useTranslation();

    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/api/projects")
        .then((res) => res.json())
        .then((projects) => {
            setAllProjects(projects.data);
            setProjects(projects.data);
        })
    }, [])
    

    const [isFilteredByAll, setIsFilteredByAll] = useState(true)
    const [isFilteredByScolaire, setIsFilteredByScolaire] = useState(false)
    const [isFilteredByPersonnel, setIsFilteredByPersonnel] = useState(false)

    const filteredByAll = () => {
        setIsFilteredByAll(true);

        setIsFilteredByScolaire(false);
        setIsFilteredByPersonnel(false);

        setProjects(allProjects)
    }

    const filteredByScolaire = () => {
        setIsFilteredByScolaire(true);

        setIsFilteredByAll(false);
        setIsFilteredByPersonnel(false);

        setProjects(allProjects.filter((projet) => projet.type.name === 'Scolaire'))
    }

    const filteredByPersonnel = () => {
        setIsFilteredByPersonnel(true);

        setIsFilteredByAll(false);
        setIsFilteredByScolaire(false);

        setProjects(allProjects.filter((projet) => projet.type.name === 'Personnel'))
    }

    return (
        <section className="flex flex-col min-h-screen pb-[10vh]" id="projects">
            <h2 className="text-center text-4xl font-bold my-10">
                {t("projets")}
            </h2>
            
            <div className="flex flex-col gap-y-6">

                <div className="flex max-[445px]:flex-col justify-center items-center">
                    <p className="min-[445px]:mr-6 max-[445px]:mb-4">{t('project.trierpar')}</p>
                    <div className="flex max-[445px]:flex-col flex-wrap gap-4">
                        <Button className={`rounded-full ${isFilteredByAll ? 'text-primary-foreground' : 'text-primary bg-transparent hover:bg-primary hover:text-primary-foreground'} border-2 border-primary border-solid`}
                            onClick={filteredByAll}
                        >
                            {t('project.type.tout')}
                        </Button>
                        <Button className={`rounded-full ${isFilteredByScolaire ? 'text-primary-foreground' : 'text-primary bg-transparent hover:bg-primary hover:text-primary-foreground'} border-2 border-primary border-solid`}
                            onClick={filteredByScolaire}
                        >
                            {t('project.type.scolaire')}
                        </Button>
                        <Button className={`rounded-full ${isFilteredByPersonnel ? 'text-primary-foreground' : 'text-primary bg-transparent hover:bg-primary hover:text-primary-foreground'} border-2 border-primary border-solid`}
                            onClick={filteredByPersonnel}
                        >
                            {t('project.type.personnel')}
                        </Button>
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 px-4">
                        {projects.map((project:Project) => (
                            <ProjectCard key={project.id} 
                                project={project} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}