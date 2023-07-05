'use client'

import styles from '../styles/Sidebar.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeEverything } from '@/store/modalSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function Sidebar({className}:{className:string}) {
    const dispatch = useDispatch()
    const currentModalPage = useSelector<RootState>(state => state.modal.modal.modalPageName)

    function setActiveTab(sidebarDivName:string){
        if(sidebarDivName == currentModalPage && className == 'sidebar'){
            return styles['active']
        }else if(sidebarDivName == currentModalPage && className == 'sidebar-mobile'){
            return styles['active-mobile']
        }else{
            return ''
        }
    }

    return (
        <>  
           <div className={styles[className]}>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'Anime Getter'}))} style={{backgroundColor : '#6d25b1'}}  className={styles['sidebar-element'] + ' ' + setActiveTab('Anime Getter')}>Anime Getter</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'PatchMe'}))} style={{backgroundColor : '#00a39b'}} className={styles['sidebar-element'] + ' ' + setActiveTab('PatchMe')}>PatchMe</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'CheckMyWeather'}))} style={{backgroundColor : '#af3c3c'}}  className={styles['sidebar-element'] + ' ' + setActiveTab('CheckMyWeather')}>CheckMyWeather</div>
           </div>
        </>

    )
}
