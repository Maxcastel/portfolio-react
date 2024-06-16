import { useTranslation } from "react-i18next";
import NicePetLogo from "../../../assets/img/logo/logo-nicepet.png"
import DidactumLogo from "../../../assets/img/logo/logo_didactum.jpg"
import { ExperienceCard } from "./ExperienceCard"


export function Experience(){
    const { t } = useTranslation();

    const experiences = [
        {
            id: 1,
            title: "NicePet",
            startMonth: t("mai"),
            startYear: 2023,
            endMonth: t("juin"),
            endYear: 2023,
            description: "Stagiaire Developpeur Web",
            logo: NicePetLogo
        },
        {
            id: 2,
            title: "Didactum",
            startMonth: t("janvier"),
            startYear: 2024,
            endMonth: t("fevrier"),
            endYear: 2024,
            description: "Stagiaire Developpeur Web",
            logo: DidactumLogo
        },
    ]

    return (
        <section className="flex flex-col pb-[5vh]" id="experience">
            <h2 className="text-center text-4xl font-bold my-10">
                Experience
            </h2>

            <div className="flex flex-col gap-4 items-center">
                {experiences.slice().reverse().map((experience) => (
                    <ExperienceCard key={experience.id}
                        experience={experience} 
                    />
                ))}
            </div>

        </section>
    )
}