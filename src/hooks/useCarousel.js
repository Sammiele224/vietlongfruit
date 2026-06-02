import { useState, useEffect } from 'react';
import { CAROUSEL_INTERVAL } from '../constants/animation';

/**
 * Custom hook for managing carousel auto-play
 * @param {number} itemsCount - Number of items in carousel
 * @param {boolean} isActive - Whether carousel should autoplay (default: true)
 * @param {number} interval - Interval between slides in ms
 * @returns {number} - Current slide index
 */
export const useCarousel = (itemsCount, isActive = true, interval = CAROUSEL_INTERVAL) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isActive || itemsCount <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === itemsCount - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, itemsCount, interval]);

  return currentSlide;
};
