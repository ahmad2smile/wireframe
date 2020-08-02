import React from 'react';

import { Canvas } from 'react-three-fiber';
import { Line as DreiLine } from 'drei';

interface IProps {
    coords: Array<[number, number, number]>
}

const Line = ({ coords }) => {
    return <DreiLine linewidth={2} points={coords} color="red" position={[0, 0, 0]} />
}

export default Line