'use client'

import styles from '../../styles/PatchMeCard.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import setColors from '@/composables/ThemeSelector'

export default function AnimeGetterCard({}) {

useEffect(()=>{
    setColors('AnimeGetter')
},[])

    return (
        <> 
        <div className={styles['container'] + ' ' + styles['anime-getter-container']}>
            <div className={styles['gifs-container'] + ' ' + styles['anime-getter-gifs-container']}>
                <Image
                    className= {styles['gif'] }
                    src="/AnimeGetter Dark.png"
                    width={571}
                    height={280}
                    alt="Picture of Anime Getter in dark mode"
                />
            </div>
            <div className={styles['card-description'] + ' ' + styles['anime-getter-card-description']}>
                <span className={styles['card-title']} >PatchMe</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus doloribus nihil minima reprehenderit nostrum a perferendis obcaecati ducimus rerum minus consequuntur, suscipit sunt maxime esse ratione eveniet ipsa atque.</span>
                <span>Technologies used: <ul><li>Vue.js</li><li>Python</li><li>Node.js</li><li>Web Scraping (BS4, Puppeteer)</li><li>Overwolf</li></ul></span>
            </div>
        </div> 
        </>

    )
}
