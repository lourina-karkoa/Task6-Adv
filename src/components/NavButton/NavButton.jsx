import React, { useContext } from 'react'
import { FaCircle } from 'react-icons/fa'
import { LuSunDim } from 'react-icons/lu'
import { ThemeContext } from '../Context/ThemeContext'

export default function ButtonNav() {
  const {theme,setTheme} = useContext(ThemeContext)
  return (
          <div onClick={()=>{setTheme('dark')}} className='flex justify-center items-center gap-4 bg-darkMode rounded-[29px] h-10 w-24'>
                <LuSunDim className='text-white size-6'/>
                <FaCircle className='text-white size-6'/>
          </div>
  )
}
