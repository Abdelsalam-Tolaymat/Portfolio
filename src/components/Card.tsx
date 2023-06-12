'use client'

import { StaticImageData } from 'next/image'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'

interface CardProps {title:string, description:string, changeSidebar(mode:boolean):void, image?:StaticImageData}

export default function Card({title, description, image, changeSidebar}:CardProps) {
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
            <motion.div transition={{duration:0.2}} layout data-title={title} data-isHovered={isHovered} onClick={() => changeSidebar(true)} onMouseEnter={handleHover} onMouseLeave={handleHover} className={styles['card']}>
                <span data-title={title} data-isHovered={isHovered} className={styles['card-title']}>{title}</span>
                {isHovered ? <span className={styles['description']}>{description}</span> : null}
            </motion.div>
        </>

    )
}
