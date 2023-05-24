import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

const PageTransition = ({
  children,
  keyProp,
}: {
  children: ReactNode;
  keyProp: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
