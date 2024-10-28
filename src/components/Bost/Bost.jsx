import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import BostTitle from '../BostTitle/BostTitle'
import BostHeader from '../BostHeader/BostHeader'
import BostButton from '../BostButton/BostButton'

export default function Bost({imge,title,text,par,category,classBost, classimage,classCol,classText }) {
  return (
    <>
        <img className={`${classimage}`} src={imge}/>
        <div className={`${classBost} ${classCol ? 'pt-6 xl:pt-8' : ''}`}>
            <BostTitle title={title}/>
            <div className='flex items-start justify-between pt-3'>
            <BostHeader text={text}/>
            <MdOutlineArrowOutward className={`w-6 h-7 dark:text-white`}/>
            </div>
            <p className={`font-normal text-gray-obacity dark:text-gray-dark pt-2 ${classText ? 'text-[15px] leading-[26px]' : 'text-[15px]'}`}>{par}</p>
            <BostButton category={category}/>
        </div>
    </>
  )
}
