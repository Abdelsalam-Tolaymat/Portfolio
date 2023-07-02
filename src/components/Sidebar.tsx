'use client'

import styles from '../styles/Sidebar.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeEverything } from '@/store/modalSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function Sidebar({}) {
    const dispatch = useDispatch()
    const currentModalPage = useSelector<RootState>(state => state.modal.modal.modalPageName)

    function changeSidebarColor (sidebarDivName:string){
        if(sidebarDivName == currentModalPage){
            if(sidebarDivName == 'Anime Getter'){
                return {backgroundColor: 'blueviolet'}
            }else if(sidebarDivName == 'PatchMe'){
                return {backgroundColor: '#00c6bd'}
            }else if(sidebarDivName == 'CheckMyWeather'){
                return {backgroundColor: 'rgb(219, 94, 94)'}
            }
        }else if(sidebarDivName != currentModalPage){
            if(sidebarDivName == 'Anime Getter'){
                return {backgroundColor: '#571c8f'}
            }else if(sidebarDivName == 'PatchMe'){
                return {backgroundColor: '#00a39b'}
            }else if(sidebarDivName == 'CheckMyWeather'){
                return {backgroundColor: '#9b3c3c'}
            }
        }
    }

    return (
        <>  
           <div className={styles['sidebar']}>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'Anime Getter'}))} style={changeSidebarColor('Anime Getter')} className={styles['sidebar-element']}>Anime Getter</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'PatchMe'}))} style={changeSidebarColor('PatchMe')} className={styles['sidebar-element']}>PatchMe</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'CheckMyWeather'}))} style={changeSidebarColor('CheckMyWeather')} className={styles['sidebar-element']}>CheckMyWeather</div>
           </div>
        </>

    )
}
