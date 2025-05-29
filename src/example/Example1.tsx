import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib/Fluid';
import { ThreeTunnel } from './tunel';

// import img from '@/assets/img.jpg';
import Text from './Text';

const Example1 = () => {
    return (
        <ThreeTunnel.In>
            <Text />
            {/* <Image /> */}
            <EffectComposer>
                <Fluid 
                backgroundColor='rgb(255, 214, 1)'
                fluidColor='#ffffff'
                />
            </EffectComposer>
        </ThreeTunnel.In>
    );
};

export default Example1;
