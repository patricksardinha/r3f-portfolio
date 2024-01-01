import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { framerMotionConfig } from "../config";


export const Experience = (props) => {

  const { section, menuOpened } = props;
  const { viewport } = useThree();
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

  useFrame((state) => {
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
        animation={section === 0 ? "Typing" : "StandingIdle"} 
      />
    </motion.group>
    <ambientLight intensity={1} />
      <motion.group 
        position={[1.5, 2, 3]} 
        scale={[0.9, 0.9, 0.9]} 
        rotation-y={-Math.PI / 2.7}
        animate={{
          y: section === 0 ? 0 : -1
        }}
      >
        <Room section={section}/>
        <group ref={characterContainerAboutRef} name="CharacterSpot" position={[0.456, 0, -0.679]} rotation={[-Math.PI, 0.017, -Math.PI]} scale={1.035}>
          
        </group>
      </motion.group>


      <Environment preset="sunset" />

      
      <motion.group
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5
        }}
        position={[0, -1.5, -10]}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        
      </motion.group>
    </>
  );
};
