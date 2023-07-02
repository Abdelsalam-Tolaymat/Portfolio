'use client'

import { StaticImageData } from 'next/image'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeEverything, changeIsOpen } from '@/store/modalSlice'

interface CardProps {title:string, description:string, image?:StaticImageData}

export default function Card({title, description, image }:CardProps) {
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false)
    function handleHover(e:MouseEvent<HTMLDivElement>){
        if(e.type == 'mouseenter'){
            setIsHovered(true)
        }else{
            setIsHovered(false)
        }
    }

    return (
        <>
            <motion.div transition={{duration:0.2}} layout data-title={title} data-ishovered={isHovered} onClick={() => dispatch(changeEverything({isOpen:true, modalPageName:title}))} onMouseEnter={handleHover} onMouseLeave={handleHover} className={styles['card']}>
                <span data-title={title} data-ishovered={isHovered} className={styles['card-title']}>{title}</span>
                {isHovered ? <span className={styles['description']}>{description}</span> : null}
            </motion.div>
        </>

    )
}
