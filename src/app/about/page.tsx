'use client'

import Image from 'next/image'
import styles from '../../styles/aboutPage.module.css'
import FormattedText from '@/components/FormattedText'

export default function Page() {
  return (
    <>
      <div className={styles['upper-container']}>
        <span className={styles['title']}>About Me</span>
        <span className={styles['title-description']}><FormattedText id='about1'/></span>
      </div>
      <div className={styles['lower-container']}>
        <div className={styles['left-container']}>
          <span className={styles['left-title']}>Get to know me!</span>
          <span className={styles['left-text']}><FormattedText id='about2'/><br/><FormattedText id='about3'/><br/><br/><FormattedText id='about4'/><br/><br/><FormattedText id='about5'/></span>
        </div>
        <div className={styles['right-container']}>
        <span className={styles['right-title']}>My Skills</span>
        <div className={styles['skills-container']}>
          <span className={styles['skill']}>HTML</span>
          <span className={styles['skill']}>CSS</span>
          <span className={styles['skill']}>JavaScript</span>
          <span className={styles['skill']}>TypeScript</span>
          <span className={styles['skill']}>Vue.js</span>
          <span className={styles['skill']}>React</span>
          <span className={styles['skill']}>Next.js</span>
          <span className={styles['skill']}>Node.js</span>
          <span className={styles['skill']}>Python</span>
          <span className={styles['skill']}>GIT</span>
          <span className={styles['skill']}>SQL Basics</span>
          <span className={styles['skill']}>MATLAB</span>

        </div>

        </div>
      </div>
    </>
  )
}
