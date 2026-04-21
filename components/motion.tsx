'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function FloatCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}