import React, { useState, useRef } from 'react';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import { useGesture } from "react-use-gesture"
import { useSpring, a } from "react-spring/three"


import { Line as DreiLine } from 'drei';

interface IProps {
    coords: Array<[number, number, number]>
}

const Line = ({ coords }: IProps) => {
    // const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width
    const [spring, set] = useSpring(() => ({
        scale: [1, 1, 1],
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        config: { mass: 3, friction: 40, tension: 800 }
    }))

    const bind = useGesture({
        onDrag: ({ offset: [x, y], vxvy: [vx, vy], down, ...props }) => set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
        onHover: ({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
    })

    return (
        // @ts-ignore
        <a.mesh {...spring} {...bind()}>
            <dodecahedronBufferGeometry attach="geometry" args={[1.4, 0]} />
            <meshNormalMaterial attach="material" />
        </a.mesh>
    );
}

export default Line
