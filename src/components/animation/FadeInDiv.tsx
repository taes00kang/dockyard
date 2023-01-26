import React from 'react'
import { motion } from 'framer-motion'
import { fadeInVariants } from './variants'

interface Props {
    children: React.ReactNode,
    once?: boolean,
    className?: string
    onClick?: () => void
}

export const FadeInDiv: React.FC<Props> = ({ children, once=false, className="", onClick }) => {
    return (
        <motion.div
            className={className}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: once }}
            onClick={onClick}
          >
            {children}
          </motion.div>
    );
}

export default FadeInDiv;
