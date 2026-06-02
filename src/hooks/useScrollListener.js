import { useState, useEffect, useCallback } from 'react';
import { SCROLL_THRESHOLD } from '../constants/animation';

/**
 * Custom hook to track scroll position and return boolean flag
 * @param {number} threshold - Scroll position threshold (default: 50px)
 * @returns {boolean} - True if scrolled past threshold
 */
export const useScrollListener = (threshold = SCROLL_THRESHOLD) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScrolled;
};
