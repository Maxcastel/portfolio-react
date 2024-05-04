import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Experience{
    id: number
    title: string
    startMonth: string
    startYear: number
    endMonth: string
    endYear: number
    description: string
    logo: string
}

export function ExperienceCard({experience}:{experience:Experience}){

    return (
        <Card className="flex flex-row-reverse">
            <div>
                <CardHeader className="pb-3">
                    <CardTitle className="text-3xl">{experience.title}</CardTitle>
                    <CardDescription className="text-base">{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}</CardDescription>
                </CardHeader>
                <CardContent className="text-xl">
                    {experience.description}
                </CardContent>
            </div>
            <CardFooter className="p-6 pr-0">
                <img src={experience.logo} width={100} />
            </CardFooter>
        </Card>
    )
}