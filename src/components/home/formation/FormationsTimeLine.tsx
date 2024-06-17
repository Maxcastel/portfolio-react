// const formations = [
//     {
//         id: 1,
//         name: 'BTS SIO',
//         startDate: 2022,
//         endDate: 2024,
//         option: "SLAM",
//         schoolName: "Lycée Gaston Berger",
//         location: "Lille"
//     },
//     {
//         id: 2,
//         name: 'BUT Informatique',
//         startDate: 2021,
//         endDate: 2022,
//         option: null,
//         schoolName: "IUT A",
//         location: "Villeneuve D'ascq"
//     },
//     {
//         id: 3,
//         name: 'Terminale STI2D',
//         startDate: 2020,
//         endDate: 2021,
//         option: "SIN",
//         schoolName: "Lycée Colbert",
//         location: "Tourcoing"
//     },
// ]

import {
    Timeline,
    TimelineContent,
    TimelineDot,
    TimelineHeading,
    TimelineItem,
    TimelineLine,
  } from "@/components/ui/timeline"

export function FormationsTimeLine(){

    return (
        <Timeline positions="center">
            <TimelineItem status="done">
                <TimelineHeading side="left" className="text-xl">BTS SIO option SLAM</TimelineHeading>
                <TimelineHeading side="right" variant="secondary" className="text-base">
                    2022 - 2024
                </TimelineHeading>
                <TimelineDot status="current" />
                <TimelineLine done />
                <TimelineContent side="left" className="text-lg">
                    Lycée Gaston Berger <br />
                    Lille
                </TimelineContent>
            </TimelineItem>
            <TimelineItem status="done">
                <TimelineHeading side="left" className="text-xl">BUT Informatique</TimelineHeading>
                <TimelineHeading side="right" variant="secondary" className="text-base">
                    2021 - 2022
                </TimelineHeading>
                <TimelineDot status="done" />
                <TimelineLine done />
                <TimelineContent side="left" className="text-lg">
                    IUT A <br />
                    Villeneuve D'ascq
                </TimelineContent>
            </TimelineItem>
            <TimelineItem status="done">
                <TimelineHeading side="left" className="text-xl">Terminale STI2D option SIN</TimelineHeading>
                <TimelineHeading side="right" variant="secondary" className="text-base">
                    2020 - 2021
                </TimelineHeading>
                <TimelineDot status="done" />
                <TimelineLine done />
                <TimelineContent side="left" className="text-lg">
                    Lycée Colbert <br />
                    Tourcoing
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}