import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function useIsMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android/i.test(navigator.userAgent);
}

const variants = {
  initial: {
    opacity: 0,
    y: 0,
    scale: 0.85,
    filter: 'blur(16px)',
    z: -200,
  },
  snap: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    z: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Section = ({ children, centerContent = true, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
  const sectionRef = useRef();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    if (inView) {
      controls.start('snap');
    } else {
      controls.start('initial');
    }
  }, [inView, controls, isMobile]);

  if (isMobile) {
    return (
      <section
        id={id}
        ref={el => {
          ref(el);
          sectionRef.current = el;
        }}
        className={`w-full ${centerContent ? 'min-h-screen flex flex-col justify-center' : 'py-20'}`}
        style={{ perspective: 0, transformStyle: 'flat' }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      ref={el => {
        ref(el);
        sectionRef.current = el;
      }}
      initial="initial"
      animate={controls}
      variants={variants}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`w-full ${centerContent ? 'min-h-screen flex flex-col justify-center' : 'py-20'} transition-all duration-500 will-change-transform`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section; 