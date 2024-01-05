import { ContactShadows, Environment, useScroll, OrbitControls, Sky } from "@react-three/drei";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { framerMotionConfig } from "../config";
import { Projects } from "./Projects";
import { Background } from "./Background";


export const Experience = (props) => {

  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "FallingIdle", "Thor", "StandingIdle"]
    }
  });

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("FallingIdle");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "StandingIdle");
    }, 600);
  }, [section]);

  useFrame((state) => {

    const currentSection = Math.floor(data.scroll.current * data.pages);

    if (currentSection != section) {
      setSection(currentSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // To obtain the world position instead of local position of a group using ref
    /*
    const position = new THREE.Vector3();
    characterContainerAboutRef.current.getWorldPosition(position);
    //console.log([position.x, position.y, position.z]);

    const quaternion = new THREE.Quaternion();
    characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    const euler = new THREE.Euler();
    euler.setFromQuaternion(quaternion, "XYZ");
    //console.log([euler.x, euler.y, euler.z]);
    */
  });

  return (
    <>
      <Background />
      <motion.group
        animate={"" + section}
        transition={{
          duration: 0.6
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
          }
        }}
        position={[2.2236729988970056, 0, 3.1347915452371358]}
        rotation={[-3.141592653589793, 1.1805528346628866, 3.141592653589793]}
      >
        <Avatar 
          animation={characterAnimation} 
        />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group 
        position={[1.5, -8, 3]} 
        scale={[0.9, 0.9, 0.9]} 
        rotation-y={-Math.PI / 2.7}
        animate={{
          y: section === 1 ? -8 : -1
        }}
      >
        <Room section={section}/>
        <group ref={characterContainerAboutRef} name="CharacterSpot" position={[0.456, 0, -0.679]} rotation={[-Math.PI, 0.017, -Math.PI]} scale={1.035}></group>
      </motion.group>
      
      <motion.group
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5
        }}
        position={[0, -1.5, -10]}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />        
      </motion.group>

      <Projects />
    </>
  );
};
