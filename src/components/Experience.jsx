import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
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

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
    <ambientLight intensity={1} />
      <motion.group 
        position={[1.5, 2, 3]} 
        scale={[0.9, 0.9, 0.9]} 
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1
        }}
      >
        <Room section={section}/>
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
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar 
            animation={section === 0 ? "FallingIdle" : "StandingIdle"} 
          />
        </group>
      </motion.group>
    </>
  );
};
