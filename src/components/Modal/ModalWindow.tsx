'use client'

import { MouseEvent, use, useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../Modal/Backdrop";
import styles from '../../styles/ModalWindow.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeIsOpen } from "@/store/modalSlice";
import { RootState } from "@/store";


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


interface ModalButton {onClick(e:MouseEvent<HTMLButtonElement>):void, label:string}

const Modal = () => {
  // Log state
  const dispatch = useDispatch()
  const pageName = useSelector<RootState>(state=>state.modal.modal.modalPageName);
  
  useEffect(()=>{console.log('opened modal window')}, [pageName])
  return (
    <Backdrop onClick={() => dispatch(changeIsOpen(false))}>
    <motion.div
        onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
        className={styles['modal']}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <ModalButton onClick={() => dispatch(changeIsOpen(false))} label="Close" />
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