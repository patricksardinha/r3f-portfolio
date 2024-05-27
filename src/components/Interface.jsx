import { motion } from "framer-motion";
import { atom, useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";


const Section = (props) => {
    const { children } = props;

    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6
                }
            }}
            className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
        >
            {children}
        </motion.section>
    );
};

const HomeSection = () => {
    return (
        <Section>
            <div className="w-1/2">
                <h1 className="text-6xl font-extrabold leading-snug">
                    Hello, My name is <br/>
                    <span className="bg-white px-1 italic">Patrick Sardinha</span>
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 25
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 1.5
                        }
                    }}
                    className="text-lg text-gray-600 mt-4"
                >
                    I am a Fullstack Developper and I love 3D Modeling. <br/>
                    Welcome to my portfolio.
                </motion.p>
            </div>
        </Section>
    );
};

const AboutSection = () => {
    return (
        <Section>
            <div className="w-1/3">
                <h3 className="text-3xl font-extrabold leading-snug">How It Works?</h3>
                <p className="text-lg text-gray-600 mt-4">
                    Several steps are necessary to put in place to carry out this project.
                    <br/>

                    Step 1: Creation of the Avatar.
                    <br/>

                    Step 2: Character Amination.
                    <br/>

                    Step 3: Creation of the Room.
                    <br/>

                    Step 4: Integration of elements on the page.
                    <br/>

                    Step 5: Optimizing the rendering.
                    <br/>

                </p>
            </div>
        </Section>
    );
};

const ProjectsSection = () => {

    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
          <div className="flex w-full h-full gap-8 items-center justify-center">
            <button
              className="hover:text-indigo-600 transition-colors"
              onClick={previousProject}
            >
              ← Previous
            </button>
            <h2 className="text-5xl font-bold">Steps Explications</h2>
            <button
              className="hover:text-indigo-600 transition-colors"
              onClick={nextProject}
            >
              Next →
            </button>
          </div>
        </Section>
    );
};

const ExperiencesSection = () => {
    return (
        <Section>
            <h3 className="text-3xl font-extrabold leading-snug">Experiences</h3>
        </Section>
    );
};


const ContactSection = () => {
    return (
        <Section>
            <h3 className="text-3xl font-extrabold leading-snug">Contact</h3>
        </Section>
    );
};

export const Interface = () => {

    return (
        <div className="flex flex-col items-center w-screen">
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
        </div>
    );
};