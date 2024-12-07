import { useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from 'three' 

function Walls() {
    const { width, height } = useThree((state) => state.viewport)

    return (
        <>
            <Wall position={[-0.1, (-height / 2) - 0.48, 0]} size={[width * 5, 1, 1]} rotation={[0, 0, -Math.PI/64]} />
            <Wall position={[0.1, (-height / 2) - 0.48, 0]} size={[width * 5, 1, 1]} rotation={[0, 0, Math.PI/64]} />
            <Wall position={[(-width / 2) - 0.4, 0, 0]} size={[1, height * 10, 1]} />
            <Wall position={[(width / 2) + 0.4, 0, 0]} size={[1, height * 10, 1]} />
            <Wall position={[0, (height / 2) + 0.48, 0]} size={[width * 5, 1, 1]}/>
        </>
    )
}

function Wall({ position, size, rotation}) {
    return (
        <RigidBody position={position} type="fixed" rotation={rotation}>
            <mesh>
                <boxGeometry args={size} />
                <meshBasicMaterial color='green' transparent opacity={0} />
            </mesh>
        </RigidBody>
    )
}

function LogoH({ position }) {
    const { nodes, materials } = useGLTF('./HTMLlogo.glb')
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    return (
        <RigidBody enabledTranslations={[true, true, false]} colliders={false} position={position} type={hovered ? 'dynamic' : 'fixed'} ref={ref}>
            <BallCollider args={[0.45]} />
            <mesh>
                <sphereGeometry args={[0.45]} />
                <meshBasicMaterial color='green' transparent opacity={0} />
            </mesh>
            <group scale={0.48} onPointerEnter={() => {
                setHovered(true)
            }}
            onPointerOver={() => {
                ref.current.applyImpulse({ x: THREE.MathUtils.randFloatSpread(2), y: 1, z: 0 }, true)
            }}>
                <group rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.HTMLlogo_1.geometry} material={materials['Material.012']} />
                    <mesh geometry={nodes.HTMLlogo_2.geometry} material={materials['Material.009']} />
                    <mesh geometry={nodes.HTMLlogo_3.geometry} material={materials['Material.010']} />
                    <mesh geometry={nodes.HTMLlogo_4.geometry} material={materials['Material.011']} />
                </group>
            </group>
        </RigidBody>
    )
}

function LogoC({ position }) {
    const { nodes, materials } = useGLTF('./CSSlogo.glb')
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    return (
        <RigidBody enabledTranslations={[true, true, false]} colliders={false} position={position} type={hovered ? 'dynamic' : 'fixed'} ref={ref}>
            <BallCollider args={[0.45]} />
            <mesh>
                <sphereGeometry args={[0.45]} />
                <meshBasicMaterial color='green' transparent opacity={0} />
            </mesh>
            <group scale={0.095} onPointerEnter={() => {
                setHovered(true)
            }}
            onPointerOver={() => {
                ref.current.applyImpulse({ x: THREE.MathUtils.randFloatSpread(2), y: 1, z: 0 }, true)
            }}>
                <group scale={0.05}>
                    <mesh geometry={nodes.CSSlogo_1.geometry} material={materials['Material.005']} />
                    <mesh geometry={nodes.CSSlogo_2.geometry} material={materials['Material.003']} />
                    <mesh geometry={nodes.CSSlogo_3.geometry} material={materials['Material.001']} />
                </group>
            </group>
        </RigidBody>
    )
}

function LogoJ({ position }) {
    const map = useTexture('./JavaScript-logo.png')
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    return (
        <RigidBody enabledTranslations={[true, true, false]} colliders={false} position={position} type={hovered ? 'dynamic' : 'fixed'} ref={ref}>
            <BallCollider args={[0.39]} />
            <mesh>
                <sphereGeometry args={[0.39]} />
                <meshBasicMaterial color='green' transparent opacity={0} />
            </mesh>
            <mesh onPointerEnter={() => {
                setHovered(true)
            }}
            onPointerOver={() => {
                ref.current.applyImpulse({ x: THREE.MathUtils.randFloatSpread(2), y: 1, z: 0 }, true)
            }}>
                <boxGeometry args={[0.65, 0.65, 0.25]} />
                <meshBasicMaterial attach="material-0" color="#f0db4f" />
                <meshBasicMaterial attach="material-1" color="#f0db4f" />
                <meshBasicMaterial attach="material-2" color="#f0db4f" />
                <meshBasicMaterial attach="material-3" color="#f0db4f" />
                <meshBasicMaterial attach="material-4" map={map}/>
                <meshBasicMaterial attach="material-5" color="#f0db4f" />
            </mesh>
        </RigidBody>
    )
}

function LogoR({ position }) {
    const { nodes, materials } = useGLTF('./ReactLogo2.glb')
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    return (
        <RigidBody enabledTranslations={[true, true, false]} colliders={false} position={position} type={hovered ? 'dynamic' : 'fixed'} ref={ref}>
            <BallCollider args={[0.4]} />
            <mesh>
                <sphereGeometry args={[0.4]} />
                <meshBasicMaterial color='green' transparent opacity={0} />
            </mesh>
            <group scale={0.4} onPointerEnter={() => {
                setHovered(true)
            }}
            onPointerOver={() => {
                ref.current.applyImpulse({ x: THREE.MathUtils.randFloatSpread(2), y: 1, z: 0 }, true)
            }}>
                <group scale={[1, 1, 0.22]}>
                    <mesh geometry={nodes.ReactLogo_1.geometry} material={materials['Material.001']} />
                    <mesh geometry={nodes.ReactLogo_2.geometry} material={materials['Material.002']} />
                </group>
            </group>
        </RigidBody>
    )
}

function LogoN({ position }) {
    const { nodes, materials } = useGLTF('./NodeLogo.glb')
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    return (
        <RigidBody enabledTranslations={[true, true, false]} colliders={false} position={position} type={hovered ? 'dynamic' : 'fixed'} ref={ref}>
            <BallCollider args={[0.4]} />
            <mesh>
                <sphereGeometry args={[0.4]} />
                <meshBasicMaterial color='blue' transparent opacity={0} />
            </mesh>
            <group scale={0.64} onPointerEnter={() => {
                setHovered(true)
            }}
            onPointerOver={() => {
                ref.current.applyImpulse({ x: THREE.MathUtils.randFloatSpread(2), y: 1, z: 0 }, true)
            }}>
                <group rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                    <mesh geometry={nodes.NodeLogo_1.geometry} material={materials['Material.005']} />
                    <mesh geometry={nodes.NodeLogo_2.geometry} material={materials['Material.004']} />
                </group>
            </group>
        </RigidBody>
    )
}

function Logos() {
    return (
        <>
            <LogoH position={[-1.49, 0.5, 0]}/>
            <LogoC position={[0.01, 0.5, 0]}/>
            <LogoJ position={[1.51, 0.5, 0]}/>
            <LogoR position={[-1.5, -0.5, 0]}/>
            <LogoN position={[0, -0.5, 0]}/>
        </>
    )
}

export default function Balls() {

    return (
        <Canvas style={{borderRadius: '14px', touchAction: 'none'}} camera={{fov: 30}}>
            <ambientLight intensity={3} />
            <Physics>
                <Walls />
                <Logos />
            </Physics>
        </Canvas>
    )
}