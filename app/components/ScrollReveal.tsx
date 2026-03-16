"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export const ScrollReveal = ({ 
    children, 
    width = "100%", 
    delay = 0,
    direction = "up",
    className
}: ScrollRevealProps) => {
    
    const variants = {
        hidden: { 
            opacity: 0, 
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            x: 0,
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.6, 
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            style={{ width }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
