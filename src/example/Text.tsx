'use client';

import { Text as DreiText } from '@react-three/drei';

import abc_font from '@/assets/abc-normal.ttf';
import decay_font from '@/assets/decay.otf';

const Text = () => {
    return (
        <group position-y={0.2}>
            <DreiText
                letterSpacing={-0.07}
                font={decay_font}
                fontSize={2.5}
                renderOrder={1}
                position-y={0.8}
                color='#000000'>
                ButterMax
            </DreiText>

            <DreiText
                letterSpacing={-0.07}
                font={decay_font}
                position-y={-0.12}
                fontSize={0.94}
                color='#000000'>
               
            </DreiText>

            <DreiText
                font={abc_font}
                maxWidth={10}
                textAlign='left'
                fontSize={0.25}
                fontWeight={600}
                lineHeight={1.5}
                position-y={-0.5}
                position-x={-1.5}
                color='#000000'>
                THE GOLD STANDARD IN BUTTERY SMOOTH DIGITAL PRODUCTION
            </DreiText>
        </group>
    );
};

export default Text;
