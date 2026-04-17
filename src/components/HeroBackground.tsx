"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let time = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    type Orb = {
      baseX: number;
      baseY: number;
      radius: number;
      color: [number, number, number];
      intensity: number;
      speedX: number;
      speedY: number;
      phase: number;
    };

    let orbs: Orb[] = [];
    let nodes: { x: number; y: number; r: number; phase: number }[] = [];

    function resize() {
      width = canvas!.offsetWidth;
      height = canvas!.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }

    function init() {
      resize();

      orbs = [
        {
          baseX: width * 0.2,
          baseY: height * 0.3,
          radius: Math.max(width, height) * 0.45,
          color: [200, 117, 51],
          intensity: 0.55,
          speedX: 0.00025,
          speedY: 0.0003,
          phase: 0,
        },
        {
          baseX: width * 0.8,
          baseY: height * 0.65,
          radius: Math.max(width, height) * 0.4,
          color: [232, 164, 96],
          intensity: 0.45,
          speedX: 0.0003,
          speedY: 0.00022,
          phase: Math.PI * 0.6,
        },
        {
          baseX: width * 0.5,
          baseY: height * 0.5,
          radius: Math.max(width, height) * 0.35,
          color: [90, 140, 220],
          intensity: 0.28,
          speedX: 0.00035,
          speedY: 0.00028,
          phase: Math.PI,
        },
        {
          baseX: width * 0.15,
          baseY: height * 0.85,
          radius: Math.max(width, height) * 0.3,
          color: [220, 90, 160],
          intensity: 0.22,
          speedX: 0.0004,
          speedY: 0.00033,
          phase: Math.PI * 1.4,
        },
      ];

      const cols = 16;
      const rows = 9;
      nodes = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          nodes.push({
            x: (width / cols) * i,
            y: (height / rows) * j,
            r: 1 + Math.random() * 1.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    function drawGrid() {
      const spacingX = width / 16;
      const spacingY = height / 9;
      ctx!.strokeStyle = "rgba(200, 117, 51, 0.06)";
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      for (let i = 0; i <= 16; i++) {
        const x = i * spacingX;
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, height);
      }
      for (let j = 0; j <= 9; j++) {
        const y = j * spacingY;
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y);
      }
      ctx!.stroke();
    }

    function drawOrbs() {
      ctx!.globalCompositeOperation = "screen";
      for (const orb of orbs) {
        const ox =
          orb.baseX +
          Math.cos(time * orb.speedX * 1000 + orb.phase) * width * 0.15;
        const oy =
          orb.baseY +
          Math.sin(time * orb.speedY * 1000 + orb.phase) * height * 0.2;

        const grd = ctx!.createRadialGradient(ox, oy, 0, ox, oy, orb.radius);
        const [r, g, b] = orb.color;
        grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${orb.intensity})`);
        grd.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${orb.intensity * 0.3})`);
        grd.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx!.fillStyle = grd;
        ctx!.fillRect(0, 0, width, height);
      }
      ctx!.globalCompositeOperation = "source-over";
    }

    function drawSpotlight() {
      if (!pointer.active) return;
      const grd = ctx!.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        280
      );
      grd.addColorStop(0, "rgba(232, 164, 96, 0.22)");
      grd.addColorStop(0.5, "rgba(232, 164, 96, 0.08)");
      grd.addColorStop(1, "rgba(232, 164, 96, 0)");
      ctx!.globalCompositeOperation = "screen";
      ctx!.fillStyle = grd;
      ctx!.fillRect(0, 0, width, height);
      ctx!.globalCompositeOperation = "source-over";
    }

    function drawNodes() {
      for (const n of nodes) {
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const distToPointer = pointer.active
          ? Math.sqrt(dx * dx + dy * dy)
          : Infinity;
        const proximity = Math.max(0, 1 - distToPointer / 200);

        const pulse = Math.sin(time * 2 + n.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.1 + proximity * 0.6;
        const radius = n.r + proximity * 2.5;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(232, 164, 96, ${alpha})`;
        if (proximity > 0.1) {
          ctx!.shadowBlur = 12 * proximity;
          ctx!.shadowColor = "rgba(232, 164, 96, 0.9)";
        }
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    function drawScanLine() {
      const y = (Math.sin(time * 0.4) * 0.5 + 0.5) * height;
      const grd = ctx!.createLinearGradient(0, y - 160, 0, y + 160);
      grd.addColorStop(0, "rgba(232, 164, 96, 0)");
      grd.addColorStop(0.5, "rgba(232, 164, 96, 0.1)");
      grd.addColorStop(1, "rgba(232, 164, 96, 0)");
      ctx!.fillStyle = grd;
      ctx!.fillRect(0, y - 160, width, 320);
    }

    function draw() {
      time += 0.005;
      ctx!.clearRect(0, 0, width, height);

      drawOrbs();
      drawGrid();
      drawScanLine();
      drawNodes();
      drawSpotlight();

      animationId = requestAnimationFrame(draw);
    }

    function handlePointer(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= width &&
        pointer.y >= 0 &&
        pointer.y <= height;
    }
    function handlePointerLeave() {
      pointer.active = false;
    }

    init();
    draw();

    window.addEventListener("resize", init);
    window.addEventListener("pointermove", handlePointer);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-sgai-midnight via-transparent to-transparent"
        aria-hidden="true"
      />
    </>
  );
}
