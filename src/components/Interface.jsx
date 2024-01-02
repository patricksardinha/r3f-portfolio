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
                <h3 className="text-3xl font-extrabold leading-snug">Learn more about me.</h3>
                <p className="text-lg text-gray-600 mt-4">
                    In high school I did a Scientific Baccalaureate with the specialty "Computer Science and Digital Sciences" thanks to which today I have a real 
                    interest in computer development. <br/>

                    I thus continued my studies by doing a Bachelor and a Master in Computer Science at the University of Geneva. It was there that I discovered and learned 
                    a lot about all areas of IT through specific courses. <br/>

                    After university, to specialize in a field, I did online Full Stack Web development formation provided by the Hong Kong University of Science & Technology. 
                    Being also passionate about real-time applications and 3D modeling, I decided after my formation to follow an Unity and an Unreal Engine formation but also
                    to learn how to work with Blender to use and create 3D assets. <br/>

                    Now, my goal is to improve and put my knowledge into practice through many projects.
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
            <h2 className="text-5xl font-bold">Projects</h2>
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
            <ExperiencesSection/>
            <ContactSection/>
        </div>
    );
};