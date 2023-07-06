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

    const descriptionText = ()=> {return <span>A simple weather forecast website developed with Vue.js using information provided by <a className={styles['reference-link']} href="https://www.weatherapi.com/">WeatherAPI</a>. The webiste has a search functionality to choose the location and has 3 pages for current weather, daily weather (for the next 3 days), and hourly weather. The user can switch between light and dark themes as well as choose the unit system the information will be shown in (metric/imperial).<br/><br/> You can check out the website <a className={styles['reference-link']} href="https://check-my-weather.vercel.app/">here</a>.</span>}

    return (
        <> 
        <div className={styles['container'] + ' ' + styles['anime-getter-container']}>
            <div className={styles['gifs-container'] + ' ' + styles['anime-getter-gifs-container']}>
                <Image
                    style={{filter: 'drop-shadow(0px 0px 5px #2c3e508a)' }} //boxShadow: '0px 0px 10px 1px #2c3e508a'
                    className= {styles['gif'] }
                    src="/CheckMyWeather Light2.png"
                    width={1920}
                    height={940}
                    alt="Picture of Anime Getter in dark mode"
                />
            </div>
            <div className={styles['card-description'] + ' ' + styles['anime-getter-card-description']}>
                <span className={styles['card-title']} >CheckMyWeather</span>
                {descriptionText()}
                <span>Technologies used: <ul><li>Vue.js</li><li>Python</li><li>Node.js</li><li>Web Scraping (BS4, Puppeteer)</li><li>Overwolf</li></ul></span>
            </div>
        </div> 
        </>

    )
}
