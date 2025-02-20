import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

const usePartyPopperEffect = () => {
  const createConfettiCanvas = useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "99";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
    return canvas;
  }, []);

  const fireConfetti = useCallback((confettiInstance: confetti.CreateTypes) => {
    const colors = ["#DDA924", "#FFD700", "#FFFFFF", "#FFC107", "#FF9800"];
    const commonConfig = {
      colors,
      shapes: ["square", "circle"],
      ticks: 300,
      particleCount: 100,
      decay: 0.92,
      gravity: 1.2,
      drift: 0.1,
      scalar: 1.2,
      opacity: 0.7,
    };

    confettiInstance({
      ...commonConfig,
      angle: 80,
      spread: 55,
      origin: { x: 0.2, y: 0.7 },
      startVelocity: 45,
    });

    confettiInstance({
      ...commonConfig,
      angle: 100,
      spread: 55,
      origin: { x: 0.8, y: 0.7 },
      startVelocity: 45,
    });

    confettiInstance({
      ...commonConfig,
      angle: 90,
      spread: 100,
      origin: { x: 0.5, y: 0.7 },
      startVelocity: 50,
      particleCount: 120,
    });

    confettiInstance({
      ...commonConfig,
      particleCount: 50,
      angle: 85,
      spread: 45,
      origin: { x: 0.35, y: 0.7 },
      startVelocity: 40,
    });

    confettiInstance({
      ...commonConfig,
      particleCount: 50,
      angle: 95,
      spread: 45,
      origin: { x: 0.65, y: 0.7 },
      startVelocity: 40,
    });
  }, []);

  useEffect(() => {
    const canvas = createConfettiCanvas();
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    setTimeout(() => {
      fireConfetti(myConfetti);

      setTimeout(() => {
        canvas.remove();
      }, 3500);
    }, 500);

    return () => {
      canvas.remove();
    };
  }, [createConfettiCanvas, fireConfetti]);

};

export default usePartyPopperEffect;
