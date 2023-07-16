'use client'

import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fetchLanguageText } from '@/store/languageSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

export default function Header() {

    const pathname = usePathname()
    const isAbout = pathname.includes('about')
    const useAppDispatch: () => AppDispatch = useDispatch
    const dispatch = useAppDispatch()



    return (
        <>
                <nav className={styles['header']}>
                    <Link className={`${styles['header-element']}  ${!isAbout ? styles['header-element-active']: ''}`} href="/">Portfolio</Link>
                    <Link className={`${styles['header-element']}  ${isAbout ? styles['header-element-active']: ''}`} href="/about">About</Link>
                    <div className={styles['languages-container']}><span onClick={()=>{dispatch(fetchLanguageText('EN'))}}>EN</span>|<span onClick={()=>{dispatch(fetchLanguageText('DE'))}}>DE</span></div>
                </nav>
        </>

    )
}


