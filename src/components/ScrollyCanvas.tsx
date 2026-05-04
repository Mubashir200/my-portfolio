"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 121]);

  useEffect(() => {
    // Preload all 122 images
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i <= 121; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${padIndex(i)}_delay-0.066s.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const index = Math.min(121, Math.max(0, Math.round(latest)));
    const img = images[index];

    if (img && img.complete) {
      drawCover(canvasRef.current, ctx, img);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        const currentFrame = Math.min(121, Math.max(0, Math.round(frameIndex.get())));
        if (images[currentFrame]) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            if (images[currentFrame].complete) {
              drawCover(canvasRef.current, ctx, images[currentFrame]);
            } else {
              images[currentFrame].onload = () => drawCover(canvasRef.current!, ctx, images[currentFrame]);
            }
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  const drawCover = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * ratio) / 2;
    const y = (canvas.height - img.height * ratio) / 3;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
  };

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <canvas ref={canvasRef} className="w-full h-full block" />
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
