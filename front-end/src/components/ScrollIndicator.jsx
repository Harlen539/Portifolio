import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      const footer = document.querySelector('.site-footer');
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const hasMoreContent = scrollTop < maxScroll - 24;
      const isBeforeFooter = footerTop > window.innerHeight - 80;

      setIsVisible(hasMoreContent && isBeforeFooter);
    }

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  function handleClick() {
    window.scrollBy({
      top: window.innerHeight * 0.82,
      behavior: 'smooth',
    });
  }

  return (
    <button
      className={`scroll-indicator${isVisible ? ' is-visible' : ''}`}
      type="button"
      aria-label="Rolar para baixo"
      onClick={handleClick}
    />
  );
}
