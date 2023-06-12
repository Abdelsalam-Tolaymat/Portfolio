'use client'

import styles from '../styles/Sidebar.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


export default function Sidebar({}) {

    return (
        <>  
           <div className={styles['sidebar']}>
                <div style={{backgroundColor:'blueviolet'}} className={styles['sidebar-element']}>Anime Getter</div>
                <div style={{backgroundColor:'#00c6bd'}} className={styles['sidebar-element']}>PatchMe</div>
                <div style={{backgroundColor:'rgb(219, 94, 94)'}} className={styles['sidebar-element']}>CheckMyWeather</div>
           </div>
        </>

    )
}
