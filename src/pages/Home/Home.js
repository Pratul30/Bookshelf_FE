import React, { useEffect, useState } from 'react'
import AuthorCollection from '../../components/AuthorCollection/AuthorCollection'
import Header from '../../components/Header/Header'
import mockData from '../../assets/MockData/mockData.json'
import './Home.css'

function Home() {

  const keys = Object.keys(mockData)

  return (
    <div className='bodyHome'>
        <Header />
        {
          keys.map(key => {
           return <AuthorCollection author={key} />
          })
        }
    </div>
  )
}

export default Home
