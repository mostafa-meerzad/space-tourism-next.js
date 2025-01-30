"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  const { pathname } = router
  console.log('pathname in home', pathname);
  
  return (
    <div>Home</div>
  )
}

export default Home