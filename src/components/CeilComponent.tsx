import React, { FC } from "react";
import { Ceil } from "../models/Ceil";


interface CeilProps {
    ceil: Ceil;
    selected: boolean;
    click: (ceil: Ceil) => void;
}


const CeilComponent: FC<CeilProps> = ({ceil, selected, click}) => {
    return (
        <div 
            className={['ceil', ceil.color, selected ? 'selected' : ''].join(' ')} 
            onClick = {() => click(ceil)}
            style = {{background: ceil.available && ceil.figure ? '#f54040e7' : ''}}  // tak ploho)) pozhe peredelat'
        >
                {ceil.available && !ceil.figure && <div className={"available"}></div>}
                {ceil.figure?.logo && <img src={ceil.figure.logo} alt=""/>}
        </div>
    );
};

export default CeilComponent;