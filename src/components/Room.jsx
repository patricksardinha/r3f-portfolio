import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export function Room(props) {

  const { section } = props;
  const { nodes, materials } = useGLTF("models/scene_room_nc.glb");
  const texture = useTexture("textures/lightmap.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureScreen1 = useVideoTexture("textures/template_screen1.mp4");

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1
  })

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.3
  })

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0);
    animate(glassTextureOpacity, section === 0 ? 0.42 : 0);
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Screen1" geometry={nodes.Screen1.geometry} position={[0.377, 1.25, -1.528]} rotation={[-Math.PI, 0, -Math.PI]} >
          <meshBasicMaterial map={textureScreen1} toneMapped={false}/>
        </mesh>
        <mesh name="Screen2" geometry={nodes.Screen2.geometry} position={[0.377, 1.25, -1.528]} rotation={[-Math.PI, 0, -Math.PI]}>
          <meshBasicMaterial map={textureScreen1} toneMapped={false}/>
        </mesh>
        <mesh name="FaceArtWall1" geometry={nodes.FaceArtWall1.geometry} position={[-0.934, 1.685, -1.992]} rotation={[-Math.PI, 0, Math.PI / 2]}>
          <meshBasicMaterial map={textureScreen1} toneMapped={false}/>
        </mesh>
        <mesh name="FaceArtWall2" geometry={nodes.FaceArtWall2.geometry} position={[-0.934, 1.362, -1.992]} rotation={[-Math.PI, 0, Math.PI / 2]}>
          <meshBasicMaterial map={textureScreen1} toneMapped={false}/>
        </mesh>
        <group name="GroupBackpack" position={[-1.77, 0.219, -1.073]} rotation={[0, 1.158, 0]}>
          <group name="Backpack" position={[0.48, 0, 0.811]} rotation={[-Math.PI / 2, 0, 1.509]}>
            <mesh name="Backpack_1" geometry={nodes.Backpack_1.geometry} material={textureMaterial} />
            <mesh name="Backpack_2" geometry={nodes.Backpack_2.geometry} material={textureMaterial} />
            <mesh name="Backpack_3" geometry={nodes.Backpack_3.geometry} material={textureMaterial} />
          </group>
        </group>
        <group name="GroupDesk" position={[-0.009, -0.013, -1.931]} rotation={[-Math.PI, 1.567, -Math.PI]}>
          <group name="GroupeComputerDesk" position={[-1.931, 0.375, 0.001]} rotation={[Math.PI, -1.567, Math.PI]}>
            <mesh name="ComputerDesk1" geometry={nodes.ComputerDesk1.geometry} material={textureMaterial} position={[0.133, -0.055, -1.567]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
          </group>
          <group name="Chair" position={[-1.321, 0.697, 0.441]} rotation={[-Math.PI / 2, 0, 1.643]}>
            <mesh name="Chair_1" geometry={nodes.Chair_1.geometry} material={textureMaterial} />
            <mesh name="Chair_2" geometry={nodes.Chair_2.geometry} material={textureMaterial} />
            <mesh name="Chair_3" geometry={nodes.Chair_3.geometry} material={textureMaterial} />
            <mesh name="Chair_4" geometry={nodes.Chair_4.geometry} material={textureMaterial} />
          </group>
          <mesh name="ComputerMouse_mesh" geometry={nodes.ComputerMouse_mesh.geometry} material={textureMaterial} position={[-0.583, 0.805, 0.693]} rotation={[-Math.PI, 1.532, -Math.PI]} />
          <group name="Cylinder" position={[-0.249, 1.317, 0.103]} rotation={[0, -1.325, 0]}>
            <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={textureMaterial} />
            <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={textureMaterial} />
            <mesh name="Cylinder_3" geometry={nodes.Cylinder_3.geometry} material={textureMaterial} />
            <mesh name="Cylinder_4" geometry={nodes.Cylinder_4.geometry} material={textureMaterial} />
          </group>
          <group name="GroupGamingComputer" position={[-0.369, 0.308, 1.121]} rotation={[0, -0.004, 0]}>
            <mesh name="mesh549538436" geometry={nodes.mesh549538436.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_1" geometry={nodes.mesh549538436_1.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_2" geometry={nodes.mesh549538436_2.geometry} material={textureGlassMaterial} />
            <mesh name="mesh549538436_3" geometry={nodes.mesh549538436_3.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_4" geometry={nodes.mesh549538436_4.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_5" geometry={nodes.mesh549538436_5.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_6" geometry={nodes.mesh549538436_6.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_7" geometry={nodes.mesh549538436_7.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_8" geometry={nodes.mesh549538436_8.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_9" geometry={nodes.mesh549538436_9.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_10" geometry={nodes.mesh549538436_10.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_11" geometry={nodes.mesh549538436_11.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_12" geometry={nodes.mesh549538436_12.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_13" geometry={nodes.mesh549538436_13.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_14" geometry={nodes.mesh549538436_14.geometry} material={textureMaterial} />
            <mesh name="mesh549538436_15" geometry={nodes.mesh549538436_15.geometry} material={textureMaterial} />
          </group>
          <mesh name="Keyboard-aPwr5p1dluw" geometry={nodes['Keyboard-aPwr5p1dluw'].geometry} material={textureMaterial} position={[-0.555, 0.792, 0.35]} rotation={[-1.571, 0.042, -1.504]} scale={0.931} />
          <group name="Light_Desk" position={[-0.142, 1.048, 1.156]} rotation={[-Math.PI / 2, 0, 1.123]}>
            <mesh name="Light_Desk_1" geometry={nodes.Light_Desk_1.geometry} material={textureMaterial} />
            <mesh name="Light_Desk_2" geometry={nodes.Light_Desk_2.geometry} material={textureMaterial} />
            <mesh name="Light_Desk_3" geometry={nodes.Light_Desk_3.geometry} material={textureMaterial} />
          </group>
          <mesh name="Mousepad002" geometry={nodes.Mousepad002.geometry} material={textureMaterial} position={[-0.581, 0.807, 0.598]} />
          <group name="Rubiks" position={[-0.053, 0.843, 1.001]} rotation={[0, -1.083, 0]}>
            <mesh name="pCube37_1" geometry={nodes.pCube37_1.geometry} material={textureMaterial} />
            <mesh name="pCube37_1_1" geometry={nodes.pCube37_1_1.geometry} material={textureMaterial} />
            <mesh name="pCube37_1_2" geometry={nodes.pCube37_1_2.geometry} material={textureMaterial} />
            <mesh name="pCube37_1_3" geometry={nodes.pCube37_1_3.geometry} material={textureMaterial} />
            <mesh name="pCube37_1_4" geometry={nodes.pCube37_1_4.geometry} material={textureMaterial} />
            <mesh name="pCube37_1_5" geometry={nodes.pCube37_1_5.geometry} material={textureMaterial} />
            <mesh name="pCube37_1_6" geometry={nodes.pCube37_1_6.geometry} material={textureMaterial} />
          </group>
        </group>
        <group name="GroupPhone" position={[-0.064, 0.922, -1.37]} rotation={[-1.571, 0, 0.316]}>
          <group name="Phone001" position={[0, 0.141, -0.127]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh name="Phone001_1" geometry={nodes.Phone001_1.geometry} material={textureMaterial} />
            <mesh name="Phone001_2" geometry={nodes.Phone001_2.geometry} material={textureMaterial} />
            <mesh name="Phone001_3" geometry={nodes.Phone001_3.geometry} material={textureMaterial} />
          </group>
        </group>
        <group name="GroupCeiling" position={[-0.004, 2.488, -0.502]} />
        <group name="GroupTelescop" position={[-1.109, 0, -0.486]} rotation={[0, -0.918, 0]} />
        <group name="GroupBigBooks" position={[1.901, 0.299, -1.512]} />
        <group name="GroupUnderMug" position={[1.001, 0.806, -1.579]}>
          <mesh name="Mousepad" geometry={nodes.Mousepad.geometry} material={textureMaterial} position={[0, -0.013, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group name="GroupStickyBoard" position={[2.175, 1.419, -1.962]} rotation={[3.067, 0, 0]}>
          <mesh name="Sticky_notes" geometry={nodes.Sticky_notes.geometry} material={textureMaterial} position={[0, -0.001, 0.016]} rotation={[-3.044, 0.045, 3.138]} />
        </group>
        <group name="RootNode" position={[-1.497, 0, -1.397]} rotation={[0, -0.93, 0]} scale={1.102}>
          <mesh name="Telescope001" geometry={nodes.Telescope001.geometry} material={textureMaterial} position={[0.088, 0, 0.006]} rotation={[0, 0.149, 0]} scale={112.257} />
        </group>
        <group name="RootNode001" position={[0, 2.403, -0.473]} scale={1.29}>
          <mesh name="Ceiling_Fan001" geometry={nodes.Ceiling_Fan001.geometry} material={textureMaterial} scale={100} />
        </group>
        <group name="RootNode002" position={[2.031, 0.372, -1.258]}>
          <mesh name="Books001" geometry={nodes.Books001.geometry} material={textureMaterial} position={[-0.128, -0.074, -0.257]} scale={138.225} />
        </group>
        <group name="GroupDualScreen" position={[0.377, 1.25, -1.528]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh name="mesh329542522001" geometry={nodes.mesh329542522001.geometry} material={textureMaterial} />
          <mesh name="mesh329542522001_1" geometry={nodes.mesh329542522001_1.geometry} material={textureMaterial} />
          <mesh name="mesh329542522001_2" geometry={nodes.mesh329542522001_2.geometry} material={textureMaterial} />
        </group>
        <group name="GroupWhiteBoard" position={[2.216, 0.934, -2.006]}>
          <mesh name="White_board_Cube045_1" geometry={nodes.White_board_Cube045_1.geometry} material={textureMaterial} />
          <mesh name="White_board_Cube045_1_1" geometry={nodes.White_board_Cube045_1_1.geometry} material={textureMaterial} />
        </group>
        <group name="Carpet" position={[3.281, -0.013, -0.134]} rotation={[0, -0.193, 0]}>
          <mesh name="Box002_1" geometry={nodes.Box002_1.geometry} material={textureMaterial} />
          <mesh name="Box002_1_1" geometry={nodes.Box002_1_1.geometry} material={textureMaterial} />
          <mesh name="Box002_1_2" geometry={nodes.Box002_1_2.geometry} material={textureMaterial} />
          <mesh name="Box002_1_3" geometry={nodes.Box002_1_3.geometry} material={textureMaterial} />
          <mesh name="Box002_1_4" geometry={nodes.Box002_1_4.geometry} material={textureMaterial} />
        </group>
        <group name="GroupShelf" position={[2.414, 0.446, -1.567]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh name="mesh1329329239" geometry={nodes.mesh1329329239.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_1" geometry={nodes.mesh1329329239_1.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_2" geometry={nodes.mesh1329329239_2.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_3" geometry={nodes.mesh1329329239_3.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_4" geometry={nodes.mesh1329329239_4.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_5" geometry={nodes.mesh1329329239_5.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_6" geometry={nodes.mesh1329329239_6.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_7" geometry={nodes.mesh1329329239_7.geometry} material={textureMaterial} />
          <mesh name="mesh1329329239_8" geometry={nodes.mesh1329329239_8.geometry} material={textureMaterial} />
        </group>
        <group name="Mug" position={[0.989, 0.795, -1.639]} rotation={[0, -0.548, 0]}>
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder001_1_1" geometry={nodes.Cylinder001_1_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder001_1_2" geometry={nodes.Cylinder001_1_2.geometry} material={textureMaterial} />
          <mesh name="Cylinder001_1_3" geometry={nodes.Cylinder001_1_3.geometry} material={textureMaterial} />
          <mesh name="Cylinder001_1_4" geometry={nodes.Cylinder001_1_4.geometry} material={textureMaterial} />
        </group>
        <group name="GroupBookStack" position={[2.747, 0.092, -1.559]} rotation={[-Math.PI, 0.986, -Math.PI]}>
          <mesh name="Node-Mesh002" geometry={nodes['Node-Mesh002'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_1" geometry={nodes['Node-Mesh002_1'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_2" geometry={nodes['Node-Mesh002_2'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_3" geometry={nodes['Node-Mesh002_3'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_4" geometry={nodes['Node-Mesh002_4'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_5" geometry={nodes['Node-Mesh002_5'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_6" geometry={nodes['Node-Mesh002_6'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_7" geometry={nodes['Node-Mesh002_7'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_8" geometry={nodes['Node-Mesh002_8'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh002_9" geometry={nodes['Node-Mesh002_9'].geometry} material={textureMaterial} />
        </group>
        <group name="GroupStapler" position={[-0.265, 0.795, -1.833]} rotation={[-Math.PI, 0.304, 0]}>
          <mesh name="Box001_1" geometry={nodes.Box001_1.geometry} material={textureMaterial} />
          <mesh name="Box001_1_1" geometry={nodes.Box001_1_1.geometry} material={textureMaterial} />
        </group>
        <group name="GroupPens" position={[0.189, 0.795, -0.882]}>
          <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder006_1_1" geometry={nodes.Cylinder006_1_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder006_1_2" geometry={nodes.Cylinder006_1_2.geometry} material={textureMaterial} />
          <mesh name="Cylinder006_1_3" geometry={nodes.Cylinder006_1_3.geometry} material={textureMaterial} />
          <mesh name="Cylinder006_1_4" geometry={nodes.Cylinder006_1_4.geometry} material={textureMaterial} />
          <mesh name="Cylinder006_1_5" geometry={nodes.Cylinder006_1_5.geometry} material={textureMaterial} />
        </group>
        <group name="GroupBinder" position={[2.274, 0.009, -1.53]} rotation={[0, 1.508, 0]}>
          <mesh name="Binder_Cube-Mesh" geometry={nodes['Binder_Cube-Mesh'].geometry} material={textureMaterial} />
          <mesh name="Binder_Cube-Mesh_1" geometry={nodes['Binder_Cube-Mesh_1'].geometry} material={textureMaterial} />
          <mesh name="Binder_Cube-Mesh_2" geometry={nodes['Binder_Cube-Mesh_2'].geometry} material={textureMaterial} />
          <mesh name="Binder_Cube-Mesh_3" geometry={nodes['Binder_Cube-Mesh_3'].geometry} material={textureMaterial} />
          <group name="GroupBinder001" position={[0.006, 0, 0.089]}>
            <mesh name="Binder_Cube-Mesh002" geometry={nodes['Binder_Cube-Mesh002'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh002_1" geometry={nodes['Binder_Cube-Mesh002_1'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh002_2" geometry={nodes['Binder_Cube-Mesh002_2'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh002_3" geometry={nodes['Binder_Cube-Mesh002_3'].geometry} material={textureMaterial} />
          </group>
          <group name="GroupBinder002" position={[0.008, 0, 0.134]}>
            <mesh name="Binder_Cube-Mesh003" geometry={nodes['Binder_Cube-Mesh003'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh003_1" geometry={nodes['Binder_Cube-Mesh003_1'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh003_2" geometry={nodes['Binder_Cube-Mesh003_2'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh003_3" geometry={nodes['Binder_Cube-Mesh003_3'].geometry} material={textureMaterial} />
          </group>
          <group name="GroupBinder003" position={[0.011, 0, 0.178]}>
            <mesh name="Binder_Cube-Mesh004" geometry={nodes['Binder_Cube-Mesh004'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh004_1" geometry={nodes['Binder_Cube-Mesh004_1'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh004_2" geometry={nodes['Binder_Cube-Mesh004_2'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh004_3" geometry={nodes['Binder_Cube-Mesh004_3'].geometry} material={textureMaterial} />
          </group>
          <group name="GroupBinder004" position={[0.014, 0, 0.222]}>
            <mesh name="Binder_Cube-Mesh005" geometry={nodes['Binder_Cube-Mesh005'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh005_1" geometry={nodes['Binder_Cube-Mesh005_1'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh005_2" geometry={nodes['Binder_Cube-Mesh005_2'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh005_3" geometry={nodes['Binder_Cube-Mesh005_3'].geometry} material={textureMaterial} />
          </group>
          <group name="GroupBinder005" position={[0.016, 0, 0.264]}>
            <mesh name="Binder_Cube-Mesh006" geometry={nodes['Binder_Cube-Mesh006'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh006_1" geometry={nodes['Binder_Cube-Mesh006_1'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh006_2" geometry={nodes['Binder_Cube-Mesh006_2'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh006_3" geometry={nodes['Binder_Cube-Mesh006_3'].geometry} material={textureMaterial} />
          </group>
          <group name="GroupBinder006" position={[0.003, 0, 0.045]}>
            <mesh name="Binder_Cube-Mesh007" geometry={nodes['Binder_Cube-Mesh007'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh007_1" geometry={nodes['Binder_Cube-Mesh007_1'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh007_2" geometry={nodes['Binder_Cube-Mesh007_2'].geometry} material={textureMaterial} />
            <mesh name="Binder_Cube-Mesh007_3" geometry={nodes['Binder_Cube-Mesh007_3'].geometry} material={textureMaterial} />
          </group>
        </group>
        <mesh name="GroupPaperOnDesk" geometry={nodes.GroupPaperOnDesk.geometry} material={textureMaterial} position={[0.366, 0.728, -1.67]}>
          <mesh name="Box002001" geometry={nodes.Box002001.geometry} material={textureMaterial} />
          <mesh name="Box003001" geometry={nodes.Box003001.geometry} material={textureMaterial} />
        </mesh>
        <mesh name="Paper001" geometry={nodes.Paper001.geometry} material={textureMaterial} position={[-0.334, 0.791, -1.565]} rotation={[-Math.PI, 1.319, -Math.PI]} />
        <group name="GroupSwitchLights" position={[3.449, 1.038, -1.992]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
        </group>
        <mesh name="GroupStickyNotes" geometry={nodes.GroupStickyNotes.geometry} material={textureMaterial} position={[1.932, -0.475, -1.343]} rotation={[-0.098, -0.003, 0.027]} />
        <group name="GroupArtWall" position={[-0.934, 1.685, -1.992]} rotation={[-Math.PI, 0, Math.PI / 2]}>
          <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={materials['mat23.006']} />
          <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={materials['mat21.009']} />
          <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={materials['mat24.002']} />
          <mesh name="Node-Mesh001_3" geometry={nodes['Node-Mesh001_3'].geometry} material={materials['mat25.001']} />
        </group>
        <group name="GroupArtWall001" position={[-0.934, 1.362, -1.992]} rotation={[-Math.PI, 0, Math.PI / 2]}>
          <mesh name="Node-Mesh004" geometry={nodes['Node-Mesh004'].geometry} material={materials['mat23.007']} />
          <mesh name="Node-Mesh004_1" geometry={nodes['Node-Mesh004_1'].geometry} material={materials['mat21.010']} />
          <mesh name="Node-Mesh004_2" geometry={nodes['Node-Mesh004_2'].geometry} material={materials['mat24.003']} />
          <mesh name="Node-Mesh004_3" geometry={nodes['Node-Mesh004_3'].geometry} material={materials['mat25.002']} />
        </group>
        <group name="GooglepCube51" position={[-0.25, 0.324, -1.532]} rotation={[-1.889, -0.056, -1.4]}>
          <mesh name="GooglepCube51_1" geometry={nodes.GooglepCube51_1.geometry} material={textureMaterial} />
          <mesh name="GooglepCube51_1_1" geometry={nodes.GooglepCube51_1_1.geometry} material={textureMaterial} />
          <mesh name="GooglepCube51_1_2" geometry={nodes.GooglepCube51_1_2.geometry} material={textureMaterial} />
        </group>
        <group name="Light_Bulb2" position={[1.121, 1.193, -1.75]} rotation={[-2.638, -1.277, 1.405]}>
          <mesh name="Light_Bulb2-Mesh" geometry={nodes['Light_Bulb2-Mesh'].geometry} material={textureMaterial} />
          <mesh name="Light_Bulb2-Mesh_1" geometry={nodes['Light_Bulb2-Mesh_1'].geometry} material={textureMaterial} />
        </group>
        <mesh name="CoffePlant_mehs001" geometry={nodes.CoffePlant_mehs001.geometry} material={textureMaterial} position={[1.549, 0, -1.57]} rotation={[0, 0.713, 0]} scale={0.091} />
        <mesh name="Xbox_Controller001" geometry={nodes.Xbox_Controller001.geometry} material={textureMaterial} position={[1.522, 0.041, -1.34]} rotation={[0, 0.208, 0]} scale={0.006} />
        <mesh name="Analog_Cock001" geometry={nodes.Analog_Cock001.geometry} material={textureMaterial} position={[0.376, 1.626, -1.973]} rotation={[0, -Math.PI / 2, 0]} scale={0.016} />
        <mesh name="UmbrellaPalmTree_mesh001" geometry={nodes.UmbrellaPalmTree_mesh001.geometry} material={textureMaterial} position={[3.137, 0.563, -1.661]} scale={0.059} />
      </group>
    </group>
  )
}

useGLTF.preload("models/scene_room_nc.glb");

