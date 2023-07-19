'use client'

import styles from '../../styles/PatchMeCard.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import setColors from '@/composables/ThemeSelector'
import FormattedText from '../FormattedText'

export default function AnimeGetterCard({}) {

    useEffect(()=>{
        setColors('AnimeGetter')
    },[])


    const descriptionText = ()=> {return <span><FormattedText id='modalAG1'/><a className={styles['reference-link']} href="http://myanimelist.net/"><FormattedText id='modalAG2'/></a><FormattedText id='modalAG3'/><br/><br/><FormattedText id='modalAG4'/><a className={styles['reference-link']} href="https://jikan.moe/"><FormattedText id='modalAG5'/></a><FormattedText id='modalAG6'/><br/><br/><FormattedText id='modalAG7'/><a className={styles['reference-link']} href="https://anime-getter.vercel.app/"><FormattedText id='modalAG8'/></a><FormattedText id='modalAG8_2' display='DE'/></span>}

    return (
        <> 
        <div className={styles['container'] + ' ' + styles['anime-getter-container']}>
            <div className={styles['gifs-container'] + ' ' + styles['anime-getter-gifs-container']}>
                <Image
                    className= {styles['gif'] }
                    src="/AnimeGetter Dark.png"
                    width={1920}
                    height={940}
                    alt="Picture of Anime Getter in dark mode"
                />
            </div>
            <div className={styles['card-description'] + ' ' + styles['anime-getter-card-description']}>
                <span className={styles['card-title']} >Anime Getter</span>
                {descriptionText()}
                <span><FormattedText id='modalPatchMe6'/>
                    <ul>
                        <li><a className={styles['reference-link']} href="https://vuejs.org/">Vue.js</a></li>
                        <li><a className={styles['reference-link']} href="https://nodejs.org/en">Node.js</a></li>
                        <li><a className={styles['reference-link']} href="https://firebase.google.com/">Firebase</a></li>
                        <li><a className={styles['reference-link']} href="https://jikan.moe/">Jikan API</a></li>
                    </ul>
                </span>
            </div>
        </div> 
        </>

    )
}
