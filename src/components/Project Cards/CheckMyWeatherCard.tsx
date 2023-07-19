'use client'

import styles from '../../styles/PatchMeCard.module.css'
import {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import setColors from '@/composables/ThemeSelector'
import FormattedText from '../FormattedText'

export default function CheckMyWeatherCard({}) {
    useEffect(()=>{
        setColors('CheckMyWeather')
    },[])

    const descriptionText = ()=> {return <span><FormattedText id='modalCMW1'/><a className={styles['reference-link']} href="https://www.weatherapi.com/"><FormattedText id='modalCMW2'/></a><FormattedText id='modalCMW3'/><br/><br/><FormattedText id='modalCMW4'/><a className={styles['reference-link']} href="https://check-my-weather.vercel.app/"><FormattedText id='modalCMW5'/></a><FormattedText id='modalCMW5_2' display='DE'/></span>}

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
                <span><FormattedText id='modalPatchMe6'/>
                    <ul>
                        <li><a className={styles['reference-link']} href="https://vuejs.org/">Vue.js</a></li>
                        <li><a className={styles['reference-link']} href="https://www.weatherapi.com/">WeatherAPI</a></li>
                    </ul>
                </span>
            </div>
        </div> 
        </>

    )
}
