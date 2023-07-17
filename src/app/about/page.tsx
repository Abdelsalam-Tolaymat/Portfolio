import Image from 'next/image'
import styles from '../../styles/aboutPage.module.css'

export default function Page() {
  return (
    <>
      <div className={styles['upper-container']}>
        <span className={styles['title']}>About Me</span>
        <span className={styles['title-description']}>I am a Web developer based in Bochum, Germany. My passion is creating software that users enjoy to use.</span>
      </div>
      <div className={styles['lower-container']}>
        <div className={styles['left-container']}>
          <span className={styles['left-title']}>Get to know me!</span>
          <span className={styles['left-text']}>I studied Electrical Engineering and Information Technology at the Ruhr-University Bochum, specializing in Information Technology.<br/><br/>As a Frontend Web Developer, I specialize in crafting great UI/UX for websites and web applications, driving the overall success of the product. Feel free to explore the Portfolio page to see examples of my work.<br/><br/>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</span>
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
