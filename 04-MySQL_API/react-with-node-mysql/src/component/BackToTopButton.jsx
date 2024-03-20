import { useState, useEffect } from 'react';
import { CgArrowTopLeftO } from "react-icons/cg";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} title="Go to top" className="back_to_top">
          <CgArrowTopLeftO className='back_to_top_icon' />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
