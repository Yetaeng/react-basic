import React from "react";
import { BeatLoader } from 'react-spinners';

function Loading() {
    return (
        <BeatLoader 
            color="#36d7b7"
            size={10}
            margin={5}
            speedMultiplier={1}
        />
    );
}

export default Loading;