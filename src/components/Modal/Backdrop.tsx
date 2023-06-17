import { MouseEvent, ReactNode } from "react";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import styles from '../../styles/Backdrop.module.css'

interface Backdrop {children:ReactNode, onClick(e:MouseEvent<HTMLDivElement>):void}
const Backdrop = ({ children, onClick }:Backdrop) => {
  // Log state
  return (
    <motion.div
      className={styles['backdrop']}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;