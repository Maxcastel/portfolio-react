import { Experience } from "./experience/Experience";
import { Formations } from "./formation/Formations";
import { Hero } from "./Hero";
import { Projects } from "./project/Projects";
import { Skills } from "./skill/Skills";
import { Contact } from "./contact/Contact";

export function HomePage(){

    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <Formations />
            <Skills />
            <Contact />
        </>
    )

}