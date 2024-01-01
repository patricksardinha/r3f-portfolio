import { Image, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export const projects = [
    {
        "id": 0,
        "title":"FlyingHero",
        "period":"November - December 2022",
        "image": "images/400x300.png",
        "videogameplay": "images/Gameplay_FlyingHero.mov",
        "context": "This independent project was carried out as part of the Creative Core learning course offered by Unity Technologies, with the aim of practicing basic skills for the main creative areas of the Unity engine such as shaders & materials, animations , VFX, cameras, audio and UI.",
        "description":"FlyingHero is a game in which you play a character who, unfortunately, cannot fly. Your goal is to find 24 hidden objects and to do this you will have to explore and discover places.",
        "url": "",
        "github": "https://github.com/patricksardinha/FlyingHero"
    },
    {
        "id": 1,
        "title":"RedoCinema",
        "period":"December 2022 - January 2023",
        "image": "images/400x300.png",
        "videogameplay": "images/RedoCinema_SoundOnFix.mov",
        "context": "This project is part of two missions in the Creative Core learning course offered by Unity Technologies, whose main objective is to work with lights, cameras as well as VFX. To do this, the idea is to use a scene from a movie and reproduce it as faithfully as possible.",
        "description":"The rebuilding scene is from the movie Top Gun: Maverick. It is inspired by a multitude of micro-scenes during the test flight of the hypersonic plane Darkstar.",
        "url": "",
        "github": "https://github.com/patricksardinha/RedoCinema"
    },
    {
        "id": 2,
        "title":"GGJ 2023 - Root Defender",
        "period":"February 2023",
        "image": "images/400x300.png",
        "videogameplay": "images/RootDefender.mov",
        "context": "This game has been made in 48 hours, during the 2023 Global Game Jam in Geneva (Switzerland) and the theme was Root! To make this game, we were a team of 5 people: Nicolas Lopez was the 2D/3D Designer; Gregory May composed and performed the music; Benjamin Gonvers, Kilian Ruchti and myself were the unity developers.",
        "description":"Root Defender is a Rogue lite. You must destroy the enemies attacking your house tree, in order to defend its roots. You go through multiple rooms and the aim is to expend the tree house's roots as far as possible.",
        "url": "",
        "github": "https://github.com/patricksardinha/GGJGeneva2023"
    }
];

const Project = (props) => {

    const { project } = props;

    return(
        <group {...props}>
            <mesh position-z={-0.001} onClick={() => window.open(project.github, "_blank")}>
                <planeGeometry args={[2.2, 2]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image scale={[2, 1.2, 1]} url={project.image} toneMapped={false} position-y={0.3}/>
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.2} position={[-1, -0.4, 0]}>
                {project.title.toUpperCase()}
            </Text>
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.1} position={[-1, -0.6, 0]}>
                {project.description}
            </Text>
        </group>
    );
};

export const Projects = () => {

    const { viewport } = useThree();

    return(
        <group position-y={-viewport.height * 2 + 1}>
            {
                projects.map((project, index) => (
                    <motion.group key={"project_" + index} position={[index * 2.5, 0, -3]}>
                        <Project project={project} /> 
                    </motion.group>
                ))
            }

        </group>
    );
};