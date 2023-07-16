'use client'

import Header from '../components/Header'
import { fetchLanguageText } from '@/store/languageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { IntlProvider } from "react-intl"
import { useEffect, useState } from 'react'



export default function IntlGlobalProvider({children}:{children:React.ReactNode}){

    const [languageIsSet, setLanguageIsSet] = useState(false)
    const useAppDispatch: () => AppDispatch = useDispatch
    const dispatch = useAppDispatch()

    useEffect(()=>{
        const setLanguages = async ()=>{
            let lang = localStorage.getItem('language')
            if(!lang){
                lang = 'EN'
            }
            await dispatch(fetchLanguageText(lang)).unwrap()
            setLanguageIsSet(true)
        }
        setLanguages()
        
    },[])


    return (
        <>

        {languageIsSet ? <InnerProvider>{children}</InnerProvider> : null}

        </>
    )
}



const InnerProvider = ({children}:{children:React.ReactNode}) => {
    const usersLocale = useSelector((state:RootState)=>state.language.language.usersLocale)
    const messages = useSelector((state:RootState)=>state.language.language.messages)

    return (
        <>
            <IntlProvider locale={usersLocale} messages={messages}> 
                <Header></Header>
                {children}
            </IntlProvider>
        </>

    )
} 