"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Circle {
  x: number;
  y: number;
  radius: number;
  baseX: number;
  baseY: number;
  color: string;
  opacity: number;
}

interface FallingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

interface CosmicDust {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface CursorParticle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  angle: number;
  speed: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const circlesRef = useRef<Circle[]>([]);
  const fallingStarsRef = useRef<FallingStar[]>([]);
  const cosmicDustRef = useRef<CosmicDust[]>([]);
  const cursorParticlesRef = useRef<CursorParticle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastStarTimeRef = useRef<number>(Date.now());
  const rotationRef = useRef<number>(0);

  // Initialize particles and circles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeElements();
    };

    const initializeElements = () => {
      // Create more stars for galaxy effect
      particlesRef.current = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.8 + 0.2,
      }));

      // Create nebula clouds (larger, more colorful)
      const nebulaColors = [
        "rgba(147, 51, 234, 0.08)", // purple
        "rgba(59, 130, 246, 0.08)", // blue
        "rgba(139, 92, 246, 0.08)", // violet
        "rgba(236, 72, 153, 0.06)", // pink
        "rgba(167, 139, 250, 0.07)", // light purple
        "rgba(96, 165, 250, 0.06)", // light blue
      ];

      circlesRef.current = Array.from({ length: 15 }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          radius: Math.random() * 250 + 150,
          color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
          opacity: Math.random() * 0.4 + 0.1,
        };
      });

      // Create cosmic dust
      const dustColors = [
        "rgba(147, 51, 234, 0.3)",
        "rgba(59, 130, 246, 0.3)",
        "rgba(236, 72, 153, 0.3)",
        "rgba(167, 139, 250, 0.3)",
      ];

      cosmicDustRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      // Smooth cursor follower with delay
      setCursorPos((prev) => ({
        x: prev.x + (e.clientX - prev.x) * 0.15,
        y: prev.y + (e.clientY - prev.y) * 0.15,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create falling stars at random intervals
      const now = Date.now();
      const timeSinceLastStar = now - lastStarTimeRef.current;
      const randomInterval = Math.random() * 800 + 500; // Random interval between 0.5-1.3 seconds

      if (timeSinceLastStar > randomInterval) {
        fallingStarsRef.current.push({
          x: Math.random() * canvas.width, // Spawn across entire width
          y: Math.random() * canvas.height * 0.3 - 50, // Spawn from top area
          length: Math.random() * 80 + 40,
          speed: Math.random() * 3 + 2,
          opacity: 1,
          angle: 135, // 135 degrees = diagonal from top-left to bottom-right
        });
        lastStarTimeRef.current = now;
      }

      // Draw and update falling stars
      fallingStarsRef.current = fallingStarsRef.current.filter((star) => {
        // Move diagonally - both x and y increase
        const angleRad = (star.angle * Math.PI) / 180;
        star.x += Math.cos(angleRad) * star.speed;
        star.y += Math.sin(angleRad) * star.speed;

        // Calculate travel distance for fade effect
        const travelDistance = Math.sqrt(star.x * star.x + star.y * star.y);
        const maxTravelDistance = canvas.height * 0.6; // Vanish after 60% of screen height

        // Fade based on distance traveled
        if (travelDistance > maxTravelDistance * 0.5) {
          star.opacity -= 0.02;
        }

        if (
          star.opacity > 0 &&
          star.y < canvas.height + 100 &&
          star.x < canvas.width + 100
        ) {
          // Draw falling star trail behind the star
          const angleRad = (star.angle * Math.PI) / 180;
          // Trail goes in opposite direction (subtract instead of add)
          const endX = star.x - Math.cos(angleRad) * star.length;
          const endY = star.y - Math.sin(angleRad) * star.length;

          const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          gradient.addColorStop(
            0.5,
            `rgba(147, 197, 253, ${star.opacity * 0.6})`,
          );
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // Draw glowing head at the front
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
          ctx.fill();

          return true;
        }
        return false;
      });

      // Draw and update circles with mouse interaction
      circlesRef.current.forEach((circle) => {
        const dx = mousePos.x - circle.x;
        const dy = mousePos.y - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          circle.x -= dx * force * 0.02;
          circle.y -= dy * force * 0.02;
        } else {
          // Return to base position
          circle.x += (circle.baseX - circle.x) * 0.02;
          circle.y += (circle.baseY - circle.y) * 0.02;
        }

        // Add floating animation
        circle.x += Math.sin(Date.now() * 0.001 + circle.baseX) * 0.3;
        circle.y += Math.cos(Date.now() * 0.0008 + circle.baseY) * 0.3;

        // Draw circle
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius,
        );
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and update cosmic dust
      cosmicDustRef.current.forEach((dust) => {
        dust.x += dust.speedX;
        dust.y += dust.speedY;

        if (dust.x < 0) dust.x = canvas.width;
        if (dust.x > canvas.width) dust.x = 0;
        if (dust.y < 0) dust.y = canvas.height;
        if (dust.y > canvas.height) dust.y = 0;

        ctx.fillStyle = dust.color;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and update particles (stars)
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction - push particles away
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.x -= dx * force * 0.3;
          particle.y -= dy * force * 0.3;
        }

        // Draw star with glow
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3,
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        glow.addColorStop(
          0.5,
          `rgba(200, 200, 255, ${particle.opacity * 0.3})`,
        );
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add twinkle effect
        particle.opacity += Math.sin(Date.now() * 0.003 + particle.x) * 0.01;
        particle.opacity = Math.max(0.2, Math.min(1, particle.opacity));
      });

      // Draw fancy cursor follower
      if (mousePos.x > 0 || mousePos.y > 0) {
        // Smooth animated cursor position
        setCursorPos((prev) => ({
          x: prev.x + (mousePos.x - prev.x) * 0.1,
          y: prev.y + (mousePos.y - prev.y) * 0.1,
        }));

        rotationRef.current += 0.02;

        // Create cursor particles
        if (Math.random() < 0.3) {
          cursorParticlesRef.current.push({
            x: cursorPos.x,
            y: cursorPos.y,
            size: Math.random() * 2 + 1,
            opacity: 1,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 1,
          });
        }

        // Draw and update cursor particles
        cursorParticlesRef.current = cursorParticlesRef.current.filter((p) => {
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;
          p.opacity -= 0.02;

          if (p.opacity > 0) {
            ctx.fillStyle = `rgba(147, 51, 234, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            return true;
          }
          return false;
        });

        // Outer glowing aura
        const outerGlow = ctx.createRadialGradient(
          cursorPos.x,
          cursorPos.y,
          0,
          cursorPos.x,
          cursorPos.y,
          40,
        );
        outerGlow.addColorStop(0, "rgba(147, 51, 234, 0.2)");
        outerGlow.addColorStop(0.5, "rgba(59, 130, 246, 0.1)");
        outerGlow.addColorStop(1, "rgba(236, 72, 153, 0)");
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, 40, 0, Math.PI * 2);
        ctx.fill();

        // Rotating outer ring with gradient
        ctx.save();
        ctx.translate(cursorPos.x, cursorPos.y);
        ctx.rotate(rotationRef.current);

        for (let i = 0; i < 4; i++) {
          const angle = ((Math.PI * 2) / 4) * i;
          const x1 = Math.cos(angle) * 25;
          const y1 = Math.sin(angle) * 25;
          const x2 = Math.cos(angle + Math.PI / 4) * 30;
          const y2 = Math.sin(angle + Math.PI / 4) * 30;

          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, "rgba(147, 51, 234, 0.8)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0.8)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.arc(0, 0, 28, angle, angle + Math.PI / 5);
          ctx.stroke();
        }
        ctx.restore();

        // Pulsing middle ring
        const pulse = Math.sin(Date.now() * 0.005) * 3 + 18;
        const pulseGradient = ctx.createLinearGradient(
          cursorPos.x - pulse,
          cursorPos.y - pulse,
          cursorPos.x + pulse,
          cursorPos.y + pulse,
        );
        pulseGradient.addColorStop(0, "rgba(236, 72, 153, 0.6)");
        pulseGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.8)");
        pulseGradient.addColorStop(1, "rgba(147, 51, 234, 0.6)");
        ctx.strokeStyle = pulseGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Inner rotating ring (opposite direction)
        ctx.save();
        ctx.translate(cursorPos.x, cursorPos.y);
        ctx.rotate(-rotationRef.current * 1.5);
        ctx.strokeStyle = "rgba(167, 139, 250, 0.7)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 1.5);
        ctx.stroke();
        ctx.restore();

        // Center glowing core
        const centerGlow = ctx.createRadialGradient(
          cursorPos.x,
          cursorPos.y,
          0,
          cursorPos.x,
          cursorPos.y,
          6,
        );
        centerGlow.addColorStop(0, "rgba(255, 255, 255, 1)");
        centerGlow.addColorStop(0.5, "rgba(167, 139, 250, 0.8)");
        centerGlow.addColorStop(1, "rgba(147, 51, 234, 0)");
        ctx.fillStyle = centerGlow;
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Bright center dot
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Connection line to actual mouse
        const lineGradient = ctx.createLinearGradient(
          cursorPos.x,
          cursorPos.y,
          mousePos.x,
          mousePos.y,
        );
        lineGradient.addColorStop(0, "rgba(147, 51, 234, 0.4)");
        lineGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(cursorPos.x, cursorPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Small ring at actual mouse position
        ctx.strokeStyle = "rgba(147, 51, 234, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
