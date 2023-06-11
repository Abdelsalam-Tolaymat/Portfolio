import styles from '../styles/CardsContainer.module.css'
import Card from '../components/Card'
import animeGetterImg from '../assets/AnimeGetter Dark.png'
import patchMeImg from '../assets/PatchMe Dark.png'
import checkMyWeatherImg from '../assets/CheckMyWeather Dark.png'


export default function CardsContainer() {


    return (
        <>
            <div className={styles['cards-container']}>
                <Card title="Anime Getter" image={animeGetterImg} />
                <Card title="PatchMe" image={patchMeImg} />
                <Card title="CheckMyWeather" image={checkMyWeatherImg} />
            </div>

        </>

    )
}
