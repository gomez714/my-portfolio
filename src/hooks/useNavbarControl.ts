import { useState, useEffect, useCallback } from 'react';

interface NavbarState {
  show: boolean;
  shadow: boolean;
  isScrolled: boolean;
}

export const useNavbarControl = (): NavbarState => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show/hide based on scroll direction
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      if (currentScrollY > 70) setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }

    // Shadow and scroll state
    setShadow(currentScrollY > 70);
    setIsScrolled(currentScrollY > 0);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [controlNavbar]);

  return { show, shadow, isScrolled };
} 