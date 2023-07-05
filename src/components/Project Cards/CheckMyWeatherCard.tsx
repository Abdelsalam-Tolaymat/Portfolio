'use client'

import styles from '../../styles/PatchMeCard.module.css'
import {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import setColors from '@/composables/ThemeSelector'

export default function CheckMyWeatherCard({}) {
    useEffect(()=>{
        setColors('CheckMyWeather')
    },[])

    return (
        <> 
        <div className={styles['container'] + ' ' + styles['anime-getter-container']}>
            <div className={styles['gifs-container'] + ' ' + styles['anime-getter-gifs-container']}>
                <Image
                    style={{boxShadow: '0px 0px 10px 1px #2c3e508a'}}
                    className= {styles['gif'] }
                    src="/CheckMyWeather Light2.png"
                    width={571}
                    height={280}
                    alt="Picture of Anime Getter in dark mode"
                />
            </div>
            <div className={styles['card-description'] + ' ' + styles['anime-getter-card-description']}>
                <span className={styles['card-title']} >CheckMyWeather</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus doloribus nihil minima reprehenderit nostrum a perferendis obcaecati ducimus rerum minus consequuntur, suscipit sunt maxime esse ratione eveniet ipsa atque.</span>
                <span>Technologies used: <ul><li>Vue.js</li><li>Python</li><li>Node.js</li><li>Web Scraping (BS4, Puppeteer)</li><li>Overwolf</li></ul></span>
            </div>
        </div> 
        </>

    )
}
