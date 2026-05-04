"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

function padIndex(i: number) {
  if (i < 10) return `00${i}`;
  if (i < 100) return `0${i}`;
  return `${i}`;
}

function ScrollyContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const totalFrames = 121;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames]);

  // Optimized Preloading
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // On mobile, we might want to skip some frames if it's too heavy, 
    // but for now let's focus on reliable loading.
    for (let i = 0; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${padIndex(i)}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames + 1) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const draw = (latest: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Performance boost: no alpha
    if (!ctx) return;

    const index = Math.min(totalFrames, Math.max(0, Math.round(latest)));
    const img = images[index];

    if (img && img.complete) {
      const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * ratio) / 2;
      const y = (canvas.height - img.height * ratio) / 3;
      
      ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => draw(latest));
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        // Cap DPR for mobile to save memory
        const scale = isMobile ? Math.min(dpr, 1.5) : dpr;
        
        canvasRef.current.width = window.innerWidth * scale;
        canvasRef.current.height = window.innerHeight * scale;
        
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) ctx.scale(scale, scale);
        
        draw(frameIndex.get());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [images, isMobile]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
          style={{ width: '100%', height: '100%' }}
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

export default function ScrollyCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[500vh] bg-[#0a0a0a]" />;

  return <ScrollyContent />;
}
