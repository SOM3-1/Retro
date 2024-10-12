import VirtualPS2 from './Console';
import './console.css';
export const Ps2 = () => {
    return (<div><VirtualPS2/>
    <div className="intro">Click on the power button to boot PS2</div></div>)
}