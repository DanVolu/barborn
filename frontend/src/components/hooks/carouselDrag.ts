import { useState, useRef } from "react";

export function useCarouselDrag() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickPrevent, setClickPrevent] = useState(false);

  interface MouseEventWithClientX extends React.MouseEvent<HTMLDivElement> {
    clientX: number;
  }

  const handleMouseDown = (e: MouseEventWithClientX) => {
    setIsDragging(true);
    setClickPrevent(false);
    setStartX(e.clientX);
    if (carouselRef.current) {
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setTimeout(() => setIsDragging(false), 50);

  const handleMouseMove = (e: MouseEventWithClientX) => {
    if (!isDragging) return;
    setClickPrevent(true);
    const walk = e.clientX - startX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return {
    carouselRef,
    isDragging,
    clickPrevent,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
}
