import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="px-5 flex flex-col md:flex-row justify-center py-4">
      <div className="layout-content-container flex flex-col max-w-[100%] flex-1 relative">
        <div className="absolute inset-0 -z-10">
          {/* 3D Canvas */}
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} />
            <OrbitControls enableZoom={false} />
            {/* Add your 3D model here */}
            <mesh rotation={[0.4, 0.2, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="orange" />
            </mesh>
          </Canvas>
        </div>
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[300px] md:min-h-[500px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://www.balajicleaningagency.com/img/service/Untitled-02.jpg')",
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  The best cleaning services
                </h1>
                <h2 className="text-white text-xs md:text-sm lg:text-base font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Professional cleaners, eco-friendly supplies, 100% satisfaction guarantee
                </h2>
              </div>
              <Link to="/booking">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-11 lg:h-12 md:px-5 bg-[#19a2e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em] active:scale-95">
                  <span className="truncate">Book now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
