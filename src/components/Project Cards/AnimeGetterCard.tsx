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


    const descriptionText = ()=> {return <span>A <a className={styles['reference-link']} href="http://myanimelist.net/">MyAnimeList</a> clone website that functions as an information database for anime series and movies, their synopsis, and their rating, generated through users of MyAnimeList. Anime Getter also contains lists of the Top Anime sorted based on the user ratings. Users can additionally find information on seasonaly airing anime, as well as a schedule showing which Anime airs on which day of the week.<br/><br/> Anime Getter was developed with Vue.js using information provided by the <a className={styles['reference-link']} href="https://jikan.moe/">Jikan API</a>. However, the development process has been halted midway due to issues concerning a variety of endpoints on the API side. This led to Anime Getter currently being unfinished and semi-broken.<br/><br/> You can take a look at Anime Getter <a className={styles['reference-link']} href="https://anime-getter.vercel.app/">here</a>.</span>}

    return (
        <> 
        <div className={styles['container'] + ' ' + styles['anime-getter-container']}>
            <div className={styles['gifs-container'] + ' ' + styles['anime-getter-gifs-container']}>
                <Image
                    className= {styles['gif'] }
                    src="/AnimeGetter Dark.png"
                    fill={true}
                    // width={571}
                    // height={280}
                    alt="Picture of Anime Getter in dark mode"
                />
            </div>
            <div className={styles['card-description'] + ' ' + styles['anime-getter-card-description']}>
                <span className={styles['card-title']} >Anime Getter</span>
                {descriptionText()}
                <span>Technologies used: <ul><li>Vue.js</li><li>Python</li><li>Node.js</li><li>Web Scraping (BS4, Puppeteer)</li><li>Overwolf</li></ul></span>
            </div>
        </div> 
        </>

    )
}
