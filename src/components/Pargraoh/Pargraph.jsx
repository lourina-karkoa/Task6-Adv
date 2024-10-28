import React from 'react'

export default function Pargraph({par,centerBold,center,classText,largText}) {
  return (
    <p className={`font-inter text-gray-obacity dark:text-gray-dark pt-3 ${largText? 'text-xl' : ' text-base'} ${classText} ${center ? 'text-center w-[73%] mx-auto' :''} ${centerBold ? 'font-bold' : 'font-normal'}`}>{par}</p>
  )
}
