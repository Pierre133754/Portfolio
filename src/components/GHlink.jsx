import { Canvas, useFrame } from "@react-three/fiber";
import { MeshPortalMaterial, Text, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useState } from "react";
import { easing } from 'maath'

function Portal() {
    const { nodes, materials } = useGLTF('./GHlogo.glb')
    const map = useTexture('./flatTest2.png')
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';
    }, [hovered])

    return(
        <mesh onClick={() => {
            window.open('https://github.com/Pierre133754')
          }}
          onPointerOver={() => {
            setHovered(true)
          }}
          onPointerOut={() => {
            setHovered(false)
          }}>
            <planeGeometry args={[4, 6]}/>
            <MeshPortalMaterial>
                <ambientLight intensity={5} />
                <Text fontSize={0.5} position={[0, -1.8, 0]} color={'black'}>
                    Mon Github
                </Text>
                <mesh position={[0,0,-10]}>
                    <planeGeometry args={[35,25]}/>
                    <meshStandardMaterial map={map} />
                </mesh>
                <mesh geometry={nodes.GHlogo.geometry} material={materials.defaultMat} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -2]} scale={1.25}/>
            </MeshPortalMaterial>
        </mesh>
    )
}

function CameraRig() {
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [(-state.pointer.x * 6), (-state.pointer.y * 2) , 5.5], 0.3, delta)
      state.camera.lookAt(0, 0, 0)
    })
}

export default function GHlink() {

    return(
        <Canvas style={{borderRadius: '14px', touchAction: 'none'}}>
            <ambientLight intensity={10} />
            <color attach='background' args={['white']} />
            <Portal />
            <CameraRig />
        </Canvas>
    )
}