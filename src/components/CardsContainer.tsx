'use client'

import styles from '../styles/CardsContainer.module.css'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


export default function CardsContainer() {
    const [isSidebar, setIsSidebar] = useState(false)

    return (
        <>  
            <AnimatePresence>

                {isSidebar ? <motion.div layout key={'sidebar'} initial={{x:'-100vw'}} transition={{duration:2.3}} animate={{x:0}}>
                    <Sidebar/>
                </motion.div > :
                <motion.div layout key={'container'} exit={{ x : '-100vw' }} transition={{duration:1.3}} className={styles['cards-container']}>
                    <Card changeSidebar={setIsSidebar} title="Anime Getter" description='MyAnimeList clone website created with Jikan API' />
                    <Card changeSidebar={setIsSidebar} title="PatchMe" description='Overwolf desktop app for League of Legends' />
                    <Card changeSidebar={setIsSidebar} title="CheckMyWeather" description='Weather forecast website created with WeatherAPI' />
                </motion.div>
                }
            </AnimatePresence>

            
        </>

    )
}
