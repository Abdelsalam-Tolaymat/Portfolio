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

    function changeSidebarColor (sidebarDivName:string){
        if(sidebarDivName == currentModalPage){
            if(sidebarDivName == 'Anime Getter'){
                let temp = {backgroundColor: 'blueviolet', height:'inherit', width:'inherit'}
                className == 'sidebar' ?  temp.height = '150%' : temp.width = '150%'
                return temp
            }else if(sidebarDivName == 'PatchMe'){
                let temp = {backgroundColor: '#00c6bd', height:'inherit', width:'inherit'}
                className == 'sidebar' ?  temp.height = '150%' : temp.width = '150%'
                return temp
            }else if(sidebarDivName == 'CheckMyWeather'){
                let temp = {backgroundColor: 'rgb(219, 94, 94)', height:'inherit', width:'inherit'}
                className == 'sidebar' ?  temp.height = '150%' : temp.width = '150%'
                return temp
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
           <div className={styles[className]}>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'Anime Getter'}))} style={changeSidebarColor('Anime Getter')} className={styles['sidebar-element']}>Anime Getter</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'PatchMe'}))} style={changeSidebarColor('PatchMe')} className={styles['sidebar-element']}>PatchMe</div>
                <div onClick={()=> dispatch(changeEverything({isOpen: true, modalPageName: 'CheckMyWeather'}))} style={changeSidebarColor('CheckMyWeather')} className={styles['sidebar-element']}>CheckMyWeather</div>
           </div>
        </>

    )
}
