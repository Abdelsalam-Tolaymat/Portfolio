'use client'

import styles from '../../styles/PatchMeCard.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import setColors from '@/composables/ThemeSelector'

export default function PatchMeCard({}) {

    const [activeGif, setActiveGif] = useState('dark')

    useEffect(()=>{
       if(activeGif == 'dark'){
        setColors('PatchMeDark')
       }else if(activeGif == 'purple'){
        setColors('PatchMePurple')
       }
    },[activeGif])

    return (
        <> 
        <div className={styles['container']}>
            <div className={styles['gifs-container']}>
                <Image
                    className= {styles['gif'] + ' ' + (activeGif == 'dark' ? styles['active-gif'] : styles['inactive-gif'])}
                    onClick={()=> setActiveGif('dark')}
                    src="/PatchMe Dark.png"
                    width={313}
                    height={450}
                    alt="Picture of PatchMe in dark mode"
                />
                <Image
                    className= {styles['gif'] + ' ' + (activeGif == 'purple' ? styles['active-gif'] : styles['inactive-gif'])}
                    onClick={()=> setActiveGif('purple')}
                    src="/PatchMe Purple.png"
                    width={313}
                    height={450}
                    alt="Picture of PatchMe in default theme"
                />
            </div>
            <div className={styles['card-description']}>
                <span className={styles['card-title']} >PatchMe</span>
                <span>A desktop app developed and published on the Overwolf platform. PatchMe supports players of the popular online video game "League of Legends" by providing them with accurate up-to-date information regarding any and all changes in the game. The app was recently released on the Overwolf store and currently boasts over 2k downloads.<br/><br/> Click <a className={styles['reference-link']} href="https://dev.to/abdelsalam_tolaymat/overview-of-overwolf-app-patchme-21jf">here</a>  for a technical and in-depth look at the app.</span>
                <span>Technologies used: <ul><li>Vue.js</li><li>Python</li><li>Node.js</li><li>Web Scraping (BS4, Puppeteer)</li><li>Overwolf</li></ul></span>
            </div>
        </div> 


        </>

    )
}
