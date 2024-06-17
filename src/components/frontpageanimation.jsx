import React from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';   
import Animation from './lottiefiles/ani.lottie'; 


const frontpageanimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src={Animation}
        autoplay
        loop
        
      >
      </DotLottiePlayer>
    </div>
  );
};
export default frontpageanimation;