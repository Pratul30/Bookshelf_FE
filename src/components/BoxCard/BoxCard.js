import React, { useEffect, useState } from 'react'
import coverImage from '../../assets/Images/cover_image.jpeg'
import heartRed from '../../assets/Images/heart-red.svg'
import heartBlack from '../../assets/Images/heart-black.svg'
import './BoxCard.css'

function BoxCard(props) {

    const { authorElement } = props
    const { index } = props

    const color = index % 2 === 0 ? '#fc924f' : 'white'

    return (
        <div className='blog'>
            <img src={coverImage} alt="cover" className='blogImage' />
            <div style={{backgroundColor: `${color}`}} className='blogContent'>
                <div style={{flexGrow: "1"}}>
                    content
                </div>
                <div className='reactions'>
                    <div className='rating'>
                        {
                            authorElement.rating
                        }
                    </div>
                    <div className='heart'>
                        <img src={heartRed} alt='red heart' id='likedImg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxCard
