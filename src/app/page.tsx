'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import CardsContainer from '../components/CardsContainer'
import Modal from '@/components/Modal/ModalWindow'
import { RootState } from '@/store'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'


export default function Page() {
  const modalOpen = useSelector<RootState>(state=>state.modal.modal.isOpen);

  // useEffect(()=>{console.log(modalOpen)},[modalOpen])
  return (
    <>
      {modalOpen ? <Modal/> : null}
      <CardsContainer/>
    </>

  )
}
