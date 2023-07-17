'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import CardsContainer from '../components/CardsContainer'
import Modal from '@/components/Modal/ModalWindow'
import { RootState } from '@/store'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { FormattedMessage} from "react-intl"

export default function Page() {
  const modalOpen = useSelector<RootState>(state=>state.modal.modal.isOpen);
  const usersLocale = useSelector((state:RootState)=>state.language.language.usersLocale)

  const messageDE = (id:string)=>{
    if(usersLocale == 'DE'){
      return <FormattedMessage id={id}/>
    }else{
      return <></>
    }
  }

  const footer = 
    <div className={styles['footer-container']}>
        <div className={styles['footer']}><FormattedMessage id='footer1'/><Link className={styles['reference-link']} href="/about"><FormattedMessage id='footer2'/></Link><br/><br/><FormattedMessage id='footer3'/><a className={styles['reference-link']} href="https://www.typescriptlang.org/"><FormattedMessage id='footer4'/></a><FormattedMessage id='footer5'/><a className={styles['reference-link']} href="https://react.dev/"><FormattedMessage id='footer6'/></a><FormattedMessage id='footer7'/><a className={styles['reference-link']} href="https://nextjs.org/"><FormattedMessage id='footer8'/></a>{messageDE('footer8_2')}<FormattedMessage id='footer9'/><a className={styles['reference-link']} href="https://www.framer.com/motion/"><FormattedMessage id='footer10'/></a>{messageDE('footer10_2')}<br/><br/><FormattedMessage id='footer11'/><a className={styles['reference-link']} href="https://github.com/Abdelsalam-Tolaymat/Portfolio"><FormattedMessage id='footer12'/></a>{messageDE('footer12_2')}</div>
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
                <div className= {styles['intro-text']}><FormattedMessage id='intro1'/><span className= {styles['intro-name']}><FormattedMessage id='intro2'/></span><FormattedMessage id='intro3'/></div>
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
