import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Scroll, ScrollControls } from "@react-three/drei";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={5} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Experience section={section}/>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      </MotionConfig>
    </>
  );
}

export default App;
