'use client'

import styles from '../styles/Card.module.css'
import { motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeEverything } from '@/store/modalSlice'
import FormattedText from './FormattedText'


interface CardProps {title:string}

export default function Card({title}:CardProps) {
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false)
    function handleHover(e:MouseEvent<HTMLDivElement>){
        if(e.type == 'mouseenter'){
            setIsHovered(true)
        }else{
            setIsHovered(false)
        }
    }

    const descriptionId = ():string => {        
        if(title == 'PatchMe'){return 'cardPatchMe'}
        else if(title == 'Anime Getter'){return 'cardAnimeGetter'}
        else {return 'cardCheckMyWeather'}
    }

    

    return (
        <>
            <motion.div transition={{duration:0.2}} layout data-title={title} data-ishovered={isHovered} onClick={() => dispatch(changeEverything({isOpen:true, modalPageName:title}))} onMouseEnter={handleHover} onMouseLeave={handleHover} className={styles['card']}>
                <span data-title={title} data-ishovered={isHovered} className={styles['card-title']}>{title}</span>
                {isHovered ? <span className={styles['description']}><FormattedText id={descriptionId()}/></span> : null}
            </motion.div>
        </>

    )
}
