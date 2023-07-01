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
                <span style={{color:'var(--main-website-color)', transition: 'color 0.3s'}} >PatchMe</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus doloribus nihil minima reprehenderit nostrum a perferendis obcaecati ducimus rerum minus consequuntur, suscipit sunt maxime esse ratione eveniet ipsa atque.</span>
                <span>Technologies used: <ul><li>Vue.js</li><li>Python</li><li>Node.js</li><li>Web Scraping (BS4, Puppeteer)</li><li>Overwolf</li></ul></span>
            </div>
        </div> 


        </>

    )
}
