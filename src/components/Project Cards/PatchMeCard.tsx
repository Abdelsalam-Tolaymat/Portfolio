'use client'

import styles from '../../styles/PatchMeCard.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import setColors from '@/composables/ThemeSelector'
import FormattedText from '../FormattedText'

export default function PatchMeCard({}) {

    const [activeGif, setActiveGif] = useState('dark')

    useEffect(()=>{
       if(activeGif == 'dark'){
        setColors('PatchMeDark')
       }else if(activeGif == 'purple'){
        setColors('PatchMePurple')
       }
    },[activeGif])

    const descriptionText = ()=> {return <span><FormattedText id='modalPatchMe1'/><a className={styles['reference-link']} href="https://www.overwolf.com/app/BmElectro_and_A3ead-PatchMe"><FormattedText id='modalPatchMe2'/></a><br/><br/><FormattedText id='modalPatchMe3'/><a className={styles['reference-link']} href="https://dev.to/abdelsalam_tolaymat/overview-of-overwolf-app-patchme-21jf"><FormattedText id='modalPatchMe4'/></a><FormattedText id='modalPatchMe5'/></span>}

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
