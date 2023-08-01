'use client'

import styles from '../styles/Form.module.css'
import { useState, FormEvent , MouseEvent} from 'react'

export default function Form() {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event:FormEvent<HTMLFormElement>)=>{
    setSubmitted(true)
    fetch('https://formsubmit.co/ajax/myemail@email.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
    })
  }  

    return (
        <>  
        <form onSubmit={submit} className={styles['form']} target="_blank" action="https://formsubmit.co/1a9d57ec0d00ff6bd2e261a7cf41fbc2" method="POST">

            <div className={styles['upper-div']}>
                <input type="text" name="name" className={styles['input']}  placeholder="Full Name" required/>
                <input type="email" name="email" className={styles['input']} placeholder="Email Address" required/>
            </div>
            <div className={styles['lower-div']}>
                <textarea placeholder="Your Message" className={styles['text-area']} name="message" rows={10} required></textarea>
            </div>
            <button disabled={submitted} type="submit" className={styles['submit-button']}>{submitted ? 'thank you for your email' : 'Submit'}</button>
        </form>
        </>

    )
}
