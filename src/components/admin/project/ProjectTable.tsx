import { Project } from "@/models/Project";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Icons } from '@/components/icons';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ProjectTable({projects}:{projects:Project[]}){
    const { t } = useTranslation();

    const deleteProject = (id:number) => {
        fetch(`/api/projects/${id}`, { 
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                window.location.reload();
            }
        })
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>{t("projectTable.title")}</TableHead>
                    <TableHead>Frameworks</TableHead>
                    <TableHead>{t("projectTable.languages")}</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>{t("projectTable.category")}</TableHead>
                    <TableHead>{t("projectTable.classe")}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((project) => (
                    <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.id}</TableCell>
                        <TableCell>{project.title}</TableCell>
                        <TableCell>
                            {project.frameworks.length !== 0 ? project.frameworks.map(framework => framework.name).join(', ') : "null"}
                        </TableCell>
                        <TableCell>
                            {project.languages.map(language => language.name).join(', ')}
                        </TableCell>
                        <TableCell>
                            {project.type.name}
                        </TableCell>
                        <TableCell>
                            {project.category.name}
                        </TableCell>
                        <TableCell>
                            {project.classe !== null ? 
                                project.classe.name 
                            : "null"}
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="flex gap-2.5">
                                <Link to={`/admin/projets/${project.id}`} >
                                    <Icons.viewing className="h-6 w-6 text-blue-700 hover:text-blue-800 cursor-pointer" />
                                </Link>
                                <Link to={`/admin/projets/edit/${project.id}`}>
                                    <Icons.editing className="h-6 w-6 text-primary hover:text-primary/75 cursor-pointer" />
                                </Link>
                                <Icons.delete2 className="h-6 w-6 text-red-500 hover:text-red-600 cursor-pointer" onClick={() => deleteProject(project.id)} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter className="bg-transparent">
                <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={8} className="pb-0 font-normal">
                        {projects.length} {t("projectTable.projets")}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ) 
}