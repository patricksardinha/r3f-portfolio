const Section = (props) => {
    const { children } = props;

    return (
        <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            {children}
        </section>
    );
};

const HomeSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hello, My name is <br/>
                <span className="bg-white px-1 italic">Patrick Sardinha</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                I am a Fullstack Developper and I love 3D Modeling. <br/>
                Welcome to my portfolio.
            </p>
        </Section>
    );
};

const AboutSection = () => {
    return (
        <Section>
            <h1>Home</h1>
        </Section>
    );
};

const ProjectsSection = () => {
    return (
        <Section>
            <h1>Home</h1>
        </Section>
    );
};

const ExperiencesSection = () => {
    return (
        <Section>
            <h1>Home</h1>
        </Section>
    );
};


const ContactSection = () => {
    return (
        <Section>
            <h1>Home</h1>
        </Section>
    );
};

export const Interface = () => {

    return (
        <div className="">
            <div className="flex flex-col items-center w-screen">
                <HomeSection/>
                <AboutSection/>
                <ProjectsSection/>
                <ExperiencesSection/>
                <ContactSection/>
            </div>
        </div>
    );
};