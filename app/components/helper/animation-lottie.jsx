'use client';

import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR turned off
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{
        width: width || '95%',
      }}
    />
  );
};

export default AnimationLottie;
