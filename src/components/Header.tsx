'use client'

import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



export default function Header() {

    const pathname = usePathname()

    const isAbout = pathname.includes('about')

    return (
        <>

            <nav className={styles['header']}>
                <Link className={`${styles['header-element']}  ${!isAbout ? styles['header-element-active']: ''}`} href="/">Portfolio</Link>
                <Link className={`${styles['header-element']}  ${isAbout ? styles['header-element-active']: ''}`} href="/about">About</Link>
            </nav>
        </>

    )
}
