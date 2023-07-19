'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import CardsContainer from '../components/CardsContainer'
import Modal from '@/components/Modal/ModalWindow'
import { RootState } from '@/store'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import FormattedText from '@/components/FormattedText'


export default function Page() {
  const modalOpen = useSelector<RootState>(state=>state.modal.modal.isOpen);


  const footer = 
    <div className={styles['footer-container']}>
        <div className={styles['footer']}><FormattedText id='footer1' display='EN|DE'/><Link className={styles['reference-link']} href="/about"><FormattedText id='footer2'/></Link><br/><br/><FormattedText id='footer3'/><a className={styles['reference-link']} href="https://www.typescriptlang.org/"><FormattedText id='footer4'/></a><FormattedText id='footer5'/><a className={styles['reference-link']} href="https://react.dev/"><FormattedText id='footer6'/></a><FormattedText id='footer7'/><a className={styles['reference-link']} href="https://nextjs.org/"><FormattedText id='footer8'/></a><FormattedText id='footer8_2' display='DE'/><FormattedText id='footer9'/><a className={styles['reference-link']} href="https://www.framer.com/motion/"><FormattedText id='footer10'/></a><FormattedText id='footer10_2' display='DE'/><br/><br/><FormattedText id='footer11'/><a className={styles['reference-link']} href="https://github.com/Abdelsalam-Tolaymat/Portfolio"><FormattedText id='footer12'/></a><FormattedText id='footer12_2' display='DE'/></div>
    </div>

    const intro = 
      <div className={styles['intro-container']}>
                  <Image
                    className= {styles['profile-pic']}
                    src="/pfp4.jpg"
                    width={1770}
                    height={1770}
                    alt="Picture of Abdelsalam Tolaymat"
                />
                <div className= {styles['intro-text']}><FormattedText id='intro1'/><span className= {styles['intro-name']}><FormattedText id='intro2'/></span><FormattedText id='intro3'/></div>
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
