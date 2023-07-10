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

    const descriptionText = ()=> {return <span>A desktop app developed and published on the Overwolf platform. PatchMe supports players of the popular online video game "League of Legends" by providing them with accurate up-to-date information concerning any and all changes in the game. The app was recently released on the Overwolf store and currently boasts over 2k downloads. You can find it through this <a className={styles['reference-link']} href="https://www.overwolf.com/app/BmElectro_and_A3ead-PatchMe">link</a>.<br/><br/> Click <a className={styles['reference-link']} href="https://dev.to/abdelsalam_tolaymat/overview-of-overwolf-app-patchme-21jf">here</a>  for a technical and in-depth look at the app.</span>}

    return (
        <> 
        <div className={styles['container']}>
            <div className={styles['gifs-container']}>
                <Image
                    className= {styles['gif'] + ' ' + (activeGif == 'dark' ? styles['active-gif'] : styles['inactive-gif'])}
                    onClick={()=> setActiveGif('dark')}
                    src="/PatchMe Dark.png"
                    width={400}
                    height={600}
                    alt="Picture of PatchMe in dark mode"
                />
                <Image
                    className= {styles['gif'] + ' ' + (activeGif == 'purple' ? styles['active-gif'] : styles['inactive-gif'])}
                    onClick={()=> setActiveGif('purple')}
                    src="/PatchMe Purple.png"
                    width={400}
                    height={600}
                    alt="Picture of PatchMe in default theme"
                />
            </div>
            <div className={styles['card-description']}>
                <span className={styles['card-title']} >PatchMe</span>
                {descriptionText()}
                <span>Technologies used: 
                    <ul>
                        <li><a className={styles['reference-link']} href="https://vuejs.org/">Vue.js</a></li>
                        <li><a className={styles['reference-link']} href="https://nodejs.org/en">Node.js</a></li>
                        <li><a className={styles['reference-link']} href="https://www.python.org/">Python</a></li>
                        <li>Web Scraping (<a className={styles['reference-link']} href="https://www.crummy.com/software/BeautifulSoup/">BS4</a>, <a className={styles['reference-link']} href="https://pptr.dev/">Puppeteer</a>)</li>
                        <li><a className={styles['reference-link']} href="https://www.overwolf.com/">Overwolf</a></li>
                        <li><a className={styles['reference-link']} href="https://developer.riotgames.com/docs/lol">League of Legends Dev Tools</a></li>
                    </ul>
                </span>
            </div>
        </div> 


        </>

    )
}
