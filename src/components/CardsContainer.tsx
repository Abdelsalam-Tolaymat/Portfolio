'use client'

import styles from '../styles/CardsContainer.module.css'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect } from 'react'
import useWindowResize from '@/hooks/useWindowResize'

export default function CardsContainer() {
    const modalOpen = useSelector<RootState>(state =>state.modal.modal.isOpen)
    const [width, height] = useWindowResize()
    const [initialLoad, setInitialLoad] = useState(true)


    useEffect(()=>{
        let loadedMobile = JSON.parse(localStorage.getItem('loadedMobile') || '{}')

        if(width <= 650 && !loadedMobile && !initialLoad){
            //console.log(loadedMobile)
            window.location.reload()
            localStorage.setItem('loadedMobile', JSON.stringify(true))
        }
        if(width > 650 && loadedMobile && !initialLoad){
            localStorage.setItem('loadedMobile', JSON.stringify(false))

        }

        //console.log(initialLoad)
        setInitialLoad(false)
    },[width, height])

    const motionDiv = (width <= 650 ? 
        <motion.div className={styles['sidebar-container-mobile']} layout key={'sidebar'} transition={{duration:0.5}} initial={{ bottom:  '-5rem' }}  animate={{ bottom:  '0rem' }} exit={{ bottom : '-5rem' }}>
            <Sidebar className={'sidebar-mobile'} />
        </motion.div > : 
        <motion.div className={styles['sidebar-container']} layout key={'sidebar'} transition={{duration:0.5}} animate={{left:0}} exit={{ left : '-20rem' }}>
            <Sidebar className={'sidebar'}/>
        </motion.div >
    ) 

    return (
        <>  
            <AnimatePresence initial={false}>

                {modalOpen ? motionDiv :
                <motion.div layout key={'container'} initial={{ x : '-100vw', opacity: 0 }} animate={{ x : '0vw', opacity: 1}} exit={{ x : '-100vw', opacity: 0 }} transition={{ duration:0.5}} className={styles['cards-container']}>
                    <Card title="PatchMe"/>
                    <Card title="Anime Getter"/>
                    <Card title="CheckMyWeather"/>
                </motion.div>
                }
            </AnimatePresence>

            
        </>

    )
}
