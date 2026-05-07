'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
  frameCount: number;
}

const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ frameCount }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Generate image paths
  const imagePaths = useMemo(() => {
    return Array.from({ length: frameCount }, (_, i) => {
      const index = i.toString().padStart(3, '0');
      return `/sequence/frame_${index}_delay-0.066s.png`;
    });
  }, [frameCount]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = async () => {
      const promises = imagePaths.map((path, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = path;
          img.onload = () => {
            loadedImages[index] = img;
            loadedCount++;
            if (loadedCount === frameCount) {
              setImages(loadedImages);
              setIsLoading(false);
            }
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${path}`);
            resolve();
          };
        });
      });

      await Promise.all(promises);
    };

    preloadImages();
  }, [imagePaths, frameCount]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to frame index (0-frameCount-1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || !images[index]) return;

    const img = images[index];
    
    // Calculate aspect ratio for object-fit: cover logic
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;
    
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(img, x, y, newWidth, newHeight);
  };

  // Update canvas on resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame
        const currentIndex = Math.floor(frameIndex.get());
        renderFrame(currentIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  // Handle frame updates
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.floor(latest);
    renderFrame(index);
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-white"></div>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollyCanvas;
