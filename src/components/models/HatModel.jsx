// "use client";

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function HatTransformed(props) {
//   const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
//   return (
//     <group
//       {...props}
//       dispose={null}
//       position={[-20, 20, -50]}
//       scale={[1.5, 1.5, 1.5]}
//       rotation={[1.7, -0.05, -0.2]}
//     >
//       <group scale={0.2}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["47"].geometry}
//           material={materials["Scene - Root"]}
//           position={[-15.809, 2.397, 45.488]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["38"].geometry}
//           material={materials["Scene - Root"]}
//           position={[-15.809, 2.397, 45.488]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["29"].geometry}
//           material={materials["Scene - Root"]}
//           position={[-15.809, 2.397, 45.488]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["20"].geometry}
//           material={materials["Scene - Root"]}
//           position={[-15.809, 2.397, 45.488]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["11"].geometry}
//           material={materials["Scene - Root"]}
//           position={[-15.809, 2.397, 45.488]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes["2"].geometry}
//           material={materials["Scene - Root"]}
//           position={[-15.809, 2.397, 45.488]}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/hat-transformed.glb");
"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

export default function HatTransformed(props) {
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");

  const modelRef = useRef();

  useFrame((state, delta) => {
    // if (modelRef.current) {
    //   modelRef.current.rotation.z += delta * 0.5;
    // }
    modelRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.5;
  });

  // Adjust the metalness property of the material

  if (materials["Scene - Root"]) {
    materials["Scene - Root"].metalness = 0.1; // You can adjust this value to make it more or less metallic
  }

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      position={[-20, 20, -50]}
      scale={[1.5, 1.5, 1.5]}
      rotation={[1.7, -0.05, -0.2]}
    >
      <group scale={0.2}>
        {/* For each mesh, apply the modified material */}
        {[...Array(6)].map((_, index) => (
          <mesh
            key={index}
            castShadow
            receiveShadow
            geometry={nodes[(index * 9 + 2).toString()].geometry}
            material={materials["Scene - Root"]}
            position={[-15.809, 2.397, 45.488]}
          />
        ))}
      </group>
    </group>
  );
}
useGLTF.preload("/models/hat-transformed.glb");
