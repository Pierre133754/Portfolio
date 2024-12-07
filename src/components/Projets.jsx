import { ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { ColorDepth, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from 'three'

function Card({projet, setProjet, zoomChange}) {
    const [P3, P4, P5, P6] = useLoader(THREE.TextureLoader, ['./P3.png', './P4.png', './P5.png', './P6.png'])
    const scroll = useScroll()
    const ref = useRef()
    const { width, height } = useThree((state) => state.viewport)
    const cosChange = 0.5
    const whChange = 0.88

    useFrame(() => {
        ref.current.rotation.set(0, (scroll.offset * Math.PI*1.5)*2, 0)
        ref.current.position.set(0, 0, (Math.cos(scroll.offset*(6*Math.PI))*cosChange)-cosChange)
        if (scroll.visible(0, 1/6)) {
            setProjet(prevValues => {
                return {...prevValues, first: true}
            })
        } else (
            setProjet(prevValues => {
                return {...prevValues, first: false}
            })
        )
        if (scroll.visible(1/6, 2/6)) {
            setProjet(prevValues => {
                return {...prevValues, second: true}
            })
        } else (
            setProjet(prevValues => {
                return {...prevValues, second: false}
            })
        )
        if (scroll.visible(3/6, 2/6)) {
            setProjet(prevValues => {
                return {...prevValues, third: true}
            })
        } else (
            setProjet(prevValues => {
                return {...prevValues, third: false}
            })
        )
        if (scroll.visible(5/6, 1.1/6)) {
            setProjet(prevValues => {
                return {...prevValues, fourth: true}
            })
        } else (
            setProjet(prevValues => {
                return {...prevValues, fourth: false}
            })
        )
    })
    
    return(
        <mesh ref={ref}>
            <boxGeometry args={[(width*whChange)/zoomChange, ((width*whChange)/1.555)/zoomChange, 0.08]} />
            <meshBasicMaterial attach="material-0" color='white' />
            <meshBasicMaterial attach="material-1" color='white' />
            <meshBasicMaterial attach="material-2" color="white" />
            <meshBasicMaterial attach="material-3" color="white" />
            <meshBasicMaterial attach="material-4" map={projet.first ? P3 : P5} transparent />
            <meshBasicMaterial attach="material-5" map={projet.second ? P4 : P6} transparent />
        </mesh>
    )
}

export default function Projets({projet, setProjet}) {
    const zoomChange = 2

    return(
        <Canvas style={{borderRadius: '14px', touchAction: 'none'}} camera={{zoom: zoomChange}}>
            <EffectComposer>
                <ColorDepth />
            </EffectComposer>
            <ambientLight intensity={10} />
            <ScrollControls pages={5}>
                <Card projet={projet} setProjet={setProjet} zoomChange={zoomChange}/>
            </ScrollControls>
        </Canvas>
    )
}