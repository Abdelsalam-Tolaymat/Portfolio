import { StaticImageData } from 'next/image'
import styles from '../styles/Card.module.css'
import Image from 'next/image'

interface CardProps {title:string, image:StaticImageData}

export default function Card({title, image}:CardProps) {


    return (
        <>
            <div className={styles['card']}>
                <span className={styles['card-title']}>{title}</span>
                <Image width={480} height={480} style={{objectFit:'contain'}}  className={styles['card-image']} src={image} alt={`Picture of ${title}`} />
            </div>
        </>

    )
}
