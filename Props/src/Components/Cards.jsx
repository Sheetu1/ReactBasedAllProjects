// Components/Card.jsx
import React from 'react'

const Card = ({name , img , deg}) => {
  return (
    <div className="w-[250px] h-[350px] bg-white rounded-md shadow-md ">
      <img
        className='w-full h-[250px] rounded-t-md object-cover'
        src={img}
        alt="profile"
      />
      <div className='p-3 text-center'>
        <h1 className='font-bold text-lg'>{name}</h1>
        <h3 className='text-gray-600'>{deg}</h3>
      </div>
    </div>
  )
}

export default Card
