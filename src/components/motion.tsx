"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const systemEase = "easeOut" as const;
const revealMs = 0.42;
const hoverMs = 0.14;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Scroll reveal that keeps copy in the HTML.
 * Crawlers see the text. After paint, we nudge opacity, 20px, and a light blur.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { y: 20, opacity: 0.96, filter: "blur(5px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16, margin: "-64px 0px" }}
      transition={{ duration: revealMs, delay, ease: systemEase }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "-48px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.06,
            delayChildren: reduce ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0.96, y: 18, filter: "blur(5px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: revealMs, ease: systemEase },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.07,
            delayChildren: reduce ? 0 : 0.04,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0.01, y: 20, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: systemEase },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0.01, y: 16, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: revealMs, delay, ease: systemEase }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export { hoverMs };
