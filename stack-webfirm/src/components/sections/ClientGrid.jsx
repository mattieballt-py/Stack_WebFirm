import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientGrid = ({ clients }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Split text animation for heading
  const heading = "Trusted by Experts";
  const words = heading.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cornerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 0.3,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Animated Heading - Left Side */}
          <motion.div
            className="lg:w-1/4 flex-shrink-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="heading-lg text-navy-900 flex flex-wrap gap-x-3">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  className={`inline-block ${word === 'Experts' ? 'border-2 border-navy-900 rounded-lg px-3 py-1' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Logo Grid - Right Side */}
          <motion.div
            className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-xl bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-1">
                {/* Border */}
                <div className="absolute inset-0 border border-slate-200 rounded-xl pointer-events-none" />

                {/* Corner Plus Icons */}
                <motion.div
                  custom={0}
                  variants={cornerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute top-3 left-3 w-4 h-4 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-primary-500"
                >
                  <img src="/assets/clients/plus.svg" alt="" className="w-full h-full" />
                </motion.div>

                <motion.div
                  custom={1}
                  variants={cornerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute top-3 right-3 w-4 h-4 text-slate-400 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110 group-hover:text-primary-500"
                >
                  <img src="/assets/clients/plus.svg" alt="" className="w-full h-full" />
                </motion.div>

                <motion.div
                  custom={2}
                  variants={cornerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute bottom-3 left-3 w-4 h-4 text-slate-400 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110 group-hover:text-primary-500"
                >
                  <img src="/assets/clients/plus.svg" alt="" className="w-full h-full" />
                </motion.div>

                <motion.div
                  custom={3}
                  variants={cornerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute bottom-3 right-3 w-4 h-4 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-primary-500"
                >
                  <img src="/assets/clients/plus.svg" alt="" className="w-full h-full" />
                </motion.div>

                {/* Client Logo */}
                <div className="relative z-10 flex items-center justify-center h-16 md:h-20">
                  <img
                    src={`/assets/clients/${client.svg}`}
                    alt={client.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>

        {/* Bottom Trust Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 text-slate-600 text-sm"
        >
          Join 50+ businesses who trust us with their online presence
        </motion.p>
      </div>
    </section>
  );
};

export default ClientGrid;
