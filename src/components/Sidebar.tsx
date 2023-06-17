'use client'

import styles from '../styles/Sidebar.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeEverything } from '@/store/modalSlice'

export default function Sidebar({}) {
    const dispatch = useDispatch()

    return (
        <>  
           <div className={styles['sidebar']}>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'AnimeGetter'}))} style={{backgroundColor:'blueviolet'}} className={styles['sidebar-element']}>Anime Getter</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'AnimeGetter'}))} style={{backgroundColor:'#00c6bd'}} className={styles['sidebar-element']}>PatchMe</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'AnimeGetter'}))} style={{backgroundColor:'rgb(219, 94, 94)'}} className={styles['sidebar-element']}>CheckMyWeather</div>
           </div>
        </>

    )
}
