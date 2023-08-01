'use client'

import Image from 'next/image'
import styles from '../../styles/contactPage.module.css'
import Form from '@/components/Form'

export default function Page() {
  return (
    <>

    <div className={styles['container']}>
    <h1 className={styles['title']}>Contact Me</h1>
    <div className={styles['images']}>
    <Image
                    className= {styles['image']}
                    onClick={()=> window.open('https://github.com/Abdelsalam-Tolaymat')}
                    src="/Github.png"
                    width={50}
                    height={50}
                    alt="Picture of PatchMe in dark mode"
                />
    <Image
                className= {styles['image']}
                onClick={()=> window.open('https://www.linkedin.com/in/abdelsalam-tolaymat-595364253/')}
                src="/Linkedin.png"
                width={50}
                height={50}
                alt="Picture of PatchMe in dark mode"
                />
    </div>

    <Form/>
    </div>

    </>
  )
}
