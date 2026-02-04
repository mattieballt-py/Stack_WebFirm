import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0F284A] flex items-center justify-center"
        >
          {/* Logo Container */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            {/* Stack1 - Base layer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src="/assets/Stack1.svg"
                alt="Stack Logo 1"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Stack2 - Top layer with offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 20,
                y: 20
              }}
              transition={{
                duration: 0.6,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 10 }}
            >
              <img
                src="/assets/Stack2.svg"
                alt="Stack Logo 2"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Pulse effect */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 1.3, 1.3, 1],
                opacity: [0, 0.3, 0.3, 0]
              }}
              transition={{
                duration: 2,
                delay: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-white"
              style={{
                zIndex: -1,
                boxShadow: '0 0 80px 40px rgba(255, 255, 255, 0.4)',
                filter: 'none'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
