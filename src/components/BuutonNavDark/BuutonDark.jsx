import React, { useContext } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { ThemeContext } from '../Context/ThemeContext'
import { FaCircle } from 'react-icons/fa'

export default function BuutonDark() {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div onClick={()=>{setTheme('light')}} className='flex justify-center items-center gap-4 dark:bg-white rounded-[29px] h-10 w-24'>
                <FaCircle className='text-darkMode size-6'/>
                <IoMoonOutline className='text-darkMode size-6'/>
          </div>
  )
}
