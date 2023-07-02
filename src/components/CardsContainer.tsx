'use client'

import styles from '../styles/CardsContainer.module.css'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect } from 'react'
export default function CardsContainer() {
    const modalOpen = useSelector<RootState>(state =>state.modal.modal.isOpen)

    return (
        <>  
            <AnimatePresence initial={false}>

                {modalOpen ? <motion.div className={styles['sidebar-container']} layout key={'sidebar'} transition={{duration:0.5}} animate={{left:0}} exit={{ left : '-20rem' }}>
                    <Sidebar/>
                </motion.div > :
                <motion.div layout key={'container'} initial={{ x : '-100vw', opacity: 0 }} animate={{ x : '0vw', opacity: 1}} exit={{ x : '-100vw', opacity: 0 }} transition={{ duration:0.5}} className={styles['cards-container']}>
                    <Card title="PatchMe" description='Overwolf desktop app for League of Legends' />
                    <Card title="Anime Getter" description='MyAnimeList clone website created with Jikan API' />
                    <Card title="CheckMyWeather" description='Weather forecast website created with WeatherAPI' />
                </motion.div>
                }
            </AnimatePresence>

            
        </>

    )
}
