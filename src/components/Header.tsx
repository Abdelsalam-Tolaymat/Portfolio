'use client'

import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { fetchLanguageText } from '@/store/languageSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function Header() {

    const pathname = usePathname()
    const isAbout = pathname.includes('about')
    const isContact = pathname.includes('contact')
    const useAppDispatch: () => AppDispatch = useDispatch
    const dispatch = useAppDispatch()
    const usersLocale = useSelector((state:RootState)=>state.language.language.usersLocale)


    function setActiveTab(sidebarDivName:string){
        if(sidebarDivName == usersLocale){
            return styles['active']
        }else{
            return ''
        }
    }


    return (
        <>
                <nav className={styles['header']}>
                    <Link className={`${styles['header-element']}  ${!isAbout && !isContact ? styles['header-element-active']: ''}`} href="/">Portfolio</Link>
                    <Link className={`${styles['header-element']}  ${isAbout ? styles['header-element-active']: ''}`} href="/about">About</Link>
                    <Link className={`${styles['header-element']}  ${isContact ? styles['header-element-active']: ''}`} href="/contact">Contact</Link>
                    <div className={styles['languages-container']}><span  className={styles['language-select'] + ' ' + setActiveTab('EN')} onClick={()=>{dispatch(fetchLanguageText('EN'))}}>EN</span>|<span className={styles['language-select'] + ' ' + setActiveTab('DE')} onClick={()=>{dispatch(fetchLanguageText('DE'))}}>DE</span></div>
                </nav>
        </>

    )
}


