import { MouseEvent } from "react";
import { motion } from "framer-motion";
import Backdrop from "../Modal/Backdrop";
import styles from '../styles/ModalWindow.module.css'


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


interface Modal {handleClose(e:MouseEvent<HTMLButtonElement | HTMLDivElement>):void, text:string, type:string}
interface ModalButton {onClick(e:MouseEvent<HTMLButtonElement>):void, label:string}

const Modal = ({ handleClose, text, type }:Modal) => {
  // Log state

  return (
    <Backdrop onClick={handleClose}>
    <motion.div
        onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
        className={styles['modal']}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <ModalButton onClick={handleClose} label="Close" />
    </motion.div>     
    </Backdrop>
  );
};



const ModalButton = ({ onClick, label }:ModalButton) => (
  <motion.button
    className={styles['modal-button']}
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;