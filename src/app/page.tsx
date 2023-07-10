'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import CardsContainer from '../components/CardsContainer'
import Modal from '@/components/Modal/ModalWindow'
import { RootState } from '@/store'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import Link from 'next/link'

export default function Page() {
  const modalOpen = useSelector<RootState>(state=>state.modal.modal.isOpen);

  // useEffect(()=>{console.log(modalOpen)},[modalOpen])
  const footer = 
    <div className={styles['footer-container']}>
        <div className={styles['footer']}>To check some of my projects, click on any of the titles above. For more information about me, click <Link className={styles['reference-link']} href="/about">here</Link>.<br/><br/>This website was created in <a className={styles['reference-link']} href="https://www.typescriptlang.org/">TypeScript</a> using <a className={styles['reference-link']} href="https://react.dev/">React</a> and <a className={styles['reference-link']} href="https://nextjs.org/">Next.js</a>. The animations were done with <a className={styles['reference-link']} href="https://www.framer.com/motion/">Framer Motion</a>.<br/><br/>You can check the source code <a className={styles['reference-link']} href="https://github.com/Abdelsalam-Tolaymat/Portfolio">here</a>.</div>
    </div>

    const intro = 
      <div className={styles['intro-container']}>
                  <Image
                    className= {styles['profile-pic']}
                    src="/Profile Pic Template.png"
                    width={673}
                    height={673}
                    alt="Picture of Abdelsalam Tolaymat"
                />
                <div className= {styles['intro-text']}>Hi, I am <span className= {styles['intro-name']}>Abdelsalam Tolaymat</span>  and I develop websites!</div>
      </div>
  return (
    <>
      
      {modalOpen ? <Modal/> : null}
      {modalOpen ? null : intro}
      <CardsContainer/>
      {modalOpen ? null : footer}

    </>

  )
}
