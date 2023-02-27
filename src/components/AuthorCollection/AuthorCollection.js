import React from 'react'
import BoxCard from '../BoxCard/BoxCard'
import mockData from '../../assets/MockData/mockData.json'
import './AuthorCollection.css'


function AuthorCollection({ author }) {

  const authorArr = mockData[author]


  return (
    <div className='bodyAuthor'>
      <div className='authorName'>
        {author}
      </div>
      <div className='box'>
        {
          authorArr.map((element,index) => {
            return <BoxCard key={index} index={index} authorElement={element} />
          })
        }
      </div>
    </div>
  )
}

export default AuthorCollection
