import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className='bg-orange-400 bg-opacity-30 w-[70%] rounded-xl mx-auto my-10 py-10 text-center ' >
        <p className='text-xl w-[50%] mx-auto ' >Be part of the movement. Gain experience, grow your career, and connect with real opportunites</p>
        
        <Button className="hover:bg-orange-600 mx-auto my-5 " paddingX='px-20'  text="Join waitlist" />
        </div>
  )
}

export default Banner