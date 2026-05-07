'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% - 20% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% - 45% scroll
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [50, 0, -50]);

  // Section 3: 50% - 70% scroll
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [50, 0, -50]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 h-[500vh]">
      {/* Section 1 */}
      <div className="sticky top-0 flex h-screen items-center justify-center px-10">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-black tracking-tighter md:text-9xl leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Sandarv
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Lamichhane
            </span>
          </h1>

          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <p className="text-2xl md:text-4xl font-light tracking-tight text-gray-400 uppercase">
              Full Stack <span className="text-white font-black">Developer</span>
              <span className="mx-4 text-blue-500/50 font-thin">|</span>
              Machine Learning <span className="text-white font-black">Enthusiast</span>
            </p>

            <div className="relative mt-2 group">
              <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-blue-500/5 blur-xl rounded-full" />
              <p className="relative text-base md:text-xl text-blue-400/90 max-w-2xl font-medium tracking-wide">
                <span className="text-blue-500 text-3xl font-serif mr-2 leading-none inline-block align-top">“</span>
                Bridging the gap between scalable code and intelligent systems
                <span className="text-blue-500 text-3xl font-serif ml-2 leading-none inline-block align-bottom">”</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="sticky top-0 flex h-screen items-center justify-start px-10 md:px-24">
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-semibold md:text-6xl leading-tight">
            Building intelligent<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              digital solutions.
            </span>
          </h2>
          <p className="mt-6 text-lg text-emerald-100/60 md:text-xl leading-relaxed border-l-2 border-emerald-500/30 pl-6">
            I am a Computer Engineering student focused on building practical web applications.
            I specialize in developing full-stack systems using Flask, integrating machine learning
            models, and creating high-end scrollytelling portfolio.
          </p>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="sticky top-0 flex h-screen items-center justify-end px-10 md:px-24">
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="max-w-2xl text-right"
        >
          <h2 className="text-4xl font-semibold md:text-6xl leading-tight">
            Bridging AI<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              & Web Engineering.
            </span>
          </h2>
          <p className="mt-6 text-lg text-orange-100/60 md:text-xl leading-relaxed border-r-2 border-orange-500/30 pr-6">
            I specialize in building web applications, integrating machine learning models, and developing scalable backend systems that deliver practical and efficient solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Overlay;
