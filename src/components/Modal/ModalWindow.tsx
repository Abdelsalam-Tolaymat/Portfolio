'use client'

import { MouseEvent, ReactNode, use, useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../Modal/Backdrop";
import styles from '../../styles/ModalWindow.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changeIsOpen } from "@/store/modalSlice";
import { RootState } from "@/store";
import PatchMeCard from "../Project Cards/PatchMeCard"
import AnimeGetterCard from "../Project Cards/AnimeGetterCard"
import CheckMyWeatherCard from "../Project Cards/CheckMyWeatherCard";



const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 1,
  },
};


interface ModalButton {onClick(e:MouseEvent<HTMLButtonElement>):void, label:string}

const Modal = () => {
  // Log state
  const dispatch = useDispatch()
  const pageName = useSelector((state:RootState)=>state.modal.modal.modalPageName);
  const RenderedPage = ()=>{
    if (pageName == "PatchMe"){
      return <PatchMeCard/>
    } else if(pageName == "Anime Getter"){
      return <AnimeGetterCard/>
    } else if(pageName == "CheckMyWeather"){ 
      return <CheckMyWeatherCard/>
    }
  }
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
        <RenderedPage/>
        {/* <ModalButton onClick={() => dispatch(changeIsOpen(false))} label="Close" />  */}
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