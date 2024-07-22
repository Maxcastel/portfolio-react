import { Experience } from "./experience/Experience";
import { Formations } from "./formation/Formations";
import { Hero } from "./Hero";
import { Projects } from "./project/Projects";
import { Skills } from "./skill/Skills";
import { Contact } from "./contact/Contact";
import { RevealOnScroll } from "../RevealOnScroll";

export function HomePage(){

    return (
        <>
            <Hero />

            <RevealOnScroll>
                <Projects />
            </RevealOnScroll>

            <RevealOnScroll>
                <Experience />
            </RevealOnScroll>

            <RevealOnScroll>
                <Formations />
            </RevealOnScroll>

            <RevealOnScroll>
                <Skills />
            </RevealOnScroll>

            <RevealOnScroll>
                <Contact />
            </RevealOnScroll>
        </>
    )

}