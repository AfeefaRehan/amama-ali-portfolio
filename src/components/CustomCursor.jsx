import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .cursor-hover"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#1B4543]" />
      </div>

      {/* Ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block transition-all duration-200 ease-out"
        style={{
          transform: `translate(${position.x - (hovered ? 24 : 16)}px, ${
            position.y - (hovered ? 24 : 16)
          }px)`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            hovered
              ? "w-12 h-12 border-[#F0BE6F]"
              : "w-8 h-8 border-[#1B4543]"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;